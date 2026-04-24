import type { technologies } from "@/shared/constants/technologies.constants";

export type Technology = (typeof technologies)[number]["key"];
