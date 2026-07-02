import { cn } from "@/shared/lib/utils";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export function BackgroundBlurryBlob({ className, firstBlobColor, secondBlobColor }: Readonly<BlobProps>) {
  return (
    <div className="relative inset-0 top-0 right-0 -z-10 w-full">
      <div
        className={cn(
          "absolute top-0 right-24 h-72 w-72 animate-pop-blob rounded-sm bg-blue-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
          className,
          firstBlobColor,
        )}></div>
      <div
        className={cn(
          "absolute top-32 right-8 h-72 w-72 animate-pop-blob rounded-sm bg-purple-400 p-8 opacity-45 mix-blend-multiply blur-3xl filter",
          className,
          secondBlobColor,
        )}
      />
    </div>
  );
}
