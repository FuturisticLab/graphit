// ─── LOCAL CHALLENGES DATASET ──────────────────────────────────────────────────
const LOCAL_CHALLENGES = [
  {
    id: 'pp-1',
    category: 'Plotting Points',
    difficulty: 1,
    text: 'Plot the points (3, 2) and (−2, −3) on the coordinate plane.',
    hint: 'Each point is written as (x, y). Move right or left for x, up or down for y.',
    mode: 'points',
    answer: [[3, 2], [-2, -3]],
    explanation: {
      title: 'How to Plot (3, 2) and (−2, −3)',
      formula: '(x, y) → move x units horizontally, y units vertically from the origin',
      steps: [
        {
          label: 'Start at the origin',
          detail: 'Every point begins at (0, 0) — where the x-axis and y-axis cross.',
        },
        {
          label: 'Plot (3, 2)',
          detail: 'x = 3 means move 3 steps to the right. y = 2 means move 2 steps up. Mark the intersection.',
        },
        {
          label: 'Plot (−2, −3)',
          detail: 'x = −2 means move 2 steps to the left. y = −3 means move 3 steps down. Mark the intersection.',
        },
        {
          label: 'Check: Quadrants',
          detail: '(3, 2) is in Quadrant I (+x, +y). (−2, −3) is in Quadrant III (−x, −y).',
        },
      ],
      keyInsight: 'Think of coordinates like a map: x is East/West, y is North/South.',
    },
  },
  {
    id: 'int-1',
    category: 'Intercepts',
    difficulty: 2,
    text: 'Find and plot the x-intercept and y-intercept of y = 2x − 4.',
    hint: 'Set y = 0 to find the x-intercept. Set x = 0 to find the y-intercept.',
    mode: 'points',
    answer: [[2, 0], [0, -4]],
    explanation: {
      title: 'Intercepts of y = 2x − 4',
      formula: 'y = 2x − 4  (slope-intercept form: y = mx + b)',
      steps: [
        {
          label: 'Find the y-intercept (set x = 0)',
          detail: 'y = 2(0) − 4 = −4. The y-intercept is (0, −4). It\'s where the line crosses the y-axis.',
        },
        {
          label: 'Find the x-intercept (set y = 0)',
          detail: '0 = 2x − 4  →  2x = 4  →  x = 2. The x-intercept is (2, 0). It\'s where the line crosses the x-axis.',
        },
        {
          label: 'Plot both points',
          detail: 'Place (0, −4) on the y-axis and (2, 0) on the x-axis.',
        },
        {
          label: 'Verify',
          detail: 'Check: y = 2(2) − 4 = 0 ✓  and  y = 2(0) − 4 = −4 ✓',
        },
      ],
      keyInsight: 'The y-intercept is always "b" in y = mx + b — you can read it directly from the equation.',
    },
  },
  {
    id: 'line-1',
    category: 'Linear Functions',
    difficulty: 2,
    text: 'Graph y = x + 2 by placing two points that lie on the line.',
    hint: 'Substitute any two x-values into y = x + 2. Try x = 0 and x = 3.',
    mode: 'line',
    answer: 'line:1:2',
    lineFn: x => x + 2,
    explanation: {
      title: 'Graphing y = x + 2',
      formula: 'y = mx + b  where  m = 1 (slope),  b = 2 (y-intercept)',
      steps: [
        {
          label: 'Identify slope and intercept',
          detail: 'In y = 1·x + 2: slope m = 1 means "rise 1, run 1". y-intercept b = 2, so the line crosses y-axis at (0, 2).',
        },
        {
          label: 'Calculate values',
          detail: 'x = 0 → y = 0 + 2 = 2, giving point (0, 2). x = 3 → y = 3 + 2 = 5, giving point (3, 5). x = −2 → y = −2 + 2 = 0, giving point (−2, 0).',
        },
        {
          label: 'Plot any two points',
          detail: 'Place two of your calculated points on the grid. Any two correct points define the same line.',
        },
        {
          label: 'Confirm the slope',
          detail: 'From (0,2) to (3,5): rise = 5−2 = 3, run = 3−0 = 3. Slope = 3/3 = 1 ✓',
        },
      ],
      keyInsight: 'A slope of 1 means the line goes up exactly 1 unit for every 1 unit to the right — a perfect 45° diagonal.',
    },
  },
  {
    id: 'line-2',
    category: 'Linear Functions',
    difficulty: 2,
    text: 'Graph y = −2x + 4 by placing two points on the line.',
    hint: 'Try x = 0 for the y-intercept, then x = 2 to find a second point.',
    mode: 'line',
    answer: 'line:-2:4',
    lineFn: x => -2 * x + 4,
    explanation: {
      title: 'Graphing y = −2x + 4',
      formula: 'y = −2x + 4  →  slope = −2,  y-intercept = 4',
      steps: [
        {
          label: 'Identify slope and intercept',
          detail: 'Slope m = −2 means "fall 2, run 1" — the line goes downward steeply. b = 4, so start at (0, 4).',
        },
        {
          label: 'Calculate points',
          detail: 'x = 0 → y = −2(0) + 4 = 4  →  (0, 4). x = 2 → y = −2(2) + 4 = 0  →  (2, 0). x = 1 → y = −2(1) + 4 = 2  →  (1, 2).',
        },
        {
          label: 'Plot two points',
          detail: 'Place (0, 4) and (2, 0) — or any other two correct points. The line will slope downward from left to right.',
        },
        {
          label: 'Check direction',
          detail: 'Negative slope = line goes DOWN from left to right. Positive slope = line goes UP. This line should fall.',
        },
      ],
      keyInsight: 'The sign of the slope tells you direction: negative slopes always go downhill from left to right.',
    },
  },
  {
    id: 'vtx-1',
    category: 'Quadratics',
    difficulty: 3,
    text: 'Plot the vertex of the parabola y = (x − 1)² − 3.',
    hint: 'Vertex form is y = (x − h)² + k. The vertex is the point (h, k).',
    mode: 'points',
    answer: [[1, -3]],
    explanation: {
      title: 'Vertex of y = (x − 1)² − 3',
      formula: 'Vertex form:  y = (x − h)² + k  →  vertex at (h, k)',
      steps: [
        {
          label: 'Recognize vertex form',
          detail: 'The equation y = (x − 1)² − 3 is already in vertex form y = (x − h)² + k.',
        },
        {
          label: 'Identify h and k',
          detail: 'Comparing (x − 1)² − 3 to (x − h)² + k: h = 1 and k = −3. Note: the sign flips! (x − 1) means h = +1, not −1.',
        },
        {
          label: 'Write the vertex',
          detail: 'Vertex = (h, k) = (1, −3). This is the lowest point of the parabola.',
        },
        {
          label: 'Verify',
          detail: 'At x = 1: y = (1−1)² − 3 = 0 − 3 = −3. So (1, −3) is on the curve ✓.',
        },
      ],
      keyInsight: 'Watch the sign trap: in (x − h), h is positive even though there\'s a minus sign. (x − 1) has h = 1, not h = −1.',
    },
  },
  {
    id: 'slope-1',
    category: 'Slope',
    difficulty: 3,
    text: 'A line passes through (0, −1) and has slope 3/2. Plot two points and graph the line.',
    hint: 'Start at the y-intercept (0, −1). Then apply slope: rise 3, run 2.',
    mode: 'line',
    answer: 'line:1.5:-1',
    lineFn: x => 1.5 * x - 1,
    explanation: {
      title: 'Line through (0, −1) with slope 3/2',
      formula: 'y = mx + b  →  y = (3/2)x − 1',
      steps: [
        {
          label: 'Start at the y-intercept',
          detail: 'The y-intercept is (0, −1). Plot this point first — it\'s where the line crosses the y-axis.',
        },
        {
          label: 'Apply the slope',
          detail: 'Slope = rise/run = 3/2. From (0, −1): move right 2, up 3 → land at (2, 2). From (2, 2): move right 2, up 3 → land at (4, 5).',
        },
        {
          label: 'Verify with the equation',
          detail: 'y = (3/2)(2) − 1 = 3 − 1 = 2 ✓.  y = (3/2)(4) − 1 = 6 − 1 = 5 ✓.',
        },
        {
          label: 'Draw the line',
          detail: 'Two points define the line. Connect (0, −1) and (2, 2) — the line extends infinitely in both directions.',
        },
      ],
      keyInsight: 'Slope as a fraction (rise/run) tells you exactly how far to step: go right by the denominator, up by the numerator.',
    },
  },
  {
    id: 'sys-1',
    category: 'Systems',
    difficulty: 4,
    text: 'Plot the solution to the system: y = x + 1  and  y = −x + 3.',
    hint: 'Set the equations equal: x + 1 = −x + 3. Solve for x, then find y.',
    mode: 'points',
    answer: [[1, 2]],
    explanation: {
      title: 'Solving y = x + 1  and  y = −x + 3',
      formula: 'Set equal: x + 1 = −x + 3',
      steps: [
        {
          label: 'Set the equations equal',
          detail: 'Since both expressions equal y, set them equal: x + 1 = −x + 3.',
        },
        {
          label: 'Solve for x',
          detail: 'x + 1 = −x + 3  →  2x = 2  →  x = 1.',
        },
        {
          label: 'Substitute to find y',
          detail: 'Use either equation: y = x + 1 = 1 + 1 = 2. So the solution is (1, 2).',
        },
        {
          label: 'Verify in both equations',
          detail: 'Line 1: y = 1 + 1 = 2 ✓. Line 2: y = −1 + 3 = 2 ✓. The point (1, 2) satisfies both equations.',
        },
      ],
      keyInsight: 'The solution to a system of equations is the point where two lines intersect on the graph.',
    },
  },
  {
    id: 'quad-1',
    category: 'Quadrants',
    difficulty: 1,
    text: 'Plot two points that lie in Quadrant II (upper-left region).',
    hint: 'Quadrant II has negative x and positive y. Examples: (−1, 3), (−4, 2).',
    mode: 'quadrant',
    answer: 'quadrant:2',
    checkFn: ([x, y]) => x < 0 && y > 0,
    explanation: {
      title: 'Quadrant II: Negative x, Positive y',
      formula: 'Quadrant II: x < 0  and  y > 0',
      steps: [
        {
          label: 'The four quadrants',
          detail: 'Q I: (+, +) upper-right. Q II: (−, +) upper-left. Q III: (−, −) lower-left. Q IV: (+, −) lower-right.',
        },
        {
          label: 'Quadrant II rule',
          detail: 'x must be negative (left of y-axis) AND y must be positive (above x-axis).',
        },
        {
          label: 'Valid examples',
          detail: '(−1, 4), (−3, 1), (−5, 7) all work. (−2, −1) is wrong — that\'s Q III. (1, 3) is wrong — that\'s Q I.',
        },
      ],
      keyInsight: 'Counter-clockwise from Q I: I → II → III → IV. Signs follow the pattern: ++, −+, −−, +−.',
    },
  },
  {
    id: 'roots-1',
    category: 'Roots & Zeros',
    difficulty: 3,
    text: 'Plot the solutions (roots) of x² − x − 2 = 0 on the x-axis.',
    hint: 'Factor the quadratic: x² − x − 2 = (x − ?)(x + ?). The roots have y = 0.',
    mode: 'points',
    answer: [[2, 0], [-1, 0]],
    explanation: {
      title: 'Roots of x² − x − 2 = 0',
      formula: 'x² − x − 2 = (x − 2)(x + 1) = 0',
      steps: [
        {
          label: 'Factor the quadratic',
          detail: 'Find two numbers that multiply to −2 and add to −1. Those are −2 and +1. So: x² − x − 2 = (x − 2)(x + 1).',
        },
        {
          label: 'Apply zero-product property',
          detail: 'If (x − 2)(x + 1) = 0, then either x − 2 = 0  or  x + 1 = 0.',
        },
        {
          label: 'Solve each factor',
          detail: 'x − 2 = 0  →  x = 2. x + 1 = 0  →  x = −1. The roots are x = 2 and x = −1.',
        },
        {
          label: 'Plot as points on the x-axis',
          detail: 'Roots are x-intercepts — where the parabola crosses the x-axis. Plot (2, 0) and (−1, 0) with y = 0.',
        },
      ],
      keyInsight: 'Roots = zeros = x-intercepts. They\'re all the same thing: the x-values where the function equals zero.',
    },
  },
  {
    id: 'abs-1',
    category: 'Special Functions',
    difficulty: 4,
    text: 'Plot the vertex of y = |x + 2| − 1.',
    hint: 'The vertex of y = |x − h| + k is at (h, k). Watch the sign of h!',
    mode: 'points',
    answer: [[-2, -1]],
    explanation: {
      title: 'Vertex of y = |x + 2| − 1',
      formula: 'Absolute value form:  y = |x − h| + k  →  vertex at (h, k)',
      steps: [
        {
          label: 'Rewrite to match the form',
          detail: 'y = |x + 2| − 1 = |x − (−2)| + (−1). Now it matches y = |x − h| + k with h = −2 and k = −1.',
        },
        {
          label: 'Identify the vertex',
          detail: 'Vertex = (h, k) = (−2, −1). This is the tip of the V-shape.',
        },
        {
          label: 'Verify',
          detail: 'At x = −2: y = |−2 + 2| − 1 = |0| − 1 = −1 ✓.',
        },
      ],
      keyInsight: 'Just like vertex form for parabolas, the sign flips: |x + 2| has h = −2 because it matches |x − (−2)|.',
    },
  }
];

