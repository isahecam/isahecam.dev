import { type VariantProps } from "class-variance-authority";

import { statusVariants } from "@/shared/components/ui/status";

export type Status = NonNullable<VariantProps<typeof statusVariants>["variant"]>;

export interface Portfolio {
  availability: {
    status: Status;
  };
  displayName: string;
  firstName: string;
  lastName: string;
  gender: string;
  jobTitle: string;
  nickname: string;
  avatar: string;
  ogImage: string;
  keywords: string[];
}
