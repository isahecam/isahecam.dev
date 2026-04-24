export function Background() {
  return (
    <div
      className="absolute inset-0 -z-10 opacity-40 dark:opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(var(--grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--grid-color) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}
