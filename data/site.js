// Everything editable lives here. Change this file, not the components.

export const profile = {
  name: "Tanvir Ahmed Khan",
  shortName: "Tanvir AK",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "tanvir.a.khan12@gmail.com",
  headline: "Software engineer who ships things start to finish.",
  intro:
    "Software engineer at Cognitus, an IBM company. Mostly React and React Native on the front end — I pick up Node.js for the backend when a project needs it, though that's not where I spend most of my time. Comfortable in any language a project calls for. I like being the one who takes a feature from a rough idea to something people actually use.",
  links: [
    { label: "GitHub", href: "https://github.com/Tanvir-A-Khan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanvir-a-khan" },
    { label: "Email", href: "mailto:tanvir.a.khan12@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/8801625090976" },
  ],
};

// The hero demo. A representative mobile-money SMS and the fields a parser lifts out of it.
export const parseDemo = {
  raw: "You have received Tk 2,500.00 from 01712345678. Fee Tk 0.00. Balance Tk 7,310.50. TrxID BJH7X2K9QP at 12/07/2026 14:22",
  // `mark` values must appear verbatim in `raw` — they get the highlighter treatment.
  marks: ["2,500.00", "01712345678", "7,310.50", "BJH7X2K9QP"],
  source: "Takafy",
  fields: [
    { key: "direction", value: "credit" },
    { key: "amount", value: "2500.00 BDT" },
    { key: "counterparty", value: "01712345678" },
    { key: "balance_after", value: "7310.50 BDT" },
    { key: "trx_id", value: "BJH7X2K9QP" },
    { key: "resolved_by", value: "regex — layer 2 of 4" },
  ],
};

export const work = [
  {
    name: "Takafy",
    tagline: "Personal finance assistant for Bangladeshi mobile money",
    year: "In progress",
    stack: ["React Native", "Expo", "FastAPI", "Supabase", "Gemini", "Groq"],
    body:
      "Reads transaction SMS from bKash, Nagad, Rocket, Upay, DBBL and BRAC Bank and turns it into a real ledger. The parser runs in four layers — sender routing, then regex, then heuristics, and only then an LLM. Most messages never reach the model, which is the whole point: accuracy stays high and the API bill stays near zero.",
    role: "Solo",
    href: null,
    // Placeholder split — swap in your real per-layer resolution numbers.
    metrics: {
      label: "Messages resolved per layer",
      data: [
        { label: "Sender routing", value: 42 },
        { label: "Regex", value: 35 },
        { label: "Heuristics", value: 17 },
        { label: "LLM fallback", value: 6 },
      ],
    },
  },
  {
    name: "Jachai",
    tagline: "QR book authenticity verification, built at Rokomari.com",
    year: "2024",
    stack: ["Spring Boot", "Next.js", "MongoDB"],
    body:
      "Counterfeit reprints are a real problem for Bangladeshi publishers. Jachai gives every genuine copy a QR code a buyer can scan to confirm it. I built the generation and lookup services and the customer-facing verification flow.",
    role: "Full-stack",
    href: null,
  },
  {
    name: "MaafCraft",
    tagline: "First full-stack e-commerce platform, start to production",
    year: "2023",
    stack: ["Spring Boot", "Next.js", "MongoDB", "Cloudinary"],
    body:
      "Data model, backend, storefront, and the VPS it runs on — all mine. The piece I'm still proud of is the upload service: every product image gets watermarked automatically on the way to storage, so sellers never have to think about it.",
    role: "Solo",
    href: null,
  },
  {
    name: "Traffic Rush Dhaka",
    tagline: "2D arcade game about the commute everyone here knows",
    year: "In progress",
    stack: ["Godot 4", "GDScript"],
    body:
      "A break from CRUD. Gameplay loop, art pipeline, and the Play Console release track under my own developer account.",
    role: "Solo",
    href: null,
  },
];

export const experience = [
  {
    org: "Cognitus",
    note: "an IBM company",
    title: "Software Engineer",
    period: "Dec 2024 — Present",
    place: "Remote · Dallas, TX",
  },
  {
    org: "T-Tech",
    note: "independent",
    title: "Founder & Engineer",
    period: "2024 — Present",
    place: "Gazipur, BD",
  },
  {
    org: "Kaz Software",
    note: null,
    title: "Associate Software Engineer",
    period: "Jun 2024 — Feb 2025",
    place: "Dhaka, BD",
  },
  {
    org: "Rokomari.com",
    note: null,
    title: "Software Engineer Intern",
    period: "Jan 2024 — May 2024",
    place: "Dhaka, BD",
  },
];

export const stack = [
  { group: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"] },
  { group: "Server", items: ["Spring Boot", "FastAPI", "Node.js", "SQLAlchemy", "Alembic"] },
  { group: "Client", items: ["React", "Next.js", "React Native", "Expo", "Zustand"] },
  { group: "Data", items: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
  { group: "Everything else", items: ["Git", "Cloudinary", "Godot 4", "Ollama", "Play Console"] },
];

export const credentials = [
  "ICPC Regionalist",
  "Microsoft Learn Student Ambassador (Beta)",
  "Champion — IUBAT Hult Prize, Campus Round",
  "Champion — IT Olympiad",
  "BCSE Computer Engineering, IUBAT (2020–2024)",
];
