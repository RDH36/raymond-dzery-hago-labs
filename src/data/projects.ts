export type ProjectLink = { label: string; href: string };

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Play Store phone exports are 9:16; the Hifety captures come from the web. */
const PLAY_PHONE = { width: 450, height: 800 };
const PLAY_TALL = { width: 450, height: 978 };
const HIFETY_PHONE = { width: 468, height: 1013 };

export type Project = {
  slug: string;
  /** Catalogue number shown beside the row on wide screens. */
  number: string;
  name: string;
  /** One factual line, kept for search results and structured data. */
  tagline: string;
  thumbnail: string;
  /** Label / value pairs of the spec list. */
  facts: [label: string, value: string][];
  /** schema.org applicationCategory: tells Google what kind of app it is. */
  schemaCategory: "FinanceApplication" | "LifestyleApplication" | "GameApplication";
  status: "live" | "soon";
  /** The filled button: the Play listing or the product's own entry point. */
  primary: ProjectLink;
  /** Label of the mobile bottom-bar button while this row is on screen. */
  barLabel: string;
  playStoreUrl?: string;
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

const MITSITSY_PLAY =
  "https://play.google.com/store/apps/details?id=com.rdh36.moneytracking";
const CANNON_PLAY =
  "https://play.google.com/store/apps/details?id=com.rdh36.mosntercannon";

export const projects: Project[] = [
  {
    slug: "mitsitsy",
    number: "01",
    name: "Mitsitsy",
    tagline:
      "Budget and expense tracker built for Madagascar. Log a spend in under ten seconds, and it all works with no connection.",
    thumbnail: "/icons/mitsitsy.png",
    facts: [
      ["Platform", "Android"],
      ["Works", "Offline"],
      ["Currency", "Ariary, euro, dollar"],
    ],
    schemaCategory: "FinanceApplication",
    status: "live",
    playStoreUrl: MITSITSY_PLAY,
    primary: { label: "Get it on Google Play", href: MITSITSY_PLAY },
    barLabel: "Get Mitsitsy",
    siteUrl: "https://mitsitsy.app",
    extraLinks: [
      { label: "mitsitsy.app", href: "https://mitsitsy.app" },
      { label: "Privacy policy", href: "https://mitsitsy.app/privacy" },
    ],
    about:
      "A budget and expense tracker built for how money actually works in Madagascar. Log a spend in under ten seconds, in ariary, with no connection and no account.",
    highlights: [
      "An expense takes under ten seconds to record.",
      "Fully offline, so everything stays on the device.",
      "Ariary, euro and dollar side by side.",
      "Budgets with deadlines, and charts to see where it went.",
    ],
    screenshots: shots("mitsitsy", PLAY_PHONE, [
      ["01-home", "Mitsitsy home screen with the net balance, accounts and budgets"],
      ["04-scan", "Scanning a receipt to add an expense"],
      ["06-reports", "Spending reports with income and expense trends"],
    ]),
  },
  {
    slug: "hifety",
    number: "02",
    name: "Hifety",
    tagline:
      "Your animated invitation, ready to share in minutes. Weddings, traditional engagements (vodiondry), cards and wishes.",
    thumbnail: "/icons/hifety.png",
    facts: [
      ["Platform", "Web"],
      ["Languages", "French and Malagasy"],
      ["Payment", "Mobile Money"],
    ],
    schemaCategory: "LifestyleApplication",
    status: "live",
    primary: { label: "Create a card", href: "https://hifety.com/creer" },
    barLabel: "Create a card",
    siteUrl: "https://hifety.com",
    extraLinks: [{ label: "hifety.com", href: "https://hifety.com" }],
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
  {
    slug: "monster-cannon",
    number: "03",
    name: "Monster Cannon",
    tagline:
      "Arcade game. Load the cannon, set the angle, let the bounces do the rest.",
    thumbnail: "/icons/monster-cannon.png",
    facts: [
      ["Platform", "Android"],
      ["Works", "Offline"],
      ["Price", "Free"],
    ],
    schemaCategory: "GameApplication",
    status: "live",
    playStoreUrl: CANNON_PLAY,
    primary: { label: "Get it on Google Play", href: CANNON_PLAY },
    barLabel: "Get Monster Cannon",
    siteUrl: "https://monstercannon.dzeryhago.com",
    extraLinks: [
      {
        label: "monstercannon.dzeryhago.com",
        href: "https://monstercannon.dzeryhago.com",
      },
    ],
    about:
      "Arcade game. Load the cannon, set the angle, let the bounces do the rest. Endless waves, five bosses, roguelike upgrades drawn between rounds.",
    highlights: [
      "Five bosses, each with a mechanic of its own.",
      "Roguelike upgrades drawn between waves.",
      "Permanent upgrades bought with gold in the lab.",
      "Free to play, with ads. No in-app purchases.",
    ],
    screenshots: shots("monster-cannon", PLAY_TALL, [
      ["aiming-the-cannon", "The cannon aiming at an incoming wave of monsters"],
      ["gameplay-bounces", "Gameplay with the trajectory line and bounces"],
      ["boss-fight", "A boss fight"],
    ]),
  },
];

/** Smaller things, linked rather than listed. */
export const alsoLinks: ProjectLink[] = [
  { label: "Lorebox", href: "https://lorebox.dzeryhago.com" },
  { label: "Six small games", href: "https://rdh36.itch.io/" },
];
