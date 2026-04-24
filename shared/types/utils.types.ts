export type KeyOf<T> = Extract<keyof T, string>;

export type ValueOf<T> = T[keyof T];

export type DataItem<T extends readonly unknown[]> = T[number];
