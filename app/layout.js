import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { profile } from "../data/site";

export const metadata = {
  metadataBase: new URL("https://tanvirkhan.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description: profile.headline,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
    type: "website",
    url: "https://tanvirkhan.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.headline,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: "https://tanvirkhan.vercel.app",
  email: `mailto:${profile.email}`,
  sameAs: profile.links
    .filter((l) => l.href.startsWith("http"))
    .map((l) => l.href),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" data-scroll-behavior="smooth" className="scroll-smooth" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script dangerouslySetInnerHTML={{ __html: `try { document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch {}` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="m-0 font-(family-name:--font-body) antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
