import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: profile.name,
    short_name: "Dzery Hago",
    description: profile.intro,
    start_url: "/",
    display: "browser",
    background_color: "#fafaf8",
    theme_color: "#fafaf8",
    icons: [
      { src: "/icon.png", sizes: "180x180", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
