// Bayesian Knowledge Tracing & Dynamic Recommendation Engine
import { state, notify } from '../state.js';
import { getSubjectConfig } from '../data/subjects.js';

// BKT Standard Parameter Coefficients
const BKT_PARAMS = {
  L0: 0.15, // Prior
  T: 0.22,  // Learning Rate
  S: 0.10,  // Slip
  G: 0.20   // Guess
};

// Dynamic mapping exports using JS Proxies for backwards compatibility
export const CONCEPT_LABELS = new Proxy({}, {
  get(target, prop) {
    const subId = state.learningTwin?.subjectId || "python";
    return getSubjectConfig(subId).conceptLabels[prop] || prop;
  }
});

export const DEPENDENCIES = new Proxy({}, {
  get(target, prop) {
    const subId = state.learningTwin?.subjectId || "python";
    return getSubjectConfig(subId).dependencies[prop] || [];
  }
});

// Dynamic configuration getter helpers
export function getActiveConceptOrder() {
  const subId = state.learningTwin?.subjectId || "python";
  return getSubjectConfig(subId).concepts;
}

export function getActiveSubjectName() {
  const subId = state.learningTwin?.subjectId || "python";
  return getSubjectConfig(subId).name;
}

/**
 * Bayesian Knowledge Tracing formula to calculate posterior probability
 */
export function calculateBKT(currentL, isCorrect) {
  const { T, S, G } = BKT_PARAMS;
  let posteriorL;

  if (isCorrect) {
    posteriorL = (currentL * (1 - S)) / (currentL * (1 - S) + (1 - currentL) * G);
  } else {
    posteriorL = (currentL * S) / (currentL * S + (1 - currentL) * (1 - G));
  }

  const updatedL = posteriorL + (1 - posteriorL) * T;
  return Math.max(0.01, Math.min(0.99, updatedL));
}

/**
 * Main function to update student's Learning Twin based on a new question attempt
 */
export function processAnswerAndUpdateTwin(concept, isCorrect, confidence, timeSpent, questionId) {
  // 1. Log to history
  state.assessmentHistory.push({
    questionId,
    concept,
    isCorrect,
    confidence,
    timeSpent,
    timestamp: Date.now()
  });

  // 2. Fetch current mastery probability
  const oldMastery = state.learningTwin.topicsMastery[concept] || BKT_PARAMS.L0;

  // 3. Adjust BKT logic based on self-reported confidence (Metacognition factor)
  let adjustedMastery = oldMastery;
  if (isCorrect) {
    if (confidence === "not") {
      const guessAdjustedCorrect = calculateBKT(oldMastery, true);
      adjustedMastery = oldMastery + (guessAdjustedCorrect - oldMastery) * 0.4;
    } else {
      adjustedMastery = calculateBKT(oldMastery, true);
    }
  } else {
    if (confidence === "very") {
      const standardIncorrect = calculateBKT(oldMastery, false);
      adjustedMastery = standardIncorrect * 0.8; // misconception penalty
    } else {
      adjustedMastery = calculateBKT(oldMastery, false);
    }
  }

  // Save new mastery value
  state.learningTwin.topicsMastery[concept] = adjustedMastery;

  // 4. Rebuild the Learning Twin state
  rebuildLearningTwin();
}

/**
 * Recalculates all high-level stats, gaps, and recommendations based on current mastery values
 */
