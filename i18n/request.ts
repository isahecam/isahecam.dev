import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import * as rootParams from "next/root-params";

import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    const paramValue = await rootParams.locale();
    if (hasLocale(routing.locales, paramValue)) {
      locale = paramValue;
    } else {
      notFound();
    }
  }

  const messageLoaders = {
    es: () => import("../messages/es.json"),
    en: () => import("../messages/en.json"),
  };

  return {
    locale,
    messages: (await messageLoaders[locale as keyof typeof messageLoaders]()).default,
  };
});
