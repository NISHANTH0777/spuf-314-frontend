import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Settings.css";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/login", { replace: true });
  };

  return (
    <div className="settings-page">
      <h2 className="settings-title">Settings</h2>

      {/* THEME CARD */}
      <div className="settings-card glass">
        <div className="settings-row">
          <div>
            <h4>Dark Mode</h4>
            <p>Reduce eye strain and save battery</p>
          </div>

          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>

      {/* LOGOUT CARD */}
      <div className="settings-card glass logout-card">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}
