import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";

export async function AvailabilityStatus() {
  return (
    <Status variant="success">
      <StatusIndicator />
      <StatusLabel>Open to work</StatusLabel>
    </Status>
  );
}
