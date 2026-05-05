import { FileTextIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import { NowPlayingStatus } from "@/modules/home/components/now-playing-status";
import { Availability } from "@/modules/home/components/primitives/availability";
import { Location } from "@/modules/home/components/primitives/location";
import { PromptTerminalMeta } from "@/modules/home/components/prompt-terminal-meta";
import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { Heading } from "@/shared/components/typography/heading";
import { Paragraph } from "@/shared/components/typography/paragraph";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui/avatar";
import { buttonVariants } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { NativeTypewriter } from "@/shared/components/uitripled/native-typewriter-shadcnui";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";
import { PUBLIC_SOCIAL_URLS } from "@/shared/constants/public-social-urls.constants";

export async function Hero() {
  const t = await getTranslations("home");
  const tMeta = await getTranslations("metadata");

  return (
    <section className="relative flex flex-col gap-8 overflow-hidden py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="relative h-full w-full mask-[linear-gradient(to_left,black_0%,black_30%,transparent_65%)] sm:mask-[linear-gradient(to_left,black_0%,black_40%,transparent_70%)]">
          <Image
            src="https://assets.isahecam.dev/images/ascii-art-hero-background.png"
            alt={tMeta("og-image-alt")}
            fill
            priority
            loading="eager"
            className="object-cover object-top-right"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-transparent" />
        </div>
      </div>
      <header className="relative z-10 space-y-4">
        <PromptTerminalMeta />
        <div className="flex items-center gap-4 text-xs">
          <Availability />
          <Separator orientation="vertical" className="my-auto h-3" />
          <Location />
        </div>
        <NowPlayingStatus />
      </header>

      <div className="relative z-10 flex flex-col gap-6">
        <header>
          <div className="flex items-center gap-4">
            <Avatar className="size-20 sm:size-24">
              <AvatarImage src={PORTFOLIO.avatar} alt={PORTFOLIO.displayName} loading="eager" width={96} height={96} />
              <AvatarFallback>BH</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <Heading level={1} className="font-bold text-balance">
                {PORTFOLIO.displayName}
              </Heading>
              <NativeTypewriter className="block h-5.5" content={t.raw("typewriter-sentences")} loop speed={100} />
            </div>
          </div>
          <Paragraph className="max-w-prose text-balance text-muted-foreground">
            {t.rich("about-me", {
              strong: (chunks) => <strong className="font-bold text-accent">{chunks}</strong>,
            })}
          </Paragraph>
        </header>
        <nav aria-label="Social media and CV links" className="flex gap-2">
          <Link className={buttonVariants({ variant: "outline" })} href={PUBLIC_SOCIAL_URLS.github} target="_blank">
            <GitHub />
            GitHub
          </Link>

          <Link className={buttonVariants({ variant: "outline" })} href={PUBLIC_SOCIAL_URLS.linkedIn} target="_blank">
            <LinkedIn />
            LinkedIn
          </Link>

          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://assets.isahecam.dev/files/CV_BRANDON_HERNANDEZ.pdf"
            target="_blank">
            <FileTextIcon />
            CV
          </Link>
        </nav>
      </div>
    </section>
  );
}
