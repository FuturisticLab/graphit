require('dotenv').config();

if (!process.env.JWT_SECRET || process.env.JWT_SECRET.length < 32) {
    console.error('ERROR: JWT_SECRET is missing or too short. Set it in .env');
    process.exit(1);
}
if (!process.env.ENCRYPTION_KEY || process.env.ENCRYPTION_KEY.length < 64) {
    console.error('ERROR: ENCRYPTION_KEY is missing or too short. Set it in .env');
    process.exit(1);
}

const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const { v4: uuid } = require('uuid');
const { body, validationResult } = require('express-validator');
const path = require('path');

require('./db');
const User = require('./models/User');
const Session = require('./models/Session');
const Classroom = require('./models/Classroom');
const Membership = require('./models/Membership');
const Attempt = require('./models/Attempt');
const Progress = require('./models/Progress');
const TestSession = require('./models/TestSession');
const AuditLog = require('./models/AuditLog');

const { signToken, requireAuth, optionalAuth, createResetToken, consumeResetToken } = require('./auth');
const { validateAnswer } = require('./validator');
const { encrypt, decrypt } = require('./crypto');
const { audit } = require('./audit');
const challenges = require('./challenges');
const classroomsMod = require('./classrooms');
const testEngine = require('./testEngine');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
            styleSrc: ["'self'", "'unsafe-inline'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
            fontSrc: ["'self'", 'fonts.googleapis.com', 'fonts.gstatic.com'],
            imgSrc: ["'self'", 'data:'],
            connectSrc: ["'self'"],
        },
    },
    crossOriginEmbedderPolicy: false,
}));
app.use(cors({ origin: process.env.CLIENT_ORIGIN || true, credentials: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'docs')));

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 10, message: { error: 'Too many attempts. Wait 15 minutes.' } });
const apiLimiter = rateLimit({ windowMs: 60 * 1000, max: 180, message: { error: 'Too many requests.' } });
app.use('/api', apiLimiter);

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array().map(e => e.msg) });
    next();
};

function requireInstructor(req, res, next) {
    if (req.user?.role !== 'instructor') return res.status(403).json({ error: 'Instructor access required' });
    next();
}

// ── AUTH ──────────────────────────────────────────────────────────────────────
app.post('/api/auth/register', authLimiter, [
    body('displayName').trim().isLength({ min: 2, max: 40 }).escape(),
    body('role').optional().isIn(['student', 'instructor']),
], validate, async (req, res) => {
    try {
        const { displayName, role = 'student' } = req.body;
        const existing = await User.findOne({ displayName: displayName.trim(), role });
        if (existing) {
            const token = signToken({ userId: existing._id, role: existing.role });
            await new Session({
                token, userId: existing._id,
                createdAt: new Date().toISOString(),
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
            }).save();
            res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
            await User.updateOne({ _id: existing._id }, { $set: { lastLogin: new Date().toISOString() } });
            return res.json({ id: existing._id, displayName: existing.displayName, role: existing.role });
        }
        const user = await new User({
            _id: uuid(),
            displayName: displayName.trim(), role,
            createdAt: new Date().toISOString(), lastLogin: null, totalScore: 0, streakDays: 0
        }).save();
        const token = signToken({ userId: user._id, role: user.role });
        await new Session({
            token, userId: user._id,
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }).save();
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.status(201).json({ id: user._id, displayName: user.displayName, role: user.role });
    } catch (err) { console.error(err); res.status(500).json({ error: 'Registration failed' }); }
});

app.post('/api/auth/login', authLimiter, [
    body('displayName').trim().isLength({ min: 2, max: 40 }).escape(),
    body('role').optional().isIn(['student', 'instructor']),
], validate, async (req, res) => {
    try {
        const { displayName, role = 'student' } = req.body;
        let user = await User.findOne({ displayName: displayName.trim(), role });
        if (!user) {
            user = await new User({
                _id: uuid(),
                displayName: displayName.trim(), role,
                createdAt: new Date().toISOString(), lastLogin: new Date().toISOString(), totalScore: 0, streakDays: 0
            }).save();
        }
        const token = signToken({ userId: user._id, role: user.role });
        await new Session({
            token, userId: user._id,
            createdAt: new Date().toISOString(),
            expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
        }).save();
        await User.updateOne({ _id: user._id }, { $set: { lastLogin: new Date().toISOString() } });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict', maxAge: 7 * 24 * 60 * 60 * 1000 });
        res.json({ id: user._id, displayName: user.displayName, role: user.role });
    } catch (err) { console.error(err); res.status(500).json({ error: 'Login failed' }); }
});

app.post('/api/auth/logout', requireAuth, async (req, res) => {
    await Session.deleteOne({ token: req.token });
    res.clearCookie('token');
    await audit(req, 'logout', 'user', req.user._id);
    res.json({ ok: true });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
    const { _id, displayName, role, totalScore, streakDays } = req.user;
    res.json({ id: _id, displayName, role, totalScore, streakDays });
});

