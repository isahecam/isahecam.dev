export function JsonLdScript({ data }: Readonly<{ data: unknown }>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replaceAll("<", String.raw`\u003c`),
      }}
    />
  );
}
