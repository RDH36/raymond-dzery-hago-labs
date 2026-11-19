import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// Le dépôt n'a pas de framework de test : node:test, lecture du source du composant.
const src = readFileSync(
  new URL("../src/components/analytics/PostHogProvider.tsx", import.meta.url),
  "utf8",
);
const initArgs = src.match(/posthog\.init\(KEY,\s*\{([\s\S]*?)\}\);/);

test("posthog.init reçoit disable_session_recording: true", () => {
  assert.ok(initArgs, "appel posthog.init introuvable");
  assert.match(initArgs[1], /^\s*disable_session_recording:\s*true,/m);
});

test("pageview, pageleave, profils et host inchangés", () => {
  const body = initArgs[1];
  assert.match(body, /api_host:\s*HOST/);
  assert.match(body, /person_profiles:\s*"always"/);
  assert.match(body, /capture_pageview:\s*true/);
  assert.match(body, /capture_pageleave:\s*true/);
});

test("le clic délégué [data-track] appelle toujours track()", () => {
  assert.match(src, /closest<HTMLElement>\(\s*"\[data-track\]"/);
  assert.match(src, /track\(link\.dataset\.track as string/);
});

test("/privacy et privacy.md : aucune mention de replay ou d'enregistrement de session", () => {
  const page = readFileSync(new URL("../src/app/privacy/page.tsx", import.meta.url), "utf8");
  const md = readFileSync(
    new URL("../.claude/captures/blog-refonte-20261119/privacy.md", import.meta.url),
    "utf8",
  );
  for (const t of [page, md]) {
    assert.doesNotMatch(t, /replay|session recording|recordings?\b|screen record/i);
  }
});

test("/privacy conserve les éléments attendus", () => {
  const page = readFileSync(new URL("../src/app/privacy/page.tsx", import.meta.url), "utf8")
    .replace(/\s+/g, " ");
  for (const k of [
    "pages you view", "when you leave a page", "heatmaps", "page speed",
    "IP address", "profile for each visitor", "cookie", "local storage",
    "Hifety", "Vercel Web Analytics",
  ]) {
    assert.ok(page.includes(k), `manquant: ${k}`);
  }
});
