"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { Select, SelectContent, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

interface Props extends React.ComponentProps<typeof Select> {
  label: string;
}

export function LocaleSwitcherSelect({ children, defaultValue, label }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

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
    <Select name="locale-switcher" defaultValue={defaultValue} onValueChange={onSelectChange} disabled={isPending}>
      <SelectTrigger aria-label={label}>
        <SelectValue />
      </SelectTrigger>
      <SelectContent align="end" position="popper">
        {children}
      </SelectContent>
    </Select>
  );
}
