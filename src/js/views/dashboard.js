// Student Dashboard Page View (Multi-Subject Dynamic Graph + Universal Practice)
import { state, subscribe, logout, setApiKey, resetState, notify } from '../state.js';
import { processAnswerAndUpdateTwin, CONCEPT_LABELS, DEPENDENCIES, getActiveConceptOrder, getActiveSubjectName, rebuildLearningTwin } from '../engine/ml-engine.js';
import { tutorChatHistory, sendChatMessage, clearChatHistory } from '../engine/tutor-engine.js';
import { getSubjectConfig, getOfflinePracticeExercise } from '../data/subjects.js';
import { showNotification } from '../app.js';

export function renderDashboard(container) {
  // Subscribe dashboard updates to global state changes
  subscribe(() => {
    if (window.location.hash.startsWith("#dashboard")) {
      // Prevent destroying user inputs / feedback in active interactive tabs on background state updates
      if (state.activeTab !== "practice" && state.activeTab !== "tutor") {
        updateActiveTabContent();
      }
      updateSidebarUser();
    }
  });

  // Render main sidebar grid layout skeleton
  container.innerHTML = `
    <div class="dashboard-layout">
      <!-- Sidebar Navigation -->
      <aside class="sidebar">
        <div class="sidebar-top">
          <div class="logo sidebar-logo">
            <div class="logo-icon">🧠</div>
            <span>NeuroLink AI</span>
          </div>
          
          <ul class="sidebar-menu">
            <li class="menu-item ${state.activeTab === 'overview' ? 'active' : ''}" data-tab="overview">
              <button><span class="menu-item-icon">👤</span>Learning Twin</button>
            </li>
            <li class="menu-item ${state.activeTab === 'map' ? 'active' : ''}" data-tab="map">
              <button><span class="menu-item-icon">🗺️</span>Knowledge Map</button>
            </li>
            <li class="menu-item ${state.activeTab === 'tutor' ? 'active' : ''}" data-tab="tutor">
              <button><span class="menu-item-icon">💬</span>AI Tutor</button>
            </li>
            <li class="menu-item ${state.activeTab === 'practice' ? 'active' : ''}" data-tab="practice">
              <button><span class="menu-item-icon">💻</span>Practice Workspace</button>
            </li>
            <li class="menu-item ${state.activeTab === 'analytics' ? 'active' : ''}" data-tab="analytics">
              <button><span class="menu-item-icon">📈</span>Analytics & Progress</button>
            </li>
            <li class="menu-item ${state.activeTab === 'settings' ? 'active' : ''}" data-tab="settings">
              <button><span class="menu-item-icon">⚙️</span>Settings</button>
            </li>
          </ul>
        </div>

        <div class="sidebar-bottom" style="display: flex; flex-direction: column; gap: 14px;">
          <!-- User status chip -->
          <div id="sidebar-user-chip" class="sidebar-user"></div>
          <button id="logout-btn" class="btn btn-secondary" style="width: 100%; font-size: 0.85rem; padding: 10px;">
            Logout
          </button>
        </div>
      </aside>

      <!-- Main Workspace -->
      <main class="dashboard-content">
        <div id="active-tab-container" class="animate-fade"></div>
      </main>
    </div>
  `;

  // Bind logout
  container.querySelector("#logout-btn").addEventListener("click", () => {
    logout();
    window.location.hash = "#landing";
  });

  // Bind sidebar menu tabs
  const menuButtons = container.querySelectorAll(".sidebar-menu .menu-item");
  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      menuButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeTab = btn.getAttribute("data-tab");
      updateActiveTabContent();
    });
  });

  // Initial fill
  updateSidebarUser();
  updateActiveTabContent();

  function updateSidebarUser() {
    const chip = container.querySelector("#sidebar-user-chip");
    if (!chip || !state.user) return;
    const initial = state.user.name.charAt(0).toUpperCase();
    chip.innerHTML = `
      <div class="user-avatar">${initial}</div>
      <div class="user-info">
        <span class="user-name">${state.user.name}</span>
        <span class="user-role">Student Profile</span>
      </div>
    `;
  }

  function updateActiveTabContent() {
    const tabContainer = container.querySelector("#active-tab-container");
    if (!tabContainer) return;

    if (state.activeTab === "overview") {
      renderOverviewTab(tabContainer);
    } else if (state.activeTab === "map") {
      renderMapTab(tabContainer);
    } else if (state.activeTab === "tutor") {
      renderTutorTab(tabContainer);
    } else if (state.activeTab === "practice") {
      renderPracticeTab(tabContainer);
    } else if (state.activeTab === "analytics") {
      renderAnalyticsTab(tabContainer);
    } else if (state.activeTab === "settings") {
      renderSettingsTab(tabContainer);
    }
  }

  // --- 1. OVERVIEW TAB ---
  function renderOverviewTab(tabContainer) {
    const twin = state.learningTwin;
    const user = state.user;
    const config = getSubjectConfig(twin.subjectId);
    
    const strongTags = twin.strongTopics.map(t => `<span class="topic-tag topic-tag-strong">✓ ${config.conceptLabels[t] || t}</span>`).join("") || `<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>`;
    const devTags = twin.developingTopics.map(t => `<span class="topic-tag topic-tag-developing">~ ${config.conceptLabels[t] || t}</span>`).join("") || `<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>`;
    const weakTags = twin.weakTopics.map(t => `<span class="topic-tag topic-tag-weak">! ${config.conceptLabels[t] || t}</span>`).join("") || `<span style="font-size: 0.85rem; color: var(--text-muted);">None yet</span>`;

    // Perimeter calculation for BKT radial gauge (r=70)
    const offset = 440 - (440 * (twin.overallMastery / 100));

    let actionBtnMarkup = "";
    if (twin.recommendedNextStep) {
      const step = twin.recommendedNextStep;
      if (step.type === "learn" || step.type === "review") {
        actionBtnMarkup = `<button id="rec-action-btn" class="btn btn-primary" style="margin-top: 10px;">Start Tutoring</button>`;
      } else if (step.type === "practice") {
        actionBtnMarkup = `<button id="rec-action-btn" class="btn btn-accent" style="margin-top: 10px;">Practice Topic</button>`;
      } else if (step.type === "assessment") {
        actionBtnMarkup = `<a href="#assessment" class="btn btn-primary" style="margin-top: 10px;">Take Assessment</a>`;
      } else {
        actionBtnMarkup = `<button id="rec-action-btn" class="btn btn-accent" style="margin-top: 10px;">Advanced Practice</button>`;
      }
    }

    tabContainer.innerHTML = `
      <div class="dashboard-header">
        <h1>Welcome, ${user.name} 👋</h1>
        <p>Your Cognitive Learning Twin has been updated with your latest educational metrics.</p>
      </div>

      <!-- Dashboard Cards -->
      <div class="dashboard-grid">
        <!-- Learning Twin Info Panel -->
        <div class="glass-card learning-twin-card">
          <div class="twin-avatar-container">
            <svg class="twin-gauge">
              <defs>
                <linearGradient id="twin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="var(--color-primary)" />
                  <stop offset="100%" stop-color="var(--color-secondary)" />
                </linearGradient>
              </defs>
              <circle class="twin-gauge-bg" cx="80" cy="80" r="70"></circle>
              <circle class="twin-gauge-fill" cx="80" cy="80" r="70" style="stroke-dashoffset: ${offset};"></circle>
            </svg>
            <div class="twin-avatar-center">
              <span class="twin-percentage">${twin.overallMastery}%</span>
              <span class="twin-label">Mastery</span>
            </div>
          </div>

          <div class="twin-details">
            <h2 class="twin-name">${user.name}'s Learning Twin</h2>
            <p class="twin-status">Subject Track: <strong>${config.name}</strong></p>
            
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div>
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">STRONG TOPICS</span>
                <div class="twin-topics-summary">${strongTags}</div>
              </div>
              <div style="margin-top: 4px;">
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">DEVELOPING</span>
                <div class="twin-topics-summary">${devTags}</div>
              </div>
              <div style="margin-top: 4px;">
                <span style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 2px;">NEEDS ATTENTION</span>
                <div class="twin-topics-summary">${weakTags}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Next Action Card -->
        <div class="glass-card" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
              <span style="color: var(--color-secondary);">🎯</span> Recommended Next Step
            </h3>
            
            <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--glass-border); border-radius: var(--border-radius-sm); padding: 16px;">
              <span style="text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: var(--color-primary); display: block; margin-bottom: 4px;">
                ${twin.recommendedNextStep?.type || "Assessment"}
              </span>
              <strong style="font-size: 1.05rem; display: block; margin-bottom: 4px;">
                ${twin.recommendedNextStep?.text || "Take Assessment"}
              </strong>
              <span style="font-size: 0.8rem; color: var(--text-secondary); display: block;">
                ⏱️ Estimated duration: ${twin.recommendedNextStep?.duration || "10 mins"}
              </span>
            </div>
          </div>
          
          ${actionBtnMarkup}
        </div>
      </div>

      <!-- Stats Counters Grid -->
      <div class="stats-row">
        <div class="glass-card stat-card">
          <div class="stat-val">${twin.overallMastery}%</div>
          <div class="stat-label">Average Mastery</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val">${twin.strongTopics.length} / ${config.concepts.length}</div>
          <div class="stat-label">Concepts Mastered</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val" style="color: var(--color-warning);">${twin.gaps.length}</div>
          <div class="stat-label">Knowledge Gaps</div>
        </div>
        <div class="glass-card stat-card">
          <div class="stat-val" style="color: var(--color-secondary);">5 days</div>
          <div class="stat-label">Active Streak</div>
        </div>
      </div>

      <!-- AI Insights and Gaps -->
      <div class="dashboard-grid" style="grid-template-columns: 1fr 1fr;">
        <!-- AI Insights -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">💡 AI Twin Insights</h3>
          <ul style="list-style: none; display: flex; flex-direction: column; gap: 12px;">
            ${twin.insights.map(ins => `
              <li style="font-size: 0.9rem; line-height: 1.5; padding: 10px 14px; background: rgba(139, 92, 246, 0.05); border-left: 3px solid var(--color-primary); border-radius: 0 var(--border-radius-sm) var(--border-radius-sm) 0;">
                ${ins}
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Detected Gaps -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">⚠️ Root Cause Gap Analysis</h3>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${twin.gaps.length === 0 ? `
              <div style="text-align: center; padding: 20px; color: var(--text-muted); font-size: 0.9rem;">
                No conceptual blocks or misconceptions detected! You have solid foundations.
              </div>
            ` : twin.gaps.map(gap => `
              <div style="padding: 12px; background: rgba(239, 68, 68, 0.05); border: 1px solid rgba(239, 68, 68, 0.15); border-radius: var(--border-radius-sm); font-size: 0.85rem; line-height: 1.5; display: flex; gap: 10px;">
                <span style="font-size: 1.1rem; color: var(--color-error);">${gap.type === 'misconception' ? '💡' : '⚠️'}</span>
                <div>
                  <strong style="color: ${gap.type === 'misconception' ? 'var(--color-warning)' : '#f87171'}">${gap.type === 'misconception' ? 'MISCONCEPTION DETECTED:' : 'FOUNDATIONAL GAP:'}</strong>
                  <span style="color: var(--text-secondary); display: block; margin-top: 2px;">${gap.message}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;

    // Action listener
    const recActionBtn = tabContainer.querySelector("#rec-action-btn");
    if (recActionBtn) {
      recActionBtn.addEventListener("click", () => {
        const step = twin.recommendedNextStep;
        if (step.type === "learn" || step.type === "review") {
          container.querySelector(".sidebar-menu [data-tab='tutor']").click();
        } else if (step.type === "practice" || step.type === "mastered") {
          container.querySelector(".sidebar-menu [data-tab='practice']").click();
        }
      });
    }
  }

  // --- 2. KNOWLEDGE MAP TAB (DYNAMIC SVG GRAPH LAYOUT) ---
  function renderMapTab(tabContainer) {
    const twin = state.learningTwin;
    const mastery = twin.topicsMastery;
    const config = getSubjectConfig(twin.subjectId);
    const concepts = config.concepts;
    const dependencies = config.dependencies;

    // Helper to calculate depth/level of a concept in the dependency tree
    const getConceptDepth = (c) => {
      const prereqs = dependencies[c] || [];
      if (prereqs.length === 0) return 0;
      return 1 + Math.max(...prereqs.map(p => getConceptDepth(p)));
    };

    // 1. Group concepts by their levels (columns)
    const levels = {};
    concepts.forEach(c => {
      levels[c] = getConceptDepth(c);
    });
    const maxLevel = Math.max(...Object.values(levels));
    
    const cols = [];
    for (let i = 0; i <= maxLevel; i++) cols.push([]);
    concepts.forEach(c => {
      cols[levels[c]].push(c);
    });

    // 2. Compute X and Y coordinates dynamically
    const coords = {};
    const width = 760;
    const height = 360;
    const colSpacing = maxLevel === 0 ? width / 2 : (width - 120) / maxLevel;

    cols.forEach((colConcepts, colIdx) => {
      const x = 60 + colIdx * colSpacing;
      const numNodes = colConcepts.length;
      colConcepts.forEach((c, nodeIdx) => {
        const y = 50 + (nodeIdx + 0.5) * ((height - 60) / numNodes);
        coords[c] = { x, y };
      });
    });

    // 3. Render connection lines
    let linesMarkup = "";
    concepts.forEach(c => {
      const prereqs = dependencies[c] || [];
      prereqs.forEach(prereq => {
        const pCoord = coords[prereq];
        const cCoord = coords[c];
        
        if (pCoord && cCoord) {
          const isUnlocked = mastery[prereq] >= 0.60;
          linesMarkup += `
            <line class="map-link ${isUnlocked ? 'unlocked' : ''}" 
                  x1="${pCoord.x}" y1="${pCoord.y}" 
                  x2="${cCoord.x}" y2="${cCoord.y}" 
                  marker-end="url(#${isUnlocked ? 'arrow-unlocked' : 'arrow'})"></line>
          `;
        }
      });
    });

    // 4. Render nodes markup
    let nodesMarkup = "";
    concepts.forEach(c => {
      const coord = coords[c];
      if (!coord) return;

      const isLocked = getNodeState(c) === "locked";
      const scoreClass = getNodeClass(c);
      
      nodesMarkup += `
        <g class="map-node ${isLocked ? 'locked' : 'unlocked'} ${scoreClass}" 
           data-concept="${c}" 
           transform="translate(${coord.x}, ${coord.y})">
          <circle r="32"></circle>
          <text y="4" style="font-size: 10px;">${escapeSVGText(config.conceptLabels[c] || c)}</text>
        </g>
      `;
    });

    tabContainer.innerHTML = `
      <div class="dashboard-header">
        <h1>Knowledge Map</h1>
        <p>Dynamic 2D prerequisite visualization for <strong>${config.name}</strong>. Click nodes to run tutorials.</p>
      </div>

      <div class="map-canvas-container glass-card">
        <svg class="knowledge-svg" viewBox="0 0 800 400" style="min-height: 380px;">
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(255, 255, 255, 0.15)"/>
            </marker>
            <marker id="arrow-unlocked" viewBox="0 0 10 10" refX="24" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgba(6, 182, 212, 0.5)"/>
            </marker>
          </defs>
          
          <!-- Connections -->
          ${linesMarkup}
          
          <!-- Nodes -->
          ${nodesMarkup}
        </svg>

        <!-- Dynamic detail panel -->
        <div id="map-info-panel" class="map-detail-panel"></div>
      </div>
    `;

    // Attach node clicks
    const nodes = tabContainer.querySelectorAll(".map-node");
    nodes.forEach(node => {
      node.addEventListener("click", () => {
        const concept = node.getAttribute("data-concept");
        showNodeDetails(concept);
      });
    });

    function getNodeState(c) {
      const prereqs = dependencies[c] || [];
      const locked = prereqs.some(p => (mastery[p] || 0.15) < 0.60);
      return locked ? "locked" : "unlocked";
    }

    function getNodeClass(c) {
      const val = mastery[c] || 0.15;
      const nextRec = twin.recommendedNextStep?.concept;
      
      if (getNodeState(c) === "locked") return "locked";
      
      let scoreClass = "weak";
      if (val >= 0.80) scoreClass = "mastered";
      else if (val >= 0.45) scoreClass = "developing";
      
      if (nextRec === c) return `${scoreClass} current-target`;
      return scoreClass;
    }

    function showNodeDetails(concept) {
      const panel = tabContainer.querySelector("#map-info-panel");
      if (!panel) return;

      const score = mastery[concept] || 0.15;
      const isLocked = getNodeState(concept) === "locked";
      const percentage = Math.round(score * 100);
      
      let statusBadge = "";
      if (isLocked) statusBadge = `<span class="topic-tag topic-tag-weak" style="background: rgba(255,255,255,0.05); color: var(--text-muted);">🔒 Locked</span>`;
      else if (score >= 0.80) statusBadge = `<span class="topic-tag topic-tag-strong">✓ Mastered</span>`;
      else if (score >= 0.45) statusBadge = `<span class="topic-tag topic-tag-developing">~ Developing</span>`;
      else statusBadge = `<span class="topic-tag topic-tag-weak">! Needs Attention</span>`;

      const prereqLabels = (dependencies[concept] || [])
        .map(p => config.conceptLabels[p] + ((mastery[p] || 0.15) < 0.60 ? " ❌" : " (Mastered)"))
        .join(", ") || "None";

      panel.innerHTML = `
        <div class="flex justify-between align-center" style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div>
            <h4 style="font-size: 1.15rem; font-family: var(--font-headings);">${config.conceptLabels[concept] || concept}</h4>
            <span style="font-size: 0.8rem; color: var(--text-secondary); display: block; margin-top: 2px;">
              Prerequisites: ${prereqLabels}
            </span>
          </div>
          <div class="flex align-center gap-4" style="display: flex; align-items: center; gap: 12px;">
            ${statusBadge}
            <strong style="font-size: 1.3rem; font-family: var(--font-headings);">${percentage}%</strong>
          </div>
        </div>

        <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
          ${config.conceptDescriptions[concept] || ""}
        </p>

        <div class="flex gap-4" style="display: flex; gap: 12px;">
          <button id="node-learn-btn" class="btn btn-primary" ${isLocked ? 'disabled' : ''}>Start Tutorial</button>
          <button id="node-practice-btn" class="btn btn-secondary" ${isLocked ? 'disabled' : ''}>Practice Exercises</button>
        </div>
      `;

      panel.classList.add("active");

      panel.querySelector("#node-learn-btn").addEventListener("click", () => {
        state.learningTwin.recommendedNextStep = {
          type: "learn",
          concept: concept,
          text: `Learn ${config.conceptLabels[concept]} with Tutor`
        };
        container.querySelector(".sidebar-menu [data-tab='tutor']").click();
      });

      panel.querySelector("#node-practice-btn").addEventListener("click", () => {
        state.activeTab = "practice";
        updateActiveTabContent();
        loadPracticeExercise(concept);
      });
    }

    function escapeSVGText(str) {
      // Shorten label for smaller circles
      return str.split(" & ")[0].split(" / ")[0];
    }
  }

  // --- 3. AI TUTOR TAB ---
  function renderTutorTab(tabContainer) {
    const nextConcept = state.learningTwin.recommendedNextStep?.concept || getActiveConceptOrder()[0];
    const subjectConfig = getSubjectConfig(state.learningTwin.subjectId);
    const nextLabel = subjectConfig.conceptLabels[nextConcept] || nextConcept;
    const apiKey = state.settings.geminiApiKey;
    const isLive = apiKey && apiKey.trim() !== "";

    tabContainer.innerHTML = `
      <div class="dashboard-header flex justify-between align-center" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h1>Socratic AI Tutor</h1>
          <p>Analyzing subject: <strong>${getActiveSubjectName()}</strong></p>
        </div>
        <div>
          ${isLive ? `
            <span class="topic-tag topic-tag-strong" style="font-family: var(--font-code); font-size: 0.8rem;">● Live AI Mode (Gemini 2.5)</span>
          ` : `
            <span class="topic-tag topic-tag-developing" style="font-family: var(--font-code); font-size: 0.8rem;">● Offline Mode (Socratic Templates)</span>
          `}
        </div>
      </div>

      <div class="tutor-layout glass-card" style="padding: 0;">
        <div id="chat-history-container" class="chat-history">
          ${tutorChatHistory.map(chat => `
            <div class="chat-bubble ${chat.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-tutor'}">
              <div class="chat-sender-label">${chat.sender === 'user' ? 'You' : 'AI Tutor'}</div>
              <div>${formatTutorMarkdown(chat.text)}</div>
            </div>
          `).join("")}
        </div>

        <div class="tutor-suggestions">
          <button class="suggestion-chip" data-prompt="Explain ${nextLabel} with an example">Explain ${nextLabel}</button>
          <button class="suggestion-chip" data-prompt="Give me a simple example of ${nextLabel}">Show example</button>
          <button class="suggestion-chip" data-prompt="Why do we need ${nextLabel}?">Why use this?</button>
          <button class="suggestion-chip" data-prompt="Simplify explanations for ${nextLabel}">Simplify concept</button>
          <button class="suggestion-chip" data-prompt="Ask me a Socratic practice question about ${nextLabel}">Quiz me</button>
        </div>

        <div class="chat-input-area">
          <textarea id="tutor-input-box" class="chat-textarea" placeholder="Type your learning question..."></textarea>
          <button id="tutor-send-btn" class="btn btn-primary" style="height: 48px; border-radius: var(--border-radius-sm);">Send</button>
        </div>
      </div>
    `;

    const chatContainer = tabContainer.querySelector("#chat-history-container");
    const inputField = tabContainer.querySelector("#tutor-input-box");
    const sendBtn = tabContainer.querySelector("#tutor-send-btn");

    chatContainer.scrollTop = chatContainer.scrollHeight;

    const handleSend = async (messageText) => {
      if (!messageText || messageText.trim() === "") return;
      
      inputField.value = "";
      appendChatBubble("user", messageText);
      
      const placeholder = appendChatBubble("tutor", "*Tutor is writing...*");
      const tutorReply = await sendChatMessage(messageText);
      
      placeholder.querySelector("div:last-child").innerHTML = formatTutorMarkdown(tutorReply);
      chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    sendBtn.addEventListener("click", () => handleSend(inputField.value));
    inputField.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend(inputField.value);
      }
    });

    const chips = tabContainer.querySelectorAll(".suggestion-chip");
    chips.forEach(chip => {
      chip.addEventListener("click", () => {
        handleSend(chip.getAttribute("data-prompt"));
      });
    });

    function appendChatBubble(sender, text) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-tutor'}`;
      bubble.innerHTML = `
        <div class="chat-sender-label">${sender === 'user' ? 'You' : 'AI Tutor'}</div>
        <div>${formatTutorMarkdown(text)}</div>
      `;
      chatContainer.appendChild(bubble);
      chatContainer.scrollTop = chatContainer.scrollHeight;
      return bubble;
    }

    function formatTutorMarkdown(text) {
      let formatted = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      formatted = formatted.split("\n").map(line => {
        if (line.trim().startsWith("- ")) {
          return `<li style="margin-left: 20px; margin-bottom: 6px;">${line.trim().substring(2)}</li>`;
        }
        return line;
      }).join("\n");
      
      if (formatted.includes("```")) {
        const parts = formatted.split("```");
        let html = parts[0];
        for (let i = 1; i < parts.length; i += 2) {
          const block = parts[i].trim();
          let lang = "";
          let codeBody = block;
          
          const firstLineEnd = block.indexOf("\n");
          if (firstLineEnd !== -1) {
            const firstLine = block.substring(0, firstLineEnd).trim();
            if (["python", "javascript", "sql", "html", "css"].includes(firstLine)) {
              lang = firstLine;
              codeBody = block.substring(firstLineEnd + 1);
            }
          }
          html += `<pre><code>${escapeHTML(codeBody)}</code></pre>`;
          if (parts[i+1]) {
            html += parts[i+1];
          }
        }
        return html.replace(/\n/g, "<br>");
      }
      return formatted.replace(/\n/g, "<br>");
    }

    function escapeHTML(str) {
      return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }
  }

  // --- 4. PRACTICE WORKSPACE TAB (UNIVERSAL CODE & CONCEPT SANDBOX) ---
  let activeExerciseConcept = null;

  function renderPracticeTab(tabContainer) {
    const twin = state.learningTwin;
    const config = getSubjectConfig(twin.subjectId);
    const conceptOrder = getActiveConceptOrder();
    const nextConcept = twin.recommendedNextStep?.concept || conceptOrder[0];
    
    tabContainer.innerHTML = `
      <div class="dashboard-header">
        <h1>Practice Workspace</h1>
        <p>Test your knowledge in <strong>${config.name}</strong>. Solve coding and conceptual checks.</p>
      </div>

      <div style="margin-bottom: 24px; display: flex; gap: 8px; flex-wrap: wrap;">
        ${conceptOrder.map(c => `
          <button class="btn btn-secondary topic-select-btn ${activeExerciseConcept === c ? 'btn-accent' : ''}" 
                  data-concept="${c}" 
                  style="font-size: 0.8rem; padding: 6px 12px; border-radius: 20px;">
            ${config.conceptLabels[c]}
          </button>
        `).join("")}
      </div>

      <div id="practice-workspace-body"></div>
    `;

    // Bind topic buttons
    const topicButtons = tabContainer.querySelectorAll(".topic-select-btn");
    topicButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        topicButtons.forEach(b => {
          b.classList.remove("btn-accent");
          b.classList.add("btn-secondary");
        });
        btn.classList.remove("btn-secondary");
        btn.classList.add("btn-accent");
        
        const concept = btn.getAttribute("data-concept");
        activeExerciseConcept = concept;
        loadPracticeExercise(concept);
      });
    });

    if (!activeExerciseConcept) activeExerciseConcept = nextConcept;
    
    const targetBtn = tabContainer.querySelector(`.topic-select-btn[data-concept="${activeExerciseConcept}"]`);
    if (targetBtn) {
      topicButtons.forEach(b => {
        b.classList.remove("btn-accent");
        b.classList.add("btn-secondary");
      });
      targetBtn.classList.remove("btn-secondary");
      targetBtn.classList.add("btn-accent");
    }
    
    loadPracticeExercise(activeExerciseConcept);
  }

  function loadPracticeExercise(concept) {
    const workspaceBody = container.querySelector("#practice-workspace-body");
    if (!workspaceBody) return;

    const twin = state.learningTwin;
    const config = getSubjectConfig(twin.subjectId);
    
    // Coding subjects (Python, JS, etc.) use local exercise list or fallback
    const ex = getOfflinePracticeExercise(twin.subjectId, concept);

    if (!ex) {
      workspaceBody.innerHTML = `<div class="glass-card text-center">No exercise loaded for this topic.</div>`;
      return;
    }

    // Dynamic editor panel label depending on coding vs conceptual
    const editorHeaderLabel = config.isCoding ? "interactive_sandbox.py" : "socratic_essay_draft.txt";
    const runBtnLabel = config.isCoding ? "Run Code & Submit" : "Submit Essay Response";

    workspaceBody.innerHTML = `
      <div class="practice-layout">
        <!-- Problem details -->
        <div class="practice-question-panel">
          <div class="glass-card" style="flex: 1; display: flex; flex-direction: column; justify-content: space-between; min-height: 280px;">
            <div>
              <span class="question-category">${config.conceptLabels[concept]} Practice</span>
              <h2 style="font-size: 1.25rem; margin-bottom: 12px;">${ex.title}</h2>
              <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">
                ${ex.description}
              </p>
            </div>
            
            <div style="background: rgba(255,255,255,0.02); padding: 12px; border: 1px dashed var(--glass-border); border-radius: var(--border-radius-sm); font-size: 0.85rem; color: var(--text-muted);">
              <strong>Hint:</strong> ${ex.hint}
            </div>
          </div>

          <!-- Solution feedback container -->
          <div id="solution-feedback" class="practice-feedback-card"></div>
        </div>

        <!-- Sandbox Editor Panel -->
        <div class="code-editor-panel">
          <div class="editor-header">
            <span>${editorHeaderLabel}</span>
            <span class="editor-lang">${config.isCoding ? config.name : 'Conceptual Text'}</span>
          </div>
          <textarea id="editor-textarea-field" class="editor-textarea" spellcheck="false">${ex.startingCode}</textarea>
          <div class="editor-footer">
            <button id="run-code-btn" class="btn btn-primary">${runBtnLabel}</button>
          </div>
        </div>
      </div>
    `;

    const runBtn = workspaceBody.querySelector("#run-code-btn");
    const editor = workspaceBody.querySelector("#editor-textarea-field");
    const feedbackBox = workspaceBody.querySelector("#solution-feedback");

    runBtn.addEventListener("click", async () => {
      const studentInput = editor.value;
      
      // Show thinking feedback
      feedbackBox.className = "practice-feedback-card active";
      feedbackBox.innerHTML = `<span style="font-size: 0.85rem; color: var(--text-muted);">Evaluating your response...</span>`;
      
      let isCorrect = false;
      let socraticFeedback = "";

      // 1. Live AI evaluation for conceptual entries
      const apiKey = state.settings.geminiApiKey;
      if (!config.isCoding && apiKey && apiKey.trim() !== "") {
        try {
          const evalResult = await fetchLiveConceptualEvaluation(config.name, config.conceptLabels[concept], ex.description, studentInput, apiKey);
          isCorrect = evalResult.isCorrect;
          socraticFeedback = evalResult.feedback;
        } catch (e) {
          console.error("Gemini practice evaluator failed, falling back offline", e);
        }
      }

      // 2. Offline / local fallback evaluation
      if (socraticFeedback === "") {
        isCorrect = ex.solutionCheck(studentInput);
        socraticFeedback = isCorrect 
          ? `Your response matches the check requirements. Your mastery score for <strong>${config.conceptLabels[concept]}</strong> has increased in your Learning Twin.`
          : `The response did not meet validation parameters. Review spelling, definitions, or code syntax and try again.`;
      }

      // Update BKT parameters
      processAnswerAndUpdateTwin(concept, isCorrect, "somewhat", 20, `practice_${concept}`);

      // Render updated results
      feedbackBox.className = "practice-feedback-card active";
      if (isCorrect) {
        feedbackBox.classList.add("feedback-success");
        feedbackBox.innerHTML = `
          <strong style="color: var(--color-success); display: block; margin-bottom: 4px;">✓ Response Validated: Correct!</strong>
          <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: block;">
            ${socraticFeedback}
          </span>
          <button id="next-practice-btn" class="btn btn-secondary" style="margin-top: 10px; font-size: 0.8rem; padding: 6px 12px;">Go to Dashboard</button>
        `;
        
        feedbackBox.querySelector("#next-practice-btn").addEventListener("click", () => {
          container.querySelector(".sidebar-menu [data-tab='overview']").click();
        });
      } else {
        feedbackBox.classList.add("feedback-error");
        feedbackBox.innerHTML = `
          <strong style="color: var(--color-error); display: block; margin-bottom: 4px;">❌ Response Check Failed</strong>
          <span style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; display: block;">
            ${socraticFeedback}
          </span>
        `;
      }

      rebuildLearningTwin();
    });
  }

  // Calls Gemini API to grade conceptual entries
  const fetchLiveConceptualEvaluation = async (subjectName, conceptLabel, description, responseText, apiKey) => {
    const prompt = `You are a Socratic tutor. Evaluate the student's essay answer for this prompt:
    Prompt: "${description}"
    Concept: "${conceptLabel}"
    Subject: "${subjectName}"

    Student's Answer:
    "${responseText}"

    Analyze if they understand the core definition. Provide a brief 2-3 sentence feedback.
    The response MUST be valid JSON in this exact structure:
    {
      "isCorrect": true, // set to true if they demonstrated sufficient understanding of the concept, else false
      "feedback": "Your Socratic feedback details here, highlighting what they got right and wrong."
    }`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.2
        }
      })
    });

    if (!response.ok) {
      throw new Error(`API returned ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!replyText) {
      throw new Error("Empty response text");
    }

    return JSON.parse(replyText.trim());
  };

  // --- 5. ANALYTICS TAB ---
  function renderAnalyticsTab(tabContainer) {
    const twin = state.learningTwin;
    const history = state.assessmentHistory;
    const config = getSubjectConfig(twin.subjectId);
    const conceptOrder = getActiveConceptOrder();

    const totalQuestions = history.length;
    const correctCount = history.filter(h => h.isCorrect).length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    
    const correctHigh = history.filter(h => h.isCorrect && h.confidence === "very").length;
    const correctLow = history.filter(h => h.isCorrect && h.confidence === "not").length;
    const wrongHigh = history.filter(h => !h.isCorrect && h.confidence === "very").length;
    const wrongLow = history.filter(h => !h.isCorrect && h.confidence === "not").length;

    tabContainer.innerHTML = `
      <div class="dashboard-header">
        <h1>Analytics & Progress</h1>
        <p>A comprehensive overview of your performance metrics, Bayesian mastery probability, and metacognition calibration.</p>
      </div>

      <div class="dashboard-grid">
        <!-- Progress Bars -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">Bayesian Mastery Probabilities</h3>
          <div class="bar-chart-container">
            ${conceptOrder.map(c => {
              const val = Math.round((twin.topicsMastery[c] || 0.15) * 100);
              return `
                <div class="bar-chart-row">
                  <div class="chart-label-row">
                    <span>${config.conceptLabels[c] || c}</span>
                    <strong>${val}%</strong>
                  </div>
                  <div class="chart-bar-bg">
                    <div class="chart-bar-fill" style="width: ${val}%;"></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Calibration Matrix -->
        <div class="glass-card">
          <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 6px;">Metacognitive Calibration</h3>
          <p style="font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 16px;">Matches your answers accuracy with self-reported confidence.</p>
          
          <div class="calibration-chart">
            <div class="calibration-box" style="border-left: 3px solid var(--color-success);">
              <div class="calibration-num">${correctHigh}</div>
              <div class="calibration-text">Mastered (Correct + Confident)</div>
            </div>
            
            <div class="calibration-box" style="border-left: 3px solid var(--color-warning);">
              <div class="calibration-num">${correctLow}</div>
              <div class="calibration-text">Gaps (Correct + Low Confidence)</div>
            </div>

            <div class="calibration-box" style="border-left: 3px solid var(--color-error);">
              <div class="calibration-num">${wrongHigh}</div>
              <div class="calibration-text">Misconceptions (Wrong + Confident)</div>
            </div>

            <div class="calibration-box" style="border-left: 3px solid var(--text-muted);">
              <div class="calibration-num">${wrongLow}</div>
              <div class="calibration-text">Unknown (Wrong + Low Confidence)</div>
            </div>
          </div>

          <div style="margin-top: 20px; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.4; background: rgba(255,255,255,0.02); padding: 12px; border-radius: var(--border-radius-sm);">
            <strong>System Calibration Insight:</strong>
            ${wrongHigh > 0 ? `
              We've detected <strong>${wrongHigh} active misconceptions</strong>. You are applying logic that is consistently incorrect, though you feel confident in it. Spend extra time with the Socratic AI Tutor.
            ` : `
              Your confidence correlates strongly with accuracy! This is excellent, as it prevents logical misconceptions in building application concepts.
            `}
          </div>
        </div>
      </div>

      <!-- Quick Stats Footer -->
      <div class="stats-row" style="margin-bottom: 0;">
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val">${totalQuestions}</div>
          <div class="stat-label">Total Submissions</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val" style="color: var(--color-secondary);">${accuracy}%</div>
          <div class="stat-label">Answer Accuracy</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val">${correctHigh + correctLow}</div>
          <div class="stat-label">Total Successes</div>
        </div>
        <div class="glass-card stat-card" style="padding: 16px;">
          <div class="stat-val" style="color: var(--color-error);">${wrongHigh + wrongLow}</div>
          <div class="stat-label">Total Errors</div>
        </div>
      </div>
    `;
  }

  // --- 6. SETTINGS TAB ---
  function renderSettingsTab(tabContainer) {
    tabContainer.innerHTML = `
      <div class="dashboard-header">
        <h1>Profile & Settings</h1>
        <p>Manage your account settings, clear educational states, and input AI credentials.</p>
      </div>

      <div class="glass-card" style="max-width: 600px; margin-bottom: 30px;">
        <h3 style="font-family: var(--font-headings); font-size: 1.1rem; margin-bottom: 16px;">Gemini API Configuration</h3>
        
        <div class="input-group">
          <label for="gemini-key-input">Gemini API Key</label>
          <input type="password" id="gemini-key-input" class="input-control" value="${state.settings.geminiApiKey || ''}" placeholder="AIzaSy...">
          <span style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px; line-height: 1.4;">
            Adding an API key enables <strong>Live AI Mode</strong>. Questions, practice evaluations, and Socratic answers will be generated dynamically by Gemini 2.5 models.
          </span>
        </div>

        <button id="save-api-key-btn" class="btn btn-primary">Save API Configuration</button>
      </div>

      <div class="glass-card" style="max-width: 600px; border-color: rgba(239, 68, 68, 0.2);">
        <h3 style="font-family: var(--font-headings); font-size: 1.1rem; color: var(--color-error); margin-bottom: 12px;">Danger Zone</h3>
        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px; line-height: 1.5;">
          This will delete all assessment history, BKT mastery probabilities, and reset your Learning Twin to baseline credentials.
        </p>

        <button id="reset-twin-btn" class="btn btn-secondary" style="border-color: rgba(239, 68, 68, 0.3); color: #f87171;">
          Reset Learning Twin
        </button>
      </div>
    `;

    tabContainer.querySelector("#save-api-key-btn").addEventListener("click", () => {
      const val = tabContainer.querySelector("#gemini-key-input").value;
      setApiKey(val);
      showNotification("Success", "Gemini API Configuration saved! The AI Tutor is now synced.");
    });

    tabContainer.querySelector("#reset-twin-btn").addEventListener("click", () => {
      if (confirm("Are you sure you want to reset your Learning Twin? All your progress and assessment logs will be deleted.")) {
        resetState();
        clearChatHistory();
        showNotification("Twin Reset", "Your Cognitive Learning Twin has been reset. You will need to take the initial assessment again.");
        window.location.hash = "#assessment";
      }
    });
  }
}
