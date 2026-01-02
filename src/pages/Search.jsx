import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaExchangeAlt } from "react-icons/fa";
import "./Search.css";

export default function Search() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
  if (!from || !to) return;
// 🔹 GET existing recent searches
  const prev = JSON.parse(localStorage.getItem("recentRoutes")) || [];

  // 🔹 NEW search
  const newEntry = { from, to };

  // 🔹 Avoid duplicates
  const filtered = prev.filter(
    r => !(r.from === from && r.to === to)
  );

  // 🔹 Save latest on top (max 5)
  const updated = [newEntry, ...filtered].slice(0, 5);

  localStorage.setItem("recentRoutes", JSON.stringify(updated));

  // Navigate
  navigate(`/routes?source=${from}&destination=${to}`);
};
  return (
    <div className="home-wrapper">
      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-content">
          <div className="app-icon">🚌</div>
          <h1>SPUF-314</h1>
          <p className="subtitle">Smart Public Urban Transport Finder</p>
          <span className="tagline">✨ Find your bus route instantly</span>
        </div>
      </div>

      {/* GLASS SEARCH CARD */}
      <div className="search-card glass">
        <h2>
          <FaSearch /> Find Your Route
        </h2>

        <div className="input-group">
          <span className="dot green"></span>
          <input
            placeholder="From (Source Bus Stop)"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>

        <div className="swap-btn">
          <FaExchangeAlt />
        </div>

        <div className="input-group">
          <span className="dot orange"></span>
          <input
            placeholder="To (Destination Bus Stop)"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          <FaSearch /> Find Routes
        </button>
      </div>
    </div>
  );
}
