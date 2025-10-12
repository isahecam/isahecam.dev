import { format, Format } from "@formkit/tempo";

export const formatDate = (date: Date, options?: Format, locale?: string) => {
  return format(date, options, locale);
};
