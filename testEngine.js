const { v4: uuid } = require('uuid');
const db = require('./db');
const challenges = require('./challenges');
const { validateAnswer } = require('./validator');

// Default time limits per difficulty (minutes)
const TIME_LIMITS = { 1: 3, 2: 4, 3: 6, 4: 8, 5: 10 };

/**
 * Start a new test session for a student.
 * If classroomId is provided, ties the session to that class.
 * challengeIds: array of challenge ids to include (or null = all)
 */
async function startTestSession(userId, classroomId, challengeIds) {
  // Can't have two active sessions at once
  const active = await db.test_sessions.findOne({ userId, status: 'active' });
  if (active) {
    if (new Date() > new Date(active.expiresAt)) {
      await db.test_sessions.update({ _id: active._id }, { $set: { status: 'expired' } });
    } else {
      const chs = active.challengeIds.map(id => {
        const c = challenges.find(ch => ch.id === id);
        return { id: c.id, category: c.category, difficulty: c.difficulty, text: c.text, mode: c.mode };
      });
      return { session: active, challenges: chs, existing: true };
    }
  }

  const selected = challengeIds
    ? challenges.filter(c => challengeIds.includes(c.id))
    : challenges;

  if (!selected.length) throw new Error('No challenges selected');

  // Total time = sum of per-challenge limits
  const totalMinutes = selected.reduce((s, c) => s + (TIME_LIMITS[c.difficulty] || 5), 0);

  const session = await db.test_sessions.insert({
    _id:          uuid(),
    userId,
    classroomId:  classroomId || null,
    status:       'active',
    challengeIds: selected.map(c => c.id),
    currentIndex: 0,
    answers:      {},          // { challengeId: { points, score, correct, submittedAt } }
    startedAt:    new Date().toISOString(),
    expiresAt:    new Date(Date.now() + totalMinutes * 60 * 1000).toISOString(),
    totalMinutes,
  });

  return { session, challenges: selected.map(c => ({
    id: c.id, category: c.category, difficulty: c.difficulty,
    text: c.text, mode: c.mode,
    // NO hint, NO explanation in test mode
  }))};
}

/**
 * Submit one answer within an active test session.
 */
async function submitTestAnswer(sessionId, userId, challengeId, points) {
  const session = await db.test_sessions.findOne({ _id: sessionId, userId, status: 'active' });
  if (!session) throw new Error('No active test session');

  // Check time not expired
  if (new Date() > new Date(session.expiresAt)) {
    await db.test_sessions.update({ _id: sessionId }, { $set: { status: 'expired' } });
    throw new Error('Test time has expired');
  }

  // Already answered this challenge?
  if (session.answers[challengeId]) throw new Error('Already answered this challenge');

  const result = validateAnswer(challengeId, points);

  const answers = { ...session.answers, [challengeId]: {
    points, score: result.score, correct: result.correct,
    feedback: result.feedback, submittedAt: new Date().toISOString(),
  }};

  const allDone = session.challengeIds.every(id => answers[id]);
  const status  = allDone ? 'completed' : 'active';

  await db.test_sessions.update({ _id: sessionId }, { $set: { answers, status,
    ...(allDone ? { completedAt: new Date().toISOString() } : {}),
  }});

  // Save to attempts table (with classroomId for instructor visibility)
  await db.attempts.insert({
    _id: uuid(), userId, classroomId: session.classroomId,
    challengeId, points, score: result.score, correct: result.correct,
    mode: 'test', testSessionId: sessionId,
    timestamp: new Date().toISOString(),
  });

  return { result: { correct: result.correct, score: result.score, feedback: result.feedback },
    testComplete: allDone,
    // No explanation revealed until test is complete
    explanation: allDone ? null : undefined,
  };
}

/**
 * Finalize a test (time-up or all answered).
 * Returns full results with explanations now unlocked.
 */
async function finalizeTestSession(sessionId, userId) {
  const session = await db.test_sessions.findOne({ _id: sessionId, userId });
  if (!session) throw new Error('Session not found');

  if (session.status === 'active') {
    await db.test_sessions.update({ _id: sessionId }, { $set: {
      status: 'completed', completedAt: new Date().toISOString(),
    }});
  }

  // Build full results with explanations now revealed
  const results = session.challengeIds.map(id => {
    const ch  = challenges.find(c => c.id === id);
    const ans = session.answers[id];
    return {
      challengeId: id,
      text:        ch?.text,
      category:    ch?.category,
      difficulty:  ch?.difficulty,
      answered:    !!ans,
      score:       ans?.score  || 0,
      correct:     ans?.correct || false,
      feedback:    ans?.feedback || 'Not attempted',
      points:      ans?.points || [],
      explanation: ch?.explanation,  // Now revealed
    };
  });

  const totalScore    = results.reduce((s, r) => s + r.score, 0);
  const maxScore      = results.length * 100;
  const correctCount  = results.filter(r => r.correct).length;
  const pct           = Math.round((totalScore / maxScore) * 100);

  // Update user total score
  const user = await db.users.findOne({ _id: userId });
  await db.users.update({ _id: userId }, { $inc: { totalScore: totalScore } });

  return {
    sessionId, status: 'completed',
    totalScore, maxScore, pct, correctCount,
    totalChallenges: results.length,
    timeTaken: session.completedAt
      ? Math.round((new Date(session.completedAt) - new Date(session.startedAt)) / 1000)
      : null,
    results,
  };
}

/**
 * Get an active session's current state (for resuming after page refresh).
 */
async function getActiveSession(userId) {
  const session = await db.test_sessions.findOne({ userId, status: 'active' });
  if (!session) return null;
  if (new Date() > new Date(session.expiresAt)) {
    await db.test_sessions.update({ _id: session._id }, { $set: { status: 'expired' } });
    return null;
  }
  const chs = session.challengeIds.map(id => {
    const c = challenges.find(ch => ch.id === id);
    return { id: c.id, category: c.category, difficulty: c.difficulty, text: c.text, mode: c.mode };
  });
  return { session, challenges: chs };
}

module.exports = { startTestSession, submitTestAnswer, finalizeTestSession, getActiveSession };
