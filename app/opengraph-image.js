import { ImageResponse } from "next/og";
import { profile } from "../data/site";

export const runtime = "edge";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#08090b",
          backgroundImage:
            "radial-gradient(1100px 700px at 12% -10%, rgba(255,154,61,0.16), transparent 60%), radial-gradient(900px 650px at 100% 10%, rgba(232,163,61,0.1), transparent 55%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: 28,
            color: "#a8aeb6",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: "999px", backgroundColor: "#ff9a3d" }} />
          {profile.role} · {profile.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 72, fontWeight: 700, color: "#e8eaed", lineHeight: 1.1 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 34, color: "#e8eaed", lineHeight: 1.35, maxWidth: 980 }}>
            {profile.headline}
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 26, color: "#ff9a3d" }}>tanvirkhan.vercel.app</div>
      </div>
    ),
    { ...size }
  );
}
