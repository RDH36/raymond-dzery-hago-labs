import type { Metadata } from "next";

import { profile } from "@/data/profile";

/** A page's `openGraph` replaces the layout's whole object, image included,
    so the shared fields are restated here. */
const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: profile.pageTitle,
};

export function blogMetadata(
  path: string,
  type: "website" | "article",
  title: string,
  description: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: profile.name,
      locale: "en_US",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@rdzeryhago",
      title,
      description,
      images: [image.url],
    },
  };
}
