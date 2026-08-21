import { BriefcaseBusinessIcon, HammerIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";
import { Suspense } from "react";

import { DownloadCVLink } from "@/components/layout/download-cv-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggleDesktop } from "@/components/layout/theme-toggle-desktop";
import { ThemeToggleMobile } from "@/components/layout/theme-toggle-mobile";
import { buttonVariants } from "@/components/ui/button";
import { Crossfade } from "@/components/ui/crossfade";
import { Heading } from "@/components/ui/heading";
import { SOCIAL_LINKS } from "@/constants/shared.constants";
import { Bio } from "@/features/about/components/bio";
import { BioSkeleton } from "@/features/about/components/skeletons/bio-skeleton";
import { Experience } from "@/features/experience/components/experience";
import { Projects } from "@/features/projects/components/projects";
import { MusicPlayer } from "@/features/spotify/components/music-player";

export default async function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl">
      <div className="grid sm:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="p-8 sm:px-4 sm:py-16">
          <div className="flex h-full flex-col items-start justify-between">
            <div className="flex flex-col items-start gap-8">
              <header className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <Image
                    src="https://assets.isahecam.dev/images/avatar.png"
                    alt="Avatar"
                    width={96}
                    height={96}
                    fetchPriority="high"
                  />

                  <div className="flex items-start gap-3">
                    <ThemeToggleMobile />
                    <LocaleSwitcher />
                  </div>
                </div>

                <hgroup className="space-y-1">
                  <Heading
                    level={1}
                    className="text-xl leading-[1.15] font-medium tracking-[-0.03em]"
                  >
                    Brandon Hernández
                  </Heading>
                  <p className="max-w-80 text-sm leading-tight text-pretty text-muted-foreground">
                    Full Stack Developer / Information Technology Systems Engineer
                  </p>
                </hgroup>
              </header>

              <ul className="flex flex-col items-start gap-1.5">
                <li className="flex items-center gap-1.5 text-sm">
                  <HammerIcon className="size-4" />
                  <span className="whitespace-nowrap">
                    Building{" "}
                    <a
                      href="https://membok-app.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "link", className: "p-0! h-auto" })}
                    >
                      @Membok
                    </a>
                  </span>
                </li>
                <li className="flex items-center gap-1.5 text-sm leading-snug">
                  <BriefcaseBusinessIcon className="size-4" />
                  <span className="whitespace-nowrap">Full Stack Software Engineer</span>
                </li>
                <li className="flex items-center gap-1.5 text-sm leading-snug">
                  <MapPinIcon className="size-4" />
                  <span className="whitespace-nowrap">Located on Puebla, Mexico</span>
                </li>
              </ul>

              <nav className="flex shrink-0 items-center gap-3">
                <DownloadCVLink />

                <ul className="flex gap-1.5">
                  {SOCIAL_LINKS.map((socialLink) => {
                    const Icon = socialLink.platform.icon;

                    return (
                      <li key={socialLink.platform.name} className="contents">
                        <a
                          href={socialLink.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={buttonVariants({
                            variant: "outline",
                            size: "icon-sm",
                          })}
                        >
                          <Icon />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <MusicPlayer />
            <ThemeToggleDesktop />
          </div>
        </aside>

        <div className="h-full p-4 sm:h-screen">
          <div className="flex h-full w-full flex-col gap-y-10 overflow-hidden rounded-[34px] bg-background p-4 sm:scroll-fade sm:scrollbar-none sm:overflow-y-auto">
            <Suspense fallback={<BioSkeleton />}>
              <Crossfade>
                <Bio />
              </Crossfade>
            </Suspense>

            <Experience />

            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
