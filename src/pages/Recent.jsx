import { useEffect, useState } from "react";
import "./Recent.css";

export default function Recent() {
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("recentRoutes")) || [];
    setRecent(data);
  }, []);

  return (
    <div className="recent-page">
      <h2 className="recent-title">Recent Searches</h2>

      {recent.length === 0 && (
        <p className="recent-empty">No recent searches</p>
      )}

      <div className="recent-list">
        {recent.map((r, i) => (
          <div key={i} className="recent-card">
            <div className="recent-left">
              <span className="recent-dot" />
              <div className="recent-text">
                <span>{r.from}</span>
                <span className="recent-arrow">→</span>
                <span>{r.to}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