// ─── ANSWER VALIDATOR ─────────────────────────────────────────────────────────
function validateLocalAnswer(challengeId, placedPoints) {
  const ch = LOCAL_CHALLENGES.find(c => c.id === challengeId);
  if (!ch) return { correct: false, score: 0, feedback: 'Challenge not found.' };
  const pts = placedPoints || [];

  if (ch.mode === 'points') {
    const required = ch.answer;
    if (pts.length < required.length) {
      return { correct: false, score: 0, feedback: `Place ${required.length} point(s) to answer.`, details: [] };
    }
    const userKeys = pts.map(p => `${p[0]},${p[1]}`);
    const targetKeys = required.map(p => `${p[0]},${p[1]}`);
    const hits = targetKeys.filter(k => userKeys.includes(k));
    const correct = hits.length === targetKeys.length;
    const score = Math.round((hits.length / targetKeys.length) * 100);
    const details = required.map(([tx, ty]) => {
      const found = pts.find(p => p[0] === tx && p[1] === ty);
      return { target: [tx, ty], hit: !!found };
    });
    return {
      correct,
      score,
      feedback: correct ? 'All points correctly placed!' : `${hits.length} of ${required.length} correct. Check the guide circles.`,
      details,
    };
  }

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
      feedback: correct ? 'All points lie on the correct line!' : `${pts.length - wrong.length} of ${pts.length} points are on the line.`,
      details: pts.map(([x, y]) => ({ target: [x, ch.lineFn(x)], hit: Math.abs(ch.lineFn(x) - y) <= 0.01 })),
    };
  }

  if (ch.mode === 'quadrant') {
    if (pts.length < 2) {
      return { correct: false, score: 0, feedback: 'Place at least 2 points.', details: [] };
    }
    const hits = pts.filter(p => ch.checkFn(p));
    const correct = hits.length === pts.length;
    const score = Math.round((hits.length / pts.length) * 100);
    return {
      correct,
      score,
      feedback: correct ? 'Both points are in the correct quadrant!' : `${hits.length} of ${pts.length} points are in the correct region.`,
      details: pts.map(p => ({ target: p, hit: ch.checkFn(p) })),
    };
  }
  return { correct: false, score: 0, feedback: 'Unknown challenge mode.', details: [] };
}

