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
        <article className="relative py-20">
          <div className="mx-auto max-w-[1180px] px-6">
            <nav
              className="mb-6 flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]"
              aria-label="Breadcrumb"
            >
              <Link className="hover:text-[var(--paper)]" href="/#work">
                Work
              </Link>
              <span aria-hidden="true">/</span>
              <span>{project.name}</span>
            </nav>

            <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--muted)]">
              {project.year} · {project.role}
            </p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.2rem)] font-semibold text-[var(--paper)]">
              {project.name}
            </h1>
            <p className="mt-2 text-lg text-[var(--mark)]">{project.tagline}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li
                  className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]"
                  key={s}
                >
                  {s}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[70ch] leading-relaxed text-[var(--muted)]">{project.body}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {project.href && (
                <a
                  className="font-[family-name:var(--font-mono)] text-sm text-[var(--mark)] hover:underline"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit site ↗
                </a>
              )}
            </div>

            {project.screenshots && (
              <div className="mt-10">
                <ProjectGallery images={project.screenshots} projectName={project.name} variant="grid" />
              </div>
            )}

            {project.retro && (
              <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 sm:grid-cols-2">
                <div>
                  <p className="mb-3 font-[family-name:var(--font-mono)] text-sm uppercase text-[var(--paper)]">
                    What went well
                  </p>
                  <ul className="flex flex-col gap-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.retro.wentWell.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="mb-3 font-[family-name:var(--font-mono)] text-sm uppercase text-[var(--mark)]">
                    What I&rsquo;d change
                  </p>
                  <ul className="flex flex-col gap-2 text-sm leading-relaxed text-[var(--muted)]">
                    {project.retro.wouldChange.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <Link
                href={`/work/${slugify(prev.name)}`}
                className="block rounded-2xl border border-[var(--line)] bg-[var(--glass-bg)] p-5 transition-colors hover:bg-[var(--glass-hover)]"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">← Previous</span>
                <span className="mt-1 block font-medium text-[var(--paper)]">{prev.name}</span>
              </Link>
              <Link
                href={`/work/${slugify(next.name)}`}
                className="block rounded-2xl border border-[var(--line)] bg-[var(--glass-bg)] p-5 text-right transition-colors hover:bg-[var(--glass-hover)]"
              >
                <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">Next →</span>
                <span className="mt-1 block font-medium text-[var(--paper)]">{next.name}</span>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
