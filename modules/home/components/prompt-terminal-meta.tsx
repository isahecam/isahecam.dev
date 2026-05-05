import { TerminalIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { TextFlip } from "@/shared/components/text-flip/text-flip";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

export async function PromptTerminalMeta() {
  const t = await getTranslations("home");

  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <TerminalIcon aria-hidden className="size-3" /> ~/{PORTFOLIO.nickname} $
      <TextFlip>{t.raw("header.flip-sentences")}</TextFlip>
    </span>
  );
}
