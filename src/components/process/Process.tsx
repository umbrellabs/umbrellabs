import { SectionReveal } from '@/components/ui/SectionReveal';

interface ProcessStep {
  num: string;
  title: string;
  desc: string;
}

const pipelineSteps: ProcessStep[] = [
  {
    num: '01',
    title: 'APPLICATION',
    desc: "Describe your idea or share what you've built. We review everything personally.",
  },
  {
    num: '02',
    title: 'EVALUATION',
    desc: 'AI-assisted analysis — market, feasibility, potential. Then our senior team takes a look.',
  },
  {
    num: '03',
    title: 'ACCELERATION',
    desc: 'Selected projects get the full Umbrella infrastructure — AI agents, engineering, design. Production speed.',
  },
  {
    num: '04',
    title: 'LAUNCH',
    desc: 'Deployment in days, not months. We ship production-ready products, not prototypes.',
  },
];

export function Process() {
  return (
    <section id="process" className="section bg-bg">
      <div className="section-inner">
        <SectionReveal>
          <div className="section-label">HOW IT WORKS</div>
          <h2 className="section-title mb-8">
            The <span className="text-primary font-bold">pipeline</span>
          </h2>
        </SectionReveal>

        <div className="flex flex-col">
          {pipelineSteps.map((step, idx) => (
            <SectionReveal key={step.num} delay={0.08 * idx}>
              <div className="py-6 border-t border-border relative">
                {idx === 0 && (
                  <div className="absolute top-0 left-0 w-10 h-[2px] bg-primary" />
                )}
                <div className="flex gap-4 items-start">
                  {/* Step Number */}
                  <div className="font-mono text-2xl font-black text-border leading-none shrink-0 w-11">
                    {step.num}
                  </div>
                  {/* Step Info */}
                  <div>
                    <h3 className="font-mono text-[0.7rem] tracking-[0.12em] text-primary mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-[0.82rem] leading-relaxed max-w-[600px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
