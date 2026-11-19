"use client";

import { useTheme } from "next-themes";

/** Text button shared by the header nav and the mobile bar. */
export function ThemeButton() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      Theme
    </button>
  );
}
