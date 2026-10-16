"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../lib/slug";
import Icon from "./Icon";

export default function WorkPreviewList({ projects }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(projects[0].name);
  const visible = projects.filter(p => filter === "all" || p.platform === filter);
  const active = visible.find(p => p.name === selected) || visible[0];
  const cover = active.screenshots?.[0];

  useEffect(() => {
    const selectFromHash = () => {
      const project = projects.find(p => `#work-${slugify(p.name)}` === window.location.hash);
      if (project) {
        setFilter("all");
        setSelected(project.name);
        document.getElementById("project-preview")?.scrollIntoView({ block: "start" });
      }
    };
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, [projects]);

  return <div className="work-showcase">
    <div className="work-toolbar"><div className="work-filters" aria-label="Filter projects">{[["all", "All work"], ["web", "Web"], ["mobile", "Mobile"]].map(([value, label]) => <button key={value} type="button" aria-pressed={filter === value} onClick={() => setFilter(value)}>{label}<span>{projects.filter(p => value === "all" || p.platform === value).length.toString().padStart(2, "0")}</span></button>)}</div><span className="work-toolbar-note">A selection of what I’ve built ↙</span></div>
    <article className="featured-project" id="project-preview" aria-label={`${active.name} project overview`}>
      <div className={`project-visual ${cover ? "has-screenshot" : "project-identity"}`}>
        <div className="project-visual-label"><span>{active.platform === "web" ? "Web application" : "Mobile experience"}</span><span>{active.year}</span></div>
        {cover ? active.platform === "mobile" ? <div className="project-phone"><Image key={cover.src} src={cover.src} alt={`${active.name} — ${cover.caption}`} width={1080} height={2400} sizes="190px" /></div> : <div className="project-browser"><div className="browser-bar"><span /><span /><span /><p>{active.name} / {cover.caption}</p></div><Image key={cover.src} src={cover.src} alt={`${active.name} — ${cover.caption}`} width={1000} height={600} sizes="(max-width: 760px) 90vw, 660px" /></div> : <div className="identity-art" aria-hidden="true"><span className="identity-monogram">{active.name.split(" ").map(w => w[0]).join("")}</span><span className="identity-name">{active.name}<span>↗</span></span></div>}
        <div className="project-visual-bottom"><span>{cover ? "A look inside the product" : "Independent design & development"}</span><Icon name="diagonal" size={18} /></div>
      </div>
      <div className="project-copy" key={active.name}>
        <div className="project-copy-content" tabIndex={0} role="region" aria-label={`${active.name} details`}>
        <p className="eyebrow"><span className="status-dot" />{active.published ? "Published on Google Play" : active.role + " development"}</p>
        <h3 className="project-title">{active.icon && <Image src={active.icon} alt="" width={36} height={36} />}<span>{active.name}</span></h3><p className="project-tagline">{active.tagline}</p><p className="project-body">{active.body}</p>
        <ul className="project-tags">{active.stack.map(s => <li key={s}>{s}</li>)}</ul>
        </div>
        <div className="project-links"><Link className="text-link" href={`/work/${slugify(active.name)}`}>Explore project <Icon name="diagonal" size={17} /></Link>{active.href && <a className="project-external" href={active.href} target="_blank" rel="noreferrer" aria-label={`Visit ${active.name}`}><Icon name="diagonal" size={18} /></a>}</div>
      </div>
    </article>
    <div className="project-selector" aria-label="Choose a project">{visible.map(p => <button id={`work-${slugify(p.name)}`} key={p.name} className={active.name === p.name ? "selected" : ""} type="button" aria-pressed={active.name === p.name} aria-controls="project-preview" onPointerEnter={(event) => { if (event.pointerType === "mouse") setSelected(p.name); }} onFocus={() => setSelected(p.name)} onClick={() => setSelected(p.name)}><span className={`project-selector-logo ${p.icon ? "is-app-icon" : ""}`}><Image src={p.selectorLogo || p.icon} alt="" width={44} height={44} sizes="44px" /></span><span className="project-selector-copy"><strong>{p.name}</strong><small>{p.platform === "web" ? "Web application" : p.name === "One Path" ? "Mobile game" : "Mobile app"}</small></span><Icon name="diagonal" size={18} /></button>)}</div>
  </div>;
}
