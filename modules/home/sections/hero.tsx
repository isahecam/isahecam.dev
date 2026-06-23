import { FileTextIcon, MailPlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

import { NowPlayingStatus } from "@/modules/home/components/now-playing-status";
import { AvailabilityStatus } from "@/modules/home/components/primitives/availability-status";
import { LocationBadge } from "@/modules/home/components/primitives/location-badge";
import { WhoAmITextFlip } from "@/modules/home/components/primitives/whoami-text-flip";
import { GitHub } from "@/shared/components/icons/github";
import { LinkedIn } from "@/shared/components/icons/linkedin";
import { buttonVariants } from "@/shared/components/ui/button";
import { Heading } from "@/shared/components/ui/heading";
import { Paragraph } from "@/shared/components/ui/paragraph";
import { Separator } from "@/shared/components/ui/separator";
import { PUBLIC_SOCIAL_URLS } from "@/shared/constants/public-social-urls.constants";

export async function Hero() {
  return (
    <section className="flex w-full flex-col gap-16 py-16">
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div className="relative h-full w-full mask-[linear-gradient(to_left,black_0%,black_30%,transparent_65%)] sm:mask-[linear-gradient(to_left,black_0%,black_40%,transparent_70%)]">
          <Image
            src="https://assets.isahecam.dev/images/ascii-art-hero-background.png"
            alt="Hero background"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-top-right"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-transparent" />
        </div>
      </div> */}

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
          <div className="flex items-center gap-4">
            <Image
              src="https://assets.isahecam.dev/images/avatar.png"
              alt="Avatar of Brandon Hernández"
              className="size-30 rounded-full"
              priority
              width={240}
              height={240}
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />

            <div className="space-y-2">
              <Heading level={1} className="font-extrabold text-balance">
                Brandon <span className="text-primary">Hernández</span>
              </Heading>

              <WhoAmITextFlip />
            </div>
          </div>

          <Paragraph className="max-w-xl leading-relaxed text-balance">
            <strong className="font-bold">Desarrollador Full-Stack</strong> e{" "}
            <strong className="font-bold">Ingeniero en Sistemas y Tecnologías de la Información Industrial</strong> con
            +1 año de experiencia en desarrollo web, diseño y escalabilidad de aplicaciones entornos Frontend-Backend.
          </Paragraph>
        </header>

        <nav className="flex items-center gap-4">
          <Link className={buttonVariants({ variant: "default", size: "lg" })} href="#contact">
            <MailPlusIcon />
            Contáctame
          </Link>

          <Link
            className={buttonVariants({ variant: "outline", size: "lg" })}
            href="https://assets.isahecam.dev/files/CV_BRANDON_HERNANDEZ.pdf"
            rel="noopener noreferrer"
            target="_blank">
            <FileTextIcon aria-hidden />
            Descargar CV
          </Link>

          <Separator orientation="vertical" className="my-auto h-3" />

          <div className="flex items-center gap-2">
            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "icon-lg",
              })}
              href={PUBLIC_SOCIAL_URLS.github}
              rel="noopener noreferrer"
              target="_blank">
              <GitHub aria-hidden />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              className={buttonVariants({
                variant: "ghost",
                size: "icon-lg",
              })}
              href={PUBLIC_SOCIAL_URLS.linkedIn}
              rel="noopener noreferrer"
              target="_blank">
              <LinkedIn aria-hidden />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </nav>
      </article>
    </section>
  );
}
