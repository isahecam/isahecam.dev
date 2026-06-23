import { MapPinIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Badge } from "@/shared/components/ui/badge";

export async function LocationBadge() {
  const t = await getTranslations("home");

  return (
    <Badge variant={"secondary"}>
      <MapPinIcon />
      {t("header.location")}
    </Badge>
  );
}
