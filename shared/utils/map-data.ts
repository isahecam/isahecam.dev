import { KeyOf } from "@/shared/types/utils.types";

export const mapData = <T extends object, K extends KeyOf<T>>(data: readonly T[], key: K) =>
  data.map((item) => item[key]);
