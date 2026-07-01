"use client";

import { Locale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { LOCALE_FLAGS } from "@/shared/constants/locale.constants";

interface Props extends React.ComponentProps<typeof Select> {}

export function LocaleSwitcher({ ...props }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const t = useTranslations("locale-switcher");

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Validación interna de rutas de next-intl
        { pathname, params },
        { locale: nextLocale as Locale },
      );
    });
  }

  return (
    <Select name="locale-switcher" onValueChange={onSelectChange} disabled={isPending} {...props}>
      <SelectTrigger aria-label={t("label")}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" position="popper">
        {routing.locales.map((cur) => {
          const Flag = LOCALE_FLAGS[cur];

          return (
            <SelectItem key={cur} value={cur}>
              {Flag && <Flag className="size-4" aria-hidden="true" />}
              <span>{t("locale", { locale: cur })}</span>
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}
