import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { hoverLift, scaleIn } from '@/lib/animations';
import type { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article variants={scaleIn} whileHover={hoverLift} className="group">
      <Card className="overflow-hidden border border-white/10 p-0">
        <GradientGlow />
        <div className="relative aspect-[16/10] overflow-hidden">
          <img src={project.image} alt={`${project.title} preview`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/90 to-transparent opacity-70" />
        </div>
        <div className="relative z-10 p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-highlight">{project.category}</p>
          <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>

          {project.href ? (
            <a href={project.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm text-primary transition hover:text-highlight">
              Visit Project <ExternalLink size={15} />
            </a>
          ) : null}
        </div>
      </Card>
    </motion.article>
  );
}
