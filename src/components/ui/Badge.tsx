import { cn } from '@/lib/cn';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-text-secondary',
        className,
      )}
    >
      {children}
    </span>
  );
}
