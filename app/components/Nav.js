"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { profile } from "../../data/site";
import Icon from "./Icon";

const sections = [["work", "Work"], ["experience", "Experience"], ["stack", "Toolkit"], ["testimonials", "Kind words"]];

export default function Nav() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const menuButton = useRef(null);
  const pathname = usePathname();

  useEffect(() => { setTheme(document.documentElement.dataset.theme || "light"); }, []);
  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") { setMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);
  useEffect(() => {
    setMenuOpen(false);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: "-15% 0px -65% 0px" });
    document.querySelectorAll("main section[id], footer[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("portfolio-theme", next); } catch {}
  }

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="shell nav-inner">
        <a href="/#top" className="brand" aria-label={`${profile.name} home`}>
          <span className="brand-mark">t<span>.</span></span>
          <span>Tanvir<span className="brand-last"> Ahmed Khan</span><span className="brand-dot">.</span></span>
        </a>
        <div className="desktop-nav">
          {sections.map(([id, label]) => <a key={id} href={`/#${id}`} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="icon-button" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}><Icon name={theme === "dark" ? "sun" : "moon"} size={18} /></button>
          <a className="nav-contact" href="/#contact">Let’s talk <Icon name="diagonal" size={15} /></a>
          <button ref={menuButton} className="icon-button menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-nav" aria-label={menuOpen ? "Close menu" : "Open menu"}><Icon name={menuOpen ? "close" : "menu"} /></button>
        </div>
      </div>
      {menuOpen && <div id="mobile-nav" className="mobile-nav shell" onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}>
        {sections.map(([id, label], index) => <a key={id} href={`/#${id}`} onClick={() => setMenuOpen(false)}><span>0{index + 1}</span>{label}<Icon name="diagonal" size={18} /></a>)}
        <a href="/#contact" onClick={() => setMenuOpen(false)}><span>05</span>Contact<Icon name="diagonal" size={18} /></a>
      </div>}
    </nav>
  );
}
