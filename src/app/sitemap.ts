import type { MetadataRoute } from "next";

import { profile } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: profile.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...["/blog", "/blog/how-i-built-my-guild", "/privacy", "/terms"].map((path) => ({
      url: new URL(path, profile.siteUrl).toString(),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
