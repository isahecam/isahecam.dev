const cache = new Map<string, Intl.DateTimeFormat>();

const createDateFormatter = (locale: string, options: Intl.DateTimeFormatOptions) => {
  const key = `${locale}:${JSON.stringify(options)}`;

  if (!cache.has(key)) {
    cache.set(key, new Intl.DateTimeFormat(locale, options));
  }

  return cache.get(key)!;
};

const getYearFormatter = (locale: string) => createDateFormatter(locale, { year: "numeric" });

const getMonthYearFormatter = (locale: string) => createDateFormatter(locale, { year: "numeric", month: "long" });

export { getYearFormatter, getMonthYearFormatter };
