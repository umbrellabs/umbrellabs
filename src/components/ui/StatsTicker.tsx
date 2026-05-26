import { useEffect, useRef, useState } from 'react';

interface StatsTickerProps {
  end: number;
  suffix: string;
  duration?: number;
}

export function StatsTicker({ end, suffix, duration = 2000 }: StatsTickerProps) {
  const [value, setValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          const startTime = performance.now();

          const step = (currentTime: number) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeOutCubic = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(easeOutCubic * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={containerRef} className="stat-number">
      {value}
      {suffix}
    </div>
  );
}