// ─── AUTO DETECTION MODE ─────────────────────────────────────────────────────
let isStaticFileMode = window.location.protocol === 'file:' || 
                       window.location.hostname.includes('github.io') || 
                       window.location.hostname === '' ||
                       ((window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && window.location.port !== '3000');
const API = '';

function escapeHTML(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function enableStaticMockMode() {
  isStaticFileMode = true;
  const uuidGen = () => Math.random().toString(36).substring(2, 9).toUpperCase();
  const getDB = (key, defaultVal = {}) => JSON.parse(localStorage.getItem('graphit_' + key) || JSON.stringify(defaultVal));
  const saveDB = (key, val) => localStorage.setItem('graphit_' + key, JSON.stringify(val));

  // Initialize profile settings if empty
  const defaultProfile = {
    displayName: 'Guest',
    role: 'student',
    score: 0,
    streak: 0,
    progress: {},
    classrooms: []
  };

  const getProfile = () => {
    try {
      return JSON.parse(localStorage.getItem('graphit_profile') || JSON.stringify(defaultProfile));
    } catch {
      return defaultProfile;
    }
  };

  const saveProfile = (p) => localStorage.setItem('graphit_profile', JSON.stringify(p));

  // Seed default databases
  if (!localStorage.getItem('graphit_classrooms')) {
    saveDB('classrooms', {});
    saveDB('attempts', []);
  }

  // Intercept window.fetch locally
  window.fetch = async function (url, options = {}) {
    const path = url.replace(/^[./]+/, '').split('?')[0];
    const method = options.method || 'GET';
    const body = options.body ? JSON.parse(options.body) : null;
    const currentUser = getProfile();

    if (path === 'api/challenges') {
      return { ok: true, status: 200, json: async () => LOCAL_CHALLENGES };
    }

    if (path === 'api/auth/me') {
      return { ok: true, status: 200, json: async () => ({
        id: 'local-id',
        displayName: currentUser.displayName,
        role: currentUser.role,
        totalScore: currentUser.score,
        streakDays: currentUser.streak
      })};
    }

    if (path === 'api/auth/register' || path === 'api/auth/login') {
      const { displayName, role } = body;
      currentUser.displayName = displayName;
      currentUser.role = role;
      saveProfile(currentUser);
      return { ok: true, status: 200, json: async () => ({ user: { id: 'local-id', displayName, role } })};
    }

    if (path === 'api/auth/logout') {
      localStorage.removeItem('graphit_profile');
      return { ok: true, status: 200, json: async () => ({ ok: true }) };
    }

    if (path.match(/^api\/challenges\/[^/]+\/submit$/)) {
      const chId = path.split('/')[2];
      const ch = LOCAL_CHALLENGES.find(c => c.id === chId);
      const result = validateLocalAnswer(chId, body.points);

      const bestScore = currentUser.progress[chId] || 0;
      if (result.score > bestScore) {
        currentUser.progress[chId] = result.score;
        currentUser.score = Object.values(currentUser.progress).reduce((a, b) => a + b, 0);
        saveProfile(currentUser);
      }

      const attempts = getDB('attempts', []);
      attempts.push({
        studentName: currentUser.displayName,
        challengeId: chId,
        challengeTitle: ch.category,
        score: result.score,
        timestamp: new Date().toISOString()
      });
      saveDB('attempts', attempts);

      return {
        ok: true,
        status: 200,
        json: async () => ({
          correct: result.correct,
          score: result.score,
          feedback: result.feedback,
          details: result.details,
          explanation: ch.explanation
        })
      };
    }

    if (path === 'api/classrooms') {
      const classrooms = getDB('classrooms');
      if (method === 'GET') {
        const list = Object.values(classrooms).filter(c => c.instructor === currentUser.displayName);
        return { ok: true, status: 200, json: async () => list };
      }
      if (method === 'POST') {
        const newCode = 'MATH-' + uuidGen().substring(0, 4) + '-' + uuidGen().substring(4, 6);
        const newRoom = {
          _id: uuidGen(),
          name: body.name,
          description: body.description,
          joinCode: newCode,
          instructor: currentUser.displayName,
          students: []
        };
        classrooms[newRoom._id] = newRoom;
        saveDB('classrooms', classrooms);
        return { ok: true, status: 200, json: async () => newRoom };
      }
    }

    if (path === 'api/classrooms/join') {
      const classrooms = getDB('classrooms');
      const room = Object.values(classrooms).find(c => c.joinCode === body.joinCode);
      if (!room) {
        return { ok: false, status: 404, json: async () => ({ error: 'Classroom not found. Please verify the join code.' }) };
      }
      if (!room.students.includes(currentUser.displayName)) {
        room.students.push(currentUser.displayName);
        classrooms[room._id] = room;
        saveDB('classrooms', classrooms);
      }
      if (!currentUser.classrooms.includes(room._id)) {
        currentUser.classrooms.push(room._id);
        saveProfile(currentUser);
      }
      return { ok: true, status: 200, json: async () => ({ classroom: room }) };
    }

    if (path.match(/^api\/classrooms\/[^/]+\/roster$/)) {
      const roomId = path.split('/')[2];
      const room = getDB('classrooms')[roomId];
      if (!room) return { ok: false, status: 404, json: async () => ({ error: 'Classroom not found' }) };

      const rosterList = room.students.map(name => ({
        _id: name,
        displayName: name,
        score: name === currentUser.displayName ? currentUser.score : 320
      }));
      return { ok: true, status: 200, json: async () => ({ name: room.name, students: rosterList }) };
    }

    if (path.match(/^api\/classrooms\/[^/]+\/students\/[^/]+$/)) {
      const parts = path.split('/');
      const studentId = parts[4];
      const studentAttempts = getDB('attempts', []).filter(a => a.studentName === studentId);
      return {
        ok: true,
        status: 200,
        json: async () => ({
          student: { displayName: studentId },
          attempts: studentAttempts,
          progress: studentId === currentUser.displayName ? currentUser.progress : {}
        })
      };
    }

    if (path === 'api/my-classrooms') {
      const classrooms = getDB('classrooms');
      const joined = Object.values(classrooms).filter(c => c.students.includes(currentUser.displayName));
      return { ok: true, status: 200, json: async () => joined };
    }

    if (path === 'api/test/start') {
      const shuffled = [...LOCAL_CHALLENGES].sort(() => 0.5 - Math.random());
      const testQs = shuffled.slice(0, 5).map(c => ({ id: c.id, category: c.category, difficulty: c.difficulty, text: c.text, mode: c.mode }));
      const activeTest = {
        _id: 'test_' + uuidGen(),
        challenges: testQs,
        answers: {}
      };
      sessionStorage.setItem('active_test', JSON.stringify(activeTest));
      return { ok: true, status: 200, json: async () => ({ session: activeTest, challenges: testQs }) };
    }

    if (path.match(/^api\/test\/[^/]+\/answer$/)) {
      const activeTest = JSON.parse(sessionStorage.getItem('active_test') || '{}');
      const chId = body.challengeId;
      const result = validateLocalAnswer(chId, body.points);
      activeTest.answers[chId] = { score: result.score, correct: result.correct };
      sessionStorage.setItem('active_test', JSON.stringify(activeTest));

      const totalAnswered = Object.keys(activeTest.answers).length;
      const testComplete = totalAnswered >= activeTest.challenges.length;

      return {
        ok: true,
        status: 200,
        json: async () => ({
          result: { score: result.score, correct: result.correct },
          testComplete
        })
      };
    }

    if (path.match(/^api\/test\/[^/]+\/finalize$/)) {
      sessionStorage.removeItem('active_test');
      return { ok: true, status: 200, json: async () => ({ ok: true }) };
    }

    return { ok: false, status: 404, json: async () => ({ error: 'Route not found' }) };
  };
}

if (isStaticFileMode) {
  enableStaticMockMode();
}

// ── STATE ────────────────────────────────────────────────────────────────────
let me = null, challenges = [], currentQ = 0;
let placed = [], submitted = false, pendingPt = null, hoverSnap = null;
let score = 0, correctCt = 0, appMode = 'practice';
let testSession = null, testChallenges = [], testAnswers = {};
let currentClassroom = null, selectedRoom = null;
let profileRole = 'student';
let lastSubmitDetails = [], lastSubmitMode = null, lastLineGuide = null;

// ── FOCUS TRAPPING FOR ACCESSIBILITY ──────────────────────────────────────────
function trapFocus(modalEl) {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusable = modalEl.querySelectorAll(focusableElements)[0];
    const focusables = modalEl.querySelectorAll(focusableElements);
    const lastFocusable = focusables[focusables.length - 1];

    if (!firstFocusable) return;

    modalEl.onkeydown = function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey) { // Shift + Tab
                if (document.activeElement === firstFocusable) {
                    lastFocusable.focus();
                    e.preventDefault();
                }
            } else { // Tab
                if (document.activeElement === lastFocusable) {
                    firstFocusable.focus();
                    e.preventDefault();
                }
            }
        }
    };
}

// ── CANVAS ───────────────────────────────────────────────────────────────────
const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');
let CW = 0, CH = 0, GRID = 40, OX = 0, OY = 0;
const DPR = window.devicePixelRatio || 1;

function resizeCanvas() {
    const panel = document.getElementById('cvPanel');
    const bar   = panel.querySelector('.cv-bar');
    const barH  = bar ? bar.offsetHeight : 38;
    
    // Dynamic scaling: size by width on mobile, and height on desktop
    const isMobile = window.innerWidth <= 820;
    let size = 0;
    if (isMobile) {
        size = panel.clientWidth || window.innerWidth;
    } else {
        const availH = panel.clientHeight - barH;
        size = availH;
    }
    size = Math.max(100, size);
    
    canvas.width  = Math.round(size * DPR); canvas.height = Math.round(size * DPR);
    canvas.style.width  = size + 'px'; canvas.style.height = size + 'px';
    const wrap = document.getElementById('cvWrap');
    if (wrap) { wrap.style.width = size + 'px'; wrap.style.height = size + 'px'; }
    ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.scale(DPR, DPR);
    CW = size; CH = size; OX = size / 2; OY = size / 2;
    GRID = Math.max(24, Math.min(64, Math.floor(size / 18)));
    draw();
}
window.addEventListener('resize', () => { ctx.setTransform(1, 0, 0, 1, 0, 0); resizeCanvas(); });

function evXY(e) {
    const r = canvas.getBoundingClientRect();
    return [(e.clientX - r.left) * (CW / r.width), (e.clientY - r.top) * (CH / r.height)];
}
function toC(gx, gy) { return [OX + gx * GRID, OY - gy * GRID]; }
function snap(cx, cy) { return [Math.round((cx - OX) / GRID), Math.round((OY - cy) / GRID)]; }

