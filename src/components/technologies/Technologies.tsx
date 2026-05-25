import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, hoverLift, scaleIn, staggerChildren } from '@/lib/animations';
import { technologies } from '@/lib/constants';

export function Technologies() {
  return (
    <section id="stack" className="px-5 py-24 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={fadeUp}>
          <SectionHeader eyebrow="Technology" title="Modern Stack For Fast, Reliable Delivery" description="Technologies selected for maintainability, performance, and smooth product iteration." />
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6" variants={staggerChildren(0.05)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {technologies.map((tech) => (
            <motion.div key={tech} variants={scaleIn} whileHover={hoverLift} className="rounded-2xl border border-white/10 bg-surface/70 px-4 py-5 text-center text-sm font-medium shadow-soft">
              <span className="bg-primary-gradient bg-clip-text text-transparent">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
