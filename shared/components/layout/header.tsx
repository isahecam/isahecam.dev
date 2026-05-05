import { getTranslations } from "next-intl/server";

import { changeLocaleAction } from "@/shared/actions/change-locale-action";
import { LocaleSwitcher } from "@/shared/components/custom/locale-switcher";
import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export async function Header() {
  const t = await getTranslations("a11y");

  return (
    <header className="fixed z-20 w-full border-b border-primary backdrop-blur-xl dark:border-primary-foreground">
      <div className="mx-auto flex w-full max-w-4xl items-center justify-between p-5 lg:px-0">
        <Logo />
        <nav aria-label={t("site-nav")} className="flex items-center gap-2">
          <LocaleSwitcher onLocaleChange={changeLocaleAction} />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
