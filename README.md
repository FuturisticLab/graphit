# 📊 Graphit — Coordinate Laboratory & Classroom Dashboard

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-blue.svg?style=flat-square&logo=node.js)](https://nodejs.org)
[![Express Framework](https://img.shields.io/badge/express-v5.x-lightgrey.svg?style=flat-square&logo=express)](https://expressjs.com)
[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg?style=flat-square)](https://opensource.org/licenses/ISC)
[![WCAG Accessibility](https://img.shields.io/badge/WCAG-AA_Compliant-green.svg?style=flat-square&logo=accessibility)](docs/Accessibility.html)
[![Security Rating](https://img.shields.io/badge/Security-Helmet_Hardened-red.svg?style=flat-square&logo=securityscorecard)](docs/Insights.html)

**Graphit** is a highly accessible, production-grade algebra graphing and coordinate simulation platform. Built for modern classrooms, it features dual-mode execution (Express full-stack backend vs. serverless browser memory fallback), real-time progress tracking, secure authentication, and step-by-step mathematical explanations.

---

## 🌟 Key Features

*   **Dual-Mode Execution Engine:** Runs as a containerized Node.js Express server with persistent databases, or falls back dynamically to a zero-configuration static page using an in-browser `fetch` interceptor routed to `localStorage`.
*   **Accessibility First (WCAG AA):** Built from the ground up for inclusivity, featuring high-contrast themes, glowing white labels against dark grid grids, keyboard focus modal trapping, and aria-live coordinate readouts for screen readers.
*   **Encouraging Pedagogical Loops:** Programmed with dynamic math praise and supportive guidance to build spatial coordinate intuition and help students learn from mathematical errors.
*   **Teacher & Classroom Suite:** In full-stack mode, instructors can review rosters, audit real-time student coordinate attempts, and track class analytics in a clean HUD dashboard.
*   **Platform Telemetry Hub:** Includes a custom insights telemetry panel showing code evolution, interaction volumes, and security threat neutralization records.

---

## 🏛️ Project Evolution & MVRCS Pilot

Graphit was initiated in **September 2025** to address accessibility issues in mathematics graphing tools. Following a **nine-month development and engineering cycle**, it was finalized in **May 2026** and released for review to the Math & IB Chairman at **MVRCS** (Mountain View Regional Collegiate School) for curricular feedback, pedagogical alignment, and inclusive user-experience auditing.

---

## 📂 Repository Directory Structure

```text
graphit/
├── server.js              # Express API Server & static file coordinator
├── db.js                  # Embedded NeDB datastore initializers (auto-saves to data/)
├── auth.js                # JWT session signer & HTTP-only cookie verifier
├── validator.js           # Math answer validation and coordinate matching engine
├── challenges.js          # Unified challenge bank schema and step-by-step explanations
├── testEngine.js          # Test mode orchestration (session resume & progress markers)
├── crypto.js              # Roster display name encryption helpers
├── audit.js               # User actions ledger & logging helper
├── Dockerfile             # Production-optimized multi-stage Docker build
├── docker-compose.yml     # Complete container setup (App + MongoDB backup option)
├── nginx.conf             # Rate-limited proxy deployment configuration
├── .gitignore             # Git exclusion directives (node_modules, .env, data/, logs/)
├── package.json           # Node configuration and script definitions
│
├── docs/                  # SPA Frontend Files (Static Hub assets)
│   ├── index.html         # Lab workspace HTML interface
│   ├── app.js             # Canvas renderer, state toggles, and interceptor fallbacks
│   ├── app.css            # Cyber-Red LED & Maroon theme sheets (WCAG AAA contrast)
│   ├── Mission.html       # Systems architecture overview & project timeline
│   ├── Insights.html      # HUD dashboard telemetry, SVGs, and heatmaps
│   ├── Changelog.html     # Version transitions ledger (v2.3.0 Active)
│   └── Accessibility.html # Keyboard navigation instructions & WCAG compliance report
│
├── test/                  # Test coverage folder
│   ├── auth.test.js       # JWT login/register rate limit coverage tests
│   └── challenges.test.js # Validator and step explanation tests
└── data/                  # Auto-created directory for NeDB local database files
```

---

## 🔒 Security Hardening Matrix

| Security Threat | Vector Detail | Neutralization Strategy | Status |
| :--- | :--- | :--- | :--- |
| **Cross-Site Scripting (XSS)** | Injection into student rosters or profile names | Complete display name escaping via `express-validator` and programmatically bound DOM listeners. | **Neutralized** |
| **Session Hijacking** | Accessing authentication state via Client Scripting | JWTs issued with `httpOnly`, `SameSite=Strict`, and `Secure` attributes in HTTP cookies. | **Neutralized** |
| **Brute Force / DDoS** | Spamming auth endpoints or APIs | Multi-tier rate limiting (10 req/15min for auth; 120 req/min for general APIs) via `express-rate-limit`. | **Neutralized** |
| **Information Leakage** | Default Express/Nginx response headers | Helmet.js integration injecting 14 security headers (`X-Frame-Options`, `CSP`, `HSTS`, `X-Content-Type-Options`). | **Neutralized** |

---

## 🚀 Quick Start (Local Development)

### Prerequisites
*   Node.js (v18.0.0 or later)
*   npm (v9.0.0 or later)

### Installation
1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FuturisticLab/graphit.git
    cd graphit
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Setup environment variables:**
    ```bash
    cp .env.example .env
    # Open .env and add a secure random JWT_SECRET & ENCRYPTION_KEY
    ```
4.  **Run the local development server:**
    ```bash
    npm start
    ```
    *The app will load at `http://localhost:3000`.*

---

## 🐋 Production Deployment

### Docker Compose (Recommended)
This scales the application with a Node runtime container proxying database operations.
```bash
# 1. Copy env file
cp .env.example .env

# 2. Build and run containers
docker-compose up -d --build

# 3. Verify health status
docker-compose ps
```

### Manual Node Server Deployment
1.  Set the production flag: `NODE_ENV=production` inside your `.env` file.
2.  Configure a strong 64-character JWT secret.
3.  Deploy the server behind a secure proxy (Nginx or Caddy) using the custom parameters mapped in `nginx.conf`.
4.  To scale to enterprise databases, replace NeDB initialization arrays in `db.js` with standard MongoDB/Mongoose models.

---

## 🤖 Dynamic Math Engine Roadmap (AI API)
To support classrooms without a server setup, Graphit uses local pre-compiled mathematical coordinate answers in `challenges.js`. The production deployment roadmap includes:
*   **Google GenKit & Gemini Pro Integration:** Real-time generation of custom coordinate challenges, adapting dynamically to the student's historic performance.
*   **Intelligent Mistake Classifier:** Natural language processing of incorrectly placed vertices to explain why a point was misplotted based on algebraic principles.

---

## 🧪 Testing Coverage

```bash
# Execute Jest unit tests with mock database states
npm test

# Run tests in hot reload mode for debugging
npm run test:watch

# Generate full code coverage report
npm run test:ci
```

---

## 📄 License
Licensed under the [ISC License](LICENSE). Developed under the Google Developer Program.