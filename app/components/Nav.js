"use client";

import { useEffect, useState } from "react";
import { profile } from "../../data/site";

const SECTIONS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <nav className="nav">
      <div className="shell nav-inner">
        <a href="#top" className="nav-mark">
          {profile.shortName}
        </a>

        <div className="nav-links">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href}>
              {s.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <span className="status">
            <span className="status-dot" aria-hidden="true" />
            {profile.location} · {profile.timezone}
          </span>
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
              {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
