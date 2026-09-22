"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix = "", label, duration = 900 }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(value);
      return;
    }

    let raf;
    const start = performance.now();
    const step = (t) => {
      const progress = Math.min((t - start) / duration, 1);
      setDisplay(Math.round(progress * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, value, duration]);

  return (
    <div className="stat" ref={ref}>
      <p className="stat-value">
        {display}
        <span className="stat-suffix">{suffix}</span>
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
