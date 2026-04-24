import { KeyOf } from "@/shared/types/utils.types";

export const groupData = <T extends object, K extends KeyOf<T>>(data: readonly T[], key: K) =>
  data.reduce<Record<string, T[]>>((acc, item) => {
    const k = String(item[key]);
    (acc[k] ??= []).push(item);
    return acc;
  }, {});
