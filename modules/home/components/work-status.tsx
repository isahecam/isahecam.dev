import { Separator } from "@/shared/components/ui/separator";
import { Status, StatusIndicator, StatusLabel } from "@/shared/components/ui/status";

export function WorkStatus() {
  return (
    <div className="flex items-center gap-4 text-xs">
      <Status variant="success">
        <StatusIndicator />
        <StatusLabel>Open to work</StatusLabel>
      </Status>

      <Separator orientation="vertical" className="my-auto h-3" />

      <p className="text-muted-foreground">Puebla, MX</p>
    </div>
  );
}
