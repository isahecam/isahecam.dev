import { useLocale } from "next-intl";

import { LocaleSwitcher } from "@/shared/components/layout/locale-switcher";
import { Logo } from "@/shared/components/layout/logo";
import { ThemeToggle } from "@/shared/components/layout/theme-toggle";

export function Header() {
  const currentLocale = useLocale();

  return (
    <header className="@container-[scroll-state] sticky top-0 z-20 w-full p-8">
      <div className="navbar mx-auto flex w-full items-center justify-between rounded-full border border-transparent bg-background px-4 py-2 transition-[max-width,border-radius,background-color] duration-200">
        <Logo />
        <nav className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleSwitcher defaultValue={currentLocale} />
        </nav>
      </div>
    </header>
  );
}
