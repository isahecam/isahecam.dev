import { getTranslations } from "next-intl/server";

import { SocialList } from "@/modules/home/components/social-list";
import { Heading } from "@/shared/components/typography/heading";

export async function Contact() {
  const t = await getTranslations("home.contact");

  return (
    <section className="flex flex-col gap-4">
      <Heading level={2} className="text-xs font-bold text-balance text-muted-foreground">
        {t("heading")}
      </Heading>
      <SocialList />
    </section>
  );
}
