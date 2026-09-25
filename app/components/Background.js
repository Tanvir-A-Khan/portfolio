"use client";

import { useEffect, useRef } from "react";
import { initParticleField } from "../../lib/particles";

export default function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const stop = initParticleField(el);
    return () => stop();
  }, []);

  return (
    <>
      <div className="bg-glow" aria-hidden="true" />
      <canvas ref={canvasRef} className="bg-particles" aria-hidden="true" />
    </>
  );
}
