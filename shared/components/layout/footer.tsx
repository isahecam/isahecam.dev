"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("home.footer");

  return (
    <footer className="border-t border-dashed border-primary px-5 py-10 dark:border-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-2 sm:flex-row">
        <span className="text-xs text-muted-foreground">Brandon Hernández · {currentYear}</span>
        <span className="text-xs text-muted-foreground">{t("tagline")}</span>
      </div>
    </footer>
  );
}
