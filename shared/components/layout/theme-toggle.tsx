"use client";

import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

import { Button } from "@/shared/components/ui/button";

export function ThemeToggle() {
  const t = useTranslations("a11y");
  const { resolvedTheme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const handleThemeToggleClick = () => {
    if (!document.startViewTransition) switchTheme();
    else document.startViewTransition(switchTheme);
  };

  return (
    <Button variant="outline" size="icon" aria-label={t("theme-toggle")} onClick={handleThemeToggleClick}>
      <MoonIcon aria-hidden className="hidden [html.dark_&]:block" />
      <SunMediumIcon aria-hidden className="hidden [html.light_&]:block" />
    </Button>
  );
}
