// Landing Page View Generator
import { state } from '../state.js';

export function renderLanding(container) {
  // If already logged in, show dashboard link in header
  const authBtnText = state.user ? "Go to Dashboard" : "Register / Login";
  const authHash = state.user ? "#dashboard" : "#auth";
  
  container.innerHTML = `
    <!-- Landing Navbar -->
    <header class="landing-navbar">
      <div class="container flex align-center justify-between">
        <div class="logo">
          <div class="logo-icon">🧠</div>
          <span>NeuroLink AI</span>
        </div>
        <nav>
          <a href="${authHash}" class="btn btn-secondary" style="padding: 8px 16px; font-size: 0.9rem;">${authBtnText}</a>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-glow"></div>
      <div class="container">
        <h1>Your Learning. <span>Understood by AI.</span></h1>
        <p class="hero-sub">
          NeuroLink AI builds a personalized Learning Twin that understands what you know, discovers what you're missing, and creates the best path for what you should learn next.
        </p>
        <div class="hero-cta">
          <a href="#auth" class="btn btn-primary">Start Learning</a>
          <a href="#how-it-works" class="btn btn-secondary">See How It Works</a>
        </div>
      </div>
    </section>

    <!-- Visual Flowchart Area -->
    <section class="container" style="margin-bottom: 80px;">
      <div class="flowchart-container">
        <h3 class="flowchart-title">The Adaptive Learning Loop</h3>
        <div class="flowchart">
          <div class="flow-step">
            <div class="flow-step-icon">📋</div>
            <h4>Your Knowledge</h4>
            <p>Initial Assessment</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">⚙️</div>
            <h4>AI Analysis</h4>
            <p>BKT Math Engine</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">🔍</div>
            <h4>Knowledge Gaps</h4>
            <p>Root Cause Traced</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">🎯</div>
            <h4>Personalized Path</h4>
            <p>Adaptive Progression</p>
          </div>
          
          <div class="flow-step">
            <div class="flow-step-icon">💡</div>
            <h4>Socratic Tutor</h4>
            <p>Continuous Adapt</p>
          </div>
          
          <div class="flow-connector"></div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section id="how-it-works" class="landing-section" style="background: var(--bg-secondary); border-top: 1px solid var(--glass-border); border-bottom: 1px solid var(--glass-border);">
      <div class="container">
        <h2>How NeuroLink AI Works</h2>
        <div class="three-steps-grid">
          <div class="glass-card step-card">
            <div class="step-num">01</div>
            <h3>Assess</h3>
            <p>Take a 7-question adaptive baseline test. We track not just if your answer is correct, but your response time and self-reported confidence.</p>
          </div>
          <div class="glass-card step-card">
            <div class="step-num">02</div>
            <h3>Understand</h3>
            <p>Our Bayesian engine constructs your Learning Twin profile, locating specific gaps, prerequisite blocks, and high-confidence misconceptions.</p>
          </div>
          <div class="glass-card step-card">
            <div class="step-num">03</div>
            <h3>Adapt</h3>
            <p>Receive an auto-updating learning checklist. Learn complex concepts with your Socratic AI Tutor, run practice sessions, and level up.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section class="landing-section">
      <div class="container">
        <h2>Why NeuroLink AI?</h2>
        <div class="why-grid">
          <div class="glass-card why-card">
            <div class="why-card-icon">🎯</div>
            <h3>Personalized Learning</h3>
            <p>Skip what you already know. Focus only on the topics that unlock your next level of understanding.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">🧠</div>
            <h3>AI-Powered Gap Detection</h3>
            <p>Identifies why you are struggling by analyzing topic dependencies. It stops you from hitting walls.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">🔀</div>
            <h3>Adaptive Difficulty</h3>
            <p>Practice sets adjust from easy, medium, to hard in real-time based on your changing mastery probability.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">💬</div>
            <h3>Socratic AI Tutor</h3>
            <p>An AI coach that knows your Learning Twin, answers questions, gives hints, and explains code your way.</p>
          </div>
          
          <div class="glass-card why-card">
            <div class="why-card-icon">📈</div>
            <h3>Continuous Progress</h3>
            <p>Every single response updates your model. Your learning dashboard reflects real educational growth.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer style="padding: 40px 0; border-top: 1px solid var(--glass-border); text-align: center; color: var(--text-muted); font-size: 0.9rem;">
      <div class="container">
        <p>&copy; 2026 NeuroLink AI. Powered by educational data mining & LLMs.</p>
      </div>
    </footer>
  `;
  
  // Smooth scroll
  const scrollBtn = container.querySelector('a[href="#how-it-works"]');
  if (scrollBtn) {
    scrollBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
    });
  }
}
