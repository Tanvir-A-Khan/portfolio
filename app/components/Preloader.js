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
    <div
      className={`preloader fixed inset-0 z-[200] flex flex-col items-center justify-center gap-6 bg-(--ink) transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        done ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-hidden="true"
    >
      <div className="opacity-0 scale-95 [animation:hello-in_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_forwards] motion-reduce:opacity-100 motion-reduce:scale-100">
        <Image src="/hello.png" alt="" width={220} height={178} priority />
      </div>
      <div className="flex items-baseline gap-3 font-(family-name:--font-mono) text-(--muted)">
        <span className="text-sm tracking-wide text-(--paper)">{profile.shortName}</span>
        <span className="text-sm after:ml-0.5 after:content-['%'] after:text-(--muted)">
          {progress}
        </span>
      </div>
      <div className="h-[2px] w-40 overflow-hidden rounded-full bg-(--line)">
        <div
          className="h-full bg-(--mark) transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