function draw() {
    ctx.clearRect(0, 0, CW, CH);
    ctx.fillStyle = '#13141A'; ctx.fillRect(0, 0, CW, CH);
    
    // School Watermark 'E' (glowing, barely visible white at 1.8% opacity)
    ctx.save();
    ctx.font = `600 ${Math.min(CW, CH) * 0.72}px DM Sans,sans-serif`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.018)';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('E', CW / 2, CH / 2);
    ctx.restore();
    const rX = Math.ceil(OX / GRID) + 1, rY = Math.ceil(OY / GRID) + 1;
    
    // Grid lines: LED red, thin and bright
    ctx.strokeStyle = 'rgba(255, 26, 77, .50)'; ctx.lineWidth = 0.75;
    for (let i = -rX; i <= rX; i++) { const x = OX + i * GRID; if (x < 0 || x > CW) continue; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, CH); ctx.stroke(); }
    for (let j = -rY; j <= rY; j++) { const y = OY - j * GRID; if (y < 0 || y > CH) continue; ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(CW, y); ctx.stroke(); }
    
    // Main axes: LED red, thicker and highly vibrant
    ctx.save(); ctx.strokeStyle = 'rgba(255, 26, 77, .90)'; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(8, OY); ctx.lineTo(CW - 14, OY); ctx.stroke();
    ctx.fillStyle = 'rgba(255, 26, 77, .90)';
    ctx.beginPath(); ctx.moveTo(CW - 2, OY); ctx.lineTo(CW - 12, OY - 5); ctx.lineTo(CW - 12, OY + 5); ctx.closePath(); ctx.fill();
    ctx.beginPath(); ctx.moveTo(OX, CH - 8); ctx.lineTo(OX, 14); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(OX, 2); ctx.lineTo(OX - 5, 12); ctx.lineTo(OX + 5, 12); ctx.closePath(); ctx.fill();
    ctx.restore();
    
    const tsz = Math.max(9, GRID * .27);
    ctx.font = `500 ${tsz}px DM Mono,monospace`;
    ctx.fillStyle = 'rgba(255, 255, 255, .90)'; // Bright white numbers for crisp contrast
    ctx.textAlign = 'center'; ctx.textBaseline = 'top';
    for (let i = -rX + 1; i <= rX - 1; i++) {
        if (i === 0) continue; const x = OX + i * GRID; if (x < 18 || x > CW - 18) continue;
        ctx.save(); ctx.strokeStyle = 'rgba(255, 26, 77, .65)'; ctx.lineWidth = 1.25;
        ctx.beginPath(); ctx.moveTo(x, OY - 4); ctx.lineTo(x, OY + 4); ctx.stroke(); ctx.restore();
        ctx.fillText(i, x, OY + 6);
    }
    ctx.textAlign = 'right'; ctx.textBaseline = 'middle';
    for (let j = -rY + 1; j <= rY - 1; j++) {
        if (j === 0) continue; const y = OY - j * GRID; if (y < 18 || y > CH - 18) continue;
        ctx.save(); ctx.strokeStyle = 'rgba(255, 26, 77, .65)'; ctx.lineWidth = 1.25;
        ctx.beginPath(); ctx.moveTo(OX - 4, y); ctx.lineTo(OX + 4, y); ctx.stroke(); ctx.restore();
        ctx.fillText(j, OX - 7, y);
    }
    ctx.save(); ctx.fillStyle = 'rgba(255, 255, 255, .95)'; ctx.font = '500 12px DM Sans,sans-serif'; // Bright white labels
    ctx.textAlign = 'left'; ctx.textBaseline = 'bottom'; ctx.fillText('x', CW - 12, OY - 5);
    ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillText('y', OX - 6, 5); ctx.restore();
    if (submitted) drawGuide();
    const q = curChallenge();
    if (q && q.mode === 'line' && placed.length >= 2 && !submitted) {
        drawLine(placed[0], placed[1], 'rgba(255, 26, 77, .60)', 2, [5, 4]);
    }
    placed.forEach(p => drawPt(p[0], p[1]));
    if (hoverSnap && !submitted && !pendingPt) drawRing(hoverSnap[0], hoverSnap[1]);
    if (pendingPt) drawPending(pendingPt[0], pendingPt[1]);
}

function drawRing(gx, gy) {
    const [cx, cy] = toC(gx, gy);
    ctx.save(); ctx.beginPath(); ctx.arc(cx, cy, 11, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(255, 26, 77, .6)'; ctx.lineWidth = 1.5; ctx.setLineDash([3, 2]); ctx.stroke();
    ctx.setLineDash([]); ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 26, 77, .7)'; ctx.fill(); ctx.restore();
}
function drawPending(gx, gy) {
    const [cx, cy] = toC(gx, gy); ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 26, 77, .18)'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fillStyle = 'rgba(255, 26, 77, .5)'; ctx.fill();
    ctx.strokeStyle = '#FF1A4D'; ctx.lineWidth = 2; ctx.stroke(); ctx.restore();
}
function drawPt(gx, gy) {
    const [cx, cy] = toC(gx, gy); ctx.save();
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20);
    g.addColorStop(0, 'rgba(255, 26, 77, .35)'); g.addColorStop(1, 'rgba(255, 26, 77, 0)');
    ctx.beginPath(); ctx.arc(cx, cy, 20, 0, Math.PI * 2); ctx.fillStyle = g; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, 11, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(255, 26, 77, .6)'; ctx.lineWidth = 1.5; ctx.stroke();
    ctx.beginPath(); ctx.arc(cx, cy, 7, 0, Math.PI * 2); ctx.fillStyle = '#FF1A4D'; ctx.fill();
    ctx.strokeStyle = '#13141A'; ctx.lineWidth = 2; ctx.stroke();
    const lbl = `(${gx},${gy})`; ctx.font = '500 11px DM Mono,monospace';
    const tw = ctx.measureText(lbl).width;
    const lx = cx + 14, ly = cy - 9, lw = tw + 10, lh = 18;
    rrPath(lx, ly - lh / 2, lw, lh, 5);
    ctx.fillStyle = '#1C1D26'; ctx.fill(); ctx.strokeStyle = 'rgba(255, 26, 77, .6)'; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.fillText(lbl, lx + 5, ly);
    ctx.restore();
}
function drawLine(p1, p2, col, w, dash) {
    if (p1[0] === p2[0]) return;
    const m = (p2[1] - p1[1]) / (p2[0] - p1[0]), b = p1[1] - m * p1[0], xr = OX / GRID + 2;
    const [cx1, cy1] = toC(-xr, m * -xr + b), [cx2, cy2] = toC(xr, m * xr + b);
    ctx.save(); ctx.strokeStyle = col || 'rgba(255, 26, 77, .6)'; ctx.lineWidth = w || 2; ctx.setLineDash(dash || []);
    ctx.beginPath(); ctx.moveTo(cx1, cy1); ctx.lineTo(cx2, cy2); ctx.stroke(); ctx.restore();
}
function drawGuide() {
    const q = curChallenge(); if (!q) return;
    if ((q.mode === 'points' || q.mode === 'quadrant') && lastSubmitDetails.length) {
        lastSubmitDetails.forEach(d => {
            const [gx, gy] = d.target;
            if (isNaN(gx)) return; const [cx, cy] = toC(gx, gy);
            ctx.save(); ctx.strokeStyle = '#3DD68C'; ctx.lineWidth = 2; ctx.setLineDash([5, 4]);
            ctx.beginPath(); ctx.arc(cx, cy, 17, 0, Math.PI * 2); ctx.stroke(); ctx.restore();
        });
    }
    if (q.mode === 'line' && lastLineGuide) {
        const { m, b } = lastLineGuide;
        const xr = OX / GRID + 2;
        const [cx1, cy1] = toC(-xr, m * -xr + b), [cx2, cy2] = toC(xr, m * xr + b);
        ctx.save(); ctx.strokeStyle = '#3DD68C'; ctx.lineWidth = 2; ctx.setLineDash([6, 5]);
        ctx.beginPath(); ctx.moveTo(cx1, cy1); ctx.lineTo(cx2, cy2); ctx.stroke(); ctx.restore();
    }
}
function rrPath(x, y, w, h, r) {
    ctx.beginPath(); ctx.moveTo(x + r, y); ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
}

// ── CANVAS EVENTS ─────────────────────────────────────────────────────────────
let keyboardCursor = [0, 0];

canvas.addEventListener('keydown', e => {
    if (submitted) return;
    let handled = false;
    
    if (pendingPt) {
        if (e.key === ' ' || e.key === 'Enter') {
            placed.push(pendingPt);
            hideConf();
            renderPts();
            draw();
            handled = true;
        } else if (e.key === 'Escape') {
            hideConf();
            handled = true;
        }
        if (handled) {
            e.preventDefault();
        }
        return;
    }

    let [kx, ky] = keyboardCursor;
    if (e.key === 'ArrowUp') { ky = Math.min(10, ky + 1); handled = true; }
    else if (e.key === 'ArrowDown') { ky = Math.max(-10, ky - 1); handled = true; }
    else if (e.key === 'ArrowLeft') { kx = Math.max(-10, kx - 1); handled = true; }
    else if (e.key === 'ArrowRight') { kx = Math.min(10, kx + 1); handled = true; }
    else if (e.key === ' ' || e.key === 'Enter') {
        const idx = placed.findIndex(p => p[0] === kx && p[1] === ky);
        if (idx >= 0) {
            placed.splice(idx, 1);
            renderPts();
            draw();
        } else if (placed.length < 6) {
            pendingPt = [kx, ky];
            hoverSnap = null;
            draw();
            const [cx, cy] = toC(kx, ky);
            showConf(kx, ky, cx, cy);
        }
        handled = true;
    }

    if (handled) {
        keyboardCursor = [kx, ky];
        hoverSnap = [kx, ky];
        document.getElementById('coordBox').textContent = `(${kx}, ${ky})`;
        draw();
        e.preventDefault();
    }
});

canvas.addEventListener('mousemove', e => {
    if (submitted || pendingPt) return;
    const [cx, cy] = evXY(e); const s = snap(cx, cy);
    hoverSnap = s;
    keyboardCursor = s;
    document.getElementById('coordBox').textContent = `(${s[0]}, ${s[1]})`; draw();
});
canvas.addEventListener('mouseleave', () => {
    hoverSnap = null; document.getElementById('coordBox').textContent = '( — , — )'; if (!pendingPt) draw();
});
canvas.addEventListener('click', e => {
    if (submitted) return; if (pendingPt) { hideConf(); return; }
    const [cx, cy] = evXY(e); const [gx, gy] = snap(cx, cy);
    const idx = placed.findIndex(p => p[0] === gx && p[1] === gy);
    if (idx >= 0) { placed.splice(idx, 1); renderPts(); draw(); return; }
    if (placed.length >= 6) return;
    pendingPt = [gx, gy]; hoverSnap = null; draw(); showConf(gx, gy, cx, cy);
});
canvas.addEventListener('touchend', e => {
    if (submitted || pendingPt) return; e.preventDefault();
    const t = e.changedTouches[0]; const [cx, cy] = evXY(t); const [gx, gy] = snap(cx, cy);
    const idx = placed.findIndex(p => p[0] === gx && p[1] === gy);
    if (idx >= 0) { placed.splice(idx, 1); renderPts(); draw(); return; }
    if (placed.length >= 6) return;
    pendingPt = [gx, gy]; draw(); showConf(gx, gy, cx, cy);
}, { passive: false });

