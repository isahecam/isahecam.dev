import { format } from "@formkit/tempo";

export const formatDate = (date: Date) => {
  return format(date, "MMMM YYYY", "en-US");
};
