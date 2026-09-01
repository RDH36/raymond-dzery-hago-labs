export type ProjectLink = { label: string; href: string };

export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Play Store phone exports are 9:16; the App Store 6.9" ones are taller. */
const PLAY_PHONE = { width: 450, height: 800 };
const APPSTORE_69 = { width: 450, height: 978 };

export type Project = {
  /** Ties the <details> to its anchor and its aria wiring. */
  slug: string;
  name: string;
  /** One factual line, shown while the row is closed. */
  tagline: string;
  thumbnail: string;
  attributes: string[];
  /** schema.org applicationCategory — tells Google what kind of app it is. */
  schemaCategory: "FinanceApplication" | "HealthApplication" | "GameApplication";
  status: "live" | "soon";
  /** Absent while status is "soon" — the install button appears with it. */
  playStoreUrl?: string;
  siteUrl?: string;
  /** Swap the Vercel URLs for the dzeryhago.com subdomains once they exist. */
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
    slug: "clearway",
    name: "Clearway",
    tagline:
      "A calm companion for quitting vaping. Progress, money saved and guided breathing for the hard moments. No lectures.",
    thumbnail: "/icons/clearway.png",
    attributes: ["Android", "No account", "Data stays local"],
    schemaCategory: "HealthApplication",
    status: "live",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.rdh36.clearway",
    siteUrl: "https://clearway-app.dzeryhago.com",
    extraLinks: [
      { label: "Privacy policy", href: "https://clearway-app.dzeryhago.com/privacy" },
    ],
    about:
      "A calm companion for quitting vaping, not a coach shouting at you. It counts the days you have cleared and the money back in your pocket, and gives you something to do when a craving hits.",
    highlights: [
      "Guided 4-7-8 breathing for the hard moments.",
      "Money saved, counted as it goes.",
      "A home screen widget, so progress shows without opening it.",
      "No account, and the data stays on the phone.",
    ],
    screenshots: shots("clearway", APPSTORE_69, [
      ["days-clear", "Days cleared, with the haze lifting as progress builds"],
      ["craving-guided-breathing", "The craving screen and its guided breathing session"],
      ["recovery-milestones", "Recovery milestones over time"],
      ["home-screen-widget", "The home screen widget showing progress"],
    ]),
  },
  {
    slug: "flipia",
    name: "Flipia",
    tagline:
      "Memory game turned duel. Flip the cards, find the pairs before your opponent, and trigger powers to break their rhythm.",
    thumbnail: "/icons/flipia.png",
    attributes: ["Android", "Solo and duels", "Leaderboard"],
    schemaCategory: "GameApplication",
    status: "live",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.rdh36.flipia",
    siteUrl: "https://flipia.dzeryhago.com",
    about:
      "A memory game turned into a duel. Match the pairs faster than your opponent, and spend powers to scramble the board when you fall behind.",
    highlights: [
      "Duels against other players or bots.",
      "Powers that change the board mid-game.",
      "Leaderboard by XP, win rate and rank.",
      "Several modes, offline play included.",
    ],
    screenshots: shots("flipia", PLAY_PHONE, [
      ["memory-duel", "A duel in progress, two players racing for pairs"],
      ["powers", "Powers being triggered on the board"],
      ["game-modes", "The game modes on offer"],
      ["play-with-friends", "Playing against friends"],
    ]),
  },
  {
    slug: "monster-cannon",
    name: "Monster Cannon",
    tagline:
      "Arcade game. Load the cannon, set the angle, let the bounces do the rest. Endless waves, five bosses, roguelike upgrades drawn between rounds.",
    thumbnail: "/icons/monster-cannon.png",
    attributes: ["Android", "Offline", "Free"],
    schemaCategory: "GameApplication",
    status: "soon",
    siteUrl: "https://monster-cannon.dzeryhago.com",
    about:
      "Aim, bounce, destroy. You load the cannon and set the angle; the trajectory line shows where the shot lands after the bounces. Waves never stop, and every round hands you a choice of upgrades.",
    highlights: [
      "Five bosses, each with a mechanic of its own.",
      "Roguelike upgrades drawn between waves.",
      "Permanent upgrades bought with gold in the lab.",
      "Free to play, with ads. No in-app purchases.",
    ],
    screenshots: shots("monster-cannon", APPSTORE_69, [
      ["aiming-the-cannon", "The cannon aiming at an incoming wave of monsters"],
      ["gameplay-bounces", "Gameplay with the trajectory line and bounces"],
      ["boss-fight", "A boss fight"],
      ["cannon-collection", "The cannon collection"],
    ]),
  },
];
