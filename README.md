# NeuroLink AI — Adaptive Learning Twin Platform

NeuroLink AI is an advanced, client-side adaptive learning twin platform that maps a student's cognitive state in real-time. By combining educational data science (**Bayesian Knowledge Tracing**) with generative AI (**Google Gemini API**), it detects knowledge gaps, catches misconceptions, and delivers personalized Socratic tutoring tailored to the student's learning style.

🌐**Live Demo:** [Deploying on Netlify](https://app.netlify.com/)

---

## 📖 Table of Contents
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [How the AI/ML Works](#-how-the-aiml-works)
  - [1. Bayesian Knowledge Tracing (BKT) Engine](#1-bayesian-knowledge-tracing-bkt-engine)
  - [2. Metacognitive Calibration](#2-metacognitive-calibration)
  - [3. AI Socratic Tutor Integration](#3-ai-socratic-tutor-integration)
- [Project Structure & Source Code Guide](#-project-structure--source-code-guide)
- [Setup & Installation Instructions](#-setup--installation-instructions)
- [How to Run the Project](#-how-to-run-the-project)
- [Relevant Documentation](#-relevant-documentation)

---

##  Features

* **Real-time Cognitive Modeling ("Learning Twin")**: Visualizes the student's conceptual understanding categorizing topics into *Strong*, *Developing*, and *Weak* areas.
* **Metacognitive BKT Engine**: Calibrates topic mastery scores dynamically based on answer correctness combined with user confidence levels.
* **Socratic AI Tutor**: Integrates client-side with Google Gemini 2.5 Flash to tutor students using guided, Socratic dialogue (no direct answers, only step-by-step guidance).
* **Learning Style Adaptation**: Automatically reshapes the AI's explanation pattern to match the user's preferred style (`Examples First`, `Short Explanations`, `Detailed Explanations`, or `Practice First`).
* **Resilient Offline Mode**: Features a procedural rule-based local tutor to allow studying and quizzing without an internet connection or API key.

---

##  Technologies Used

* **Frontend**: Vanilla HTML5, Vanilla CSS3 (Custom Glassmorphism theme, responsiveness), and ES6 JavaScript Modules.
* **Build Tool & Dev Server**: Vite (v5.x) for fast local bundling and live-reloading.
* **AI Engine**: Google Gemini API (using the `gemini-2.5-flash` model).
* **Deployment & CI/CD**: Netlify (via automated GitHub push triggers).

---

## How the AI/ML Works

NeuroLink AI leverages two primary layers of artificial intelligence and cognitive science:

### 1. Bayesian Knowledge Tracing (BKT) Engine
Bayesian Knowledge Tracing is a classical machine learning algorithm used in educational data mining to model a student's knowledge state over time.

For each concept, the engine tracks the probability that the student has mastered it ($L_t$). The BKT model relies on four parameters:
* $L_0$ (**Prior Probability**): The probability that the student knows the concept before attempting any questions (default: `0.15`).
* $T$ (**Transition Rate / Learning Rate**): The probability that a student will learn the concept after an attempt (default: `0.22`).
* $G$ (**Guess Rate**): The probability that the student will answer correctly even if they haven't mastered the concept (default: `0.20`).
* $S$ (**Slip Rate**): The probability that a student will make an error even though they have mastered the concept (default: `0.10`).

#### The Math:
When a student answers a question, we first compute the posterior probability ($P(L_t | \text{Response})$) that they know the concept based on their response:

* **If correct:**
  $$P(L_t | \text{Correct}) = \frac{L_{t-1} \cdot (1 - S)}{L_{t-1} \cdot (1 - S) + (1 - L_{t-1}) \cdot G}$$

* **If incorrect:**
  $$P(L_t | \text{Incorrect}) = \frac{L_{t-1} \cdot S}{L_{t-1} \cdot S + (1 - L_{t-1}) \cdot (1 - G)}$$

Then, we account for learning transition to find the updated mastery probability ($L_t$):
$$L_t = P(L_t | \text{Response}) + (1 - P(L_t | \text{Response})) \cdot T$$

---

### 2. Metacognitive Calibration
In real-world learning, self-assessment is highly indicative of understanding. We adjust the standard BKT calculations based on the student's reported confidence level:
* **Guess Correction (Correct + Low Confidence)**: If a student gets a question right but reports low confidence, we scale down the probability gain to prevent guessing from falsely indicating mastery.
* **Misconception Penalty (Incorrect + High Confidence)**: If a student is highly confident but gets the answer wrong, it indicates a cognitive misconception. The engine applies a multiplier penalty to drop their mastery score faster, prompting the Socratic Tutor to step in.

---

### 3. AI Socratic Tutor Integration
The AI Tutor uses the Gemini 2.5 Flash API directly from the client browser. 
Every time a student messages the AI, NeuroLink compiles the state of the student's **Learning Twin** (mastery percentages, identified gaps, learning styles, and recent mistakes) into a system prompt.

The tutor is instructed to act **Socratically**:
1. Never provide direct answers or code outputs immediately.
2. Ask leading questions that prompt active recall.
3. Structure responses to match the student's selected learning style (e.g. providing code snippets first if their style is `Examples First`).

---

## 📂 Project Structure & Source Code Guide

```bash
├── dist/                   # Production build outputs (excluded from Git)
├── node_modules/           # Dependencies (excluded from Git)
├── src/
│   ├── css/
│   │   └── styles.css      # Core Design System, Glassmorphic UI & Layouts
│   └── js/
│       ├── app.js          # App entrypoint and Hash Router controller
│       ├── state.js        # Global State Management (Pub/Sub design)
│       ├── data/
│       │   ├── questions.js# Assessment and practice questions database
│       │   └── subjects.js # Configs, prerequisites, and learning paths
│       ├── engine/
│       │   ├── ml-engine.js# BKT logic, gap detection, and analytics
│       │   └── tutor-engine.js # AI Socratic Tutor (Gemini Integration)
│       └── views/          # Dynamic View components
│           ├── landing.js  # Welcome / Hero section
│           ├── auth.js     # Demo registration and log-in
│           ├── onboarding.js# Setting goals, styles, and active subjects
│           ├── assessment.js# Adaptive diagnostic quiz layout
│           └── dashboard.js# Primary stats dashboard, chatbot, and path tracker
├── index.html              # Main HTML entrypoint
├── package.json            # Scripts & Dev dependencies
├── netlify.toml            # Automated build configurations for Netlify
└── .gitignore              # Files ignored by Git
```

---

## 🚀 Setup & Installation Instructions

To set up NeuroLink AI locally on your system, make sure you have [Node.js](https://nodejs.org/) installed, then follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TumusiimeJulius/NeuroLink_AI.git
   cd NeuroLink_AI
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

---

## 💻 How to Run the Project

### Running in Development Mode
To spin up a local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once started, open your browser and navigate to the address shown in the terminal (usually `http://localhost:5173/`).

### Building for Production
To build the application for deployment or production testing:
```bash
npm run build
```
This generates optimized HTML, CSS, and JS bundle files under the `dist/` directory.

### Previewing the Production Build
To spin up a local server to test the built production bundle:
```bash
npm run preview
```

---

## 📄 Relevant Documentation

* **Gemini Developer Docs**: Learn more about the [Google Gemini API](https://ai.google.dev/docs).
* **Bayesian Knowledge Tracing Literature**: To read up on BKT theory, refer to Corbett & Anderson's original paper: *[Knowledge Tracing: Modeling the Acquisition of Procedural Knowledge](https://link.springer.com/article/10.1007/BF01099821)* (1994).
* **Vite Documentation**: Refer to [Vite.dev](https://vite.dev/) for bundling configs.
