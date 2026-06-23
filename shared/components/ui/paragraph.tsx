import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

export function Paragraph({ children, className, ...props }: Props) {
  return (
    <p className={clsx("text-pretty not-first:mt-8", className)} {...props}>
      {children}
    </p>
  );
}
