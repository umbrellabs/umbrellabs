import { motion } from 'framer-motion';
import { Cpu, Gauge, Handshake } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, hoverLift, staggerChildren } from '@/lib/animations';

const values = [
  { title: 'Modern Technologies', description: 'Current frameworks and standards for long-term product stability.', icon: Cpu },
  { title: 'Performance Focused', description: 'Speed, efficiency, and maintainable architecture as default priorities.', icon: Gauge },
  { title: 'Direct Collaboration', description: 'Clear communication with the developer building your product.', icon: Handshake },
];

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={staggerChildren()}>
          <motion.div variants={fadeUp}>
            <SectionHeader eyebrow="About" title="Focused Development. Direct Communication." description="Umbrella Labs is a software development studio built by an independent developer focused on building quality digital products." />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Projects are delivered with direct communication, fast iteration cycles, modern engineering practices, careful implementation, and long-term maintainability.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerChildren()} className="grid gap-4">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} variants={fadeUp} whileHover={hoverLift}>
                <Card className="group border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="rounded-xl border border-primary/30 bg-primary/10 p-3 text-primary"><Icon size={18} /></div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
