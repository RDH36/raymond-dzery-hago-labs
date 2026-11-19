"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { ThemeButton } from "@/components/theme/ThemeButton";

type Cta = { label: string; href: string };

/**
 * Bottom bar under 900 px. The action button shows only while the middle of
 * the screen is inside a project section (section[data-cta]).
 */
export function MobileBar() {
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
      <a href="#top">Home</a>
      <Link href="/blog">Blog</Link>
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
