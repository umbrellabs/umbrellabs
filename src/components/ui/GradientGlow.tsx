import { cn } from '@/lib/cn';

interface GradientGlowProps {
  className?: string;
}

export function GradientGlow({ className }: GradientGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        'pointer-events-none absolute inset-0 rounded-[inherit] bg-accent-glow opacity-0 blur-xl transition duration-300 group-hover:opacity-100',
        className,
      )}
    />
  );
}
