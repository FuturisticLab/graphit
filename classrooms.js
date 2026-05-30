const { v4: uuid } = require('uuid');
const db = require('./db');

// Generate a human-readable join code like "MATH-4829-XK"
function generateJoinCode() {
  const words = ['MATH','ALGE','CALC','FUNC','GRAPH','SLOPE','QUAD','LINE'];
  const word  = words[Math.floor(Math.random() * words.length)];
  const nums  = String(Math.floor(1000 + Math.random() * 9000));
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ';
  const suffix = chars[Math.floor(Math.random()*chars.length)] +
                 chars[Math.floor(Math.random()*chars.length)];
  return `${word}-${nums}-${suffix}`;
}

// Create a classroom
async function createClassroom(instructorId, name, description = '') {
  let joinCode, attempts = 0;
  // Retry until unique (extremely rare collision)
  while (attempts < 10) {
    joinCode = generateJoinCode();
    const existing = await db.classrooms.findOne({ joinCode });
    if (!existing) break;
    attempts++;
  }
  const classroom = await db.classrooms.insert({
    _id:          uuid(),
    instructorId,
    name:         name.trim().slice(0, 80),
    description:  description.trim().slice(0, 300),
    joinCode,
    createdAt:    new Date().toISOString(),
    active:       true,
    allowedModes: ['practice', 'test'],
  });
  return classroom;
}

// Student joins a classroom via join code
async function joinClassroom(userId, joinCode) {
  const classroom = await db.classrooms.findOne({
    joinCode: joinCode.trim().toUpperCase(),
    active: true,
  });
  if (!classroom) throw new Error('Invalid or expired join code');

  // Prevent instructors from joining their own room as student
  if (classroom.instructorId === userId) throw new Error('You own this classroom');

  // Idempotent - already a member?
  const existing = await db.memberships.findOne({ userId, classroomId: classroom._id });
  if (existing) return { classroom, alreadyMember: true };

  await db.memberships.insert({
    _id:         uuid(),
    userId,
    classroomId: classroom._id,
    joinedAt:    new Date().toISOString(),
    role:        'student',
  });
  return { classroom, alreadyMember: false };
}

// Get all classrooms an instructor owns
async function getInstructorClassrooms(instructorId) {
  return db.classrooms.find({ instructorId }).sort({ createdAt: -1 });
}

// Get all classrooms a student belongs to
async function getStudentClassrooms(userId) {
  const memberships = await db.memberships.find({ userId });
  if (!memberships.length) return [];
  const ids = memberships.map(m => m.classroomId);
  const rooms = [];
  for (const id of ids) {
    const r = await db.classrooms.findOne({ _id: id });
    if (r) rooms.push(r);
  }
  return rooms;
}

// Get all students in a classroom with their progress stats
async function getClassroomRoster(classroomId, instructorId) {
  // Verify ownership
  const classroom = await db.classrooms.findOne({ _id: classroomId, instructorId });
  if (!classroom) throw new Error('Not authorized');

  const memberships = await db.memberships.find({ classroomId });
  if (!memberships.length) return { classroom, students: [] };

  const students = [];
  for (const m of memberships) {
    const user = await db.users.findOne({ _id: m.userId });
    if (!user) continue;

    // Aggregate their attempts in this classroom context
    const attempts = await db.attempts.find({ userId: m.userId, classroomId });
    const progress = await db.progress.find({ userId: m.userId });

    const totalAttempts   = attempts.length;
    const correctAttempts = attempts.filter(a => a.correct).length;
    const avgScore        = attempts.length
      ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length)
      : 0;
    const completedCount  = progress.filter(p => p.completed).length;

    // Test sessions for this student in this classroom
    const testSessions = await db.test_sessions.find({ userId: m.userId, classroomId });

    students.push({
      userId:          user._id,
      displayName:     user.displayName,
      email:           user.email,
      joinedAt:        m.joinedAt,
      totalAttempts,
      correctAttempts,
      avgScore,
      completedChallenges: completedCount,
      totalScore:      user.totalScore || 0,
      testSessions:    testSessions.length,
      lastActive:      attempts.length
        ? attempts.sort((a,b)=>b.timestamp.localeCompare(a.timestamp))[0].timestamp
        : null,
    });
  }

  return { classroom, students };
}

// Get detailed activity for a single student within a classroom
async function getStudentDetail(classroomId, studentId, instructorId) {
  const classroom = await db.classrooms.findOne({ _id: classroomId, instructorId });
  if (!classroom) throw new Error('Not authorized');

  const user = await db.users.findOne({ _id: studentId });
  if (!user) throw new Error('Student not found');

  const attempts    = await db.attempts.find({ userId: studentId, classroomId })
                        .sort({ timestamp: -1 });
  const testSessions = await db.test_sessions.find({ userId: studentId, classroomId })
                        .sort({ startedAt: -1 });

  return { user: { id: user._id, displayName: user.displayName, email: user.email }, attempts, testSessions };
}

module.exports = {
  createClassroom, joinClassroom,
  getInstructorClassrooms, getStudentClassrooms,
  getClassroomRoster, getStudentDetail,
};
