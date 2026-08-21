import { getLocale } from "next-intl/server";
import { cacheLife } from "next/cache";

import { getYearFormatter } from "@/lib/formatters";

/**
 * `new Date()` is synchronous IO, so it cannot run in the prerendered shell.
 * Keeping it inside a cached scope bakes the year into the build output and
 * refreshes it daily, which keeps the copyright line in the static HTML.
 */
async function getCurrentYear(locale: string) {
  "use cache";
  cacheLife("days");

  return getYearFormatter(locale).format(new Date());
}

export async function CurrentYearLabel() {
  const locale = await getLocale();
  const year = await getCurrentYear(locale);

  return <time dateTime={year}>{year}</time>;
}
