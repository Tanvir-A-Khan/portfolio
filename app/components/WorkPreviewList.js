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
    <div className="mt-6 grid gap-8 lg:grid-cols-[280px_1fr]">
      <div className="flex min-h-[220px] flex-col gap-1 lg:min-h-[280px]">
        {projects.map((p, i) => (
          <button
            key={p.name}
            type="button"
            id={`work-${slugify(p.name)}`}
            className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
              i === activeIndex
                ? "border-[var(--line)] bg-[var(--glass-bg)]"
                : "border-transparent hover:bg-[var(--glass-hover)]"
            }`}
            onMouseEnter={() => setActiveIndex(i)}
            onFocus={() => setActiveIndex(i)}
            onClick={() => setActiveIndex(i)}
          >
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-sm text-[var(--paper)]">{p.name}</span>
            <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">{p.year}</span>
          </button>
        ))}
      </div>

      <div className="relative min-h-[380px] rounded-2xl border border-[var(--line)] bg-[var(--glass-panel-bg)] p-6 shadow-[var(--shadow)] lg:min-h-[460px]">
        {cover && (
          <div className="relative mb-5 overflow-hidden rounded-xl border border-[var(--line)]">
            <Image
              src={cover.src}
              alt={`${active.name} — ${cover.caption}`}
              width={480}
              height={280}
              style={{ objectFit: "cover", width: "100%", height: "auto" }}
            />
          </div>
        )}

        <div className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
          <span>{active.year}</span>
          <span>·</span>
          <span>{active.role}</span>
        </div>
        <h3 className="mt-2 flex flex-wrap items-center gap-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--paper)]">
          {active.name}
          {active.published && (
            <span className="inline-flex items-center rounded-full border border-[var(--verify)]/40 bg-[var(--verify)]/10 px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] font-normal uppercase tracking-wide text-[var(--verify)]">
              Published on Google Play
            </span>
          )}
        </h3>
        <p className="mt-1 text-sm text-[var(--mark)]">{active.tagline}</p>
        <p className="mt-3 leading-relaxed text-[var(--muted)]">{active.body}</p>

        <ul className="mt-[1.1rem] flex flex-wrap gap-2">
          {active.stack.map((s) => (
            <li
              className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]"
              key={s}
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            className="font-[family-name:var(--font-mono)] text-sm text-[var(--mark)] hover:underline"
            href={`/work/${slugify(active.name)}`}
          >
            Full case study →
          </Link>
          {active.href && (
            <a
              className="font-[family-name:var(--font-mono)] text-sm text-[var(--mark)] hover:underline"
              href={active.href}
              target="_blank"
              rel="noreferrer"
            >
              Visit site ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
