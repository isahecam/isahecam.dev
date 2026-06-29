import clsx from "clsx";

interface DecoratorBarProps {
  className?: string;
}

export function DecoratorBar({ className }: DecoratorBarProps) {
  return (
    <div
      data-slot="decorator-bar"
      className={clsx("h-0.5 w-8 origin-left rounded-full bg-foreground", className)}
      aria-hidden
    />
  );
}
