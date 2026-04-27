import { Separator } from "@/shared/components/ui/separator";
import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";
import { ME } from "@/shared/constants/portfolio.constants";

export function WorkStatus() {
  return (
    <div className="flex items-center gap-4 text-xs">
      <Status variant={ME.availability.status}>
        <StatusIndicator />
        <StatusLabel>{ME.availability.label}</StatusLabel>
      </Status>

      <Separator orientation="vertical" className="my-auto h-3" />

      <p className="text-muted-foreground">{ME.address}</p>
    </div>
  );
}
