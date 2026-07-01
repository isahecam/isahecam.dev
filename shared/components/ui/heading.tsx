import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ children, level = 1, className, ...props }: Readonly<Props>) {
  const Tag: React.ElementType = `h${level}`;

  return (
    <Tag data-slot="heading" className={clsx("tracking-tight text-balance", className)} {...props}>
      {children}
    </Tag>
  );
}
