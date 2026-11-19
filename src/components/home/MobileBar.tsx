"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ContentsSheet } from "@/components/blog/article/ContentsSheet";
import type { Section } from "@/components/blog/article/sections";
import { ThemeButton } from "@/components/theme/ThemeButton";

type Cta = { label: string; href: string };

/**
 * Bottom bar under 900 px. The action button shows only while the middle of
 * the screen is inside a project section (section[data-cta]).
 * On the blog and legal pages (`page`), Home and Blog are real routes, and an
 * article passes its `sections` to get the "Contents" sheet.
 */
export function MobileBar({
  page,
  sections,
}: {
  page?: "blog" | "legal";
  sections?: Section[];
}) {
  const [cta, setCta] = useState<Cta | null>(null);
  const hits = useRef(new Map<Element, boolean>());

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("section[data-cta]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) hits.current.set(e.target, e.isIntersecting);
        const hit = [...sections].find((s) => hits.current.get(s));
        setCta(
          hit
            ? { label: hit.dataset.cta ?? "", href: hit.dataset.href ?? "#" }
            : null,
        );
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="bar" aria-label="Quick actions">
      {page ? <Link href="/">Home</Link> : <a href="#top">Home</a>}
      <Link href="/blog" aria-current={page === "blog" ? "page" : undefined}>
        Blog
      </Link>
      {sections ? <ContentsSheet sections={sections} /> : null}
      <ThemeButton />
      {cta && (
        <a
          className="btn"
          href={cta.href}
          target="_blank"
          rel="noopener"
          data-track="bar_cta_click"
          data-project={cta.label}
        >
          {cta.label}
        </a>
      )}
    </nav>
  );
}
