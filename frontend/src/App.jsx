import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";

function AuthModal({ isOpen, onClose, onSubmit }) {
  AuthModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };
  const [activeTab, setActiveTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    skillLevel: "beginner",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(activeTab, formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="custom_modal">
        <div className="modal-header">
          <h2 className="modal-title">Welcome to KickIT</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </button>
            </div>
          </div>

          {activeTab === "signup" && (
            <>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-input-container">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                  </button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="skillLevel">Skill Level</label>
                <select
                  id="skillLevel"
                  name="skillLevel"
                  style={{ height: "50px" }}
                  value={formData.skillLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="Advance">Pro</option>
                </select>
              </div>
            </>
          )}

          <button type="submit" className="submit-button">
            {activeTab === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleAuth = (type, data) => {
    console.log("Auth type:", type, "Form data:", data);
    setIsAuthModalOpen(false);
  };

  return (
    <div className="app">
      <main className="main-content">
        <h1 className="title">
          Game On
          <br />
          Anytime
        </h1>
        <p className="subtitle">
          Anytime, anywhere - get ready to play, book your favorite sports venue
          in seconds!
        </p>
        <button className="cta-button" onClick={() => setIsAuthModalOpen(true)}>
          Get Started
        </button>
      </main>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSubmit={handleAuth}
      />
    </div>
  );
}

export default App;
