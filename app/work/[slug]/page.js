import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../components/Nav";
import ProjectGallery from "../../components/ProjectGallery";
import { profile, work } from "../../../data/site";
import { slugify } from "../../../lib/slug";

export function generateStaticParams() {
  return work.map((p) => ({ slug: slugify(p.name) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = work.find((p) => slugify(p.name) === slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${profile.name}`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const index = work.findIndex((p) => slugify(p.name) === slug);
  if (index === -1) notFound();

  const project = work[index];
  const prev = work[(index - 1 + work.length) % work.length];
  const next = work[(index + 1) % work.length];

  return (
    <>
      <Nav />

      <main>
        <article className="case">
          <div className="shell">
            <nav className="case-breadcrumb" aria-label="Breadcrumb">
              <Link href="/#work">Work</Link>
              <span aria-hidden="true">/</span>
              <span>{project.name}</span>
            </nav>

            <p className="eyebrow">
              {project.year} · {project.role}
            </p>
            <h1 className="case-title">{project.name}</h1>
            <p className="case-tagline">{project.tagline}</p>

            <ul className="tags">
              {project.stack.map((s) => (
                <li className="tag" key={s}>
                  {s}
                </li>
              ))}
            </ul>

            <p className="case-body">{project.body}</p>

            <div className="row-links">
              {project.href && (
                <a className="row-visit" href={project.href} target="_blank" rel="noreferrer">
                  Visit site ↗
                </a>
              )}
            </div>

            {project.screenshots && (
              <div className="case-gallery">
                <ProjectGallery
                  images={project.screenshots}
                  projectName={project.name}
                  variant="grid"
                />
              </div>
            )}

            {project.retro && (
              <div className="case-retro">
                <div>
                  <p className="case-retro-h">What went well</p>
                  <ul>
                    {project.retro.wentWell.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="case-retro-h is-change">What I&rsquo;d change</p>
                  <ul>
                    {project.retro.wouldChange.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="case-nav">
              <Link href={`/work/${slugify(prev.name)}`} className="case-nav-link">
                <span className="case-nav-eyebrow">← Previous</span>
                <span className="case-nav-name">{prev.name}</span>
              </Link>
              <Link href={`/work/${slugify(next.name)}`} className="case-nav-link case-nav-next">
                <span className="case-nav-eyebrow">Next →</span>
                <span className="case-nav-name">{next.name}</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
