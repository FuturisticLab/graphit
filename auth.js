const jwt = require('jsonwebtoken');
const { decrypt } = require('./crypto');
const User = require('./models/User');
const Session = require('./models/Session');

const JWT_SECRET = process.env.JWT_SECRET || 'graphit-dev-secret-change-in-production';
const IS_DEV = process.env.NODE_ENV !== 'production';

// ── DEV BYPASS USER ──────────────────────────────────────────────────────────
// In development mode all auth middleware auto-injects this user so you can
// test every route without logging in.  Switch NODE_ENV=production to enforce
// real auth.
const DEV_USER = {
    _id: 'dev-user',
    email: 'dev@localhost',
    displayName: 'Dev User',
    role: 'instructor',   // instructor so dashboard + all routes are accessible
    totalScore: 0,
    streakDays: 0,
};

function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d', issuer: 'graphit' });
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET, { issuer: 'graphit' });
}

async function requireAuth(req, res, next) {
    try {
        const raw = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
        if (!raw) return res.status(401).json({ error: 'Not authenticated' });
        const payload = verifyToken(raw);
        const session = await Session.findOne({ token: raw });
        if (!session) return res.status(401).json({ error: 'Session expired' });
        const user = await User.findOne({ _id: payload.userId });
        if (!user) return res.status(401).json({ error: 'User not found' });
        req.user = user;
        req.token = raw;
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid token' });
    }
}

async function optionalAuth(req, res, next) {
    try {
        const raw = req.cookies?.token || req.headers.authorization?.replace('Bearer ', '');
        if (raw) {
            const payload = verifyToken(raw);
            const user = await User.findOne({ _id: payload.userId });
            if (user) req.user = user;
        }
    } catch (_) { }
    next();
}

async function createResetToken(email) {
    const users = await User.find({});
    const user = users.find(u => { try { return decrypt(u.email) === email; } catch { return false; } });
    if (!user) return;
    const token = require('crypto').randomBytes(32).toString('hex');
    await new Session({
        _id: token, userId: user._id,
        type: 'reset', expiresAt: new Date(Date.now() + 60 * 60 * 1000).toISOString()
    }).save();
    console.log(`\n  Reset link: http://localhost:3000/reset-password?token=${token}\n`);
}

async function consumeResetToken(token, newPassword) {
    const record = await Session.findOne({ _id: token, type: 'reset' });
    if (!record) throw new Error('Invalid or expired token');
    if (new Date() > new Date(record.expiresAt)) throw new Error('Token expired');
    const hash = await require('bcryptjs').hash(newPassword, 12);
    await User.updateOne({ _id: record.userId }, { $set: { passwordHash: hash } });
    await Session.deleteMany({ userId: record.userId });
    await Session.deleteOne({ _id: token });
}

module.exports = { signToken, verifyToken, requireAuth, optionalAuth, createResetToken, consumeResetToken };