function showConf(gx, gy, cx, cy) {
    const ov = document.getElementById('confOv');
    document.getElementById('confCoord').textContent = `(${gx}, ${gy})`;
    ov.classList.add('on');
    // confOv is inside cvWrap (position:relative). cx/cy are canvas-local CSS pixels.
    // Clamp so the popup (192×~80px) always stays fully inside the canvas.
    const OW = 196, OH = 84;
    let L = cx + 16;
    let T = cy - OH - 8;
    if (L + OW > CW) L = cx - OW - 8;
    if (L < 4) L = 4;
    if (T < 4) T = cy + 16;
    if (T + OH > CH) T = CH - OH - 4;
    ov.style.left = L + 'px'; ov.style.top = T + 'px';
}
function hideConf() { document.getElementById('confOv').classList.remove('on'); pendingPt = null; draw(); }

// ── POINTS LIST ────────────────────────────────────────────────────────────────
function renderPts(details) {
    const list = document.getElementById('ptList');
    document.getElementById('ptCount').textContent = placed.length + (placed.length !== 1 ? ' pts' : ' pt');
    if (!placed.length) { list.innerHTML = '<div class="pt-empty">Click the graph to place a point</div>'; renderZoom(null); return; }
    list.innerHTML = '';
    placed.forEach(([gx, gy], i) => {
        const d = details?.[i];
        const div = document.createElement('div');
        div.className = 'pt-item' + (d?.hit ? ' ok' : d && !d.hit ? ' no' : '');
        div.innerHTML = `<span class="pt-coord">(${gx}, ${gy})</span>
      <div class="pt-r">${d ? `<span style="font-size:13px">${d.hit ? '✓' : '✗'}</span>` : ''}
      ${!submitted ? `<button class="pt-del" data-index="${i}">×</button>` : ''}</div>`;
        list.appendChild(div);
    });
    list.querySelectorAll('.pt-del').forEach(btn => {
        btn.addEventListener('click', () => delPt(parseInt(btn.dataset.index)));
    });
    renderZoom(details);
}
function delPt(i) { if (submitted) return; placed.splice(i, 1); renderPts(); draw(); }

// ── DETAIL PANEL: ZOOM VIEW ────────────────────────────────────────────────
function getQuadrant(x, y) {
    if (x > 0 && y > 0) return 'Quadrant I';
    if (x < 0 && y > 0) return 'Quadrant II';
    if (x < 0 && y < 0) return 'Quadrant III';
    if (x > 0 && y < 0) return 'Quadrant IV';
    if (x === 0 && y === 0) return 'Origin';
    if (x === 0) return 'Y-axis';
    return 'X-axis';
}
function renderZoom(details) {
    const dpEmpty   = document.getElementById('dpEmpty');
    const dpList    = document.getElementById('dpZoomList');
    const dpAxis    = document.getElementById('dpAxisInfo');
    const dpBadge   = document.getElementById('dpBadge');
    const dpQuad    = document.getElementById('dpQuad');
    const dpDist    = document.getElementById('dpDist');
    if (!dpEmpty) return;
    if (!placed.length) {
        dpEmpty.style.display = 'block';
        dpList.innerHTML = '';
        dpAxis.style.display = 'none';
        dpBadge.textContent = '';
        return;
    }
    dpEmpty.style.display = 'none';
    dpBadge.textContent = placed.length + (placed.length !== 1 ? ' pts' : ' pt');
    dpList.innerHTML = '';
    placed.forEach(([gx, gy], i) => {
        const d = details?.[i];
        const card = document.createElement('div');
        const cls = d ? (d.hit ? ' ok' : ' no') : '';
        card.className = 'dp-zoom-card' + cls;
        const dist = Math.sqrt(gx * gx + gy * gy).toFixed(2);
        const quad = getQuadrant(gx, gy);
        const sign = x => x >= 0 ? `+${x}` : `${x}`;
        card.innerHTML = `
          <div class="dp-zoom-coord">(${gx}, ${gy})</div>
          <div class="dp-zoom-meta">
            <span class="dp-zoom-tag">${quad}</span>
            <span class="dp-zoom-tag">x ${sign(gx)}</span>
            <span class="dp-zoom-tag">y ${sign(gy)}</span>
            ${d ? `<span class="dp-zoom-tag" style="color:${d.hit ? 'var(--grn)' : 'var(--red)'}">${d.hit ? '✓ Correct' : '✗ Wrong'}</span>` : ''}
          </div>`;
        dpList.appendChild(card);
    });
    // Show axis info for last placed point
    const [lx, ly] = placed[placed.length - 1];
    dpAxis.style.display = 'flex';
    dpQuad.textContent = getQuadrant(lx, ly);
    dpDist.textContent = Math.sqrt(lx * lx + ly * ly).toFixed(2) + ' units';
}

// ── CHALLENGE ──────────────────────────────────────────────────────────────────
function curChallenge() { return appMode === 'test' ? testChallenges[currentQ] : challenges[currentQ]; }

function loadChallenge() {
    const q = curChallenge(); if (!q) return;
    document.getElementById('chNum').textContent = currentQ + 1;
    document.getElementById('chText').textContent = q.text;
    document.getElementById('chCat').textContent = q.category;
    document.getElementById('catTag').textContent = q.category;
    const dots = document.getElementById('diffDots');
    dots.innerHTML = [1, 2, 3, 4, 5].map(n => `<div class="dd${n <= q.difficulty ? ' lit' : ''}"></div>`).join('');
    const ha = document.getElementById('hintArea');
    ha.innerHTML = appMode === 'practice'
        ? `<div class="ch-hint">${q.hint || ''}</div>`
        : `<div class="test-no-hint">Hints are not shown during a test.</div>`;
    const total = appMode === 'test' ? testChallenges.length : challenges.length;
    document.getElementById('progBar').innerHTML = Array.from({ length: total }, (_, i) =>
        `<div class="prog-seg${i < currentQ ? ' done' : i === currentQ ? ' active' : ''}"></div>`).join('');
    if (appMode === 'test') {
        document.getElementById('testProgressCard').style.display = '';
        document.getElementById('testProgressDots').innerHTML = testChallenges.map((_, i) =>
            `<div class="tq-dot${testAnswers[_.id] ? ' answered' : i === currentQ ? ' current' : ''}"></div>`).join('');
        document.getElementById('testProgLabel').textContent =
            `${Object.keys(testAnswers).length} / ${testChallenges.length}`;
    } else {
        document.getElementById('testProgressCard').style.display = 'none';
    }
    document.getElementById('expEmpty').style.display = 'block';
    document.getElementById('expBody').style.display = 'none';
    document.getElementById('expTitle').textContent = 'Step-by-step solution';
    // Reset detail panel to zoom view for new question
    document.getElementById('dpSolution').style.display = 'none';
    document.getElementById('dpZoom').style.display = 'flex';
    renderPts(); // resets sidebar point list + calls renderZoom(null)
    resizeCanvas(); // ensures canvas is correctly sized, calls draw()
}

// ── SUBMIT ─────────────────────────────────────────────────────────────────────
async function doSubmit() {
    if (submitted) return;
    const q = curChallenge(); if (!q) return;
    
    // Fix: Dynamically compute the required point count based on challenge details
    let needPts = 2;
    if (q.mode === 'points' && Array.isArray(q.answer)) {
        needPts = q.answer.length;
    } else if (q.requiredPoints) {
        needPts = q.requiredPoints;
    }

    if (placed.length < needPts) {
        showRes('err', '✗', 'Not enough points', `Place ${needPts} point${needPts !== 1 ? 's' : ''} on the grid first.`);
        // Also flash the detail panel badge so it's visible even if sidebar is scrolled
        const badge = document.getElementById('dpBadge');
        if (badge) { badge.textContent = `Need ${needPts} pts`; badge.style.background = 'var(--red)'; setTimeout(() => { badge.style.background = ''; renderZoom(null); }, 2000); }
        return;
    }
    let result;
    try {
        if (appMode === 'practice') {
            const r = await fetch(`${API}/api/challenges/${q.id}/submit`, {
                method: 'POST', credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ points: placed, classroomId: (me && currentClassroom?._id) || null })
            });
            result = await r.json();
            if (result.error) throw new Error(result.error);
        } else {
            if (me && testSession) {
                // Signed-in with server session: save answer to server
                const r = await fetch(`${API}/api/test/${testSession._id}/answer`, {
                    method: 'POST', credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ challengeId: q.id, points: placed })
                });
                result = await r.json();
                if (result.error) throw new Error(result.error);
                testAnswers[q.id] = { score: result.result.score, correct: result.result.correct, points: placed };
                if (result.testComplete) { await finalizeTest(); return; }
                result = result.result;
            } else {
                // Guest / no session: validate via practice endpoint, store locally
                const r = await fetch(`${API}/api/challenges/${q.id}/submit`, {
                    method: 'POST', credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ points: placed, classroomId: null })
                });
                result = await r.json();
                if (result.error) throw new Error(result.error);
                testAnswers[q.id] = { score: result.score, correct: result.correct, points: placed };
            }
        }
    } catch (e) {
        showRes('err', '✗', 'Connection Error', e.message || 'Could not verify answer.'); return;
    }
    submitted = true;
    let title = 'Incorrect', sym = '✗', style = 'err';
    if (result.correct) { title = 'Correct!'; sym = '✓'; style = 'ok'; correctCt++; }
    else if (result.score > 0) { title = 'Partially Correct'; sym = '⚠'; style = 'part'; }
    score += result.score;
    document.getElementById('scoreVal').textContent = score;
    lastSubmitDetails = result.details || [];
    lastSubmitMode = q.mode;
    lastLineGuide = result.lineGuide || null;
    renderPts(lastSubmitDetails); draw();
    showSolutionModal(result);
}

