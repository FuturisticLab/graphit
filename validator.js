const challenges = require('./challenges');

/**
 * Validate a submitted answer against a challenge.
 * Returns { correct: bool, score: 0-100, feedback: string, details: [] }
 */
function validateAnswer(challengeId, placedPoints) {
  const ch = challenges.find(c => c.id === challengeId);
  if (!ch) return { correct: false, score: 0, feedback: 'Challenge not found.' };

  const pts = placedPoints || [];

  // ── POINTS MODE ────────────────────────────────────────────────────────────
  if (ch.mode === 'points') {
    const required = ch.answer;
    if (pts.length < required.length) {
      return {
        correct: false, score: 0,
        feedback: `Place ${required.length} point(s) to answer.`,
        details: [],
      };
    }
    const userKeys  = pts.map(p => `${p[0]},${p[1]}`);
    const targetKeys = required.map(p => `${p[0]},${p[1]}`);
    const hits = targetKeys.filter(k => userKeys.includes(k));
    const correct = hits.length === targetKeys.length;
    const score   = Math.round((hits.length / targetKeys.length) * 100);

    const details = required.map(([tx, ty]) => {
      const found = pts.find(p => p[0] === tx && p[1] === ty);
      return { target: [tx, ty], hit: !!found };
    });

    return {
      correct,
      score,
      feedback: correct
        ? 'All points correctly placed!'
        : `${hits.length} of ${required.length} correct. Check the guide circles for target positions.`,
      details,
    };
  }

  // ── LINE MODE ──────────────────────────────────────────────────────────────
  if (ch.mode === 'line') {
    if (pts.length < 2) {
      return { correct: false, score: 0, feedback: 'Place at least 2 points to define a line.', details: [] };
    }
    const wrong = pts.filter(([x, y]) => Math.abs(ch.lineFn(x) - y) > 0.01);
    const correct = wrong.length === 0;
    const score = correct ? 100 : Math.round(((pts.length - wrong.length) / pts.length) * 60);
    return {
      correct,
      score,
      feedback: correct
        ? 'All points lie on the correct line!'
        : `${pts.length - wrong.length} of ${pts.length} points are on the line. See the dashed guide.`,
      details: pts.map(([x, y]) => ({ target: [x, ch.lineFn(x)], hit: Math.abs(ch.lineFn(x) - y) <= 0.01 })),
    };
  }

  // ── QUADRANT MODE ─────────────────────────────────────────────────────────
  if (ch.mode === 'quadrant') {
    if (pts.length < 2) {
      return { correct: false, score: 0, feedback: 'Place at least 2 points.', details: [] };
    }
    const hits  = pts.filter(p => ch.checkFn(p));
    const correct = hits.length === pts.length;
    const score   = Math.round((hits.length / pts.length) * 100);
    return {
      correct,
      score,
      feedback: correct
        ? 'Both points are in the correct quadrant!'
        : `${hits.length} of ${pts.length} points are in the correct region.`,
      details: pts.map(p => ({ target: p, hit: ch.checkFn(p) })),
    };
  }

  return { correct: false, score: 0, feedback: 'Unknown challenge mode.', details: [] };
}

module.exports = { validateAnswer };
