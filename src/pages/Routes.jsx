import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RouteModal from "../components/RouteModal";
import { API_BASE } from "../api";
import "./Routes.css";

export default function Routes() {
  const [params] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");

  const [routes, setRoutes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [shortestRoute, setShortestRoute] = useState(null);

 useEffect(() => {
  if (!source || !destination) return;

  fetch(`${API_BASE}/search-route?source=${source}&destination=${destination}`)
    .then((res) => res.json())
    .then((data) => {
      setRoutes(Array.isArray(data.routes) ? data.routes : []);
      setShortestRoute(data.shortest_route || null);
    })
    .catch((err) => {
      console.error("Route fetch error:", err);
      setRoutes([]);
      setShortestRoute(null);
    });
}, [source, destination]);

return (
  <div className="page">
    <h2>Available Routes</h2>

    {routes.length === 0 && (
      <p style={{ color: "var(--text-muted)" }}>No routes found</p>
    )}

    {routes.map((r, i) => {
      console.log("ROUTE OBJECT:", r);
      const isShortest =
        shortestRoute &&
        JSON.stringify(r) === JSON.stringify(shortestRoute);

      return (
        <div
          key={i}
          className={`route-card ${isShortest ? "shortest-route" : ""}`}
          onClick={() => setSelected(r)}
        >
          <div className="route-left">
            {/* DIRECT ROUTE */}
            {r.type === "direct" && (
              <span className="route-badge">🚌 {r.bus_number}</span>
            )}

            {/* ONE TRANSFER ROUTE */}
            {r.type === "one-transfer" && (
              <span className="route-badge">
                🚌 {r.bus_1} → 🔁 → 🚌 {r.bus_2}
              </span>
            )}

           <span className="route-text">
  {r.type === "direct" && (
    <>
      {r.from} → {r.to}
    </>
  )}

  {r.type === "1-transfer" && (
    <>
      {r.from}
      <span className="transfer-dot"> ● </span>
      <strong>{r.transfer_at}</strong>
      <span className="transfer-dot"> ● </span>
      {r.to}
    </>
  )}
</span>


            <span className="route-meta">
              {r.stop_count} stops
              {r.type === "one-transfer" && " • 1 Transfer"}
            </span>
          </div>

          <span className="route-arrow">›</span>

          {isShortest && (
            <span className="shortest-badge">⭐ Shortest</span>
          )}
        </div>
      );
    })}

    {selected && (
      <RouteModal
        route={selected}
        onClose={() => setSelected(null)}
      />
    )}
  </div>
);
}