const CORRECT_PRAISES = [
    "Spot on! You mapped the mathematical relationships perfectly!",
    "Excellent! You've masterfully placed the coordinates exactly where they belong!",
    "Amazing! That is mathematically precise coordinate alignment!",
    "Fantastic! You navigated the planes like an absolute expert!",
    "Magnificent work! You've successfully conquered this algebraic challenge!"
];

const INCORRECT_SUPPORT = [
    "Not quite, but don't worry! Let's check the signs—did a negative value shift your point left or down?",
    "Keep going! Review the horizontal x-axis and vertical y-axis distances once more. Graphing takes practice!",
    "Close effort! Double check if the slope's rise-over-run matches your coordinate steps.",
    "Almost there! Make sure you started at the origin (0, 0) before stepping to your target point.",
    "Not quite correct, but this is a learning step! Take a peek at the coordinates and try adjusting them."
];

function getStudentFeedback(isCorrect, score) {
    if (isCorrect) {
        return CORRECT_PRAISES[Math.floor(Math.random() * CORRECT_PRAISES.length)];
    } else if (score > 0) {
        return "Nice effort! You've earned partial credit, but a few coordinates need a tiny adjustment.";
    } else {
        return INCORRECT_SUPPORT[Math.floor(Math.random() * INCORRECT_SUPPORT.length)];
    }
}

function showSolutionModal(res) {
    // Populate inline detail panel — no floating modal
    const icon  = document.getElementById('dpSolIcon');
    const title = document.getElementById('dpSolTitle');
    const sub   = document.getElementById('dpSolSub');
    const next  = document.getElementById('dpSolNext');

    icon.className = 'dp-sol-icon';
    if (res.correct) {
        title.textContent = 'Correct!';
        sub.textContent   = getStudentFeedback(true, res.score) + ` (+${res.score} pts)`;
        icon.textContent  = '\u2713';
        icon.classList.add('ok');
    } else if (res.score > 0) {
        title.textContent = 'Partially Correct';
        sub.textContent   = getStudentFeedback(false, res.score) + ` (${res.score}% · +${res.score} pts)`;
        icon.textContent  = '\u26a0';
        icon.classList.add('part');
    } else {
        title.textContent = 'Incorrect';
        sub.textContent   = getStudentFeedback(false, 0) + ' (No points awarded)';
        icon.textContent  = '\u2717';
        icon.classList.add('err');
    }

    const exp = res.explanation;
    if (exp) {
        const formula = document.getElementById('dpSolFormula');
        if (exp.formula) { formula.textContent = exp.formula; formula.style.display = 'block'; }
        else { formula.style.display = 'none'; }

        const stepsEl = document.getElementById('dpSolSteps');
        stepsEl.innerHTML = '';
        if (exp.steps && exp.steps.length) {
            exp.steps.forEach((s, idx) => {
                const row = document.createElement('div');
                row.className = 'dp-sol-step';
                row.style.animationDelay = (idx * 0.07) + 's';
                row.innerHTML = `<div class="dp-sol-step-num">${idx + 1}</div>
                  <div><div class="dp-sol-step-lbl">${s.label}</div><div class="dp-sol-step-det">${s.detail}</div></div>`;
                stepsEl.appendChild(row);
            });
        }
        const insight = document.getElementById('dpSolInsight');
        if (exp.keyInsight) {
            document.getElementById('dpSolInsightText').innerHTML = `<strong>Key Insight:</strong> ${exp.keyInsight}`;
            insight.style.display = 'flex';
        } else { insight.style.display = 'none'; }
    }

    const total = appMode === 'test' ? testChallenges.length : challenges.length;
    if (currentQ >= total - 1) {
        next.textContent = appMode === 'test' ? 'Finish Test' : 'Show Summary';
        next.classList.add('last');
    } else {
        next.textContent = 'Next Question \u2192';
        next.classList.remove('last');
    }

    // Switch detail panel to solution view
    document.getElementById('dpZoom').style.display     = 'none';
    document.getElementById('dpSolution').style.display = 'flex';
    document.getElementById('detailPanel').scrollTop    = 0;
}

function dismissSolutionModal() {
    // Return to zoom view
    document.getElementById('dpSolution').style.display = 'none';
    document.getElementById('dpZoom').style.display     = 'flex';

    const total = appMode === 'test' ? testChallenges.length : challenges.length;
    if (currentQ >= total - 1) {
        if (appMode === 'practice') showDone();
        else if (appMode === 'test') finalizeTest();
    } else {
        currentQ++; submitted = false; placed = []; lastSubmitDetails = []; lastLineGuide = null;
        document.getElementById('resArea').innerHTML = ''; loadChallenge();
    }
}

function showRes(style, sym, title, msg) {
    const area = document.getElementById('resArea');
    area.innerHTML = `<div class="res-wrap"><div class="res-banner ${style}">
    <div class="res-ico">${sym}</div>
    <div class="res-body">
      <div class="res-title">${title}</div>
      <div class="res-msg">${msg}</div>
    </div>
  </div></div>`;
}

function showDone() {
    document.getElementById('doneScreen').classList.add('on');
    document.getElementById('doneScore').textContent = score;
    const total = challenges.length;
    document.getElementById('doneAcc').textContent = Math.round((correctCt / total) * 100) + '%';
    document.getElementById('doneCorrect').textContent = `${correctCt} / ${total}`;
}
function restartPractice() {
    score = 0; correctCt = 0; currentQ = 0; submitted = false; placed = []; lastSubmitDetails = []; lastLineGuide = null;
    document.getElementById('scoreVal').textContent = '0';
    document.getElementById('resArea').innerHTML = '';
    document.getElementById('doneScreen').classList.remove('on');
    loadChallenge();
}

// ── TEST SESSION ──────────────────────────────────────────────────────────────
async function finalizeTest() {
    if (testSession?._id) {
        try {
            await fetch(`${API}/api/test/${testSession._id}/finalize`, { method: 'POST', credentials: 'include' });
        } catch (_) { }
    }
    // testResults is position:absolute over studentView — no need to hide appBody
    const tr = document.getElementById('testResults');
    tr.classList.add('on');
    const total = testChallenges.length;
    const testScore = Object.values(testAnswers).reduce((a, b) => a + b.score, 0);
    const avgScore = Math.round(testScore / total);
    let grade = 'F', gCol = 'var(--red)';
    if (avgScore >= 90) { grade = 'A'; gCol = 'var(--grn)'; }
    else if (avgScore >= 80) { grade = 'B'; gCol = 'var(--blu)'; }
    else if (avgScore >= 70) { grade = 'C'; gCol = 'var(--amb)'; }
    else if (avgScore >= 60) { grade = 'D'; gCol = 'var(--amb)'; }
    tr.innerHTML = `<div class="tr-header">
    <div class="tr-grade-circle" style="border-color:${gCol}"><span class="tr-grade" style="color:${gCol}">${grade}</span><span class="tr-grade-label">GRADE</span></div>
    <div class="tr-meta">
      <div class="tr-title">Test Complete!</div>
      <div class="tr-sub">Your answers have been saved and sent to your instructor.</div>
      <div class="tr-stats">
        <div class="tr-stat">Average: <strong>${avgScore}%</strong></div>
        <div class="tr-stat">Questions: <strong>${total}</strong></div>
        <div class="tr-stat">Points: <strong>${testScore}</strong></div>
      </div>
    </div>
  </div>
  <div class="tr-list">${testChallenges.map((q, i) => {
        const ans = testAnswers[q.id];
        const status = ans?.score === 100 ? 'ok' : ans?.score > 0 ? 'part' : 'no';
        const label = ans?.score === 100 ? 'Correct' : ans?.score > 0 ? 'Partial' : 'Incorrect';
        return `<div class="tr-item">
      <div class="tri-header" data-index="${i}">
        <div class="tri-score-badge ${status}">${ans?.score || 0} pts · ${label}</div>
        <div class="tri-q">Question ${i + 1}: ${q.text}</div>
        <div class="tri-cat">${q.category}</div>
      </div>
      <div class="tri-body" id="trb-${i}">
        <p style="margin-bottom:8px;color:var(--tx2)">Your points: ${ans ? JSON.stringify(ans.points) : 'None'}</p>
        <div class="exp-formula" style="border-left-color:var(--acc2);margin-bottom:8px;">${q.text}</div>
      </div>
    </div>`;
    }).join('')}</div>
  <button class="btn btn-acc" style="max-width:220px;margin:20px auto 0;" id="exitTestBtn">Return to Practice</button>`;

    // Add safe event listeners to the dynamic test summary elements
    tr.querySelectorAll('.tri-header').forEach(hdr => {
        hdr.addEventListener('click', () => toggleTr(hdr.dataset.index));
    });
    const exitBtn = document.getElementById('exitTestBtn');
    if (exitBtn) exitBtn.addEventListener('click', exitTest);
}

