"use client";

import { SiteFooterInteractiveLogotype } from "@/shared/components/layout/site-footer-brand";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dashed border-primary px-5 py-4 dark:border-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-2 sm:flex-row">
        <span className="text-xs text-muted-foreground">Brandon Hernández · {currentYear}</span>
        <span className="text-xs text-muted-foreground">made with care · love by code · my 🧠</span>
      </div>
      <SiteFooterInteractiveLogotype />
    </footer>
  );
}
