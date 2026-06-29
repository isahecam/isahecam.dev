import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { NowPlayingStatus } from "@/modules/home/components/now-playing-status";
import { AvailabilityStatus } from "@/modules/home/components/primitives/availability-status";
import { LocationBadge } from "@/modules/home/components/primitives/location-badge";
import { RoleTextFlip } from "@/modules/home/components/primitives/role-text-flip";
import { buttonVariants } from "@/shared/components/ui/button";
import { Heading } from "@/shared/components/ui/heading";
import { Paragraph } from "@/shared/components/ui/paragraph";
import { Separator } from "@/shared/components/ui/separator";
import { SOCIAL_LINKS } from "@/shared/constants/social.constants";

export async function Hero() {
  const tHome = await getTranslations("home");

  return (
    <section className="relative flex w-full flex-col gap-16 overflow-hidden rounded-4xl px-6 py-16 sm:px-8">
      <Image
        src="https://assets.isahecam.dev/images/landscape-background.avif"
        alt={tHome("hero.accessibility.alt-background")}
        width={1920}
        height={1080}
        priority
        fetchPriority="high"
        className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-top-right dark:block dark:opacity-40"
      />

      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <AvailabilityStatus />
          <Separator orientation="vertical" className="my-auto h-3" />
          <LocationBadge />
        </div>
        <Suspense>
          <NowPlayingStatus />
        </Suspense>
      </div>

      <article className="relative z-10 flex flex-col gap-8">
        <header className="flex flex-col">
          <div className="flex flex-col gap-4 sm:flex-row">
            <Image
              src="https://assets.isahecam.dev/images/avatar.png"
              alt={tHome("hero.accessibility.alt-avatar")}
              className="size-30 rounded-full"
              priority
              width={240}
              height={240}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />

            <div className="flex w-full flex-col justify-end gap-1">
              <Heading level={1} className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Brandon Hernández
              </Heading>

              <RoleTextFlip />
            </div>
          </div>

          <Paragraph className="max-w-xl leading-relaxed text-balance">
            {tHome.rich("hero.about-me", {
              strong: (chunks) => <strong>{chunks}</strong>,
            })}
          </Paragraph>
        </header>

        <nav className="flex flex-col gap-6 sm:flex-row">
          {/* <div className="flex items-center gap-2">
            <Link className={buttonVariants({ variant: "default", size: "lg" })} href="mailto:isahecam@gmail.com">
              <MailPlusIcon />
              {tHome("hero.cta-contact")}
            </Link>

            <Link
              className={buttonVariants({ variant: "outline", size: "lg" })}
              href="https://assets.isahecam.dev/files/CV_BRANDON_HERNANDEZ.pdf"
              rel="noopener noreferrer"
              target="_blank">
              <FileTextIcon aria-hidden />
              {tHome("hero.cta-download-cv")}
            </Link>
          </div> */}

          {/* <Separator orientation="vertical" className="my-auto hidden h-3 sm:block" /> */}

          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((link) => (
              <Link
                key={link.platform}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon-lg",
                })}
                href={link.url}
                rel="noopener noreferrer"
                target="_blank">
                <link.icon aria-hidden />
                <span className="sr-only">{link.platform}</span>
              </Link>
            ))}
          </div>
        </nav>
      </article>
    </section>
  );
}
