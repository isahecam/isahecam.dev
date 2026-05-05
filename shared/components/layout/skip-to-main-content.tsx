import { getTranslations } from "next-intl/server";

import { cn } from "@/lib/utils";

export async function SkipToMainContent() {
  const t = await getTranslations("a11y");

  return (
    <a
      href="#main-content"
      className={cn(
        "fixed top-4 left-4 z-100 -translate-y-[calc(100%+1rem)] rounded-md border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-md ring-ring transition-transform",
        "focus:translate-y-0 focus:ring-2 focus:outline-none",
      )}>
      {t("skip-to-content")}
    </a>
  );
}
