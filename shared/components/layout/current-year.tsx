"use client";

import { useLocale } from "next-intl";

import { getYearFormatter } from "@/shared/lib/formatters";

export function CurrentYear() {
  const locale = useLocale();

  const yearFormatter = getYearFormatter(locale);
  const year = yearFormatter.format(new Date());

  return <time dateTime={year}>{year}</time>;
}
