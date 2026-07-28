// State Management for NeuroLink AI
import { getSubjectConfig } from './data/subjects.js';

// Initial default state
const defaultState = {
  user: null,
  learningTwin: {
    subjectId: "python", // Default active subject ID
    subject: "Python Programming",
    overallMastery: 0,
    topicsMastery: {}, // Populated dynamically based on selected subject
    strongTopics: [],
    developingTopics: [],
    weakTopics: [],
    gaps: [],
    insights: [],
    recommendedNextStep: null
  },
  assessmentHistory: [],
  settings: {
    geminiApiKey: ""
  },
  activeTab: "overview", // Current sub-tab on dashboard
  currentQuiz: null
};

export let state = JSON.parse(JSON.stringify(defaultState));

const listeners = [];

export function subscribe(callback) {
  listeners.push(callback);
}

export function notify() {
  saveToLocalStorage();
  listeners.forEach(fn => fn(state));
}

export function loadFromLocalStorage() {
  try {
    const saved = localStorage.getItem("neurolink_state");
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...defaultState, ...parsed };
    }
  } catch (e) {
    console.error("Error loading state from localStorage", e);
  }
}

export function saveToLocalStorage() {
  try {
    localStorage.setItem("neurolink_state", JSON.stringify(state));
  } catch (e) {
    console.error("Error saving state to localStorage", e);
  }
}

export function register(userData) {
  state.user = {
    name: userData.name,
    email: userData.email,
    password: userData.password,
    learningGoal: userData.learningGoal,
    educationLevel: userData.educationLevel || "High School",
    learningStyle: userData.learningStyle || "examples_first"
  };
  
  // Initialize dynamic subject from registration, default to Python
  const subId = userData.subjectId || "python";
  initializeSubject(subId);
}

export function login(email, password) {
  // Simple check for MVP demo
  if (state.user && state.user.email === email && state.user.password === password) {
    notify();
    return true;
  }
  // Hardcoded backup account for judges
  if (email === "sarah@edu.com" && password === "python123") {
    state.user = {
      name: "Sarah",
      email: "sarah@edu.com",
      password: "python123",
      learningGoal: "Become comfortable building Python applications",
      educationLevel: "Undergraduate",
      learningStyle: "examples_first"
    };
    initializeSubject("python");
    return true;
  }
  return false;
}

export function initializeSubject(subjectId) {
  const conf = getSubjectConfig(subjectId);
  
  // Set up initial topic scores
  const initialMastery = {};
  conf.concepts.forEach(concept => {
    initialMastery[concept] = 0.15; // Starting probability
  });

  state.learningTwin = {
    subjectId: subjectId,
    subject: conf.name,
    overallMastery: 0,
    topicsMastery: initialMastery,
    strongTopics: [],
    developingTopics: [],
    weakTopics: [],
    gaps: [],
    insights: [],
    recommendedNextStep: {
      type: "assessment",
      text: `Take Initial ${conf.name} Assessment`,
      concept: conf.concepts[0],
      duration: "10-15 mins"
    }
  };
  state.assessmentHistory = [];
  state.activeTab = "overview";
  notify();
}

export function logout() {
  localStorage.removeItem("neurolink_state");
  Object.keys(state).forEach(key => delete state[key]);
  Object.assign(state, JSON.parse(JSON.stringify(defaultState)));
  notify();
}

export function setApiKey(key) {
  state.settings.geminiApiKey = key;
  notify();
}

export function resetState() {
  const userBackup = state.user ? { ...state.user } : null;
  const keyBackup = state.settings.geminiApiKey;
  const activeSubId = state.learningTwin.subjectId || "python";
  
  Object.keys(state).forEach(key => delete state[key]);
  Object.assign(state, JSON.parse(JSON.stringify(defaultState)), {
    user: userBackup,
    settings: { geminiApiKey: keyBackup }
  });
  
  if (state.user) {
    initializeSubject(activeSubId);
  }
  notify();
}
