"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/components/theme/icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="-mr-2 rounded-lg p-2 text-muted hover:bg-hover hover:text-ink"
    >
      <MoonIcon className="block dark:hidden" />
      <SunIcon className="hidden dark:block" />
    </button>
  );
}
