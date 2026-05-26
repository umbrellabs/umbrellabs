interface MarqueeProps {
  items: readonly string[];
}

export function Marquee({ items }: MarqueeProps) {
  // Repeat the items list to ensure smooth scrolling overlap
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-3 bg-bg-2">
      <div className="marquee-track flex">
        {repeatedItems.map((item, idx) => {
          const isRed = idx % 3 === 0;
          return (
            <span
              key={idx}
              className={`font-mono text-[0.6rem] tracking-[0.12em] uppercase px-5 whitespace-nowrap ${
                isRed ? 'text-primary' : 'text-text-secondary'
              }`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
