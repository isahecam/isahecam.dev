import { TerminalIcon } from "lucide-react";

export function PromptTerminalMeta() {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-accent-foreground dark:text-accent">
      <TerminalIcon className="size-3" /> ~/isahecam $ whoami
    </span>
  );
}
