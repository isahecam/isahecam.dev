import { useLocale } from "next-intl";

import { LocaleSwitcher } from "@/shared/components/layout/locale-switcher";
import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export function Header() {
  const currentLocale = useLocale();

  return (
    <header className="@container-[scroll-state] sticky top-0 z-20 w-full backdrop-blur-xl dark:border-primary-foreground">
      <div className="navbar mx-auto flex w-full max-w-4xl items-center justify-between p-5 transition-[max-width,border-radius,background-color] duration-200 lg:px-0">
        <Logo />
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher defaultValue={currentLocale} />
        </nav>
      </div>
    </header>
  );
}
