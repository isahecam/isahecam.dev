import { KeyOf } from "@/shared/types/utils.types";

export const indexData = <T extends object, K extends KeyOf<T>>(data: readonly T[], key: K) =>
  new Map(data.map((item) => [item[key], item] as const));
