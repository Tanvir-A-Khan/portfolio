"use client";

import { useState } from "react";
import Icon from "./Icon";
import { slugify } from "../../lib/slug";

export default function ExperienceAccordion({ experience }) {
  const [openIndex, setOpenIndex] = useState(0);
  return <div className="job-list">{experience.map((job, index) => {
    const isOpen = index === openIndex;
    return <article className={`job ${isOpen ? "job-open" : ""}`} key={job.org} onPointerEnter={(event) => { if (event.pointerType === "mouse") setOpenIndex(index); }}>
      <button className="job-toggle" type="button" aria-expanded={isOpen} aria-controls={`job-${index}`} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
        <span className="job-number">0{index + 1}</span><span className="job-summary"><span className="job-company">{job.org}{job.period.includes("Present") && <span className="current-label">Current</span>}</span><span className="job-title">{job.title}</span><span className="job-period">{job.period}</span></span><span className="job-expand"><Icon name={isOpen ? "close" : "plus"} size={18} /></span>
      </button>
      <div id={`job-${index}`} className="job-detail-grid" aria-hidden={!isOpen} inert={!isOpen}><div className="job-detail-clip"><div className="job-detail"><p className="job-location">{job.place}{job.note && ` · ${job.note}`}</p><p>{job.detail}</p>{job.relatedWork?.map(name => <a className="text-link" href={`/#work-${slugify(name)}`} key={name}>View {name}<Icon name="diagonal" size={15} /></a>)}</div></div></div>
    </article>;
  })}</div>;
}
