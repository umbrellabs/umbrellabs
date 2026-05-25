import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerChildren } from '@/lib/animations';
import { services } from '@/lib/constants';
import { ServiceCard } from './ServiceCard';

export function Services() {
  return (
    <section id="services" className="px-5 py-24 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <SectionHeader eyebrow="Services" title="Engineering Support Across the Full Product Lifecycle" description="A focused set of real development capabilities for web, mobile, backend systems, and automation." />
        </motion.div>

        <motion.div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4" variants={staggerChildren(0.06)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
