"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { profile } from "../../data/site";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const duration = 1400;
    const start = performance.now();
    let raf;
    let exitTimer;

    const step = (t) => {
      const linear = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - linear, 3);
      setProgress(Math.round(eased * 100));

      if (linear < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setDone(true);
        exitTimer = window.setTimeout(() => {
          document.body.style.overflow = prevOverflow;
          window.scrollTo(0, 0);
          setHidden(true);
        }, 700);
      }
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(exitTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  if (hidden) return null;

  return (
    <div className={done ? "preloader is-done" : "preloader"} aria-hidden="true">
      <div className="preloader-hello">
        <Image src="/hello.png" alt="" width={220} height={178} priority />
      </div>
      <div className="preloader-row">
        <span className="preloader-name">{profile.shortName}</span>
        <span className="preloader-pct">{progress}</span>
      </div>
      <div className="preloader-track">
        <div className="preloader-fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
