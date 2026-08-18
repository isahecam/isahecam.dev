import { FileTextIcon } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

import { buttonVariants } from "@/components/ui/button";
import { SOURCE_RESUME } from "@/constants/shared.constants";

export async function DownloadCVLink() {
  const locale = await getLocale();
  const t = await getTranslations("home");

  const CV_URL = SOURCE_RESUME[locale];

  return (
    <a
      href={CV_URL}
      title={t("download-cv-cta")}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ size: "sm", variant: "secondary" })}
    >
      {t("download-cv-cta")}
      <FileTextIcon />
    </a>
  );
}
