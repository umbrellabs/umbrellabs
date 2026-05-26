import { SectionReveal } from '@/components/ui/SectionReveal';

const tools = [
  "vite",
  'React',
  'Next.js',
  'Node.js',
  'Supabase',
  'JavaScript',
  'TypeScript',
  'Python',
  'Java',
  'Spring Boot',
  'Tauri',
  'Docker',
  "Supabase",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "React Native",
  "Expo",
] as const;

export function Technologies() {
  return (
    <section id="stack" className="section bg-bg-2">
      <div className="section-inner">
        <SectionReveal>
          <div className="section-label">STACK</div>
          <h2 className="section-title mb-6">
            Our <span className="text-primary font-bold">tools</span>
          </h2>
        </SectionReveal>

        <div className="flex flex-wrap gap-2 mt-8">
          {tools.map((tool, idx) => (
            <SectionReveal key={tool} delay={0.02 * idx}>
              <div className="card px-4 py-2.5 font-mono text-[0.65rem] tracking-[0.04em] rounded bg-bg-card border border-border transition-colors hover:border-primary-dark">
                <span className="text-text-muted mr-1.5">//</span>
                {tool}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
