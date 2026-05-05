import { getTranslations } from "next-intl/server";

export async function Location() {
  const t = await getTranslations("home");

  return <p className="text-muted-foreground">{t("header.location")}</p>;
}
