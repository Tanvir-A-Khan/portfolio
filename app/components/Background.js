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
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0 pointer-events-none bg-[image:radial-gradient(1100px_700px_at_15%_-10%,var(--glow-1),transparent_60%),radial-gradient(900px_650px_at_100%_10%,var(--glow-2),transparent_55%)]"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="fixed inset-0 z-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_80%_80%_at_50%_40%,black,transparent_100%)]"
      />
    </>
  );
}
