"use client";

import { useEffect, useState } from "react";
import { profile } from "../../data/site";

const SECTIONS = [
  { href: "/#work", label: "Work", num: "01" },
  { href: "/#experience", label: "Experience", num: "02" },
  { href: "/#stack", label: "Stack", num: "03" },
  { href: "/#contact", label: "Contact", num: "04" },
];

const themeBtn =
  "inline-flex items-center rounded-full border border-(--line) bg-(--glass-bg) px-4 py-2 text-xs font-(family-name:--font-mono) text-(--paper) transition-colors hover:bg-(--glass-hover)";

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
    <nav className="sticky top-0 z-50 border-b border-(--line) bg-(--header-bg) backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-4">
        <a href="/#top" className="font-(family-name:--font-display) text-lg font-semibold text-(--paper)">
          {profile.shortName}
        </a>

        <div className="hidden items-center gap-7 font-(family-name:--font-mono) text-sm text-(--muted) lg:flex">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} className="transition-colors hover:text-(--paper)">
              <span className="mr-1.5 text-(--mark)">{s.num}</span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden items-center gap-2 font-(family-name:--font-mono) text-xs text-(--muted) sm:inline-flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-(--mark)" aria-hidden="true" />
            {profile.location} · {profile.timezone} · {timeStr}
          </span>
          <a className={`${themeBtn} hidden sm:inline-flex`} href="/Tanvir_Ahmed_Khan_CV.docx" download>
            CV
          </a>
          <button
            type="button"
            className={themeBtn}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
          <button
            type="button"
            className={`${themeBtn} lg:hidden`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="grid grid-cols-2 gap-3 border-t border-(--line) px-6 py-5 font-(family-name:--font-mono) text-sm text-(--muted) lg:hidden">
          {SECTIONS.map((s) => (
            <a key={s.href} href={s.href} onClick={() => setMenuOpen(false)}>
              <span className="text-(--mark)">{s.num}</span> {s.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
