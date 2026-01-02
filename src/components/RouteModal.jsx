export default function RouteModal({ route, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <h3>Bus {route.bus_number}</h3>

        <ul>
          {route.stops.map((stop, i) => (
            <li key={i}>{stop}</li>
          ))}
        </ul>

        <button onClick={onClose} style={{ marginTop: "14px", width: "100%" }}>
          Close
        </button>
      </div>
    </div>
  );
}
