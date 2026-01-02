import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) return;

    // existing logic (DO NOT CHANGE)
    localStorage.setItem("loggedIn", "true");
    navigate("/", { replace: true });
  };

  return (
    <div className="login-page">
      <div className="login-card glass">
        <div className="login-header">
          <div className="login-icon">🚌</div>
          <h1>SPUF-314</h1>
          <p>Smart Public Urban Transport Finder</p>
        </div>

        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>

        <div className="login-footer">
          <span>New user?</span>
          <span className="register-text"> Register</span>
        </div>
      </div>
    </div>
  );
}