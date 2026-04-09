<div align="center">

# 📚 JEE Study Tracker

**A full-featured, offline-capable Progressive Web App for serious JEE preparation.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://your-link.netlify.app)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)](https://your-link.netlify.app)
[![Vanilla JS](https://img.shields.io/badge/Built%20With-Vanilla%20JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-34d399?style=for-the-badge)](.)

> Built from scratch with zero frameworks or libraries. Pure HTML, CSS, and JavaScript.

</div>

---

## 🎯 Why I Built This

As a JEE aspirant, I found existing study trackers either too simple (just checkboxes) or too complex (requiring accounts, subscriptions, or internet). I wanted something that:

- **Runs fully offline** — no internet needed after first load
- **Tracks real readiness**, not just "I looked at this once"
- **Lives in the browser** — no install, no sign-up, no data leaks
- **Feels premium** — because your study tool should motivate you, not bore you

So I built it myself.

---

## ✨ Features

### 📊 Core Tracker
- **3-Level Confidence System** — `❌ Not Started` → `🟡 Studied` → `✅ Confident`  
  More honest than a checkbox. Tracks *actual* readiness.
- **Collapsible Subject Cards** — collapse subjects you're done reviewing to reduce noise
- **Drag & Drop Reordering** — reorder subjects and topics by priority
- **Topic Weightage Tags** — `🔥 High Yield`, `⚡ Medium`, `Low` per topic
- **Revision Reminders** — topics marked Confident 7+ days ago are flagged for review
- **Search & Filter** — instantly find topics by name, status, or weightage

### 📅 Analytics Dashboard
- **12-Week Study Heatmap** — GitHub-style contribution graph from timer data
- **Weekly Hours Chart** — bar chart of study hours per day (last 7 days)
- **Per-Subject Completion Donuts** — visual breakdown of confidence per subject
- **9 Unlockable Badges** — gamification milestones (First Topic, Week Streak, All Confident, etc.)
- **Live Stats Cards** — total hours, average daily, streak, confident topics

### ⏱ Smart Timers
- **Journey Mode ✈️** — pick two airports worldwide; study for the exact duration of that flight. Milestone alerts at 25%, 50%, 75%.
- **Focus / Pomodoro Timer** — configurable focus + break cycles with visual ring and sound notification
- **Topic Linking** — link any timer session to a topic; auto-prompt to mark complete when done
- **Session Logging** — every session feeds into the analytics heatmap and daily goals

### 📅 Daily Goals
- Set a daily target for topics to study and hours to clock
- Live progress bars that reset at midnight
- Connected to timer and tracker data

### 🗓 Exam Countdown Bar
- Built-in countdown for **JEE Main** and **JEE Advanced**
- Add your own custom exams (BITSAT, MHT-CET, internals, etc.)
- Urgent highlight when ≤ 30 days away

### 📝 Notes & File Attachments
- Expandable notes panel per topic — formulas, key concepts, gotchas
- Attach **PDFs, images, Word docs** directly to any topic (stored in IndexedDB — no size limit like localStorage)
- Files persist offline and survive page refreshes

### 👥 Friends Progress
- Generate a **shareable encoded code** from your profile
- Friends paste your code → see your subject-level completion stats
- No backend, no accounts — works peer-to-peer via copy-paste

### 💾 Data & Portability
- Full **JSON export** — includes all topics, notes, timer logs, files (base64)
- Full **JSON import** — restore everything on any device
- Auto-save to `localStorage` on every change
- **PWA install** — add to home screen on iOS/Android/desktop

---

## 🛠 Tech Stack

| Layer | Tech | Why |
|---|---|---|
| Structure | HTML5 | Semantic, accessible |
| Styling | Vanilla CSS | Full control, glassmorphism, CSS variables for theming |
| Logic | Vanilla JavaScript (ES6+) | Zero dependencies — fast, no build step |
| Storage | `localStorage` + `IndexedDB` | Structured data + binary file blobs |
| Offline | Service Worker | Full PWA offline support |
| Charts | SVG (hand-drawn) | No chart library needed |
| Fonts | Google Fonts | Syne · DM Sans · JetBrains Mono |

**No frameworks. No npm. No build pipeline.**  
Open `index.html` and it just works.

---

## 📂 Project Structure

```
jee-tracker/
│
├── index.html        # App shell — all HTML structure and tab layout
├── app.js            # ~1300 lines of application logic:
│                     #   State management, CRUD, IndexedDB,
│                     #   SVG analytics, timers, gamification,
│                     #   drag-drop, export/import, PWA init
├── style.css         # ~430 lines — complete design system:
│                     #   CSS variables, dark/light tokens,
│                     #   glassmorphism, animations, responsive
├── sw.js             # Service worker — offline caching strategy
├── manifest.json     # PWA manifest — icons, theme, display mode
├── netlify.toml      # Netlify deploy config (headers, publish dir)
└── README.md
```

---

## 🚀 Running Locally

No dependencies to install.

```bash
# Option 1 — Just open the file
# Double-click index.html in File Explorer

# Option 2 — Local server (required for PWA / Service Worker)
npx serve .
# → http://localhost:3000
```

---

## 🌐 Deployment

Deployed on **Netlify** via drag-and-drop.  
The `netlify.toml` configures:
- PWA-safe `Cache-Control: no-cache` for `sw.js`
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`)

For CI/CD: connect the GitHub repo to Netlify → every `git push` auto-deploys.

---

## 📸 Screenshots

> *(Add screenshots here after deploy — Tracker tab, Analytics tab, Timers tab)*

---

## 🧠 What I Learned

- **IndexedDB API** — async binary storage for files in the browser
- **Service Workers** — offline-first caching with cache-busting strategies
- **SVG path math** — rendering heatmaps, donut charts, and timer rings from scratch
- **CSS custom properties** — building a full dark/light design token system
- **Drag & Drop API** — native HTML5 drag-drop with data transfer
- **PWA Manifest + install prompts** — making a web app installable across platforms
- **Data migration patterns** — backward-compatible schema upgrades in localStorage

---

## 📄 License

MIT — free to use, fork, and modify.

---

<div align="center">

Built by **Akshat** · JEE 2026 Aspirant 🎯

*"The best study tool is the one you actually use."*

</div>
