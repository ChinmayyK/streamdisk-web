"use client";

import { Moon, Sun } from "@phosphor-icons/react";

// Flips the page theme and remembers it. Both icons render; CSS shows the right one, so there is no flash.
export function ThemeToggle() {
  const flip = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };
  return (
    <button
      type="button"
      onClick={flip}
      aria-label="Switch between light and dark"
      className="grid size-9 place-items-center rounded-full text-muted transition-colors hover:bg-sunken hover:text-ink"
    >
      <Moon size={17} weight="bold" className="dark:hidden" />
      <Sun size={17} weight="bold" className="hidden dark:block" />
    </button>
  );
}
