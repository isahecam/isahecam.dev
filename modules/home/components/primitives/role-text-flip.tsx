import { useTranslations } from "next-intl";

import { TextFlip } from "@/shared/components/blocks/text-flip";

export function RoleTextFlip() {
  const t = useTranslations("home.hero");
  const roles = t.raw("roles") as string[];

  return (
    <TextFlip className="h-10 max-w-80 text-sm font-medium text-balance text-mauve-700 dark:text-mauve-200">
      {roles.map((role) => (
        <span key={role} className="block">
          {role}
        </span>
      ))}
    </TextFlip>
  );
}
