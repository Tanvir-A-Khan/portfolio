export default function LayerBars({ metrics }) {
  if (!metrics) return null;

  return (
    <div className="layer-bars">
      <p className="layer-bars-label">{metrics.label}</p>
      {metrics.data.map((row) => (
        <div className="layer-bar" key={row.label}>
          <span className="layer-bar-label">{row.label}</span>
          <span className="layer-bar-track">
            <span className="layer-bar-fill" style={{ width: `${row.value}%` }} />
          </span>
          <span className="layer-bar-value">{row.value}%</span>
        </div>
      ))}
    </div>
  );
}
