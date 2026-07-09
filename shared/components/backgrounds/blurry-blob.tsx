import { cn } from "@/shared/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export function BlurryBlobBackground({ className, firstBlobColor, secondBlobColor }: Readonly<BlobProps>) {
  return (
    <div className="relative inset-0 top-0 right-0 -z-10 w-full">
      <div
        className={cn(
          "absolute top-8 right-8 size-52 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-2xl filter sm:right-16 sm:size-56 sm:blur-3xl md:right-24 md:size-72",
          className,
          firstBlobColor,
        )}></div>
      <div
        className={cn(
          "absolute top-16 right-2 size-44 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-2xl filter sm:top-24 sm:right-4 sm:size-56 sm:blur-3xl md:top-32 md:right-8 md:size-72",
          className,
          secondBlobColor,
        )}
      />
    </div>
  );
}
