import { useState } from "react";

const STATIONS = ["Majestic","Silk Board","BTM","Whitefield","Electronic City"];

export default function StationInput({ label, value, onChange }) {
  const [open, setOpen] = useState(false);

  const filtered = STATIONS.filter(s =>
    s.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <div className="station-input">
      <input
        className="input"
        placeholder={label}
        value={value}
        onChange={e => { onChange(e.target.value); setOpen(true); }}
      />

      {open && value && (
        <div className="suggestions">
          {filtered.map((s, i) => (
            <div key={i} onClick={() => { onChange(s); setOpen(false); }}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
