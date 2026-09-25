"use client";

import { useEffect, useState } from "react";
import { profile } from "../../data/site";

const SECTIONS = [
  { href: "/#work", label: "Work", num: "01" },
  { href: "/#experience", label: "Experience", num: "02" },
  { href: "/#stack", label: "Stack", num: "03" },
  { href: "/#contact", label: "Contact", num: "04" },
];

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [now, setNow] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const timeStr = now ? now.toLocaleTimeString("en-GB", { hour12: false }) : "--:--:--";

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="/#top" className="nav-mark">
          {profile.shortName}
        </a>

        <div className="nav-links">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href}>
              <span className="nav-num">{s.num}</span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.location} · {profile.timezone} · {timeStr}
          </span>
          <a className="theme-btn nav-cv" href="/Tanvir_Ahmed_Khan_CV.docx" download>
            CV
          </a>
          <button
            type="button"
            className="theme-btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className="menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}>
              <span className="nav-num">{s.num}</span> {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
