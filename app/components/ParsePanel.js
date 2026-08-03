import { parseDemo } from "../../data/site";

// Split the raw string on each highlighted token so we can wrap them.
function highlight(raw, marks) {
  const escaped = marks.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");

  return raw.split(pattern).map((chunk, i) =>
    marks.includes(chunk) ? (
      <span className="mark" key={i}>
        {chunk}
      </span>
    ) : (
      <span key={i}>{chunk}</span>
    )
  );
}

export default function ParsePanel() {
  return (
    <div className="parse">
      <div className="parse-head">
        <span>Transaction SMS → ledger entry</span>
        <span>{parseDemo.source}</span>
      </div>

      <div className="parse-body">
        <div className="parse-in">
          <div className="parse-label">Raw input</div>
          <p className="parse-raw">{highlight(parseDemo.raw, parseDemo.marks)}</p>
        </div>

        <div className="parse-out">
          <div className="parse-label">Extracted</div>
          <div>
            {parseDemo.fields.map((f, i) => (
              <div
                className="field"
                key={f.key}
                style={{ animationDelay: `${300 + i * 110}ms` }}
              >
                <span className="field-k">{f.key}</span>
                <span className="field-v">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
