// Main App Entrypoint and Router
import { state, loadFromLocalStorage } from './state.js';
import { renderLanding } from './views/landing.js';
import { renderAuth } from './views/auth.js';
import { renderOnboarding } from './views/onboarding.js';
import { renderAssessment } from './views/assessment.js';
import { renderDashboard } from './views/dashboard.js';

// Global notification modal controller
export function showNotification(title, message) {
  const modal = document.getElementById("global-modal");
  const titleEl = document.getElementById("modal-title");
  const messageEl = document.getElementById("modal-message");
  
  if (modal && titleEl && messageEl) {
    titleEl.textContent = title;
    messageEl.textContent = message;
    modal.classList.remove("hidden");
  } else {
    alert(`${title}: ${message}`);
  }
}

// Initialize application
document.addEventListener("DOMContentLoaded", () => {
  // Load saved session
  loadFromLocalStorage();
  
  // Wire up global modal close buttons
  const modal = document.getElementById("global-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const confirmBtn = document.getElementById("modal-confirm-btn");
  
  const closeModal = () => modal.classList.add("hidden");
  
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (confirmBtn) confirmBtn.addEventListener("click", closeModal);
  
  // Setup router hash change handler
  window.addEventListener("hashchange", handleRouting);
  
  // Run initial route
  handleRouting();
});

// View router function
function handleRouting() {
  const hash = window.location.hash || "#landing";
  const appContainer = document.getElementById("app");
  
  if (!appContainer) return;
  
  // Auth guards
  const isAuthenticated = !!state.user;
  const isOnboarded = isAuthenticated && !!state.user.learningGoal;
  const hasAssessment = isAuthenticated && state.assessmentHistory.length > 0;
  
  // Redirect unauthenticated users
  if (!isAuthenticated && !["#landing", "#auth"].includes(hash)) {
    window.location.hash = "#landing";
    return;
  }
  
  // Redirect authenticated but non-onboarded users
  if (isAuthenticated && !isOnboarded && hash !== "#onboarding") {
    window.location.hash = "#onboarding";
    return;
  }
  
  // Redirect to assessment if onboarding completed but no assessment history
  if (isAuthenticated && isOnboarded && !hasAssessment && hash === "#dashboard") {
    window.location.hash = "#assessment";
    return;
  }
  
  // Clear layout classes
  appContainer.className = "";
  
  // Route logic
  if (hash === "#landing") {
    renderLanding(appContainer);
  } else if (hash === "#auth") {
    renderAuth(appContainer);
  } else if (hash === "#onboarding") {
    renderOnboarding(appContainer);
  } else if (hash === "#assessment") {
    renderAssessment(appContainer);
  } else if (hash === "#dashboard") {
    renderDashboard(appContainer);
  } else {
    // Default fallback
    window.location.hash = "#landing";
  }
}
