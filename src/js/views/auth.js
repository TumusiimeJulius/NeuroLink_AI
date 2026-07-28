// Authentication View (Login and Register)
import { register, login } from '../state.js';
import { showNotification } from '../app.js';
import { SUBJECTS } from '../data/subjects.js';


export function renderAuth(container) {
  let isLoginMode = true;

  const sortedSubjects = Object.entries(SUBJECTS)
    .map(([id, config]) => ({ id, name: config.name }))
    .sort((a, b) => a.name.localeCompare(b.name));

  const updateView = () => {
    container.innerHTML = `
      <div class="auth-container">
        <div class="glass-card auth-card animate-fade">
          <div class="auth-header">
            <div class="logo" style="justify-content: center; margin-bottom: 16px;">
              <div class="logo-icon">🧠</div>
              <span>NeuroLink AI</span>
            </div>
            <h2>${isLoginMode ? "Welcome Back" : "Create Account"}</h2>
            <p>${isLoginMode ? "Log in to access your Learning Twin" : "Set up your adaptive learning profile"}</p>
          </div>

          <form id="auth-form">
            ${!isLoginMode ? `
              <div class="input-group">
                <label for="reg-name">Full Name</label>
                <input type="text" id="reg-name" class="input-control" required placeholder="e.g. Sarah Connor">
              </div>
            ` : ""}

            <div class="input-group">
              <label for="auth-email">Email Address</label>
              <input type="email" id="auth-email" class="input-control" required placeholder="name@domain.com">
            </div>

            <div class="input-group">
              <label for="auth-password">Password</label>
              <input type="password" id="auth-password" class="input-control" required placeholder="••••••••">
            </div>

            ${!isLoginMode ? `
              <div class="input-group">
                <label for="reg-goal">Learning Goal / Subject</label>
                <select id="reg-goal" class="input-control" required>
                  ${sortedSubjects.map(sub => `<option value="${sub.id}">${sub.name}</option>`).join("")}
                </select>
              </div>
              
              <div class="input-group">
                <label for="reg-style">Preferred Explanation Style</label>
                <select id="reg-style" class="input-control" required>
                  <option value="examples_first">Show code examples first</option>
                  <option value="short_explanations">Keep it short & bullet-pointed</option>
                  <option value="detailed_explanations">Explain deeply with theory</option>
                  <option value="practice_first">Challenge me with practice first</option>
                </select>
              </div>
            ` : ""}

            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">
              ${isLoginMode ? "Login" : "Register & Start"}
            </button>
          </form>

          <div class="auth-switch">
            ${isLoginMode ? `
              Don't have an account? <a href="#" id="toggle-auth-mode">Sign up</a>
            ` : `
              Already have an account? <a href="#" id="toggle-auth-mode">Log in</a>
            `}
          </div>

          ${isLoginMode ? `
            <div style="margin-top: 24px; padding: 12px; background: rgba(6, 182, 212, 0.05); border: 1px dashed rgba(6, 182, 212, 0.2); border-radius: 8px; font-size: 0.85rem; text-align: center;">
              <span style="color: var(--color-secondary); font-weight: 600; display: block; margin-bottom: 4px;">💡 Hackathon Quick Login</span>
              Email: <code style="color: #fff;">sarah@edu.com</code><br>
              Password: <code style="color: #fff;">python123</code>
            </div>
          ` : ""}
        </div>
      </div>
    `;

    // Wire up events
    const form = container.querySelector("#auth-form");
    form.addEventListener("submit", handleFormSubmit);

    const toggleLink = container.querySelector("#toggle-auth-mode");
    toggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      isLoginMode = !isLoginMode;
      updateView();
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const email = container.querySelector("#auth-email").value;
    const password = container.querySelector("#auth-password").value;

    if (isLoginMode) {
      const success = login(email, password);
      if (success) {
        window.location.hash = "#dashboard";
      } else {
        showNotification("Login Failed", "Invalid email or password. Please try again or use the Hackathon Quick Login account.");
      }
    } else {
      const name = container.querySelector("#reg-name").value;
      const selectedSubjectId = container.querySelector("#reg-goal").value;
      const selectedSubjectName = SUBJECTS[selectedSubjectId]?.name || selectedSubjectId;
      const style = container.querySelector("#reg-style").value;

      if (!name || !email || !password) {
        showNotification("Registration Failed", "Please fill in all required fields.");
        return;
      }

      register({
        name,
        email,
        password,
        learningGoal: selectedSubjectName,
        subjectId: selectedSubjectId,
        learningStyle: style
      });

      window.location.hash = "#onboarding";
    }
  };

  updateView();
}
