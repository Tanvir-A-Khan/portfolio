import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import Icon from "../../components/Icon";
import ProjectGallery from "../../components/ProjectGallery";
import { profile, work } from "../../../data/site";
import { slugify } from "../../../lib/slug";

export function generateStaticParams() {
  return work.map(p => ({ slug: slugify(p.name) }));
}
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = work.find(p => slugify(p.name) === slug);
  return project ? { title: `${project.name} — ${profile.name}`, description: project.tagline } : {};
}
export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = work.findIndex(p => slugify(p.name) === slug);
  if (index === -1) notFound();
  const project = work[index];
  const prev = work[(index - 1 + work.length) % work.length];
  const next = work[(index + 1) % work.length];
  return <><Nav /><main id="main-content" tabIndex={-1} className="case-study shell"><article>
    <Link className="text-link" href="/#work"><span aria-hidden="true">←</span> Back to selected work</Link>
    <header className="case-hero"><p className="eyebrow"><span>{project.platform === "web" ? "Web application" : "Mobile experience"}</span>{project.year} / {project.role}</p><h1>{project.name}<span className="brand-dot">.</span></h1><p className="project-tagline">{project.tagline}</p><ul className="project-tags">{project.stack.map(s => <li key={s}>{s}</li>)}</ul></header>
    <p className="case-body">{project.body}</p>
    {project.href && <div className="mt-7"><a className="button button-primary" href={project.href} target="_blank" rel="noreferrer">{project.published ? "View on Google Play" : "Visit project"}<Icon name="diagonal" size={18} /></a></div>}
    {project.screenshots?.length > 0 && <section className="case-gallery" aria-label="Project screenshots"><ProjectGallery images={project.screenshots} projectName={project.name} variant={project.platform === "mobile" ? "mobile" : "grid"} /></section>}
    {project.retro && <div className="mt-10 grid gap-8 border-t border-(--line) pt-8 sm:grid-cols-2">{[["What went well", project.retro.wentWell], ["What I’d change", project.retro.wouldChange]].map(([label, items]) => <section key={label}><h2 className="mb-4 font-medium">{label}</h2><ul className="space-y-3 text-sm leading-relaxed text-(--muted)">{items.map(item => <li key={item}>{item}</li>)}</ul></section>)}</div>}
    <nav className="case-navigation" aria-label="More projects"><Link href={`/work/${slugify(prev.name)}`}><small>← Previous project</small><strong>{prev.name}</strong></Link><Link href={`/work/${slugify(next.name)}`}><small>Next project →</small><strong>{next.name}</strong></Link></nav>
    <footer className="case-footer"><span>{profile.name}</span><Link className="text-link" href="/#contact">Let’s build together<Icon name="diagonal" size={16} /></Link></footer>
  </article></main></>;
}
