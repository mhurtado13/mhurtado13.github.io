export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-12">
      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
        {eyebrow}
      </p>
      <h2 className="font-serif-heading text-3xl font-semibold text-ink md:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 max-w-2xl text-ink-soft">{description}</p>}
      <div className="mt-4 h-px w-16 bg-brand" />
    </div>
  );
}
