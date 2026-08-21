import { Suspense } from "react";

import { FluidGradientText } from "@/components/blocks/fluid-gradient-text";
import { CurrentYearLabel } from "@/components/layout/current-year-label";
import { buttonVariants } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/constants/shared.constants";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-5xl space-y-2 p-4">
      <FluidGradientText text="isahecam" svgViewBoxWidth={1400} />
      <div className="flex items-center-safe justify-between">
        <p className="text-xs text-muted-foreground md:text-sm">
          ©{" "}
          <Suspense fallback={<>...</>}>
            <CurrentYearLabel />
          </Suspense>{" "}
          <strong className="font-normal">Brandon Hernández</strong>
        </p>

        <nav className="flex shrink-0 items-center gap-1.5">
          {SOCIAL_LINKS.map((socialLink) => {
            const Icon = socialLink.platform.icon;

            return (
              <a
                key={socialLink.platform.name}
                href={socialLink.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialLink.platform.name}
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon-sm",
                })}
              >
                <Icon aria-hidden />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
