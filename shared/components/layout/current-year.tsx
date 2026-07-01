"use client";

const yearFormatter = new Intl.DateTimeFormat("es-MX", { year: "numeric" });

export function CurrentYear() {
  const year = yearFormatter.format(new Date());

  return <time dateTime={year}>{year}</time>;
}
