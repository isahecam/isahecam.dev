import { PortableText, type PortableTextComponents, type PortableTextBlock } from "next-sanity";

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-pretty">{children}</p>,
  },
};

interface Props {
  value: PortableTextBlock[] | PortableTextBlock | null | undefined;
}

export function RichText({ value }: Readonly<Props>) {
  return <PortableText value={value} components={components} />;
}
