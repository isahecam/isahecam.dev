import { Skeleton } from "@/components/ui/skeleton";

export function BioSkeleton() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Skeleton className="h-7 w-3/4 rounded-3xl" />
      <Skeleton className="h-24 w-full rounded-3xl" />
    </div>
  );
}
