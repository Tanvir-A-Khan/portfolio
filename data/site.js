// Everything editable lives here. Change this file, not the components.

export const profile = {
  name: "Tanvir Ahmed Khan",
  shortName: "Tanvir AK",
  role: "Software Engineer",
  location: "Dhaka, Bangladesh",
  timezone: "UTC+6",
  email: "tanvir.a.khan12@gmail.com",
  sinceYear: 2024,
  currentlyBuilding: "One Path",
  headline: "Thoughtful code. Real-world impact. Enterprise software and independent products by Tanvir Ahmed Khan.",
  intro:
    "I'm Tanvir Ahmed Khan — a software engineer building contract-management software at IBM, full-stack across React, TypeScript and Node.js, with backend depth in Java/Spring Boot and Python/FastAPI elsewhere, and mobile apps I design, build and release myself.",
  availability: "Open to select freelance and contract work alongside my full-time role.",
  links: [
    { label: "GitHub", href: "https://github.com/Tanvir-A-Khan" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tanvir-a-khan/" },
    { label: "Codeforces", href: "https://codeforces.com/profile/Tanvir_Ahmed_Khan" },
    { label: "CodeChef", href: "https://www.codechef.com/users/mostlytanvir" },
    { label: "HackerRank", href: "https://www.hackerrank.com/profile/mostlytanvir" },
    { label: "VJudge", href: "https://vjudge.net/user/mostlytanvir" },
    { label: "Email", href: "mailto:tanvir.a.khan12@gmail.com" },
    { label: "WhatsApp", href: "https://wa.me/8801625090976" },
  ],
};

export const work = [
  {
    name: "LambdaX",
    selectorLogo: "/logos/cognitus.svg",
    platform: "web",
    tagline: "Enterprise contract-management platform, at Cognitus and now IBM",
    year: "In production",
    stack: ["React", "TypeScript", "Node.js", "Google Calendar API"],
    body:
      "An enterprise agreement and contract management platform. I work across the stack on the lax-web-portal codebase — first at Cognitus, now at IBM — building the contract editor, calendar sync, in-app notifications and an activity/audit logger.",
    role: "Full-stack",
    href: "https://www.ibm.com/products/contract-management",
    screenshots: [
      { src: "/Lax/lax1.png", caption: "Calendar module" },
      { src: "/Lax/lax2.png", caption: "Task board" },
      { src: "/Lax/lax3.png", caption: "Contract editor" },
    ],
  },
  {
    name: "MaafCraft",
    selectorLogo: "/maafcraft/logo.png",
    platform: "web",
    tagline: "First full-stack e-commerce platform, start to production",
    year: "2023",
    stack: ["Next.js", "TypeScript", "Spring Boot", "MongoDB", "Cloudinary"],
    body:
      "A full-stack e-commerce platform, independently designed, built and deployed — backend services, storefront, data model and production hosting. Every uploaded product image gets watermarked automatically before storage, so sellers never have to think about it.",
    role: "Solo",
    href: "https://maafcraft.com",
    screenshots: [
      { src: "/maafcraft/storefront.jpg", caption: "Live storefront homepage" },
    ],
  },
  {
    name: "Tax Research Platform",
    selectorLogo: "/logos/ibfd.svg",
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
    selectorLogo: "/logos/rokomari.svg",
    platform: "web",
    tagline: "Built for Rokomari.com, Bangladesh's largest online bookstore, during a paid internship",
    year: "2024",
    stack: ["Spring Boot", "Hibernate", "Next.js", "TypeScript"],
    body:
      "Commissioned by Rokomari.com during my internship there: a QR-code book authenticity verification platform so customers can scan a copy and confirm it's genuine rather than a counterfeit reprint. I built the generation and lookup services and the customer-facing verification flow, shipped to production for their live storefront.",
    role: "Full-stack",
    href: "https://www.rokomari.com/book/authenticity-verification",
  },
  {
    name: "Tasbeeh Noor",
    platform: "mobile",
    tagline: "Digital prayer bead counter, published on Google Play",
    year: "Published",
    stack: ["React Native", "Expo", "Play Console"],
    body:
      "A digital tasbeeh app designed and built with React Native and Expo. Includes multiple dhikr counters, daily goals, history, sound and haptic feedback, and light and dark themes, with progress saved on the device.",
    role: "Solo",
    href: "https://play.google.com/store/apps/details?id=com.ttech.tasbeehnoor.app",
    published: true,
    icon: "/tasbeeh-noor/icon.png",
    screenshots: [
      { src: "/tasbeeh-noor/counter-light.png", caption: "Dhikr counter and daily goal" },
      { src: "/tasbeeh-noor/counter-dark.png", caption: "Dark theme and free count" },
    ],
  },
  {
    name: "One Path",
    platform: "mobile",
    tagline: "Connect the numbers. Fill the board. Find one continuous path.",
    year: "Android game",
    stack: ["React Native", "TypeScript", "Supabase", "Firebase"],
    body:
      "An Android number puzzle built with React Native and TypeScript. Connect checkpoints in order and cover every open cell without crossing your path. Features generated levels, undo, solution-backed hints, saved progress, and timed challenges with stars and achievements.",
    role: "Solo",
    href: null,
    icon: "/one-path/icon.png",
    screenshots: [
      { src: "/one-path/completion.png", caption: "Level completion and achievements" },
    ],
  },
];

// Ordered most-recent first.
export const experience = [
  {
    org: "IBM",
    note: null,
    title: "Junior Software Engineer",
    period: "Aug 2026 — Present",
    place: "Remote · Dallas, TX",
    detail:
      "The same full-stack role on LambdaX, continued under a new name after Cognitus was acquired by IBM. React and TypeScript on the frontend, Node.js on the backend, building out the contract editor, calendar sync and an activity/audit logger, alongside diagnosing and resolving production defects within a distributed cross-timezone team.",
    relatedWork: ["LambdaX"],
  },
  {
    org: "Cognitus",
    note: "an IBM company",
    title: "Software Engineer",
    period: "Dec 2024 — Aug 2026",
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
      { name: "React Native", note: "Mobile apps and games — Tasbeeh Noor with Expo and One Path with the React Native CLI." },
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
      { name: "Supabase", note: "PostgreSQL-backed authentication, cloud saves and leaderboard services for mobile products." },
      { name: "Firebase", note: "Firebase services and mobile app integrations." },
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

export const testimonials = [
  // Exact excerpt from the Received recommendation on Tanvir's LinkedIn.
  // Checked 2026-10-17. Keep wording and attribution tied to the source.
  {
    name: "Md. Al-Amin",
    initials: "AA",
    role: "Former teammate at Rokomari.com",
    text: "He is organized, customer-oriented, and always ready to tackle any challenge with a smile.",
    date: "2024-06-02",
    dateLabel: "June 2, 2024",
    authorHref: "https://www.linkedin.com/in/alaminkarno/",
    sourceHref: "https://www.linkedin.com/in/tanvir-a-khan/details/recommendations/",
  },
];
