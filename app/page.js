import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import ParsePanel from "./components/ParsePanel";
import LayerBars from "./components/LayerBars";
import StatCounter from "./components/StatCounter";
import { profile, work, experience, stack, coreStack, credentials } from "../data/site";

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Page() {
  const yearsShipping = new Date().getFullYear() - profile.sinceYear;

  return (
    <>
      <Nav />

      <main id="top">
        {/* ---------- Hero ---------- */}
        <header className="hero">
          <div className="hero-blob" aria-hidden="true" />
          <div className="shell">
            <div className="hero-grid">
              <div className="hero-avatar">
                <div className="avatar-frame">
                  <Image
                    src="/avatar.png"
                    alt={`Portrait of ${profile.name}`}
                    fill
                    sizes="(min-width: 1024px) 200px, 132px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
                <p className="avatar-name">{profile.name}</p>
              </div>

              <div>
                <p className="eyebrow">
                  {profile.role} · {profile.location}
                </p>
                <h1 className="hero-h1">{profile.headline}</h1>
                <p className="hero-intro">{profile.intro}</p>

                <p className="hero-status">
                  <span className="status-dot" aria-hidden="true" />
                  Currently building{" "}
                  <a href={`#work-${slugify(profile.currentlyBuilding)}`}>
                    {profile.currentlyBuilding}
                  </a>
                </p>

                <div className="hero-links">
                  <a className="pill pill-primary" href="/Tanvir_Ahmed_Khan_CV.docx" download>
                    Download CV
                  </a>
                  {profile.links.map((l) => (
                    <a
                      className="pill"
                      key={l.label}
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>

                <div className="hero-stats">
                  <StatCounter value={yearsShipping} suffix="+" label="Years shipping code" />
                  <StatCounter value={work.length} label="Projects shipped" />
                  <StatCounter value={experience.length} label="Teams worked with" />
                  <StatCounter value={credentials.length} label="Awards & credentials" />
                </div>
              </div>
            </div>

            <ParsePanel />
          </div>
        </header>

        {/* ---------- Work ---------- */}
        <section className="section" id="work">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">01 — Selected work</p>
              <h2 className="section-h2">
                Four things I built, and what was actually hard about each.
              </h2>
            </Reveal>

            {work.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <article className="row" id={`work-${slugify(p.name)}`}>
                  <div>
                    <div className="row-meta">
                      <span className="row-index">{String(i + 1).padStart(2, "0")}</span>
                      <span>{p.year}</span>
                      <span>·</span>
                      <span>{p.role}</span>
                    </div>
                    <h3 className="row-name">{p.name}</h3>
                    <p className="row-tagline">{p.tagline}</p>
                  </div>

                  <div>
                    <p className="row-body">{p.body}</p>
                    <ul className="tags" style={{ marginTop: "1.1rem" }}>
                      {p.stack.map((s) => (
                        <li className="tag" key={s}>
                          {s}
                        </li>
                      ))}
                    </ul>
                    <LayerBars metrics={p.metrics} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section className="section" id="experience">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">02 — Experience</p>
              <h2 className="section-h2">Where I&rsquo;ve done it.</h2>
            </Reveal>

            {experience.map((j, i) => (
              <Reveal key={j.org + j.period} delay={i * 50}>
                <div className="job">
                  <span className="job-index">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="job-title">
                      {j.title}
                      {j.period.includes("Present") && (
                        <span className="job-current">Current</span>
                      )}
                    </p>
                    <span className="job-org">
                      {j.org}
                      {j.note ? `, ${j.note}` : ""}
                    </span>
                    {j.relatedWork && (
                      <a className="job-link" href={`#work-${slugify(j.relatedWork)}`}>
                        → {j.relatedWork}
                      </a>
                    )}
                  </div>
                  <span className="job-when">
                    {j.period} · {j.place}
                  </span>
                </div>
              </Reveal>
            ))}

            <Reveal>
              <ul className="creds">
                {credentials.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------- Stack ---------- */}
        <section className="section" id="stack">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">03 — Stack</p>
              <h2 className="section-h2">What I reach for.</h2>
              <p className="stack-hint">
                <span className="stack-hint-dot" aria-hidden="true" /> marks a daily driver
              </p>
            </Reveal>

            <Reveal>
              <div className="stack-grid">
                {stack.map((g) => (
                  <div key={g.group}>
                    <h3 className="stack-group-h">
                      {g.group}
                      <span className="stack-count">{g.items.length}</span>
                    </h3>
                    <ul className="stack-list">
                      {g.items.map((it) => (
                        <li key={it} className={coreStack.includes(it) ? "is-core" : undefined}>
                          {it}
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
        <section className="contact" id="contact">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">04 — Contact</p>
              <h2 className="section-h2" style={{ marginBottom: "1.75rem" }}>
                Got something that needs building? Say what it is.
              </h2>
              <a className="contact-mail" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>

              <a
                className="pill pill-whatsapp"
                href="https://wa.me/8801625090976"
                target="_blank"
                rel="noreferrer"
              >
                Message on WhatsApp
              </a>

              <div className="foot">
                <span>
                  {profile.name} · {profile.location}
                </span>
                <span className="foot-links">
                  {profile.links
                    .filter((l) => l.href.startsWith("http"))
                    .map((l, i, arr) => (
                      <span key={l.label}>
                        <a href={l.href} target="_blank" rel="noreferrer">
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
