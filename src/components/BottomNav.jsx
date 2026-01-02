import { NavLink } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="bottom-nav glass">
      <NavLink to="/" className="nav-item">🔍<br />Search</NavLink>
      <NavLink to="/routes" className="nav-item">🚌<br />Routes</NavLink>
      <NavLink to="/recent" className="nav-item">🕒<br />Recent</NavLink>
      <NavLink to="/settings" className="nav-item">⚙️<br />Settings</NavLink>
    </div>
  );
}
