// Everything editable lives here. Change this file, not the components.

export const profile = {
  name: "Tanvir Ahmed Khan",
  shortName: "Tanvir AK",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "tanvir.a.khan12@gmail.com",
  sinceYear: 2024,
  currentlyBuilding: "Traffic Rush Dhaka",
  headline: "Three years shipping enterprise software, and my own products alongside it.",
  intro:
    "I'm Tanvir Ahmed Khan — a software engineer building contract-management software at IBM, full-stack across React, TypeScript and Node.js, with backend depth in Java/Spring Boot and Python/FastAPI elsewhere, and mobile apps I design, build and release myself.",
  links: [
    { label: "GitHub", href: "https://github.com/Tanvir-A-Khan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanvir-a-khan" },
    { label: "Email", href: "mailto:tanvir.a.khan12@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/8801625090976" },
  ],
};

export const work = [
  {
    name: "LambdaX",
    platform: "web",
    tagline: "Enterprise contract-management platform, at Cognitus and now IBM",
    year: "In production",
    stack: ["React", "TypeScript", "Node.js", "Google Calendar API"],
    body:
      "An enterprise agreement and contract management platform. I work across the stack on the lax-web-portal codebase — first at Cognitus, now at IBM — building the contract editor, calendar sync, in-app notifications and an activity/audit logger.",
    role: "Full-stack",
    href: null,
    screenshots: [
      { src: "/Lax/lax1.png", caption: "Calendar module" },
      { src: "/Lax/lax2.png", caption: "Task board" },
      { src: "/Lax/lax3.png", caption: "Contract editor" },
    ],
  },
  {
    name: "MaafCraft",
    platform: "web",
    tagline: "First full-stack e-commerce platform, start to production",
    year: "2023",
    stack: ["Next.js", "TypeScript", "Spring Boot", "MongoDB", "Cloudinary"],
    body:
      "A full-stack e-commerce platform, independently designed, built and deployed — backend services, storefront, data model and production hosting. Every uploaded product image gets watermarked automatically before storage, so sellers never have to think about it.",
    role: "Solo",
    href: "https://maafcraft.com",
  },
  {
    name: "Tax Research Platform",
    platform: "web",
    tagline: "Tax research platform for a Netherlands-based client, built at Kaz Software",
    year: "2024 — 2025",
    stack: ["Angular", "Spring Boot", "Hibernate", "MySQL"],
    body:
      "Features for a Tax Research Platform serving a Netherlands-based client, focused on scalable data handling, visualization and reporting. Angular frontend against a Java Spring Boot and Hibernate backend on MySQL, with sprint tracking in Jira, feature design input, peer review and defect triage.",
    role: "Frontend",
    href: "https://www.ibfd.org/tax-research-platform",
    screenshots: [{ src: "/kaz/tax-research-platform.png", caption: "Tax Research Platform" }],
  },
  {
    name: "Jachai",
    platform: "web",
    tagline: "QR book authenticity verification, built at Rokomari.com",
    year: "2024",
    stack: ["Spring Boot", "Hibernate", "Next.js", "TypeScript"],
    body:
      "A QR-code book authenticity verification platform for Rokomari, Bangladesh's largest online bookstore — customers scan to confirm a copy is genuine rather than a counterfeit reprint. I built the generation and lookup services and the customer-facing verification flow.",
    role: "Full-stack",
    href: null,
  },
  {
    name: "Tasbeeh Noor",
    platform: "mobile",
    tagline: "Digital prayer bead counter, published on Google Play",
    year: "Published",
    stack: ["React Native", "Expo", "Play Console"],
    body:
      "A digital prayer bead counter, published on Google Play under my own developer account — designed, built and taken through the full release pipeline.",
    role: "Solo",
    href: null,
  },
  {
    name: "Traffic Rush Dhaka",
    platform: "mobile",
    tagline: "2D arcade game about the commute everyone here knows",
    year: "In progress",
    stack: ["Godot 4", "GDScript", "Play Console"],
    body:
      "An endless lane-dodging arcade game themed on Dhaka traffic — the core gameplay loop, the art pipeline, and the Play Console release track under my own developer account.",
    role: "Solo",
    href: null,
  },
];

