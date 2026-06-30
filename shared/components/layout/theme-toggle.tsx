"use client";

import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/shared/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleThemeToggleClick = () => {
    if (document.startViewTransition) {
      document.startViewTransition(switchTheme);
    } else {
      switchTheme();
    }
  };

  return (
    <Button variant="outline" size="icon" aria-label="Toggle theme" onClick={handleThemeToggleClick}>
      <MoonIcon aria-hidden className="hidden [html.dark_&]:block" />
      <SunMediumIcon aria-hidden className="hidden [html.light_&]:block" />
    </Button>
  );
}
