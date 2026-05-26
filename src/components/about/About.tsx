import { useEffect, useRef, useState } from 'react';
import { SectionReveal } from '@/components/ui/SectionReveal';

interface TerminalLine {
  type: 'cmd' | 'out' | 'cmt';
  text: string;
  delay: number;
}

const terminalLines: TerminalLine[] = [
  { type: 'cmd', text: '$ umbrella analyze --project "AI Legal Assistant"', delay: 0 },
  { type: 'out', text: '> Market scan complete — 340 competitors analyzed', delay: 600 },
  { type: 'out', text: '> Unique angle identified — precedent matching engine', delay: 1200 },
  { type: 'out', text: '> Viability: 87/100 | Revenue potential: $2.4M ARR', delay: 1800 },
  { type: 'out', text: '> Spawning 3 specialized AI agents...', delay: 2400 },
  { type: 'out', text: '> Agent[architect] — system design complete', delay: 3000 },
  { type: 'out', text: '> Agent[builder] — core logic generated (47 files)', delay: 3600 },
  { type: 'out', text: '> Agent[deployer] — production pipeline ready', delay: 4200 },
  { type: 'cmt', text: '', delay: 4800 },
  { type: 'cmd', text: '$ echo $STATUS', delay: 5000 },
  { type: 'out', text: 'READY — passing to the team', delay: 5400 },
  { type: 'cmt', text: '# From idea to production in 14 days.', delay: 5800 },
];

export function About() {
  const [lineCount, setLineCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          terminalLines.forEach((line, index) => {
            setTimeout(() => {
              setLineCount(index + 1);
            }, line.delay);
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section bg-bg">
      <div className="section-inner grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Left Column: text description */}
        <SectionReveal className="flex flex-col">
          <div className="section-label">What we are</div>
          <h2 className="section-title mb-5">
            {/* Closed lab. */}
            {/* <br /> */}
            <span className="text-primary font-bold">Open to the right people.</span>
          </h2>
          <p className="text-text-secondary text-sm leading-[1.75] mb-4 max-w-[540px]">
            We're an Full-support development lab. We build products at every layer — from architecture to deployment. Our team works with AI agents, not against them.
          </p>
          <p className="text-text-secondary text-sm leading-[1.75] max-w-[540px]">
            We choose projects ourselves. If an idea has real potential, we go all in — infrastructure, engineering, AI. We're always open to strong ideas and strong people.
          </p>
        </SectionReveal>

        {/* Right Column: Simulated scrolling terminal */}
        <SectionReveal delay={0.15} className="w-full">
          <div ref={containerRef} className="terminal min-h-[260px]">
            {/* Header bar */}
            <div className="terminal-bar">
              <div className="dot w-2 h-2 rounded-full bg-[#ff5f57]" />
              <div className="dot w-2 h-2 rounded-full bg-[#febc2e]" />
              <div className="dot w-2 h-2 rounded-full bg-[#28c840]" />
              <span className="ml-1.5 text-[0.6rem] text-text-muted font-mono">
                umbrella@core:~
              </span>
            </div>
            {/* Body */}
            <div className="terminal-body flex flex-col font-mono text-[0.7rem] leading-relaxed p-4">
              {terminalLines.slice(0, lineCount).map((line, idx) => (
                <div
                  key={idx}
                  className={`${line.type} animate-[fadeIn_0.3s_ease]`}
                  style={{ whiteSpace: line.type === 'cmt' ? 'pre' : undefined }}
                >
                  {line.text}
                </div>
              ))}
              {/* Blinking cursor */}
              {lineCount > 0 && lineCount < terminalLines.length && (
                <span className="text-primary animate-[blink_1s_step-end_infinite]">
                  █
                </span>
              )}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