export function rebuildLearningTwin() {
  const twin = state.learningTwin;
  const mastery = twin.topicsMastery;
  const conceptOrder = getActiveConceptOrder();
  const dependencies = getSubjectConfig(twin.subjectId).dependencies;
  
  // Reset lists
  twin.strongTopics = [];
  twin.developingTopics = [];
  twin.weakTopics = [];
  twin.gaps = [];
  twin.insights = [];

  // 1. Classify concepts
  conceptOrder.forEach(concept => {
    const val = mastery[concept] || BKT_PARAMS.L0;
    if (val >= 0.80) {
      twin.strongTopics.push(concept);
    } else if (val >= 0.45) {
      twin.developingTopics.push(concept);
    } else {
      twin.weakTopics.push(concept);
    }
  });

  // Calculate overall average mastery
  const sum = conceptOrder.reduce((acc, c) => acc + (mastery[c] || BKT_PARAMS.L0), 0);
  twin.overallMastery = Math.round((sum / conceptOrder.length) * 100);

  // 2. Gap Detection (Dependencies & Misconceptions)
  conceptOrder.forEach(concept => {
    const conceptMastery = mastery[concept] || BKT_PARAMS.L0;
    if (conceptMastery < 0.80) {
      const prereqs = dependencies[concept] || [];
      prereqs.forEach(prereq => {
        const prereqMastery = mastery[prereq] || BKT_PARAMS.L0;
        if (prereqMastery < 0.60) {
          twin.gaps.push({
            type: "prerequisite",
            concept: concept,
            prerequisite: prereq,
            message: `Struggling with ${CONCEPT_LABELS[concept]} may stem from weak foundational understanding of ${CONCEPT_LABELS[prereq]}.`
          });
        }
      });
    }
  });

  // Misconception check
  const recentIncorrectWithHighConf = {};
  state.assessmentHistory.forEach(history => {
    if (!history.isCorrect && history.confidence === "very") {
      recentIncorrectWithHighConf[history.concept] = history;
    } else if (history.isCorrect) {
      delete recentIncorrectWithHighConf[history.concept];
    }
  });

  Object.keys(recentIncorrectWithHighConf).forEach(concept => {
    twin.gaps.push({
      type: "misconception",
      concept: concept,
      message: `Misconception identified in ${CONCEPT_LABELS[concept]} — you answered questions incorrectly despite expressing high confidence.`
    });
  });

  // 3. Generate Next Step Recommendations
  let nextRecommendation = null;

  for (let i = 0; i < conceptOrder.length; i++) {
    const concept = conceptOrder[i];
    const val = mastery[concept] || BKT_PARAMS.L0;

    if (val < 0.80) {
      const unmetPrereqs = (dependencies[concept] || []).filter(p => (mastery[p] || BKT_PARAMS.L0) < 0.60);
      
      if (unmetPrereqs.length > 0) {
        const primaryPrereq = unmetPrereqs[0];
        nextRecommendation = {
          type: "review",
          concept: primaryPrereq,
          text: `Review foundations of ${CONCEPT_LABELS[primaryPrereq]}`,
          duration: "10 mins"
        };
        break;
      } else {
        if (val < 0.45) {
          nextRecommendation = {
            type: "learn",
            concept: concept,
            text: `Learn ${CONCEPT_LABELS[concept]} with Tutor`,
            duration: "15 mins"
          };
        } else {
          nextRecommendation = {
            type: "practice",
            concept: concept,
            text: `Practice questions on ${CONCEPT_LABELS[concept]}`,
            duration: "10 mins"
          };
        }
        break;
      }
    }
  }

  // If everything is mastered
  if (!nextRecommendation) {
    nextRecommendation = {
      type: "mastered",
      concept: conceptOrder[conceptOrder.length - 1],
      text: "You have mastered all fundamentals! Try Advanced Practice.",
      duration: "10 mins"
    };
  }
  
  twin.recommendedNextStep = nextRecommendation;

  // 4. Generate AI Insights
  if (twin.overallMastery < 30) {
    twin.insights.push(`You are at the beginning of your ${twin.subject} journey. Complete assessments and practice to shape your Learning Twin.`);
  } else if (twin.overallMastery >= 80) {
    twin.insights.push(`Excellent work! You demonstrate strong proficiency across most ${twin.subject} concepts.`);
  } else {
    twin.insights.push(`You're making steady progress. Your adaptive path is focusing on bridging transitional topics.`);
  }

  const correctWithLowConf = state.assessmentHistory.filter(h => h.isCorrect && h.confidence === "not");
  if (correctWithLowConf.length > 0) {
    const lowConfConcepts = [...new Set(correctWithLowConf.map(c => CONCEPT_LABELS[c.concept]))];
    twin.insights.push(`Calibration alert: You solved questions correctly for ${lowConfConcepts.slice(0, 2).join(', ')} but reported low confidence. Practice will help reinforce your confidence.`);
  }

  const activeMisconception = twin.gaps.find(g => g.type === "misconception");
  if (activeMisconception) {
    twin.insights.push(`Misconception warning: The system detected a conceptual error in ${CONCEPT_LABELS[activeMisconception.concept]}. Let's have the AI Tutor clear this up.`);
  }

  const activePrereqGap = twin.gaps.find(g => g.type === "prerequisite");
  if (activePrereqGap) {
    twin.insights.push(`Prerequisite Block: We recommend strengthening your ${CONCEPT_LABELS[activePrereqGap.prerequisite]} skills before moving forward on ${CONCEPT_LABELS[activePrereqGap.concept]}.`);
  }

  notify();
}

/**
 * Returns the recommended difficulty level for a concept based on mastery probability
 */
export function getAdaptiveDifficulty(concept) {
  const mastery = state.learningTwin.topicsMastery[concept] || BKT_PARAMS.L0;
  if (mastery < 0.40) return "easy";
  if (mastery < 0.70) return "medium";
  return "hard";
}
