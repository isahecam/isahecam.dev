import { FileTextIcon } from "lucide-react";
import Link from "next/link";

import { PromptTerminalMeta } from "@/modules/home/components/prompt-terminal-meta";
import { WorkStatus } from "@/modules/home/components/work-status";
import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { Heading } from "@/shared/components/typography/heading";
import { Paragraph } from "@/shared/components/typography/paragraph";
import { buttonVariants } from "@/shared/components/ui/button";
import { NativeTypewriter } from "@/shared/components/uitripled/native-typewriter-shadcnui";

export function Hero() {
  return (
    <section className="flex flex-col gap-8">
      <header className="space-y-4">
        <PromptTerminalMeta />
        <WorkStatus />
      </header>

      <div className="flex flex-col gap-6">
        <header className="space-y-2">
          <Heading level={1} className="mb-2 font-bold text-balance">
            Brandon Hernández
          </Heading>
          <NativeTypewriter
            className="block h-5.5 text-accent-foreground dark:text-accent"
            content={["IT Engineer", "Full Stack Developer"]}
            loop
          />
          <Paragraph className="max-w-prose text-muted-foreground dark:text-muted-foreground">
            I'm a <strong>Systems and Industrial Information Technology Engineer</strong> with over a year of experience
            as a <strong>full-stack developer</strong>. I'm a passionate lifelong learner, driven by creativity and
            ambition to build meaningful web experiences and solutions.
          </Paragraph>
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
