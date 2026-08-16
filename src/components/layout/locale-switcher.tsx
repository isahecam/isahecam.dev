"use client";

import { Locale, useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

interface Props extends React.ComponentProps<typeof Select> {}

export function LocaleSwitcher({ ...props }: Readonly<Props>) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const locale = useLocale();

  const t = useTranslations("locale-switcher");

  const onSelectChange = (value: unknown) => {
    const nextLocale = value as Locale;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Validación interna de rutas de next-intl
        { pathname, params },
        { locale: nextLocale },
      );
    });
  };

  return (
    <Select
      name="locale-switcher"
      disabled={isPending}
      {...props}
      value={locale}
      onValueChange={onSelectChange}
    >
      <SelectTrigger aria-label={t("label")}>
        <SelectValue>{(value: Locale) => t("locale", { locale: value })}</SelectValue>
      </SelectTrigger>
      <SelectContent align="end" alignItemWithTrigger={false} className="p-1">
        {routing.locales.map((cur) => (
          <SelectItem key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
