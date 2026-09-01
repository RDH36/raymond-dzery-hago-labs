import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";

import { PostHogProvider } from "@/components/analytics/PostHogProvider";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { profile } from "@/data/profile";
import { siteGraph } from "@/lib/jsonld";
import "./globals.css";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex",
});

/* The display face of Clearway's own site — the portfolio inherits the type
   voice of the products it lists. */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-bricolage",
});

const description =
  "Raymond Dzery Hago designs, builds and ships mobile apps, games and websites from Antananarivo, Madagascar. Mitsitsy, Clearway, Flipia and Monster Cannon.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: profile.pageTitle,
  description,
  alternates: { canonical: "/" },
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  applicationName: profile.name,
  category: "technology",
  /** max-image-preview:large is what lets the app screenshots show up big in
      results; without it Google caps them at a thumbnail. */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: profile.name,
    title: profile.pageTitle,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rdzeryhago",
    title: profile.pageTitle,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1917" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plex.variable} ${bricolage.variable}`}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <PostHogProvider />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraph()) }}
        />
      </body>
    </html>
  );
}
