// Dynamic Assessment / Quiz Player View (Procedural + Gemini-Generated)
import { state, notify } from '../state.js';
import { getSubjectConfig, generateOfflineQuestion } from '../data/subjects.js';
import { processAnswerAndUpdateTwin, CONCEPT_LABELS, rebuildLearningTwin } from '../engine/ml-engine.js';
import { showNotification } from '../app.js';

export function renderAssessment(container) {
  const subjectId = state.learningTwin.subjectId || "python";
  const config = getSubjectConfig(subjectId);
  const apiKey = state.settings.geminiApiKey;
  const isLiveMode = apiKey && apiKey.trim() !== "";

  let isPracticeMode = false;
  let practiceConcept = "";
  let practiceDifficulty = "easy";
  
  // Parse practice query parameters
  const hashParts = window.location.hash.split("?");
  if (hashParts.length > 1) {
    const params = new URLSearchParams(hashParts[1]);
    if (params.get("mode") === "practice") {
      isPracticeMode = true;
      practiceConcept = params.get("concept");
      practiceDifficulty = params.get("difficulty") || "easy";
    }
  }

  // Quiz progression state
  let currentIdx = 0;
  let conceptsList = [];
  
  if (isPracticeMode) {
    // Practice mode consists of 3 attempts at the target concept
    conceptsList = [practiceConcept, practiceConcept, practiceConcept];
  } else {
    // Initial baseline assessment covers all concepts of the active subject
    conceptsList = config.concepts;
  }

  const userAnswers = []; // { concept, isCorrect, confidence, timeSpent, questionId }
  let currentLoadedQuestion = null;
  let questionStartTime = Date.now();
  let timerInterval = null;
  let elapsedSeconds = 0;

  const formatTime = (totalSec) => {
    const m = Math.floor(totalSec / 60).toString().padStart(2, '0');
    const s = (totalSec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const startTimer = () => {
    elapsedSeconds = 0;
    questionStartTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);
    
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      const timerEl = container.querySelector("#assess-timer");
      if (timerEl) {
        timerEl.textContent = formatTime(elapsedSeconds);
      }
    }, 1000);
  };

  // Loads a question either offline or dynamically from the Gemini API
  const loadQuestion = async (concept, difficulty) => {
    // Show glassmorphic loading spinner if Live AI is fetching
    if (isLiveMode) {
      container.innerHTML = `
        <div class="container" style="max-width: 600px; padding: 60px 24px; text-align: center;">
          <div class="glass-card" style="padding: 40px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 20px;">
            <div class="logo-icon" style="width: 50px; height: 50px; font-size: 1.6rem; animation: pulse-node 2.2s infinite;">🧠</div>
            <h3 style="font-family: var(--font-headings);">AI is generating your question...</h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Sourcing dynamic challenge on <strong>${config.conceptLabels[concept]}</strong> from Gemini models.
            </p>
          </div>
        </div>
      `;
      
      try {
        currentLoadedQuestion = await fetchGeminiGeneratedQuestion(concept, difficulty);
        renderQuestionUI(currentLoadedQuestion);
        return;
      } catch (err) {
        console.error("Failed to generate dynamic question, falling back offline", err);
      }
    }

    // Offline / Fallback question generator
    currentLoadedQuestion = generateOfflineQuestion(subjectId, concept, difficulty);
    renderQuestionUI(currentLoadedQuestion);
  };

  // Queries Gemini with structured JSON output requirements
  const fetchGeminiGeneratedQuestion = async (concept, difficulty) => {
    const prompt = `Generate a single multiple-choice question testing the concept "${config.conceptLabels[concept]}" in the subject "${config.name}".
    Difficulty level: "${difficulty}".
    Description of topic: "${config.conceptDescriptions[concept]}".

    The response MUST be valid JSON matching this exact structure:
    {
      "text": "The question text. If it is a coding subject, feel free to write code snippets using markdown code blocks (e.g. \`\`\`python). If it is a math subject, use LaTeX formatting for formulas.",
      "options": [
        "Incorrect answer option",
        "Correct answer option",
        "Incorrect answer option",
        "Incorrect answer option"
      ],
      "correctIndex": 1, // must specify the correct 0-indexed index of the options array
      "explanation": "Detailed explanation of why that specific option is correct."
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
          temperature: 0.75
        }
      })
    });

    if (!response.ok) {
      throw new Error(`Gemini API returned ${response.status}`);
    }

    const data = await response.json();
    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!replyText) {
      throw new Error("No response text returned from Gemini API");
    }

    const parsedJson = JSON.parse(replyText.trim());
    return {
      id: `q_gemini_${concept}_${Date.now()}`,
      concept,
      difficulty,
      text: parsedJson.text,
      options: parsedJson.options,
      correctIndex: parseInt(parsedJson.correctIndex),
      explanation: parsedJson.explanation
    };
  };

  const renderQuestionUI = (q) => {
    container.innerHTML = `
      <div class="container" style="max-width: 720px; padding: 60px 24px;">
        <div class="assess-header">
          <div>
            <h3 style="font-family: var(--font-headings); font-size: 1.1rem; color: var(--text-secondary);">
              ${isPracticeMode ? `Practice: ${config.name}` : `${config.name} Assessment`}
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Question ${currentIdx + 1} of ${conceptsList.length}</p>
          </div>
          <div class="timer-container">
            <span class="timer-icon">⏱️</span>
            <span id="assess-timer">00:00</span>
          </div>
        </div>

        <div class="glass-card animate-fade" style="padding: 36px;">
          <div class="question-container">
            <span class="question-category">${config.conceptLabels[q.concept]}</span>
            <h2 class="question-text">${formatQuestionText(q.text)}</h2>
            
            <div class="options-list">
              ${q.options.map((opt, i) => `
                <button class="option-btn" data-index="${i}">
                  <span class="option-num">${String.fromCharCode(65 + i)}</span>
                  <span>${escapeHTML(opt)}</span>
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Confidence Assessment scale -->
          <div class="confidence-section">
            <h4 class="confidence-title">How confident are you in this answer?</h4>
            <div class="confidence-options">
              <button class="confidence-btn" data-value="not">Not Confident 😕</button>
              <button class="confidence-btn" data-value="somewhat">Somewhat Confident 🙂</button>
              <button class="confidence-btn" data-value="very">Very Confident 😎</button>
            </div>
          </div>

          <div style="display: flex; justify-content: flex-end;">
            <button id="next-q-btn" class="btn btn-primary" disabled>
              ${currentIdx === conceptsList.length - 1 ? "Submit Answers" : "Next Question"}
            </button>
          </div>
        </div>
      </div>
    `;

    startTimer();

    // Event bindings
    let selectedAnswerIdx = null;
    let selectedConfidence = null;

    const optButtons = container.querySelectorAll(".option-btn");
    const confButtons = container.querySelectorAll(".confidence-btn");
    const nextBtn = container.querySelector("#next-q-btn");

    const checkFormValidity = () => {
      if (selectedAnswerIdx !== null && selectedConfidence !== null) {
        nextBtn.removeAttribute("disabled");
      }
    };

    optButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        optButtons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedAnswerIdx = parseInt(btn.getAttribute("data-index"));
        checkFormValidity();
      });
    });

    confButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        confButtons.forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedConfidence = btn.getAttribute("data-value");
        checkFormValidity();
      });
    });

    nextBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      
      // Save answer
      userAnswers.push({
        questionId: q.id,
        concept: q.concept,
        answerIndex: selectedAnswerIdx,
        isCorrect: selectedAnswerIdx === q.correctIndex,
        confidence: selectedConfidence,
        timeSpent: elapsedSeconds
      });

      if (currentIdx < conceptsList.length - 1) {
        currentIdx++;
        // Fetch next question based on dynamic concept
        const nextConcept = conceptsList[currentIdx];
        const nextDifficulty = isPracticeMode ? practiceDifficulty : "easy";
        loadQuestion(nextConcept, nextDifficulty);
      } else {
        submitQuizResults();
      }
    });
  };

  const submitQuizResults = () => {
    // Process answers through BKT engine
    userAnswers.forEach(ans => {
      processAnswerAndUpdateTwin(
        ans.concept,
        ans.isCorrect,
        ans.confidence,
        ans.timeSpent,
        ans.questionId
      );
    });

    rebuildLearningTwin();

    // Render completion summary page
    const twin = state.learningTwin;
    const strongList = twin.strongTopics.map(c => config.conceptLabels[c] || c).join(", ") || "None";
    const weakList = twin.weakTopics.map(c => config.conceptLabels[c] || c).join(", ") || "None";
    const misconceptionsCount = twin.gaps.filter(g => g.type === "misconception").length;

    container.innerHTML = `
      <div class="container animate-fade" style="max-width: 600px; padding: 60px 24px; text-align: center;">
        <div class="glass-card" style="padding: 40px;">
          <div class="logo-icon" style="width: 64px; height: 64px; font-size: 2.2rem; margin: 0 auto 20px;">🎉</div>
          <h2>Learning Twin Synced!</h2>
          <p style="color: var(--text-secondary); margin-top: 10px; margin-bottom: 30px;">
            NeuroLink AI has processed your responses and updated your Cognitive Twin for <strong>${config.name}</strong>.
          </p>

          <div style="background: var(--bg-tertiary); border: 1px solid var(--glass-border); border-radius: var(--border-radius-md); padding: 24px; text-align: left; margin-bottom: 30px;">
            <div class="flex justify-between align-center" style="margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
              <span style="font-family: var(--font-headings); font-weight: 600;">Overall Mastery:</span>
              <strong style="color: var(--color-secondary); font-size: 1.4rem;">${twin.overallMastery}%</strong>
            </div>

            <div style="margin-bottom: 12px; font-size: 0.9rem;">
              <strong style="color: var(--color-success);">✓ Strong Concepts:</strong>
              <div style="color: var(--text-secondary); margin-top: 4px;">${strongList}</div>
            </div>

            <div style="margin-bottom: 12px; font-size: 0.9rem;">
              <strong style="color: var(--color-error);">! Gaps / Weaknesses:</strong>
              <div style="color: var(--text-secondary); margin-top: 4px;">${weakList}</div>
            </div>

            <div style="font-size: 0.9rem;">
              <strong style="color: var(--color-warning);">⚠️ Misconceptions Flagged:</strong>
              <span style="color: var(--text-primary); margin-left: 8px;">${misconceptionsCount}</span>
            </div>
          </div>

          <a href="#dashboard" class="btn btn-primary" style="width: 100%;">Enter Dashboard</a>
        </div>
      </div>
    `;
  };

  const formatQuestionText = (text) => {
    if (text.includes("```")) {
      const parts = text.split("```");
      let formatted = parts[0];
      for (let i = 1; i < parts.length; i += 2) {
        // Look for language block labels (e.g. python, javascript)
        const block = parts[i].trim();
        let lang = "";
        let codeBody = block;
        
        const firstLineEnd = block.indexOf("\n");
        if (firstLineEnd !== -1) {
          const firstLine = block.substring(0, firstLineEnd).trim();
          if (["python", "javascript", "js", "sql", "html", "css"].includes(firstLine)) {
            lang = firstLine;
            codeBody = block.substring(firstLineEnd + 1);
          }
        }
        
        formatted += `<pre><code>${escapeHTML(codeBody)}</code></pre>`;
        if (parts[i+1]) {
          formatted += parts[i+1];
        }
      }
      return formatted;
    }
    return escapeHTML(text);
  };

  const escapeHTML = (str) => {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  // Kick off initial question load
  const initialConcept = conceptsList[0];
  const initialDifficulty = isPracticeMode ? practiceDifficulty : "easy";
  loadQuestion(initialConcept, initialDifficulty);
}
