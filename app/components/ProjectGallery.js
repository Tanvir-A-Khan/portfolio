"use client";

import { ConfigProvider, Image, theme } from "antd";

export default function ProjectGallery({ images, projectName, variant = "side" }) {
  const isGrid = variant === "grid";
  const imgProps = isGrid
    ? { width: "100%", height: "auto", style: { aspectRatio: "1.93", objectFit: "cover" } }
    : { width: 150, height: 78, style: { objectFit: "cover" } };

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: "#ff9a3d",
          colorBgMask: "rgba(5, 6, 7, 0.86)",
          fontFamily: "var(--mono)",
        },
      }}
    >
      <div
        className={
          isGrid
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2"
            : "flex flex-wrap gap-3"
        }
      >
        <Image.PreviewGroup>
          {images.map((shot) => (
            <div className="flex flex-col gap-2" key={shot.src}>
              <Image
                src={shot.src}
                alt={`${projectName} — ${shot.caption}`}
                {...imgProps}
                rootClassName="overflow-hidden rounded-xl border border-(--line)"
              />
              <span className="font-(family-name:--font-mono) text-xs text-(--muted)">
                {shot.caption}
              </span>
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </ConfigProvider>
  );
}
