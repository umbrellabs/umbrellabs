import { cn } from '@/lib/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={cn(
        'glass-panel relative overflow-hidden rounded-2xl p-6 shadow-soft transition duration-300',
        className,
      )}
    >
      {children}
    </article>
  );
}
