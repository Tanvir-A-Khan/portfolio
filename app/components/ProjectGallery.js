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
      <div className={isGrid ? "row-gallery row-gallery-grid" : "row-gallery"}>
        <Image.PreviewGroup>
          {images.map((shot) => (
            <div className="row-gallery-item" key={shot.src}>
              <Image
                src={shot.src}
                alt={`${projectName} — ${shot.caption}`}
                {...imgProps}
                rootClassName="row-gallery-thumb"
              />
              <span className="row-shot-caption">{shot.caption}</span>
            </div>
          ))}
        </Image.PreviewGroup>
      </div>
    </ConfigProvider>
  );
}