function toggleTr(i) {
    document.getElementById(`trb-${i}`).classList.toggle('on');
}
function exitTest() {
    testSession = null; testChallenges = []; testAnswers = {}; appMode = 'practice';
    document.getElementById('testResults').classList.remove('on');
    document.getElementById('btnPractice').classList.add('on');
    document.getElementById('btnTest').classList.remove('on');
    document.getElementById('modeToggle').style.display = '';
    restartPractice();
}

// ── PROFILE MODAL SETTINGS ────────────────────────────────────────────────────
function openProfileModal() {
    const modal = document.getElementById('profileModal');
    modal.classList.add('on');
    document.getElementById('profName').value = me ? me.displayName : 'Guest';
    profileRole = me ? me.role : 'student';
    profPickRole(profileRole);
    document.getElementById('profName').focus();
    trapFocus(modal);
}

function closeProfileModal() {
    document.getElementById('profileModal').classList.remove('on');
    document.getElementById('userChip').focus();
}

function profPickRole(role) {
    profileRole = role;
    document.getElementById('profRoleStudent').className = 'role-btn' + (role === 'student' ? ' on' : '');
    document.getElementById('profRoleInstructor').className = 'role-btn' + (role === 'instructor' ? ' on' : '');
}

async function saveProfileSettings() {
    const name = document.getElementById('profName').value.trim() || 'Guest';
    try {
        const r = await fetch(`/api/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ displayName: name, role: profileRole })
        });
        const data = await r.json();
        // Fallback for static vs fullstack response wrappers
        me = data.user || data;
        
        // Apply profile updates
        document.getElementById('uName').textContent = me.displayName;
        document.getElementById('uAvatar').textContent = me.displayName[0].toUpperCase();
        
        if (me.role === 'instructor') {
            document.getElementById('dashToggleBtn').style.display = '';
            document.getElementById('modeToggle').style.display = 'none';
        } else {
            document.getElementById('dashToggleBtn').style.display = 'none';
            document.getElementById('modeToggle').style.display = '';
            loadMyClassroom();
        }
        
        closeProfileModal();
        loadChallenge();
    } catch (e) {
        alert('Could not update profile Settings. ' + e.message);
    }
}

let currentMobileTab = 'problem';
function setMobileTab(tab) {
    currentMobileTab = tab;
    const body = document.getElementById('appBody');
    if (!body) return;
    body.classList.remove('mob-show-problem', 'mob-show-graph', 'mob-show-solution');
    body.classList.add('mob-show-' + tab);
    
    const btns = {
        problem: document.getElementById('mnBtnProblem'),
        graph: document.getElementById('mnBtnGraph'),
        solution: document.getElementById('mnBtnSolution')
    };
    
    Object.keys(btns).forEach(k => {
        if (btns[k]) btns[k].classList.remove('on');
    });
    
    if (btns[tab]) btns[tab].classList.add('on');
    
    // Manage detail panel sub-views on mobile tabs
    const solPl = document.getElementById('dpSolPlaceholder');
    const solEl = document.getElementById('dpSolution');
    const zoomEl = document.getElementById('dpZoom');
    
    if (solPl && solEl && zoomEl) {
        if (tab === 'solution') {
            zoomEl.style.display = 'none';
            if (submitted) {
                solPl.style.display = 'none';
                solEl.style.display = 'flex';
            } else {
                solPl.style.display = 'block';
                solEl.style.display = 'none';
            }
        } else if (tab === 'graph') {
            solPl.style.display = 'none';
            if (submitted) {
                solEl.style.display = 'flex';
                zoomEl.style.display = 'none';
            } else {
                solEl.style.display = 'none';
                zoomEl.style.display = 'flex';
            }
            resizeCanvas();
        } else {
            solPl.style.display = 'none';
        }
    } else if (tab === 'graph') {
        resizeCanvas();
    }
}

// ── START ──────────────────────────────────────────────────────────────────────
async function startApp() {
    const r = await fetch('/api/challenges');
    if (r.ok) {
        challenges = await r.json();
    } else {
        document.getElementById('chText').textContent = 'Could not load challenges. Please refresh.';
        return;
    }
    
    document.getElementById('scrApp').classList.add('on');
    setMobileTab('problem');
    const name = me?.displayName || 'Guest';
    document.getElementById('uName').textContent = name;
    document.getElementById('uAvatar').textContent = name[0].toUpperCase();
    if (me?.role === 'instructor') {
        document.getElementById('dashToggleBtn').style.display = '';
        document.getElementById('modeToggle').style.display = 'none';
    } else if (me) {
        loadMyClassroom();
    }
    setTimeout(() => { resizeCanvas(); loadChallenge(); }, 50);
}

async function checkSession() {
    try {
        let r;
        try {
            r = await fetch('/api/auth/me');
        } catch (fetchErr) {
            // Network error (no backend running at this host/port), enable static mode!
            enableStaticMockMode();
            r = await fetch('/api/auth/me');
        }
        if (r && r.ok) {
            me = await r.json();
        } else {
            // Not ok (e.g. 404 or backend returned error), fallback to static mode if not already
            if (!isStaticFileMode) {
                enableStaticMockMode();
                const rRetry = await fetch('/api/auth/me');
                if (rRetry.ok) me = await rRetry.json();
            }
        }
    } catch (_) { }
    await startApp();
}

// ── MODE TOGGLE ────────────────────────────────────────────────────────────────
async function setMode(mode) {
    if (mode === appMode) return;
    if (mode === 'test') {
        if (confirm('Start a test? This will reset your current practice progress.')) {
            try {
                let testData = null;
                if (me) {
                    // Signed-in: use server test session
                    const r = await fetch(`${API}/api/test/start`, { method: 'POST', credentials: 'include' });
                    testData = await r.json();
                }
                // Guest or server fallback: build local test from practice challenges
                if (!testData || !testData.challenges) {
                    testData = { challenges, session: null };
                }
                appMode = 'test';
                testSession = testData.session || null;
                testChallenges = testData.challenges;
                testAnswers = {};
                const sess = testData.session;
                if (sess && sess.answers) {
                    Object.keys(sess.answers).forEach(chId => {
                        const ans = sess.answers[chId];
                        testAnswers[chId] = { score: ans.score, correct: ans.correct, points: ans.points };
                    });
                    const unansweredIdx = testData.challenges.findIndex(c => !testAnswers[c.id]);
                    currentQ = unansweredIdx !== -1 ? unansweredIdx : 0;
                } else {
                    currentQ = 0;
                }
                score = Object.values(testAnswers).reduce((sum, a) => sum + a.score, 0);
                correctCt = Object.values(testAnswers).filter(a => a.correct).length;
                submitted = false; placed = []; lastSubmitDetails = []; lastLineGuide = null;
                document.getElementById('scoreVal').textContent = score;
                document.getElementById('btnPractice').classList.remove('on');
                document.getElementById('btnTest').classList.add('on');
                document.getElementById('resArea').innerHTML = '';
                loadChallenge();
            } catch (err) {
                alert('Could not start test: ' + err.message);
            }
        }
    } else {
        if (confirm('Return to Practice? Test progress will be lost.')) {
            exitTest();
        }
    }
}

// ── DASHBOARD ──────────────────────────────────────────────────────────────────
function toggleDash() {
    const dash = document.getElementById('dashView');
    const isOpen = dash.classList.toggle('on');
    document.getElementById('dashToggleBtn').textContent = isOpen ? 'Exit Dashboard' : 'Dashboard';
    if (isOpen) loadDash();
}

async function loadDash() {
    const list = document.getElementById('roomList');
    list.innerHTML = '<div style="color:var(--tx3);padding:10px">Loading…</div>';
    
    try {
        const rooms = await (await fetch('/api/classrooms')).json();
        if (!rooms || !rooms.length) {
            list.innerHTML = '<div style="color:var(--tx3);padding:10px;font-size:12px">No classrooms created yet.</div>';
            document.getElementById('joinCodeDisplay').textContent = 'Select a classroom';
            return;
        }
        list.innerHTML = rooms.map(r => `
        <div class="room-item" id="room-${r._id}" data-id="${escapeHTML(r._id)}">
          <div>
            <div class="room-name">${escapeHTML(r.name)}</div>
            <div class="room-code">${escapeHTML(r.joinCode)}</div>
          </div>
          <div class="room-count">${r.students?.length || 0} students</div>
        </div>
      `).join('');

        list.querySelectorAll('.room-item').forEach(item => {
            item.addEventListener('click', () => selectRoom(item.dataset.id));
        });

        if (selectedRoom) selectRoom(selectedRoom);
    } catch (_) {
        list.innerHTML = '<div style="color:var(--tx3);padding:10px">Error loading classrooms.</div>';
    }
}

async function selectRoom(id) {
    selectedRoom = id;
    document.querySelectorAll('.room-item').forEach(el => el.classList.remove('on'));
    const item = document.getElementById('room-' + id);
    if (item) item.classList.add('on');

    try {
        const rooms = await (await fetch('/api/classrooms')).json();
        const room = rooms?.find(r => r._id === id);
        if (!room) return;

        document.getElementById('joinCodeDisplay').textContent = room.joinCode;

        const main = document.getElementById('dashMain');
        main.innerHTML = '<div style="color:var(--tx3);padding:20px">Loading roster…</div>';

        const r = await (await fetch(`/api/classrooms/${id}/roster`)).json();
        if (!r || !r.students || !r.students.length) {
            main.innerHTML = `
          <div class="roster-header">
            <div class="roster-title">${escapeHTML(room.name)}</div>
            <button class="jc-copy" data-code="${escapeHTML(room.joinCode)}">Copy Join Code</button>
          </div>
          <div class="empty-roster">
            <div class="big">👤</div>
            <p>No students in this classroom yet.</p>
            <p style="font-size:12px;color:var(--tx3);margin-top:6px;">Share the Join Code above to invite students.</p>
          </div>`;
            const copyBtn = main.querySelector('.jc-copy');
            if (copyBtn) copyBtn.addEventListener('click', () => copyJoinCode(copyBtn.dataset.code));
            return;
        }

        main.innerHTML = `
        <div class="roster-header">
          <div class="roster-title">${escapeHTML(room.name)}</div>
          <button class="jc-copy" data-code="${escapeHTML(room.joinCode)}">Copy Join Code</button>
        </div>
        <div class="card">
          <table class="roster-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Practice Score</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${r.students.map(s => `
                <tr>
                  <td><span class="stu-name">${escapeHTML(s.displayName)}</span></td>
                  <td>
                    <div class="score-bar-wrap">
                      <div class="score-bar"><div class="score-bar-fill${s.score >= 500 ? ' hi' : ''}" style="width:${Math.min(100, (s.score / 900) * 100)}%"></div></div>
                      <span class="score-num">${s.score}</span>
                    </div>
                  </td>
                  <td><button class="view-stu-btn" data-room-id="${escapeHTML(id)}" data-student-id="${escapeHTML(s._id || s.userId || s.displayName)}">View Details</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <div id="stuDetailsArea"></div>`;

        // Safe DOM bindings (avoiding XSS & inline onclick quotes problems)
        const copyBtn = main.querySelector('.jc-copy');
        if (copyBtn) copyBtn.addEventListener('click', () => copyJoinCode(copyBtn.dataset.code));

        main.querySelectorAll('.view-stu-btn').forEach(btn => {
            btn.addEventListener('click', () => viewStudent(btn.dataset.roomId, btn.dataset.studentId));
        });
    } catch (_) { }
}

function copyJoinCode(code) {
    navigator.clipboard.writeText(code);
    const btn = document.querySelector('.jc-copy');
    if (btn) {
        const oldText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = 'var(--grn)';
        setTimeout(() => {
            btn.textContent = oldText;
            btn.style.background = '';
        }, 2000);
    }
}

async function viewStudent(roomId, studentId) {
    const area = document.getElementById('stuDetailsArea');
    area.innerHTML = '<div style="color:var(--tx3);padding:10px">Loading student history…</div>';
    try {
        const r = await fetch(`/api/classrooms/${roomId}/students/${studentId}`);
        const data = await r.json();
        if (!data) { area.innerHTML = ''; return; }

        const name = data.student.displayName;
        const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) || '?';

        area.innerHTML = `
        <div class="stu-detail" style="margin-top:16px;">
          <div class="stu-detail-hdr">
            <div class="big-avatar">${initials}</div>
            <div>
              <div style="font-size:16px;font-weight:600;">${escapeHTML(name)}</div>
            </div>
            <button class="pt-del" id="closeStuDetailsBtn" style="margin-left:auto;font-size:20px;">×</button>
          </div>
          <div class="card-label" style="margin-bottom:10px;">Submission History</div>
          <div class="attempt-list">
            ${!data.attempts || !data.attempts.length
                ? '<div style="color:var(--tx3);padding:10px;text-align:center;font-size:12px;">No submission attempts found for this student.</div>'
                : data.attempts.map(a => `
                <div class="att-item">
                  <span class="att-ch">${escapeHTML(a.challengeTitle)}</span>
                  <span class="att-time">${new Date(a.timestamp).toLocaleString()}</span>
                  <span class="att-score ${a.score === 100 ? 'ok' : a.score > 0 ? 'part' : 'no'}">${a.score} pts</span>
                </div>
              `).join('')}
          </div>
        </div>`;

        const closeBtn = document.getElementById('closeStuDetailsBtn');
        if (closeBtn) closeBtn.addEventListener('click', () => { area.innerHTML = ''; });
    } catch (_) {
        area.innerHTML = '<div style="color:var(--tx3);padding:10px">Error loading details.</div>';
    }
}

// ── MY CLASSROOM (STUDENT) ─────────────────────────────────────────────────────
async function loadMyClassroom() {
    const card = document.getElementById('classroomCard');
    const info = document.getElementById('classroomInfo');
    
    try {
        const list = await (await fetch('/api/my-classrooms')).json();
        if (!list || !list.length) {
            card.style.display = 'none';
            return;
        }
        currentClassroom = list[0];
        card.style.display = 'block';
        info.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div style="font-weight:500;font-size:14px;color:var(--tx);">${escapeHTML(currentClassroom.name)}</div>
            <div style="font-size:11px;color:var(--tx3);margin-top:2px;">Instructor: ${escapeHTML(currentClassroom.instructor)}</div>
          </div>
          <span class="room-code" style="padding:4px 8px;background:var(--s2);border-radius:5px;font-size:12px;">Joined</span>
        </div>`;
    } catch (_) { }
}

// ── EVENT LISTENERS ────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', doSubmit);
    document.getElementById('clearBtn').addEventListener('click', () => {
        if (submitted) return; placed = []; document.getElementById('resArea').innerHTML = ''; renderPts(); draw();
    });
    document.getElementById('restartBtn').addEventListener('click', restartPractice);
    document.getElementById('btnPractice').addEventListener('click', () => setMode('practice'));
    document.getElementById('btnTest').addEventListener('click', () => setMode('test'));
    document.getElementById('dashToggleBtn').addEventListener('click', toggleDash);
    document.getElementById('userChip').addEventListener('click', openProfileModal);

    // Profile settings modal
    document.getElementById('profRoleStudent').addEventListener('click', () => profPickRole('student'));
    document.getElementById('profRoleInstructor').addEventListener('click', () => profPickRole('instructor'));
    document.getElementById('cancelProfileBtn').addEventListener('click', closeProfileModal);
    document.getElementById('saveProfileBtn').addEventListener('click', saveProfileSettings);

    // New classroom modal
    document.getElementById('newRoomBtn').addEventListener('click', () => {
        const m = document.getElementById('newRoomModal');
        m.classList.add('on');
        document.getElementById('newRoomName').focus();
        trapFocus(m);
    });
    document.getElementById('cancelRoomBtn').addEventListener('click', () => document.getElementById('newRoomModal').classList.remove('on'));
    document.getElementById('confirmRoomBtn').addEventListener('click', async () => {
        const name = document.getElementById('newRoomName').value.trim();
        if (!name) return;
        const desc = document.getElementById('newRoomDesc').value.trim();
        try {
            await fetch('/api/classrooms', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, description: desc })
            });
            document.getElementById('newRoomModal').classList.remove('on');
            document.getElementById('newRoomName').value = '';
            document.getElementById('newRoomDesc').value = '';
            loadDash();
        } catch (_) { }
    });

    // Join classroom modal
    document.getElementById('cancelJoinBtn').addEventListener('click', () => document.getElementById('joinModal').classList.remove('on'));
    document.getElementById('confirmJoinBtn').addEventListener('click', async () => {
        const code = document.getElementById('joinCodeInput').value.trim();
        if (!code) return;
        try {
            const r = await (await fetch('/api/classrooms/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ joinCode: code })
            })).json();
            if (r?.error) {
                document.getElementById('joinErr').textContent = r.error;
                document.getElementById('joinErr').style.display = 'block'; return;
            }
            document.getElementById('joinModal').classList.remove('on');
            currentClassroom = r?.classroom || null;
            loadMyClassroom();
        } catch (_) { }
    });

    // Point confirm overlay
    document.getElementById('confNo').addEventListener('click', hideConf);
    document.getElementById('confYes').addEventListener('click', () => {
        if (!pendingPt) return; placed.push(pendingPt); hideConf(); renderPts(); draw();
    });

    // Inline solution panel — next/dismiss button
    document.getElementById('dpSolNext').addEventListener('click', dismissSolutionModal);

    // Escape Key: dismiss any open modal-bg
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            const activeModal = document.querySelector('.modal-bg.on');
            if (activeModal) {
                if (activeModal.id === 'profileModal') closeProfileModal();
                else activeModal.classList.remove('on');
            }
        }
    });

    // Mobile navigation tab listeners
    const mnBtnProblem = document.getElementById('mnBtnProblem');
    const mnBtnGraph = document.getElementById('mnBtnGraph');
    const mnBtnSolution = document.getElementById('mnBtnSolution');
    if (mnBtnProblem) mnBtnProblem.addEventListener('click', () => setMobileTab('problem'));
    if (mnBtnGraph) mnBtnGraph.addEventListener('click', () => setMobileTab('graph'));
    if (mnBtnSolution) mnBtnSolution.addEventListener('click', () => setMobileTab('solution'));

    checkSession();
});