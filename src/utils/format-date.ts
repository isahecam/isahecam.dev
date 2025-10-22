import { format, Format } from "@formkit/tempo";

export const formatDate = (
  date: Date | string,
  options?: Format,
  locale?: string,
) => {
  return format(date, options, locale);
};
