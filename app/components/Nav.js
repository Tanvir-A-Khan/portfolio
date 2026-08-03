"use client";

import { useEffect, useState } from "react";
import { profile } from "../../data/site";

export default function Nav() {
  const [theme, setTheme] = useState("dark");

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
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
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
        </div>
      </div>
    </nav>
  );
}
