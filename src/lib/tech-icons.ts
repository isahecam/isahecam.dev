import { Code2Icon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { BetterAuth, DrizzleORM, Nextjs, shadcnui } from "@/components/icons";

export type SVGIcon = ComponentType<SVGProps<SVGSVGElement>>;
export type TechIcon = keyof typeof TECH_ICONS;

const FALLBACK_ICON = Code2Icon;

export const TECH_ICONS = {
  "next-js": Nextjs,
  "better-auth": BetterAuth,
  "shadcn-ui": shadcnui,
  "drizzle-orm": DrizzleORM,
} as const satisfies Record<string, SVGIcon>;

/**
 * Resolves the technology icon from its `key`.
 *
 * @param key - Technology identifier (`technology.key.current`).
 * @returns The mapped SVG component, or the fallback icon if it does not exist.
 */
export function getTechIcon(key: string): SVGIcon {
  if (!Object.hasOwn(TECH_ICONS, key)) {
    return FALLBACK_ICON;
  }

  return TECH_ICONS[key as TechIcon];
}
