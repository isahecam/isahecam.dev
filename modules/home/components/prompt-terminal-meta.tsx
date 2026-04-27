import { TerminalIcon } from "lucide-react";

import { TextFlip } from "@/shared/components/text-flip/text-flip";

export function PromptTerminalMeta() {
  return (
    <span className="inline-flex items-center gap-2 text-xs">
      <TerminalIcon className="size-3" /> ~/isahecam $
      <TextFlip>
        <span>I love to code ♥️</span>
        <span>I like the small details</span>
        <span>I'm a quick learner </span>
      </TextFlip>
    </span>
  );
}
