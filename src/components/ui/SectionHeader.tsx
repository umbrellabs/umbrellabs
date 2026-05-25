interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, description, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? <p className="mb-3 text-xs uppercase tracking-[0.2em] text-highlight">{eyebrow}</p> : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
