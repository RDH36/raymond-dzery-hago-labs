export type ProfileLink = {
  label: string;
  /** Leave empty until the account exists — empty links are not rendered. */
  href: string;
};

export const profile = {
  name: "Raymond Dzery Hago",
  /** Shown right under the name. Raymond's own line. */
  role: "Full-stack developer & game dev",
  hook: "Building is solved. Taste isn't.",
  intro:
    "I design, build and ship mobile apps, games and websites. Product, design and engineering, from the first screen to the store listing.",
  location: "Antananarivo, Madagascar",
  photo: "/raymond-dzery-hago.jpg",
  email: "contact@dzeryhago.com",
  siteUrl: "https://dzeryhago.com",
  jobTitle: "Full-stack developer and game developer",
  /** Defined once: it is the tab title, the OG title and the search result. */
  pageTitle: "Raymond Dzery Hago: mobile apps, games and websites",
} as const;

export const links: ProfileLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raymond-dzery-hago-25013221b/" },
  { label: "GitHub", href: "https://github.com/RDH36" },
  { label: "itch.io", href: "https://rdh36.itch.io/" },
  { label: "Instagram", href: "https://www.instagram.com/raymonddzeryhago/" },
  { label: "YouTube", href: "https://www.youtube.com/@rdh2236" },
  { label: "TikTok", href: "https://www.tiktok.com/@r3d6h" },
  {
    label: "Play Store",
    href: "https://play.google.com/store/apps/developer?id=Raymond+Dzery+Hago",
  },
];

/** Prose rather than a list of names: the brief rules out a stack row, and
    what matters is what each tool is for, not that it exists. */
export const stack = {
  heading: "What I build with",
  lines: [
    "Websites in Next.js and TypeScript, styled with Tailwind and deployed on Vercel.",
    "Mobile apps in React Native and Expo, styled with NativeWind so the web habits carry over.",
    "Games in Unity, with the art drawn pixel by pixel.",
    "PostHog in all of them, because shipping without knowing what people do is guessing.",
  ],
} as const;

/** Counted, not written down, so the line does not quietly go stale. */
const SHIPPING_SINCE = 2020;

export const yearsShipping = new Date().getFullYear() - SHIPPING_SINCE;

export const story = {
  heading: "Why I build",
  paragraphs: [
    "I got into computers because of video games. I wanted to know how the thing on the screen was made, and then I wanted to make one myself.",
    "That curiosity turned into the job. I studied at IESTIME Antaninandro and have been shipping web and mobile products for {years} years. Today that is at {athenix}, building web, mobile and AI products for their clients. On my own time I keep going back to games: Monster Cannon and Flipia are that itch, pixel art included.",
    "Everything I build carries a bit of who I am.",
  ],
  athenix: {
    label: "Athenix Technology",
    href: "https://www.athenix-technology.com/",
  },
} as const;
