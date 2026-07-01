import clsx from "clsx";
import { HTMLAttributes } from "react";

export function DecoratorBar({ className, ...props }: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      data-slot="decorator-bar"
      className={clsx("h-0.5 w-8 origin-left rounded-full bg-foreground", className)}
      aria-hidden
      {...props}
    />
  );
}
