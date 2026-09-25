"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { slugify } from "../../lib/slug";

const rowVisit =
  "font-(family-name:--font-mono) text-sm text-(--mark) hover:underline";

export default function ExperienceAccordion({ experience }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div
      className="job-list mt-8 flex flex-col gap-4"
      onMouseLeave={() => setOpenIndex(0)}
    >
      {experience.map((j, i) => {
        const isOpen = i === openIndex;
        return (
          <Reveal key={j.org + j.period} delay={i * 50}>
            <div
              className="job relative grid grid-cols-[auto_1fr] items-start gap-x-6 gap-y-2 rounded-2xl border border-(--line) bg-(--glass-bg) bg-[image:linear-gradient(152deg,var(--glass-sheen),transparent_58%)] p-6 shadow-(--shadow) transition-transform hover:-translate-y-0.5 lg:grid-cols-[auto_1fr_auto]"
              onMouseMove={() => {
                if (openIndex !== i) setOpenIndex(i);
              }}
            >
              <span
                className={`job-expand-icon absolute right-6 top-6 text-(--mark) transition-transform duration-300 lg:top-1/2 lg:-translate-y-1/2 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
              <span className="font-(family-name:--font-mono) text-xs text-(--muted)">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pr-8 lg:pr-0">
                <p className="flex items-center gap-2 font-medium text-(--paper)">
                  {j.org}
                  {j.note ? `, ${j.note}` : ""}
                  {j.period.includes("Present") && (
                    <span className="inline-flex items-center rounded-full bg-(--mark)/15 px-2 py-0.5 font-(family-name:--font-mono) text-[10px] uppercase tracking-wide text-(--mark)">
                      Current
                    </span>
                  )}
                </p>
                <span className="mt-1 block text-sm text-(--muted)">{j.title}</span>

                <div
                  className={`job-detail-wrap grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="job-detail-inner flex min-h-0 flex-col gap-2 pt-2">
                    {j.relatedWork?.map((w) => (
                      <a key={w} className={rowVisit} href={`#work-${slugify(w)}`}>
                        → {w}
                      </a>
                    ))}
                    {j.detail && <p className="text-sm leading-relaxed text-(--muted)">{j.detail}</p>}
                  </div>
                </div>
              </div>
              <span className="col-span-2 font-(family-name:--font-mono) text-xs text-(--muted) lg:col-span-1 lg:whitespace-nowrap lg:text-right">
                {j.period} · {j.place}
              </span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
