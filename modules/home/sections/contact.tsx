import { SocialList } from "@/modules/home/components/social-list";
import { Heading } from "@/shared/components/typography/heading";

export function Contact() {
  return (
    <section className="flex flex-col gap-4">
      <Heading level={2} className="text-xs font-bold text-balance text-muted-foreground">
        // encuéntrame en · hover para preview
      </Heading>
      <SocialList />
    </section>
  );
}
