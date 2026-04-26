import { cn } from "@/lib/utils";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function MetaText({ children, className, ...props }: Props) {
  return (
    <span className={cn("tracking-widest text-primary dark:text-primary-foreground", className)} {...props}>
      {children}
    </span>
  );
}
