"use client";

import posthog from "posthog-js";
import { useEffect } from "react";

import { track } from "@/components/analytics/track";

const KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

/**
 * Initialises PostHog and turns outbound clicks into events by delegation, so
 * the links themselves stay in server components.
 */
export function PostHogProvider() {
  useEffect(() => {
    if (!KEY) return;

    posthog.init(KEY, {
      api_host: HOST,
      person_profiles: "always",
      capture_pageview: true,
      capture_pageleave: true,
    });

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        "[data-track]",
      );
      if (!link) return;
      track(link.dataset.track as string, {
        project: link.dataset.project,
        destination: link.getAttribute("href"),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
