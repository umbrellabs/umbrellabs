import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { fadeUp, staggerChildren } from '@/lib/animations';
import { projects } from '@/lib/constants';
import { ProjectCard } from './ProjectCard';

export function Portfolio() {
  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}>
          <SectionHeader eyebrow="Portfolio" title="Selected Work" description="A sample of project types and software products built with modern tooling and clean architecture." />
        </motion.div>

        <motion.div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3" variants={staggerChildren(0.08)} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
