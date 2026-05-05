import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function Logo() {
  const t = await getTranslations("a11y");
  return (
    <Link
      href="/"
      aria-label={t("logo-home")}
      className="inline-flex items-center text-sm text-muted-foreground dark:text-muted-foreground">
      isahecam
      <span className="text-primary dark:text-white">.dev</span>
    </Link>
  );
}
