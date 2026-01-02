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

  useEffect(() => {
    if (!source || !destination) return;

    fetch(`${API_BASE}/search-route?source=${source}&destination=${destination}`)
      .then(res => res.json())
      .then(data => {
        let normalized = [];

        if (Array.isArray(data)) {
          normalized = data;
        } else {
          if (Array.isArray(data.direct_routes)) {
            normalized = normalized.concat(data.direct_routes);
          }
          if (Array.isArray(data.connected_routes)) {
            normalized = normalized.concat(data.connected_routes);
          }
          if (Array.isArray(data.routes)) {
            normalized = data.routes;
          }
        }

        setRoutes(normalized);
      })
      .catch(() => setRoutes([]));
  }, [source, destination]);

 return (
  <div className="page">
    <h2>Available Routes</h2>

    {routes.length === 0 && (
      <p style={{ color: "var(--text-muted)" }}>No routes found</p>
    )}

    {routes.map((r, i) => (
      <div
        key={i}
        className="route-card"
        onClick={() => setSelected(r)}
      >
        <div className="route-left">
          <span className="route-badge">{r.bus_number}</span>
          <span className="route-text">
            {r.from} → {r.to}
          </span>
        </div>

        <span className="route-arrow">›</span>
      </div>
    ))}

    {selected && (
      <RouteModal
        route={selected}
        onClose={() => setSelected(null)}
      />
    )}
  </div>
);
}