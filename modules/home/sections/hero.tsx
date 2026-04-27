import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { NowPlayingStatus } from "@/modules/home/components/now-playing-status";
import { PromptTerminalMeta } from "@/modules/home/components/prompt-terminal-meta";
import { WorkStatus } from "@/modules/home/components/work-status";
import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { Heading } from "@/shared/components/typography/heading";
import { Paragraph } from "@/shared/components/typography/paragraph";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { buttonVariants } from "@/shared/components/ui/button";
import { NativeTypewriter } from "@/shared/components/uitripled/native-typewriter-shadcnui";
import { ME } from "@/shared/constants/portfolio.constants";

export function Hero() {
  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-4">
        <PromptTerminalMeta />
        <WorkStatus />
        <NowPlayingStatus />
      </header>

      <div className="flex flex-col gap-6">
        <header>
          <div className="flex items-center gap-4">
            <Avatar className="size-20 sm:size-24">
              <AvatarImage src={ME.avatar} alt={ME.displayName} loading="eager" width={96} height={96} />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Heading level={1} className="font-bold text-balance">
                {ME.displayName}
              </Heading>
              <NativeTypewriter className="block h-5.5" content={["IT Engineer", "Full Stack Developer"]} loop />
            </div>
          </div>
          <Paragraph className="max-w-prose text-muted-foreground">{ME.bio}</Paragraph>
        </header>
        <nav aria-label="Social media and CV links" className="flex gap-2">
          <Link
            className={buttonVariants({ variant: "outline", size: "sm" })}
            href="https://github.com/isahecam"
            target="_blank">
            <GitHub />
            GitHub
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "sm" })}
            href="https://www.linkedin.com/in/isahir-hernandez/"
            target="_blank">
            <LinkedIn />
            LinkedIn
          </Link>

          <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/" download>
            <FileTextIcon />
            CV
          </Link>
        </nav>
      </div>
    </section>
  );
}
