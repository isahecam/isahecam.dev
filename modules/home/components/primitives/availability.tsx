import { getTranslations } from "next-intl/server";

import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

export async function Availability() {
  const t = await getTranslations("home");

  return (
    <Status variant={PORTFOLIO.availability.status}>
      <StatusIndicator />
      <StatusLabel>{t("header.availability.label")}</StatusLabel>
    </Status>
  );
}
