import { useTranslations } from "next-intl";
import { Suspense } from "react";

import { FluidGradientText } from "@/shared/components/blocks/fluid-gradient-text";
import { CurrentYear } from "@/shared/components/layout/current-year";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer>
      <div className="mx-auto w-full max-w-4xl space-y-4 pb-8 text-center">
        <FluidGradientText text="isahecam" svgViewBoxWidth={1400} />
        <p className="text-xs text-muted-foreground md:text-sm">
          ©{" "}
          <Suspense fallback={<>...</>}>
            <CurrentYear />
          </Suspense>
          <strong> isahecam</strong> — {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}
