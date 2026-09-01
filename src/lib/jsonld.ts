import { links, profile } from "@/data/profile";
import { projects } from "@/data/projects";

const abs = (path: string) => new URL(path, profile.siteUrl).toString();
const id = (fragment: string) => `${profile.siteUrl}#${fragment}`;

/** One @graph so every node can reference the others by @id, instead of four
    unrelated blobs Google has to guess at. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": id("page"),
        url: profile.siteUrl,
        name: profile.pageTitle,
        isPartOf: { "@id": id("website") },
        about: { "@id": id("person") },
        mainEntity: { "@id": id("person") },
        primaryImageOfPage: { "@id": id("photo") },
        inLanguage: "en",
      },
      {
        "@type": "WebSite",
        "@id": id("website"),
        url: profile.siteUrl,
        name: profile.name,
        publisher: { "@id": id("person") },
        inLanguage: "en",
      },
      {
        "@type": "ImageObject",
        "@id": id("photo"),
        url: abs(profile.photo),
        contentUrl: abs(profile.photo),
        caption: profile.name,
      },
      personNode(),
      ...applicationNodes(),
    ],
  };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": id("person"),
    name: profile.name,
    alternateName: "Dzery Hago",
    url: profile.siteUrl,
    image: { "@id": id("photo") },
    jobTitle: profile.jobTitle,
    description: profile.intro,
    email: `mailto:${profile.email}`,
    knowsLanguage: ["en", "fr", "mg"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antananarivo",
      addressCountry: "MG",
    },
    worksFor: {
      "@type": "Organization",
      name: "Athenix Technology",
      url: "https://www.athenix-technology.com/",
    },
    sameAs: links.filter((link) => link.href !== "").map((link) => link.href),
  };
}

/** Released or not — an unreleased app still deserves to be understood. */
function applicationNodes() {
  return projects.map((project) => ({
    "@type": "SoftwareApplication",
    "@id": id(project.slug),
    name: project.name,
    description: project.about,
    abstract: project.tagline,
    applicationCategory: project.schemaCategory,
    operatingSystem: "Android",
    inLanguage: "en",
    image: abs(project.thumbnail),
    screenshot: project.screenshots.map((shot) => abs(shot.src)),
    featureList: project.highlights,
    url: project.playStoreUrl ?? project.siteUrl ?? profile.siteUrl,
    ...(project.playStoreUrl ? { installUrl: project.playStoreUrl } : {}),
    /* A free offer is what makes Google render a rich result rather than a
       plain link. Only on released apps — nothing is on sale until then. */
    ...(project.status === "live"
      ? {
          offers: {
            "@type": "Offer",
            price: 0,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: project.playStoreUrl,
          },
        }
      : {}),
    ...(project.siteUrl ? { sameAs: [project.siteUrl] } : {}),
    author: { "@id": id("person") },
    publisher: { "@id": id("person") },
    isPartOf: { "@id": id("website") },
  }));
}