app.post('/api/auth/forgot-password', authLimiter, [
    body('email').isEmail().normalizeEmail(),
], validate, async (req, res) => {
    await createResetToken(req.body.email);
    await audit(req, 'forgot-password', 'user', null);
    res.json({ ok: true });
});

app.post('/api/auth/reset-password', authLimiter, [
    body('token').isString().isLength({ min: 64, max: 64 }),
    body('password').isLength({ min: 8 }).matches(/[A-Z]/).matches(/[0-9]/),
], validate, async (req, res) => {
    try {
        await consumeResetToken(req.body.token, req.body.password);
        res.json({ ok: true });
    } catch (err) { res.status(400).json({ error: err.message }); }
});

// ── CLASSROOMS ────────────────────────────────────────────────────────────────
app.post('/api/classrooms', requireAuth, requireInstructor, [
    body('name').trim().isLength({ min: 2, max: 80 }).escape(),
    body('description').optional().trim().isLength({ max: 300 }).escape(),
], validate, async (req, res) => {
    try {
        const c = await classroomsMod.createClassroom(req.user._id, req.body.name, req.body.description || '');
        await audit(req, 'classroom-create', 'classroom', c._id);
        res.status(201).json(c);
    } catch (err) { res.status(500).json({ error: err.message }); }
});

app.get('/api/classrooms', requireAuth, requireInstructor, async (req, res) => {
    res.json(await classroomsMod.getInstructorClassrooms(req.user._id));
});

app.get('/api/my-classrooms', requireAuth, async (req, res) => {
    res.json(await classroomsMod.getStudentClassrooms(req.user._id));
});