// Ordered most-recent first.
export const experience = [
  {
    org: "IBM",
    note: null,
    title: "Junior Software Engineer",
    period: "2026 — Present",
    place: "Remote · Dallas, TX",
    detail:
      "The same full-stack role on LambdaX, continued under a new name after Cognitus was acquired by IBM. React and TypeScript on the frontend, Node.js on the backend, building out the contract editor, calendar sync and an activity/audit logger, alongside diagnosing and resolving production defects within a distributed cross-timezone team.",
    relatedWork: ["LambdaX"],
  },
  {
    org: "Cognitus",
    note: "acquired by IBM",
    title: "Software Engineer",
    period: "2024 — 2026",
    place: "Remote · Dallas, TX",
    detail:
      "Features for LambdaX, an enterprise agreement and contract management platform, in the lax-web-portal frontend. Built a full calendar module with two-way Google Calendar sync for events, tasks and milestones, and an in-app notification system with deep links to specific agreements and one-click attachment download. Resolved critical production defects affecting platform stability for enterprise users.",
    relatedWork: ["LambdaX"],
  },
  {
    org: "Kaz Software",
    note: null,
    title: "Associate Software Engineer",
    period: "Jun 2024 — Feb 2025",
    place: "Dhaka, BD",
    detail:
      "Features for a Tax Research Platform serving a Netherlands-based client, focused on scalable data handling, visualization and reporting. Angular frontend against a Java Spring Boot and Hibernate backend on MySQL, with sprint tracking in Jira, feature design input, peer review and defect triage.",
    relatedWork: ["Tax Research Platform"],
  },
  {
    org: "Rokomari.com",
    note: null,
    title: "Software Engineer Intern",
    period: "Jan 2024 — May 2024",
    place: "Dhaka, BD",
    detail:
      "Built Jachai, a QR-code book authenticity verification platform for Bangladesh's largest online bookstore. QR generation and lookup endpoints in Spring Boot and Hibernate, customer-facing verification flow in Next.js and TypeScript, plus catalogue and order features against MongoDB and MySQL in a high-traffic production environment.",
    relatedWork: ["Jachai"],
  },
];

export const stack = [
  {
    group: "Frontend & Mobile",
    items: [
      { name: "React", note: "The core of my enterprise UI work — complex, interactive interfaces that large teams maintain." },
      { name: "TypeScript", note: "Type safety across large frontend codebases, where component contracts matter more than speed of writing." },
      { name: "Next.js", note: "App structure, routing and rendering for production web products like MaafCraft and Jachai." },
      { name: "React Native", note: "Cross-platform mobile apps in Expo — Tasbeeh Noor, built and released end to end." },
      { name: "Angular", note: "Frontend for the Tax Research Platform at Kaz Software." },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Java", note: "The language behind most of my backend work — Spring Boot services at Rokomari and Kaz Software." },
      { name: "Spring Boot", note: "REST services, Hibernate data models and API design for e-commerce and enterprise platforms." },
      { name: "Python", note: "FastAPI services for my own products, plus parsing pipelines and scripting." },
      { name: "FastAPI", note: "Backend services with SQLAlchemy models and Alembic-managed migrations." },
      { name: "Node.js", note: "Backend services for LambdaX at IBM — the part of the stack that made the role full-stack." },
    ],
  },
  {
    group: "Data & AI",
    items: [
      { name: "PostgreSQL", note: "Relational data on Supabase where integrity and query power matter." },
      { name: "MongoDB", note: "Document modelling for e-commerce and catalogue-driven products." },
      { name: "MySQL", note: "Relational work behind Spring Boot and Hibernate services." },
      { name: "LLM integration", note: "Gemini and Groq/Llama with multi-provider fallback, so cost and availability are both controlled." },
    ],
  },
  {
    group: "Tools & Delivery",
    items: [
      { name: "Git / GitLab", note: "Branching, reviews, and the day-to-day discipline of a shared team codebase." },
      { name: "Play Console", note: "Release signing, store listings and review — Tasbeeh Noor is live under my own developer account." },
      { name: "Vercel", note: "Deploying and previewing frontend applications continuously." },
      { name: "Cloudinary", note: "Media pipeline, watermarking and image delivery off the application server." },
      { name: "Jira / Agile", note: "Sprint planning, triage and the reporting side of delivery." },
    ],
  },
];

// Daily drivers — marked in the UI so the stack list reads as "core vs. dabbled".
export const coreStack = ["React", "TypeScript", "Next.js", "React Native", "Node.js"];

export const credentials = [
  "ICPC Asia Dhaka Regional Finalist & Team Lead",
  "1,200+ problems solved on Codeforces & CodeChef",
  "Champion — BUET CSE FEST '23 Hackathon",
  "Champion — IUBAT Hult Prize, Campus Round",
  "Champion — IUBAT IT Olympiad",
  "Microsoft Learn Student Ambassador (Beta)",
  "Lead Programmer, IUBAT Innovation & Entrepreneurship Center — ran Arduino/Raspberry Pi workshops",
  "BCSE Computer Engineering, IUBAT (2020–2024)",
];
