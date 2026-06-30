import { useTranslations } from "next-intl";

import { TextFlip } from "@/shared/components/blocks/text-flip";

export function RoleTextFlip() {
  const t = useTranslations("home.hero");
  const roles = t.raw("roles") as string[];

  return (
    <TextFlip className="h-10 max-w-80 shimmer text-sm shimmer-color-orange-500/60 shimmer-spread-24">
      {roles.map((role) => (
        <span key={role} className="block">
          {role}
        </span>
      ))}
    </TextFlip>
  );
}
