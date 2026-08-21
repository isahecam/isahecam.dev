"use client";

import { useLocale } from "next-intl";

import { getYearFormatter } from "@/lib/formatters";

export function CurrentYearLabel() {
  const locale = useLocale();

  const yearFormatter = getYearFormatter(locale);
  const year = yearFormatter.format(new Date());

  return <time dateTime={year}>{year}</time>;
}
