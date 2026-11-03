export type ProjectLink = { label: string; href: string };

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Play Store phone exports are 9:16; the Hifety captures come from the web. */
const PLAY_PHONE = { width: 450, height: 800 };
const HIFETY_PHONE = { width: 468, height: 1013 };

export type Project = {
  /** Ties the <details> to its anchor and its aria wiring. */
  slug: string;
  name: string;
  /** One factual line, shown while the row is closed. */
  tagline: string;
  thumbnail: string;
  attributes: string[];
  /** schema.org applicationCategory — tells Google what kind of app it is. */
  schemaCategory: "FinanceApplication" | "LifestyleApplication";
  status: "live" | "soon";
  /** Absent while status is "soon" — the install button appears with it. */
  playStoreUrl?: string;
  /** The filled button of a product that is not on the Play Store. */
  primaryAction?: ProjectLink;
  siteUrl?: string;
  extraLinks?: ProjectLink[];
  about: string;
  highlights: string[];
  screenshots: Screenshot[];
};

/** File names are descriptive on purpose: Google Images reads them. */
const shots = (
  slug: string,
  size: { width: number; height: number },
  frames: [name: string, alt: string][],
): Screenshot[] =>
  frames.map(([name, alt]) => ({
    src: `/shots/${slug}/${slug}-${name}.jpg`,
    alt,
    ...size,
  }));

export const projects: Project[] = [
  {
    slug: "mitsitsy",
    name: "Mitsitsy",
    tagline:
      "Budget and expense tracker built for Madagascar. Log a spend in under ten seconds, and it all works with no connection.",
    thumbnail: "/icons/mitsitsy.png",
    attributes: ["Android", "Offline", "Ariary, euro, dollar"],
    schemaCategory: "FinanceApplication",
    status: "live",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rdh36.moneytracking",
    siteUrl: "https://mitsitsy.app",
    extraLinks: [{ label: "Privacy policy", href: "https://mitsitsy.app/privacy" }],
    about:
      "A budget and expense tracker built for how money actually works in Madagascar. Log a spend in under ten seconds, in ariary, with no connection and no account.",
    highlights: [
      "An expense takes under ten seconds to record.",
      "Fully offline, so everything stays on the device.",
      "Ariary, euro and dollar side by side.",
      "Budgets with deadlines, and charts to see where it went.",
    ],
    screenshots: shots("mitsitsy", PLAY_PHONE, [
      ["home-balance", "Mitsitsy home screen showing the net balance and monthly totals"],
      ["log-expense-in-ten-seconds", "Recording an expense in a few taps"],
      ["budgets", "Budgets with progress bars and deadlines"],
      ["spending-reports", "Spending reports as pie and bar charts"],
    ]),
  },
  {
    slug: "hifety",
    name: "Hifety",
    tagline:
      "Your animated invitation, ready to share in minutes. Weddings, traditional engagements (vodiondry), cards and wishes.",
    thumbnail: "/icons/hifety.png",
    attributes: ["Web", "French and Malagasy", "Mobile Money"],
    schemaCategory: "LifestyleApplication",
    status: "live",
    primaryAction: { label: "Create a card", href: "https://hifety.com/creer" },
    siteUrl: "https://hifety.com",
    about:
      "An invitation that comes out of its envelope, animated, for the way celebrations happen in Madagascar. Pick a template, fill it in, and share one link.",
    highlights: [
      "A template for every occasion: weddings, vodiondry, cards and wishes.",
      "It counts down the days and collects replies.",
      "In French and Malagasy.",
      "Pay with Mobile Money.",
    ],
    screenshots: shots("hifety", HIFETY_PHONE, [
      ["accueil", "Hifety: an invitation coming out of its envelope"],
      ["modeles", "An invitation template for every occasion"],
      ["vivent", "An invitation that counts down the days and collects replies"],
    ]),
  },
];

/** Smaller things, linked rather than listed. */
export const alsoLinks: ProjectLink[] = [
  { label: "Lorebox", href: "https://lorebox.dzeryhago.com" },
  { label: "Monster Cannon", href: "https://monstercannon.dzeryhago.com" },
  { label: "itch.io", href: "https://rdh36.itch.io/" },
];
