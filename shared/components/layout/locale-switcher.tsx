import { useLocale, useTranslations } from "next-intl";

import { routing } from "@/i18n/routing";
import { SelectItem } from "@/shared/components/ui/select";

import { LocaleSwitcherSelect } from "./locale-switcher-select";

export function LocaleSwitcher() {
  const t = useTranslations("locale-switcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      label={t("label")} // 💡 Pasamos la etiqueta de accesibilidad limpia
    >
      {routing.locales.map((cur) => (
        <SelectItem key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </SelectItem>
      ))}
    </LocaleSwitcherSelect>
  );
}
