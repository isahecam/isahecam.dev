"use client";

import { LanguagesIcon } from "lucide-react";
import { Locale, useLocale, useTranslations } from "next-intl";

import { Button } from "@/shared/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/shared/components/ui/dropdown-menu";
import { LOCALES } from "@/shared/constants/locales.constants";

interface Props {
  onLocaleChange: (locale: Locale) => void;
}

export function LocaleSwitcher({ onLocaleChange }: Props) {
  const t = useTranslations("a11y");
  const locale = useLocale();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" aria-label={t("language-switcher")}>
          <LanguagesIcon aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {LOCALES.map(({ code, label }) => (
          <DropdownMenuCheckboxItem
            key={code}
            checked={locale === code}
            onCheckedChange={() => {
              if (locale !== code) onLocaleChange(code);
            }}>
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
