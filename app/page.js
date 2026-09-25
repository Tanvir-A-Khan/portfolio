import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import StatCounter from "./components/StatCounter";
import WorkPreviewList from "./components/WorkPreviewList";
import { profile, work, experience, stack, coreStack, credentials } from "../data/site";
import { slugify } from "../lib/slug";

const shell = "mx-auto max-w-[1180px] px-6";
const eyebrow = "mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-[var(--muted)]";
const sectionH2 =
  "mb-10 mt-2 max-w-[46ch] font-[family-name:var(--font-display)] text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-tight text-[var(--paper)]";
const pill =
  "inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--glass-bg)] bg-[image:linear-gradient(152deg,var(--glass-sheen),transparent_58%)] px-5 py-2.5 text-sm text-[var(--paper)] shadow-[var(--shadow)] backdrop-blur-[10px] backdrop-saturate-[1.2] transition-colors hover:border-[var(--border-hi)] hover:bg-[var(--glass-hover)]";
const rowVisit = "font-[family-name:var(--font-mono)] text-sm text-[var(--mark)] hover:underline";
const tags = "flex flex-wrap gap-2";
const tag =
  "inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]";

export default function Page() {
  const webWork = work.filter((p) => p.platform === "web");
  const mobileWork = work.filter((p) => p.platform === "mobile");

  const yearsShipping = new Date().getFullYear() - profile.sinceYear;

  return (
    <>
      <Nav />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <header className="relative min-h-[520px] pb-20 pt-28 lg:pb-28 lg:pt-40">
          <div className={shell}>
            <div>
              <p className={eyebrow}>
                {profile.role} · {profile.location}
              </p>
              <h1 className="max-w-[18ch] font-[family-name:var(--font-display)] text-[clamp(2.1rem,6vw,3.6rem)] font-semibold leading-[1.08] text-[var(--paper)]">
                {profile.headline}
              </h1>

              <div className="mt-8 flex items-center gap-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-2xl border border-[var(--line)] shadow-[var(--shadow)] transition-transform hover:-translate-y-1 lg:h-60 lg:w-60">
                  <Image
                    src="/avatar.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(min-width: 1024px) 240px, 160px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <p className="font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
                  {profile.name}
                </p>
              </div>

              <p className="mt-6 max-w-[58ch] leading-relaxed text-[var(--muted)]">{profile.intro}</p>

              <p className="mt-5 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm text-[var(--muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--mark)]" aria-hidden="true" />
                Currently building{" "}
                <a className="text-[var(--paper)] hover:text-[var(--mark)]" href={`#work-${slugify(profile.currentlyBuilding)}`}>
                  {profile.currentlyBuilding}
                </a>
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  className={`${pill} border-transparent bg-[var(--mark)] font-medium text-[var(--on-accent)] hover:bg-[var(--accent-up)]`}
                  href="/Tanvir_Ahmed_Khan_CV.docx"
                  download
                >
                  Download CV
                </a>
                {profile.links.map((l) => (
                  <a
                    className={pill}
                    key={l.label}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {l.label}
                  </a>
                ))}
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6 border-t border-[var(--line)] pt-8 lg:grid-cols-4">
                <StatCounter value={yearsShipping} suffix="+" label="Years shipping code" />
                <StatCounter value={work.length} label="Projects shipped" />
                <StatCounter value={experience.length} label="Teams worked with" />
                <StatCounter value={credentials.length} label="Awards & credentials" />
              </div>
            </div>
          </div>
        </header>

        {/* ---------- Work ---------- */}
        <section className="relative min-h-[500px] py-20 lg:py-28" id="work">
          <div className={shell}>
            <Reveal>
              <p className={eyebrow}>01 — Selected work</p>
              <h2 className={sectionH2}>Things I built, and what was actually hard about each.</h2>
            </Reveal>

            <Reveal>
              <div className="mt-10">
                <h3 className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[var(--muted)]">
                  Web pages
                </h3>
                <WorkPreviewList projects={webWork} />
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-14">
                <h3 className="mb-4 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[var(--muted)]">
                  Mobile apps
                </h3>
                <WorkPreviewList projects={mobileWork} />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="relative min-h-[500px] py-20 lg:py-28" id="experience">
          <div className={shell}>
            <Reveal>
              <p className={eyebrow}>02 — Experience</p>
              <h2 className={sectionH2}>Where I&rsquo;ve done it.</h2>
            </Reveal>

            <div className="job-list mt-8 flex flex-col gap-4">
              {experience.map((j, i) => (
                <Reveal key={j.org + j.period} delay={i * 50}>
                  <div
                    className={`job group relative grid grid-cols-[auto_1fr_auto] items-start gap-x-6 rounded-2xl border border-[var(--line)] bg-[var(--glass-bg)] bg-[image:linear-gradient(152deg,var(--glass-sheen),transparent_58%)] p-6 shadow-[var(--shadow)] transition-transform hover:-translate-y-0.5 ${
                      i === 0 ? "job-open" : ""
                    }`}
                  >
                    <span
                      className={`job-expand-icon absolute right-6 top-1/2 -translate-y-1/2 text-[var(--mark)] transition-transform duration-300 ${
                        i === 0 ? "rotate-45" : "group-hover:rotate-45"
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="flex items-center gap-2 font-medium text-[var(--paper)]">
                        {j.org}
                        {j.note ? `, ${j.note}` : ""}
                        {j.period.includes("Present") && (
                          <span className="inline-flex items-center rounded-full bg-[var(--mark)]/15 px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-wide text-[var(--mark)]">
                            Current
                          </span>
                        )}
                      </p>
                      <span className="mt-1 block text-sm text-[var(--muted)]">{j.title}</span>

                      <div
                        className={`job-detail-wrap grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] ${
                          i === 0 ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="job-detail-inner flex min-h-0 flex-col gap-2 pt-2">
                          {j.relatedWork?.map((w) => (
                            <a key={w} className={rowVisit} href={`#work-${slugify(w)}`}>
                              → {w}
                            </a>
                          ))}
                          {j.detail && <p className="text-sm leading-relaxed text-[var(--muted)]">{j.detail}</p>}
                        </div>
                      </div>
                    </div>
                    <span className="whitespace-nowrap text-right font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                      {j.period} · {j.place}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <ul className="mt-10 grid gap-x-8 gap-y-2 font-[family-name:var(--font-mono)] text-sm text-[var(--muted)] sm:grid-cols-2">
                {credentials.map((c) => (
                  <li key={c} className="relative pl-4 before:absolute before:left-0 before:text-[var(--mark)] before:content-['•']">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section className="relative min-h-[500px] py-20 lg:py-28" id="stack">
          <div className={shell}>
            <Reveal>
              <p className={eyebrow}>03 — Stack</p>
              <h2 className={sectionH2}>What I reach for.</h2>
              <p className="mb-8 inline-flex items-center gap-2 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--mark)]" aria-hidden="true" /> marks a
                daily driver
              </p>
            </Reveal>

            <Reveal>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {stack.map((g) => (
                  <div key={g.group}>
                    <h3 className="mb-4 flex items-center gap-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-wide text-[var(--paper)]">
                      {g.group}
                      <span className="text-xs text-[var(--muted)]">{g.items.length}</span>
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {g.items.map((it) => (
                        <li
                          key={it.name}
                          className={`text-sm text-[var(--muted)] transition-colors transition-transform hover:translate-x-0.5 hover:text-[var(--paper)] ${
                            coreStack.includes(it.name)
                              ? "before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--mark)] before:align-middle before:content-['']"
                              : ""
                          }`}
                          title={it.note}
                        >
                          {it.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="relative min-h-[360px] py-20 lg:py-28" id="contact">
          <div className={shell}>
            <Reveal>
              <p className={eyebrow}>04 — Contact</p>
              <h2 className={sectionH2} style={{ marginBottom: "1.75rem" }}>
                Got something that needs building? Say what it is.
              </h2>
              <a
                className="mb-8 mt-2 block w-fit border-b-2 border-[var(--mark)] pb-2 font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.2rem)] text-[var(--paper)] transition-colors hover:text-[var(--mark)]"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>

              <a
                className={`${pill} border-[var(--verify)] bg-[var(--verify)]/10 text-[var(--verify)]`}
                href="https://wa.me/8801625090976"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>

              <div className="mt-16 flex flex-wrap justify-between gap-3 border-t border-[var(--line)] pt-8 font-[family-name:var(--font-mono)] text-xs text-[var(--muted)]">
                <span>
                  {profile.name} · {profile.location}
                </span>
                <span>
                  {profile.links
                    .filter((l) => l.href.startsWith("http"))
                    .map((l, i, arr) => (
                      <span key={l.label}>
                        <a className="hover:text-[var(--paper)]" href={l.href} target="_blank" rel="noreferrer">
                          {l.label}
                        </a>
                        {i < arr.length - 1 ? " / " : ""}
                      </span>
                    ))}
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
