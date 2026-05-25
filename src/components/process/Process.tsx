import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerChildren } from '@/lib/animations';
import { processSteps } from '@/lib/constants';

export function Process() {
  return (
    <section id="process" className="px-5 py-24 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <SectionHeader eyebrow="Workflow" title="A Structured Development Process" description="Clear steps from discovery to deployment to keep the project focused, measurable, and predictable." />
        </motion.div>

        <motion.ol className="relative mt-12 grid gap-4 md:grid-cols-5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerChildren(0.08)}>
          <div className="absolute left-0 right-0 hidden h-px bg-white/15 md:block" style={{ top: '-20px' }} aria-hidden />
          {processSteps.map((step, index) => (
            <motion.li key={step.title} variants={fadeUp} className="relative rounded-2xl border border-white/10 bg-surface/60 p-5">
              <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-sm font-semibold text-primary">{index + 1}</span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
