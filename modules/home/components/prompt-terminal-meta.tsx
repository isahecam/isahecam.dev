import { TerminalIcon } from "lucide-react";

import { NativeTypewriter } from "@/shared/components/uitripled/native-typewriter-shadcnui";

export function PromptTerminalMeta() {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-accent-foreground dark:text-accent">
      <TerminalIcon className="size-3" /> ~/isahecam $
      <NativeTypewriter
        className="block h-4 text-accent-foreground dark:text-accent"
        content={["whoami", "my-projects", "timeline", "social", "contact-me"]}
        loop
        speed="slow"
      />
    </span>
  );
}
