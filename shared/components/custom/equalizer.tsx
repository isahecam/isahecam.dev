const BARS = [0, 0.2, 0.4];

export function EqualizerIcon() {
  return (
    <div className="flex items-end gap-px" role="img" aria-label="Reproduciendo">
      {BARS.map((delay) => (
        <span
          key={delay}
          className="block h-3 w-[3px] origin-bottom bg-green-400"
          style={{
            animation: `equalizer 0.8s ease-in-out infinite`,
            animationDelay: `${delay}s`,
          }}
        />
      ))}
    </div>
  );
}
