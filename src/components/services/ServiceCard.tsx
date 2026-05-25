import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { GradientGlow } from '@/components/ui/GradientGlow';
import { hoverLift, scaleIn } from '@/lib/animations';
import type { Service } from '@/types/service';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div variants={scaleIn} whileHover={hoverLift} className="group">
      <Card className="h-full border border-white/10">
        <GradientGlow />
        <h3 className="relative z-10 text-lg font-semibold">{service.title}</h3>
        <p className="relative z-10 mt-3 text-sm leading-relaxed text-text-secondary">{service.description}</p>
        {service.techBadges?.length ? (
          <div className="relative z-10 mt-4 flex flex-wrap gap-2">
            {service.techBadges.map((badge) => (
              <Badge key={badge}>{badge}</Badge>
            ))}
          </div>
        ) : null}
      </Card>
    </motion.div>
  );
}
