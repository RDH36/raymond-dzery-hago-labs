"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/components/theme/icons";

/** Icon button shared by the header nav and the mobile bar (moon in light,
    sun in dark). Sizing and hover come from the .nav / .bar rules in home.css. */
export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <MoonIcon size={19} className="block dark:hidden" />
      <SunIcon size={19} className="hidden dark:block" />
    </button>
  );
}
