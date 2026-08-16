import { BriefcaseBusinessIcon, HammerIcon, MapPinIcon } from "lucide-react";
import Image from "next/image";

import { LocaleSwitcher } from "@/components/layout/locale-switcher";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Heading } from "@/components/ui/heading";
import { AboutSection } from "@/features/about/components/about-section";
import { ExperienceSection } from "@/features/experience/components/experience-section";
import { ProjectsSection } from "@/features/projects/components/projects-section";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl">
      <div className="grid sm:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="ps-4 pe-4 pt-8 pb-8">
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
                  <span className="whitespace-nowrap">Building @Membok</span>
                </li>
                <li className="flex items-center gap-2 text-sm leading-snug">
                  <BriefcaseBusinessIcon className="size-4" />
                  <span className="whitespace-nowrap">Frontend Developer at XDEVELOP</span>
                </li>
                <li className="flex items-center gap-2 text-sm leading-snug">
                  <MapPinIcon className="size-4" />
                  <span className="whitespace-nowrap">Located on Puebla, Mexico</span>
                </li>
              </ul>
            </div>

            <ThemeToggle />
          </div>
        </aside>

        <div className="h-screen p-4">
          <div className="flex h-full w-full scroll-fade-b scrollbar-none flex-col gap-y-10 overflow-hidden overflow-y-auto rounded-4xl bg-background p-6">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </div>
    </main>
  );
}
