import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import Icon from "./components/Icon";
import BrandIcon from "./components/BrandIcon";
import WorkPreviewList from "./components/WorkPreviewList";
import ExperienceAccordion from "./components/ExperienceAccordion";
import { profile, work, experience, stack, coreStack, credentials, testimonials } from "../data/site";
import { slugify } from "../lib/slug";

const companyBrands = [
  { name: "IBM", key: "ibm", logo: "/logos/ibm.svg", href: "https://www.ibm.com/", focus: "Enterprise software" },
  { name: "Cognitus", key: "cognitus", logo: "/logos/cognitus.svg", href: "https://cognitus.com/", focus: "SAP & contract management" },
  { name: "Kaz Software", key: "kaz", logo: "/logos/kaz.png", href: "https://www.kaz.com.bd/", focus: "Product engineering" },
  { name: "Rokomari.com", key: "rokomari", logo: "/logos/rokomari.svg", href: "https://www.rokomari.com/", focus: "E-commerce" },
];

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><div><p className="eyebrow"><span>{number}</span>{label}</p><h2>{title}</h2></div>{children && <p className="section-description">{children}</p>}</div>;
}

export default function Page() {
  const years = new Date().getFullYear() - profile.sinceYear;
  const socialLinks = profile.links.filter(link => ["GitHub", "LinkedIn", "Codeforces", "CodeChef", "HackerRank", "VJudge"].includes(link.label));
  const linkedIn = profile.links.find(link => link.label === "LinkedIn");
  return (
    <>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <header className="hero shell" id="top">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" />Software engineer & product builder</p>
            <h1>Thoughtful code.<br />Real-world<br /><span className="hero-accent">impact.</span><span className="hero-star" aria-hidden="true">✳</span></h1>
            <p className="hero-intro">I’m Tanvir, a software engineer at <strong>IBM</strong>. I build enterprise software and independent products, from the first idea to the final release.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Icon name="diagonal" size={18} /></a><a className="button button-secondary" href="/Tanvir_Ahmed_Khan_CV.docx" download>Download CV <Icon name="download" size={17} /></a></div>
            <div className="hero-socials" aria-label="Profile links">{socialLinks.map(l => <a className="profile-icon-link" key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} title={l.label}><BrandIcon name={l.label} /></a>)}</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-topline"><span>BASED IN DHAKA, BD</span><span>UTC+6 / BANGLADESH</span></div>
              <div className="portrait-image"><Image src="/avatar.png" alt={`Portrait of ${profile.name}`} fill priority sizes="(max-width: 760px) 90vw, 440px" /></div>
              <div className="portrait-caption"><div><strong>{profile.name}</strong><span>Software Engineer · IBM</span></div><span className="portrait-sign" aria-hidden="true">TAK</span></div>
            </div>
            <div className="availability-note"><span className="status-dot" /><span>Open to select freelance projects</span><Icon name="diagonal" size={14} /></div>
          </div>
        </header>
        <div className="shell"><div className="hero-bottom"><p><span className="status-dot" />Currently building <a href={`#work-${slugify(profile.currentlyBuilding)}`}>{profile.currentlyBuilding}<Icon name="diagonal" size={13} /></a></p><a className="scroll-note" href="#work">Scroll to explore <span aria-hidden="true">↓</span></a></div></div>
        <section className="credibility" aria-labelledby="teams-heading">
          <div className="shell credibility-inner">
            <div className="credibility-heading">
              <div><p className="eyebrow">Built with great people</p><h2 id="teams-heading">Experience across <span>teams & products.</span></h2></div>
              <div className="years-note"><strong>{years}+</strong><span>years of<br />shipping code</span></div>
            </div>
            <div className="company-grid">
              {companyBrands.map(company => <a key={company.key} className={`company-card company-${company.key}`} href={company.href} target="_blank" rel="noreferrer" aria-label={`Visit ${company.name}`}>
                <span className="company-card-arrow"><Icon name="diagonal" size={16} /></span>
                <div className="company-logo"><Image src={company.logo} alt={`${company.name} logo`} width={180} height={60} unoptimized /></div>
                <div className="company-card-caption"><span>{company.focus}</span><span className="company-card-dot" /></div>
              </a>)}
            </div>
          </div>
        </section>

        <section className="section shell" id="work">
          <Reveal><SectionHeading number="01" label="Selected work" title={<>Built to solve.<br /><span className="muted-heading">Made to last.</span></>}>Enterprise platforms, independent products, and a few ideas that became something real.</SectionHeading></Reveal>
          <WorkPreviewList projects={work} />
        </section>

        <section className="section experience-section" id="experience"><div className="shell experience-layout">
          <Reveal><div className="experience-intro"><p className="eyebrow"><span>02</span>The journey</p><h2>Good work.<br /><span className="muted-heading">Great teams.</span></h2><p>From a high-traffic bookstore to enterprise software. Every team has shaped how I build.</p><a className="text-link" href="/Tanvir_Ahmed_Khan_CV.docx" download>View my résumé <Icon name="diagonal" size={17} /></a><div className="experience-stat"><strong>{experience.length.toString().padStart(2, "0")}</strong><span>teams.<br />A lot of lessons.</span></div></div></Reveal>
          <ExperienceAccordion experience={experience} />
        </div></section>

        <section className="section shell" id="stack">
          <Reveal><SectionHeading number="03" label="My toolkit" title={<>The right tools.<br /><span className="muted-heading">For the real problem.</span></>}>Full-stack by experience. Product-minded by nature. These are the tools I use to connect the two.</SectionHeading></Reveal>
          <div className="toolkit-grid">{stack.map((group, index) => <Reveal key={group.group} delay={index * 60}><div className="toolkit-group"><div className="toolkit-icon"><Icon name={["code", "layers", "database", "tools"][index]} size={22} /></div><h3>{group.group}</h3><ul>{group.items.map(item => <li key={item.name} title={item.note}>{item.name}{coreStack.includes(item.name) && <span className="daily-dot" aria-label="Daily driver" />}</li>)}</ul></div></Reveal>)}</div>
          <p className="toolkit-legend"><span className="daily-dot" /> My daily drivers</p>
          <Reveal><div className="recognition"><div><p className="eyebrow">Beyond the day job</p><h3>A competitive streak.<br />A constant curiosity.</h3></div><ul>{credentials.map(c => <li key={c}><span aria-hidden="true">↗</span>{c}</li>)}</ul></div></Reveal>
        </section>

        <section className="section testimonial-section" id="testimonials"><div className="shell">
          <Reveal><SectionHeading number="04" label="Kind words" title={<>Better work happens<br /><span className="muted-heading">together.</span></>} /></Reveal>
          <div className="testimonial-grid">{testimonials.map((t, i) => <Reveal key={t.name} delay={i * 70}><figure className="testimonial"><span className="quote-mark" aria-hidden="true">“</span><blockquote>{t.text}</blockquote><figcaption><span className="person-initials" aria-hidden="true">{t.name.split(" ").slice(0, 2).map(n => n[0]).join("")}</span><span><strong>{t.name}</strong><small>{t.role}</small></span></figcaption></figure></Reveal>)}</div>
        </div></section>
      </main>
      <footer id="contact" className="contact-section"><div className="shell">
        <div className="contact-top"><p className="eyebrow"><span>05</span>Have something in mind?</p><p><span className="status-dot" />Available for select projects</p></div>
        <div className="contact-main"><h2>Let’s build<br />something <span>great.</span></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Start a conversation by email"><Icon name="diagonal" size={48} /></a></div>
        <div className="contact-links"><a className="contact-email" href={`mailto:${profile.email}`}><BrandIcon name="Email" />{profile.email}<Icon name="diagonal" size={20} /></a><div className="contact-options">{linkedIn && <a className="profile-icon-link" href={linkedIn.href} target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><BrandIcon name="LinkedIn" /></a>}<a className="profile-icon-link" href="https://wa.me/8801625090976" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><BrandIcon name="WhatsApp" /></a></div></div>
        <div className="footer-bottom"><a className="brand footer-brand" href="#top"><span className="brand-mark">t<span>.</span></span><span>{profile.shortName}</span></a><p>© {new Date().getFullYear()} {profile.name}</p><div>{socialLinks.map(l => <a className="profile-icon-link" key={l.label} href={l.href} target="_blank" rel="noreferrer" aria-label={l.label} title={l.label}><BrandIcon name={l.label} /></a>)}<a href="#top">Back to top ↑</a></div></div>
      </div></footer>
    </>
  );
}
