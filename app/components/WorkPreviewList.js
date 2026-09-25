"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../lib/slug";

export default function WorkPreviewList({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];
  const cover = active.screenshots?.[0];

  return (
    <div className="work-hover">
      <div className="work-hover-names">
        {projects.map((p, i) => (
          <button
            key={p.name}
            type="button"
            id={`work-${slugify(p.name)}`}
            className={i === activeIndex ? "work-name-item is-active" : "work-name-item"}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
          >
            <span className="work-name-index">{String(i + 1).padStart(2, "0")}</span>
            <span className="work-name-text">{p.name}</span>
            <span className="work-name-year">{p.year}</span>
          </button>
        ))}
      </div>

      <div className="work-hover-preview">
        {cover && (
          <div className="work-preview-image">
            <Image
              src={cover.src}
              alt={`${active.name} — ${cover.caption}`}
              width={480}
              height={280}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        )}

        <div className="row-meta">
          <span>{active.year}</span>
          <span>·</span>
          <span>{active.role}</span>
        </div>
        <h3 className="row-name">{active.name}</h3>
        <p className="row-tagline">{active.tagline}</p>
        <p className="row-body">{active.body}</p>

        <ul className="tags" style={{ marginTop: "1.1rem" }}>
          {active.stack.map((s) => (
            <li className="tag" key={s}>
              {s}
            </li>
          ))}
        </ul>

        <div className="row-links">
          <Link className="row-visit" href={`/work/${slugify(active.name)}`}>
            Full case study →
          </Link>
          {active.href && (
            <a className="row-visit" href={active.href} target="_blank" rel="noreferrer">
              Visit site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
