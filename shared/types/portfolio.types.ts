import { type VariantProps } from "class-variance-authority";

import { statusVariants } from "@/shared/components/ui/status";

export type Status = NonNullable<VariantProps<typeof statusVariants>["variant"]>;

export interface Portfolio {
  availability: {
    status: Status;
    label: string;
  };
  displayName: string;
  firstName: string;
  lastName: string;
  gender: string;
  jobTitle: string;
  address: string;
  nickname: string;
  flipSentences: string[];
  bio: React.ReactNode;
  summary: string;
  avatar: string;
  ogImage: string;
  keywords: string[];
}
