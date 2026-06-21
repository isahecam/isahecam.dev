import { LanguagesIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";

import { routing } from "@/i18n/routing";
import { LocaleSwitcherItem } from "@/shared/components/layout/locale-switcher-item";
import { Button } from "@/shared/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu";

export function LocaleSwitcher() {
  const t = useTranslations("locale-switcher");
  const currentLocale = useLocale();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <LanguagesIcon aria-hidden />
          <span className="sr-only">{t("label")}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {routing.locales.map((cur) => (
          <LocaleSwitcherItem key={cur} targetLocale={cur} currentLocale={currentLocale}>
            {t("locale", { locale: cur })}
          </LocaleSwitcherItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
