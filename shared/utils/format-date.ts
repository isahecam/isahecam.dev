interface FormatDateOptions {
  locale?: string;
  month?: Intl.DateTimeFormatOptions["month"];
  year?: Intl.DateTimeFormatOptions["year"];
}

interface FormatDateRangeOptions extends FormatDateOptions {
  presentLabel?: string;
}

export function formatDate(date: string, options?: FormatDateOptions): string {
  const { locale, month = "short", year = "numeric" } = options ?? {};
  return new Intl.DateTimeFormat(locale, { month, year }).format(new Date(date));
}

export function formatDateRange(startDate: string, endDate: string | null, options?: FormatDateRangeOptions): string {
  const { presentLabel = "presente", ...dateOptions } = options ?? {};
  const start = formatDate(startDate, dateOptions);
  const end = endDate ? formatDate(endDate, dateOptions) : presentLabel;
  return `${start} – ${end}`;
}
