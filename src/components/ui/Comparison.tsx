import { useEffect, useRef, useState } from 'react';

interface ComparisonRowProps {
  label: string;
  oldValue: string;
  usValue: string;
  delay: number;
}

function ComparisonRow({ label, oldValue, usValue, delay }: ComparisonRowProps) {
  const [visible, setVisible] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rowRef}
      style={{
        padding: '1.25rem 0',
        borderTop: '1px solid var(--border)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateX(-20px)',
        transition: `all 0.5s ease ${delay}s`,
      }}
    >
      <div className="font-mono text-[0.55rem] tracking-[0.1em] text-text-secondary mb-2.5 uppercase">
        {label}
      </div>
      <div className="flex gap-2.5 items-stretch">
        {/* Traditional card */}
        <div className="flex-1 p-3 bg-white/[0.01] border border-border">
          <div className="font-mono text-[0.75rem] text-text-secondary line-through decoration-primary-dark">
            {oldValue}
          </div>
          <div className="font-mono text-[0.45rem] text-text-secondary mt-1 tracking-[0.08em] uppercase">
            Traditional
          </div>
        </div>
        {/* Umbrella card */}
        <div className="flex-1 p-3 bg-primary/[0.04] border border-primary-dark">
          <div className="font-mono text-[0.75rem] text-primary-bright font-bold">
            {usValue}
          </div>
          <div className="font-mono text-[0.45rem] text-primary mt-1 tracking-[0.08em] uppercase">
            Umbrella
          </div>
        </div>
      </div>
    </div>
  );
}

export function Comparison() {
  const items = [
    { label: 'Timeline', oldValue: '3–6 months', usValue: '1–3 weeks', delay: 0 },
    { label: 'Team', oldValue: '8–15 people', usValue: '2–4 + AI agents', delay: 0.1 },
    { label: 'Cost for founder', oldValue: '$80–250K', usValue: 'Case by case', delay: 0.2 },
    { label: 'Iterations', oldValue: '2–3 per month', usValue: 'Daily deploys', delay: 0.3 },
  ];

  return (
    <section className="section bg-bg-2 border-t border-b border-border">
      <div className="section-inner max-w-[640px]">
        <div className="reveal">
          <div className="section-label">Why us</div>
          <h2 className="section-title mb-6">Different <span className="text-primary">speed</span></h2>
        </div>
        <div className="mt-8 flex flex-col">
          {items.map((item) => (
            <ComparisonRow
              key={item.label}
              label={item.label}
              oldValue={item.oldValue}
              usValue={item.usValue}
              delay={item.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
