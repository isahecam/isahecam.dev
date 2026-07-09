const formatPeriod = (
  formatter: Intl.DateTimeFormat,
  startDate: string | Date,
  endDate: string | Date | null | undefined,
  presentLabel: string,
) => {
  const start = formatter.format(new Date(startDate));
  const end = endDate ? formatter.format(new Date(endDate)) : presentLabel;

  return `${start} – ${end}`;
};

export { formatPeriod };
