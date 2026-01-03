export default function RouteCard({ route, onClick }) {
  return (
   <div
  key={i}
  className="route-card"
  onClick={() => setSelected(r)}
>
  <div className="route-left">

    {/* BUS / TRANSFER INFO */}
    <div className="route-bus-line">
      {r.type === "direct" && r.route && (
        <span className="bus-pill">🚌 {r.route}</span>
      )}

      {r.type === "transfer" && (
        <>
          <span className="bus-pill">🚌 {r.first_route}</span>
          <span className="transfer-pill">🔄 {r.transfer_stop}</span>
          <span className="bus-pill">🚌 {r.second_route}</span>
        </>
      )}

      {r.is_shortest && (
        <span className="shortest-badge">⭐ Shortest</span>
      )}
    </div>

    {/* ROUTE TEXT */}
    <div className="route-text">
      {source} → {destination}
      <span className="route-stops">
        • {r.stop_count} stops
      </span>
    </div>

  </div>

  <span className="route-arrow">›</span>
</div>
  );}