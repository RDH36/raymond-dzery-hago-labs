import posthog from "posthog-js";

/** No-ops when PostHog never loaded (no key, or a blocker ate the script). */
export function track(event: string, properties?: Record<string, unknown>) {
  if (!posthog.__loaded) return;
  posthog.capture(event, properties);
}
