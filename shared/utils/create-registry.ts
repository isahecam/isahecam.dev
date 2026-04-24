import { KeyOf } from "@/shared/types/utils.types";

export const createRegistry = <T extends object, K extends KeyOf<T>>(data: readonly T[], key: K) => {
  const index = new Map(data.map((item) => [item[key], item] as const));

  return {
    all: data,
    keys: data.map((item) => item[key]),
    get: (value: T[K]) => index.get(value),
    has: (value: T[K]) => index.has(value),
    pluck: <P extends KeyOf<T>>(prop: P) => data.map((item) => item[prop]),
  };
};
