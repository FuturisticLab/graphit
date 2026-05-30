// ─── CHALLENGE BANK ──────────────────────────────────────────────────────────
// Each challenge has:
//   id, category, difficulty, text, hint,
//   mode: 'points' | 'line' | 'quadrant' | 'inequality'
//   answer: array of [x,y] for points, or descriptor string for lines
//   lineFn / checkFn: validation function
//   explanation: { title, steps[], formula, keyInsight }

const challenges = [

  // ── PLOTTING POINTS ──────────────────────────────────────────────────────
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

  // ── INTERCEPTS ───────────────────────────────────────────────────────────
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

  // ── LINE GRAPHING ─────────────────────────────────────────────────────────
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
          label: 'Build a table of values',
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

  // ── VERTEX FORM ───────────────────────────────────────────────────────────
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
          detail: 'Vertex = (h, k) = (1, −3). This is the lowest point of the parabola (since the coefficient of x² is positive).',
        },
        {
          label: 'Verify by expanding',
          detail: 'At x = 1: y = (1−1)² − 3 = 0 − 3 = −3. So (1, −3) is on the curve ✓. At x = 0: y = 1 − 3 = −2 > −3 ✓ (vertex is the minimum).',
        },
      ],
      keyInsight: 'Watch the sign trap: in (x − h), h is positive even though there\'s a minus sign. (x − 1) has h = 1, not h = −1.',
    },
  },

  // ── SLOPE-INTERCEPT ───────────────────────────────────────────────────────
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

  // ── SYSTEMS OF EQUATIONS ─────────────────────────────────────────────────
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

  // ── QUADRANTS ─────────────────────────────────────────────────────────────
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

  // ── SOLVING EQUATIONS (ROOTS) ─────────────────────────────────────────────
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

  // ── ABSOLUTE VALUE ────────────────────────────────────────────────────────
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
          detail: 'At x = −2: y = |−2 + 2| − 1 = |0| − 1 = −1 ✓. At x = −1: y = |−1 + 2| − 1 = 1 − 1 = 0 > −1 ✓.',
        },
        {
          label: 'Direction of opening',
          detail: 'No negative sign outside |  |, so the V opens upward. The vertex is the minimum point.',
        },
      ],
      keyInsight: 'Just like vertex form for parabolas, the sign flips: |x + 2| has h = −2 because it matches |x − (−2)|.',
    },
  },
];

module.exports = challenges;
