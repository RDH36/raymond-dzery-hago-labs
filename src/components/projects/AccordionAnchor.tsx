"use client";

import { useEffect, useRef } from "react";

import { track } from "@/components/analytics/track";

/**
 * Keeps the clicked row's title exactly where it was on screen.
 *
 * In an exclusive accordion, opening a row below an open one collapses the
 * first, so everything shifts up and the row you just clicked leaves the
 * viewport. This pins that title for the length of the open animation.
 */
export function AccordionAnchor({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const summary = target?.closest("summary");
      if (!summary || !node.contains(summary)) return;

      const row = summary.closest("details");
      if (row && !row.open) {
        track("project_opened", { project: row.id });
      }

      const before = summary.getBoundingClientRect().top;
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const deadline = performance.now() + (reduced ? 0 : 360);

      const pin = () => {
        const drift = summary.getBoundingClientRect().top - before;
        if (drift !== 0) window.scrollBy(0, drift);
        if (performance.now() < deadline) requestAnimationFrame(pin);
      };

      requestAnimationFrame(pin);
    };

    node.addEventListener("click", onClick);
    return () => node.removeEventListener("click", onClick);
  }, []);

  return <div ref={root}>{children}</div>;
}
