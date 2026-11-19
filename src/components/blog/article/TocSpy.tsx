"use client";

import { useEffect } from "react";

/** Marks the section being read (aria-current) in the page contents and in the
    mobile sheet. Renders nothing. */
export function TocSpy() {
  useEffect(() => {
    const links = [...document.querySelectorAll<HTMLAnchorElement>(".toc a, .sheet a")];
    const secs = [...document.querySelectorAll<HTMLElement>(".prose > section[id]")];
    if (!secs.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          for (const a of links) {
            if (a.getAttribute("href") === `#${e.target.id}`) a.setAttribute("aria-current", "true");
            else a.removeAttribute("aria-current");
          }
        }
      },
      { rootMargin: "-30% 0px -65% 0px" },
    );
    secs.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
