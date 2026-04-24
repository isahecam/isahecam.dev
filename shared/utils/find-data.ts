import { KeyOf } from "@/shared/types/utils.types";

export const findData = <T extends object, K extends KeyOf<T>>(data: readonly T[], key: K, value: T[K]) =>
  data.find((item) => item[key] === value);
