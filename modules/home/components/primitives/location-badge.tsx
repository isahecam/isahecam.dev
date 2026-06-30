import { getTranslations } from "next-intl/server";

import { MexicoFlag } from "@/shared/components/icons/mexico-flag";
import { Badge } from "@/shared/components/ui/badge";

export async function LocationBadge() {
  const t = await getTranslations("home");

  return (
    <Badge variant={"secondary"}>
      <MexicoFlag className="mr-1" />
      {t("header.location")}
    </Badge>
  );
}
