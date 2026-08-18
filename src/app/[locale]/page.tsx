import { BriefcaseBusinessIcon, HammerIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { DownloadCVLink } from "@/components/layout/download-cv-link";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { SOCIAL_LINKS } from "@/constants/shared.constants";
import { Bio } from "@/features/about/components/bio";
import { Experience } from "@/features/experience/components/experience";
import { Projects } from "@/features/projects/components/projects";

export default async function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl">
      <div className="grid sm:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="ps-4 pe-4 py-16">
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

                  <LocaleSwitcher />
                </div>

                <hgroup className="space-y-1">
                  <Heading level={1} className="text-xl font-medium">
                    Brandon Hernández
                  </Heading>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Full Stack Developer / Information Technology Systems Engineer
                  </p>
                </hgroup>
              </header>

              <ul className="flex flex-col items-start gap-1.5">
                <li className="flex items-center gap-2 text-sm leading-snug">
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
                <li className="flex items-center gap-2 text-sm leading-snug">
                  <BriefcaseBusinessIcon className="size-4" />
                  <span className="whitespace-nowrap">Full Stack Software Engineer</span>
                </li>
                <li className="flex items-center gap-2 text-sm leading-snug">
                  <MapPinIcon className="size-4" />
                  <span className="whitespace-nowrap">Located on Puebla, Mexico</span>
                </li>
              </ul>

              <nav className="flex gap-3 items-center shrink-0">
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

            <ThemeToggle />
          </div>
        </aside>

        <div className="h-screen p-4">
          <div className="flex h-full w-full scroll-fade scrollbar-none flex-col gap-y-10 overflow-hidden overflow-y-auto rounded-[38px] bg-background p-5">
            <Bio />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </main>
  );
}
