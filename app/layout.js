import "./globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import Background from "./components/Background";
import Preloader from "./components/Preloader";
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
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <head suppressHydrationWarning>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
      <body className="m-0 font-(family-name:--font-body) antialiased transition-colors duration-300 [&_.preloader]:motion-reduce:hidden">
        <noscript>
          <style>{`.preloader { display: none !important; }`}</style>
        </noscript>
        <Background />
        <AntdRegistry>
          <Preloader />
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
