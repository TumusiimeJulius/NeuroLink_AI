// Student Onboarding View with 20 Subjects Catalog Selector
import { state, initializeSubject } from '../state.js';
import { SUBJECTS } from '../data/subjects.js';
import { showNotification } from '../app.js';

export function renderOnboarding(container) {
  let currentStep = 1;
  
  // Temp variables holding selections
  let selectedSubjectId = state.learningTwin?.subjectId || "python";
  let selectedLevel = state.user?.educationLevel || "beginner";
  let selectedStyle = state.user?.learningStyle || "examples_first";
  let subjectSearchQuery = "";
  let activeSubjectFilter = "all"; // 'all', 'coding', 'stem', 'humanities'

  const updateView = () => {
    const progressWidth = currentStep === 1 ? 33.3 : currentStep === 2 ? 66.6 : 100;
    
    container.innerHTML = `
      <div class="container" style="max-width: 800px; padding: 40px 24px;">
        <div class="glass-card onboard-container animate-fade" style="max-width: 100%; padding: 36px;">
          <!-- Step Progress bar -->
          <div class="progress-bar-container" style="margin-bottom: 30px;">
            <div class="onboard-progress" style="width: ${progressWidth}%"></div>
          </div>

          <div id="onboard-step-content">
            ${renderStepContent()}
          </div>

          <div class="onboard-nav" style="margin-top: 30px; border-top: 1px solid var(--glass-border); padding-top: 20px;">
            <button id="prev-step-btn" class="btn btn-secondary" ${currentStep === 1 ? "disabled" : ""}>
              Back
            </button>
            <button id="next-step-btn" class="btn btn-primary">
              ${currentStep === 3 ? "Complete & Start Test" : "Continue"}
            </button>
          </div>
        </div>
      </div>
    `;

    // Wire up events
    const prevBtn = container.querySelector("#prev-step-btn");
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        currentStep--;
        updateView();
      }
    });

    const nextBtn = container.querySelector("#next-step-btn");
    nextBtn.addEventListener("click", handleNextStep);

    // Filter bindings in Step 1
    if (currentStep === 1) {
      const searchBox = container.querySelector("#subject-search-box");
      if (searchBox) {
        searchBox.addEventListener("input", (e) => {
          subjectSearchQuery = e.target.value;
          renderSubjectGrid();
        });
      }

      const filterButtons = container.querySelectorAll(".filter-btn");
      filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          filterButtons.forEach(b => b.classList.remove("btn-accent"));
          filterButtons.forEach(b => b.classList.add("btn-secondary"));
          btn.classList.remove("btn-secondary");
          btn.classList.add("btn-accent");
          
          activeSubjectFilter = btn.getAttribute("data-filter");
          renderSubjectGrid();
        });
      });

      renderSubjectGrid();
    } else {
      attachSelectorEvents();
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return `
        <div class="onboard-step">
          <h2>Choose Your Subject</h2>
          <p style="margin-bottom: 20px;">We support 90+ adaptive learning tracks. Search or filter to select your focus area.</p>
          
          <!-- Search & Filter Row -->
          <div style="display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap;">
            <input type="text" id="subject-search-box" class="input-control" placeholder="Search subjects (e.g. Computer Science)..." style="flex: 1; min-width: 200px; padding: 8px 14px; font-size: 0.9rem;" value="${subjectSearchQuery}">
            
            <div style="display: flex; gap: 6px; flex-wrap: wrap;">
              <button class="btn btn-accent filter-btn" data-filter="all" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">All</button>
              <button class="btn btn-secondary filter-btn" data-filter="coding" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Coding/Tech</button>
              <button class="btn btn-secondary filter-btn" data-filter="stem" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Science/Math</button>
              <button class="btn btn-secondary filter-btn" data-filter="humanities" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Humanities/Social</button>
              <button class="btn btn-secondary filter-btn" data-filter="business" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Business/Finance</button>
              <button class="btn btn-secondary filter-btn" data-filter="health" style="padding: 8px 12px; font-size: 0.8rem; border-radius: 20px;">Health/Medicine</button>
            </div>
          </div>

          <!-- Subject Cards Grid container -->
          <div id="subject-grid-container" class="card-selector-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); max-height: 380px; overflow-y: auto; padding-right: 6px; gap: 12px; margin-bottom: 20px;">
            <!-- Filled dynamically -->
          </div>
        </div>
      `;
    } else if (currentStep === 2) {
      return `
        <div class="onboard-step">
          <h2>Your Current Level</h2>
          <p>This assists the Bayesian model in selecting initial difficulty parameters for your questions.</p>
          
          <div class="flex flex-col gap-4" style="display: flex; flex-direction: column; gap: 14px;">
            <div class="selector-card flex align-center gap-4 text-left ${selectedLevel === 'beginner' ? 'selected' : ''}" data-level="beginner" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">🌱</span>
              <div>
                <strong style="display: block;">Beginner</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I have never studied this subject or have very little experience.</span>
              </div>
            </div>

            <div class="selector-card flex align-center gap-4 text-left ${selectedLevel === 'intermediate' ? 'selected' : ''}" data-level="intermediate" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">⚡</span>
              <div>
                <strong style="display: block;">Intermediate</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I know basic concepts and logic, but want to bridge gaps.</span>
              </div>
            </div>

            <div class="selector-card flex align-center gap-4 text-left ${selectedLevel === 'advanced' ? 'selected' : ''}" data-level="advanced" style="text-align: left; display: flex; align-items: center; justify-content: flex-start; gap: 16px;">
              <span class="selector-card-icon" style="margin-bottom: 0;">🚀</span>
              <div>
                <strong style="display: block;">Advanced</strong>
                <span style="font-size: 0.8rem; color: var(--text-secondary);">I have strong fundamentals and want to master relationships and details.</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      return `
        <div class="onboard-step">
          <h2>Preferred Study Style</h2>
          <p>Choose how you prefer the Socratic AI Tutor to present technical explanations.</p>
          
          <div class="card-selector-grid" style="grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 16px; margin-bottom: 20px;">
            <div class="selector-card ${selectedStyle === 'examples_first' ? 'selected' : ''}" data-style="examples_first">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">💻</span>
              <span style="display: block; font-size: 0.9rem;">Examples First</span>
            </div>
            <div class="selector-card ${selectedStyle === 'short_explanations' ? 'selected' : ''}" data-style="short_explanations">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">📝</span>
              <span style="display: block; font-size: 0.9rem;">Short Bullets</span>
            </div>
            <div class="selector-card ${selectedStyle === 'detailed_explanations' ? 'selected' : ''}" data-style="detailed_explanations">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">📚</span>
              <span style="display: block; font-size: 0.9rem;">Deep Theory</span>
            </div>
            <div class="selector-card ${selectedStyle === 'practice_first' ? 'selected' : ''}" data-style="practice_first">
              <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 8px;">⏱️</span>
              <span style="display: block; font-size: 0.9rem;">Practice First</span>
            </div>
          </div>
        </div>
      `;
    }
  };

  const renderSubjectGrid = () => {
    const grid = container.querySelector("#subject-grid-container");
    if (!grid) return;

    let list = Object.entries(SUBJECTS);

    // Apply search filter
    if (subjectSearchQuery.trim() !== "") {
      const q = subjectSearchQuery.toLowerCase();
      list = list.filter(([id, config]) => config.name.toLowerCase().includes(q));
    }

    // Apply category filter
    if (activeSubjectFilter !== "all") {
      list = list.filter(([id, config]) => config.category === activeSubjectFilter);
    }

    // Sort list alphabetically
    list.sort((a, b) => a[1].name.localeCompare(b[1].name));

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No subjects found matching "${subjectSearchQuery}"</div>`;
      return;
    }

    grid.innerHTML = list.map(([id, config]) => `
      <div class="selector-card ${selectedSubjectId === id ? 'selected' : ''}" data-subject-id="${id}" style="padding: 16px; min-height: 100px; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 8px;">
        <span class="selector-card-icon" style="font-size: 1.8rem; margin-bottom: 0;">${config.icon}</span>
        <span style="font-size: 0.85rem; font-weight: 600; text-align: center; word-break: break-word;">${config.name}</span>
      </div>
    `).join("");

    // Rebind clicks
    const cards = grid.querySelectorAll(".selector-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        grid.querySelectorAll(".selector-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
        selectedSubjectId = card.getAttribute("data-subject-id");
      });
    });
  };

  const attachSelectorEvents = () => {
    const cards = container.querySelectorAll(".selector-card");
    cards.forEach(card => {
      card.addEventListener("click", () => {
        if (currentStep === 2) {
          selectedLevel = card.getAttribute("data-level");
        } else if (currentStep === 3) {
          selectedStyle = card.getAttribute("data-style");
        }
        
        card.parentNode.querySelectorAll(".selector-card").forEach(c => c.classList.remove("selected"));
        card.classList.add("selected");
      });
    });
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      currentStep = 2;
      updateView();
    } else if (currentStep === 2) {
      currentStep = 3;
      updateView();
    } else {
      // Save changes
      if (state.user) {
        state.user.educationLevel = selectedLevel;
        state.user.learningStyle = selectedStyle;
        
        // Initialize dynamic subject
        initializeSubject(selectedSubjectId);
        
        window.location.hash = "#assessment";
      } else {
        showNotification("Error", "User session lost. Please log in again.");
        window.location.hash = "#auth";
      }
    }
  };

  updateView();
}
