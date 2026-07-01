import { getTranslations } from "next-intl/server";

import { MXFlag } from "@/shared/components/icons/mx-flag";
import { Badge } from "@/shared/components/ui/badge";

export async function LocationBadge() {
  const t = await getTranslations("home");

  return (
    <Badge variant={"secondary"}>
      <MXFlag className="mr-1" />
      {t("header.location")}
    </Badge>
  );
}
