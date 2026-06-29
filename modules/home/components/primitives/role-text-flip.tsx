import { useTranslations } from "next-intl";

import { TextFlip } from "@/shared/components/blocks/text-flip";

export function RoleTextFlip() {
  const t = useTranslations("home.hero");
  const roles = t.raw("roles") as string[];

  return (
    <TextFlip className="h-10 max-w-80 text-sm font-medium text-foreground">
      {roles.map((role) => (
        <span key={role} className="block">
          {role}
        </span>
      ))}
    </TextFlip>
  );
}
