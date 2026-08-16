import { getTranslations } from "next-intl/server";

import { Heading } from "@/components/ui/heading";

export async function AboutSection() {
  const t = await getTranslations("HomePage");

  return (
    <section>
      <hgroup className="flex flex-col gap-3">
        <Heading level={2} className="w-full text-2xl leading-[1.4] font-medium tracking-[-0.48px]">
          <span className="inline-block">{t("title")}</span>
        </Heading>
        <p className="w-full leading-tight text-pretty">
          <strong>Full Stack Developer</strong> and{" "}
          <strong>Information Technology Systems Engineer</strong> with more than a year of
          experience developing and deploying modern web applications in production environments.
        </p>
      </hgroup>
    </section>
  );
}
