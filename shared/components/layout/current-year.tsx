"use client";

export function CurrentYear() {
  const year = new Intl.DateTimeFormat("es-MX", { year: "numeric" }).format(new Date());

  return <time dateTime={year}>{year}</time>;
}
