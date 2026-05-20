"use client";

import { useTranslations } from "next-intl";

import { FluidGradientText } from "@/shared/components/fluid-gradient-text";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations("home.footer");

  return (
    <footer>
      <div className="mx-auto w-full max-w-4xl text-center">
        <p className="py-2 text-xs text-muted-foreground md:text-sm">
          {t.rich("tagline", {
            a: (chunks) => (
              <a
                href="https://www.instagram.com/isahecam"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:text-foreground hover:underline">
                {chunks}
              </a>
            ),
          })}{" "}
          · {currentYear}
        </p>
        <FluidGradientText text="isahecam" svgViewBoxWidth={1350} />
      </div>
    </footer>
  );
}
