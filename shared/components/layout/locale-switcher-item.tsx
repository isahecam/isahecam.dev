"use client";

import { Locale } from "next-intl";
import { useParams } from "next/navigation";
import { useTransition } from "react";

import { useRouter, usePathname } from "@/i18n/navigation";
import { DropdownMenuCheckboxItem } from "@/shared/components/ui/dropdown-menu";

interface Props extends React.ComponentProps<typeof DropdownMenuCheckboxItem> {
  currentLocale: Locale;
  targetLocale: Locale;
}

export function LocaleSwitcherItem({ targetLocale, currentLocale, children }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = () => {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- Validación interna de rutas de next-intl
        { pathname, params },
        { locale: targetLocale },
      );
    });
  };

  return (
    <DropdownMenuCheckboxItem
      checked={currentLocale === targetLocale}
      disabled={isPending}
      onCheckedChange={() => {
        if (currentLocale !== targetLocale) {
          handleLocaleChange();
        }
      }}>
      {children}
    </DropdownMenuCheckboxItem>
  );
}