app.post('/api/classrooms/join', requireAuth, [
    body('joinCode').trim().isLength({ min: 3, max: 25 }).toUpperCase(),
], validate, async (req, res) => {
    try {
        const result = await classroomsMod.joinClassroom(req.user._id, req.body.joinCode);
        await audit(req, 'classroom-join', 'classroom', req.body.joinCode);
        res.json(result);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

app.get('/api/classrooms/:id/roster', requireAuth, requireInstructor, async (req, res) => {
    try { res.json(await classroomsMod.getClassroomRoster(req.params.id, req.user._id)); }
    catch (err) { res.status(403).json({ error: err.message }); }
});

app.get('/api/classrooms/:classroomId/students/:studentId', requireAuth, requireInstructor, async (req, res) => {
    try { res.json(await classroomsMod.getStudentDetail(req.params.classroomId, req.params.studentId, req.user._id)); }
    catch (err) { res.status(403).json({ error: err.message }); }
});

app.patch('/api/classrooms/:id/deactivate', requireAuth, requireInstructor, async (req, res) => {
    const c = await Classroom.findOne({ _id: req.params.id, instructorId: req.user._id });
    if (!c) return res.status(404).json({ error: 'Not found' });
    await Classroom.updateOne({ _id: c._id }, { $set: { active: false } });
    res.json({ ok: true });
});

app.get('/api/classrooms/:id/audit', requireAuth, requireInstructor, async (req, res) => {
    const classroom = await Classroom.findOne({ _id: req.params.id, instructorId: req.user._id });
    if (!classroom) return res.status(404).json({ error: 'Not found' });
    const logs = await AuditLog.find({ resourceId: req.params.id }).sort({ timestamp: -1 });
    res.json(logs);
});

// ── CHALLENGES ────────────────────────────────────────────────────────────────
app.get('/api/challenges', (req, res) => {
    res.json(challenges.map(c => ({
        id: c.id, category: c.category, difficulty: c.difficulty,
        text: c.text, hint: c.hint, mode: c.mode,
        requiredPoints: c.mode === 'points' ? (Array.isArray(c.answer) ? c.answer.length : 1) : 2
    })));
});

app.post('/api/challenges/:id/submit', optionalAuth, [
    body('points').isArray({ max: 10 }),
    body('classroomId').optional({ nullable: true }).isString(),
], validate, async (req, res) => {
    try {
        const { id } = req.params;
        const classroomId = req.body.classroomId || null;
        const pts = (req.body.points || []).map(p => [Math.round(Number(p[0])), Math.round(Number(p[1]))])
            .filter(p => !isNaN(p[0]) && !isNaN(p[1]));
        console.log(`[API] Submission received for challenge ${id}:`, pts);
        const result = validateAnswer(id, pts);
        console.log(`[API] Validation result for ${id}:`, result);
        const ch = challenges.find(c => c.id === id);
        if (req.user) {
            await new Attempt({
                userId: req.user._id, classroomId,
                challengeId: id, points: pts, score: result.score, correct: result.correct,
                mode: 'practice', timestamp: new Date().toISOString()
            }).save();
            if (result.correct) await User.updateOne({ _id: req.user._id }, { $inc: { totalScore: result.score } });
            const ex = await Progress.findOne({ userId: req.user._id, challengeId: id });
            if (!ex) {
                await new Progress({
                    userId: req.user._id, challengeId: id,
                    bestScore: result.score, attempts: 1, completed: result.correct,
                    firstSeen: new Date().toISOString()
                }).save();
            } else {
                await Progress.updateOne({ userId: req.user._id, challengeId: id }, {
                    $inc: { attempts: 1 },
                    $set: { bestScore: Math.max(ex.bestScore, result.score), completed: ex.completed || result.correct }
                });
            }
        }
        const lineGuide = (ch.mode === 'line' && ch.answer)
            ? (() => { const p = ch.answer.split(':'); return { m: parseFloat(p[1]), b: parseFloat(p[2]) }; })()
            : null;
        res.json({ ...result, explanation: ch.explanation, ...(lineGuide ? { lineGuide } : {}) });

    } catch (err) { console.error(err); res.status(500).json({ error: 'Submission failed' }); }
});

// ── TEST ENGINE ───────────────────────────────────────────────────────────────
app.post('/api/test/start', requireAuth, [
    body('classroomId').optional({ nullable: true }).isString(),
    body('challengeIds').optional({ nullable: true }).isArray({ max: 20 }),
], validate, async (req, res) => {
    try {
        const result = await testEngine.startTestSession(req.user._id, req.body.classroomId || null, req.body.challengeIds || null);
        await audit(req, 'test-start', 'test_session', result.session?._id);
        res.json(result);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

app.get('/api/test/active', requireAuth, async (req, res) => {
    res.json(await testEngine.getActiveSession(req.user._id) || null);
});

app.post('/api/test/:sessionId/answer', requireAuth, [
    body('challengeId').isString(),
    body('points').isArray({ max: 10 }),
], validate, async (req, res) => {
    try {
        const pts = (req.body.points || []).map(p => [Math.round(Number(p[0])), Math.round(Number(p[1]))])
            .filter(p => !isNaN(p[0]) && !isNaN(p[1]));
        res.json(await testEngine.submitTestAnswer(req.params.sessionId, req.user._id, req.body.challengeId, pts));
    } catch (err) { res.status(400).json({ error: err.message }); }
});

app.post('/api/test/:sessionId/finalize', requireAuth, async (req, res) => {
    try {
        const result = await testEngine.finalizeTestSession(req.params.sessionId, req.user._id);
        await audit(req, 'test-finalize', 'test_session', req.params.sessionId);
        res.json(result);
    } catch (err) { res.status(400).json({ error: err.message }); }
});

// ── PROGRESS ──────────────────────────────────────────────────────────────────
app.get('/api/progress', requireAuth, async (req, res) => {
    res.json(await Progress.find({ userId: req.user._id }));
});

app.get('/api/leaderboard', requireAuth, async (req, res) => {
    const users = await User.find({}).sort({ totalScore: -1 }).limit(10);
    res.json(users.map(u => ({ displayName: u.displayName, totalScore: u.totalScore, role: u.role })));
});

// ── DATA RIGHTS ───────────────────────────────────────────────────────────────
app.get('/api/me/export', requireAuth, async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    const attempts = await Attempt.find({ userId: req.user._id });
    const progress = await Progress.find({ userId: req.user._id });
    const tests = await TestSession.find({ userId: req.user._id });
    const u = user.toObject();
    delete u.passwordHash;
    delete u.email;
    delete u.displayName;
    res.json({ user: u, attempts, progress, tests });
});

app.delete('/api/me', requireAuth, [
    body('password').notEmpty(),
], validate, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id });
        const valid = await bcrypt.compare(req.body.password, user.passwordHash);
        if (!valid) return res.status(401).json({ error: 'Wrong password' });
        await User.deleteOne({ _id: req.user._id });
        await Session.deleteMany({ userId: req.user._id });
        await Attempt.deleteMany({ userId: req.user._id });
        await Progress.deleteMany({ userId: req.user._id });
        await Membership.deleteMany({ userId: req.user._id });
        await TestSession.deleteMany({ userId: req.user._id });
        await AuditLog.updateMany({ userId: req.user._id }, { $set: { userId: 'deleted' } });
        res.clearCookie('token');
        res.json({ ok: true });
    } catch (err) { res.status(500).json({ error: 'Deletion failed' }); }
});

// ── HEALTH CHECK ────────────────────────────────────────────────────────────────
app.get('/health', (req, res) => {
    res.json({
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
        port: PORT,
        database: 'connected'
    });
});

app.get('/{*path}', (req, res) => res.sendFile(path.join(__dirname, 'docs', 'index.html')));
app.listen(PORT, () => console.log(`\n  Graphit → http://localhost:${PORT}\n`));

// ─── ERROR HANDLING MIDDLEWARE ──────────────────────────────────────────────────
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        timestamp: new Date().toISOString()
    });
});
