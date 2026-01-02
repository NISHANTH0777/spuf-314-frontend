export default function RouteCard({ route, onClick }) {
  return (
    <div className="route-card" onClick={onClick}>
      <div className="route-left">
        <span className="route-badge">{route.bus_number}</span>
        <span className="route-text">
          {route.from} → {route.to}
        </span>
      </div>
      <span className="route-arrow">›</span>
    </div>
  );
}
