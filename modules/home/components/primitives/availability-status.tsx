import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";
import { PORTFOLIO } from "@/shared/constants/portfolio.constants";

export async function AvailabilityStatus() {
  return (
    <Status variant={PORTFOLIO.availability.status}>
      <StatusIndicator />
      <StatusLabel>Open to work</StatusLabel>
    </Status>
  );
}
