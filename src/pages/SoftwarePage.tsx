import { Github, BookOpen, Package } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { profile, software } from "@/data/content";

export function SoftwarePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader
        eyebrow="Tools & Packages"
        title="Open Source Software"
        description={profile.tagline}
      />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {software.map((pkg) => (
          <article
            key={pkg.name}
            className="flex gap-5 rounded-lg border border-line bg-paper p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand hover:shadow-md"
          >
            <a
              href={pkg.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${pkg.name} on GitHub`}
              tabIndex={-1}
              className="flex h-24 w-24 shrink-0 items-center justify-center"
            >
              {pkg.logo ? (
                <img
                  src={pkg.logo}
                  alt={`${pkg.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full rounded-md object-contain"
                />
              ) : (
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/30 bg-accent-soft text-accent">
                  <Package size={28} />
                </span>
              )}
            </a>
            <div className="flex min-w-0 flex-1 flex-col text-left">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-accent">{pkg.category}</span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-ink-soft">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  {pkg.language}
                </span>
              </div>
              <h3 className="mt-0.5 mb-1.5 font-serif-heading text-xl leading-tight">
                <a href={pkg.github} target="_blank" rel="noreferrer" className="text-ink hover:text-brand">
                  {pkg.name}
                </a>
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">{pkg.description}</p>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 border-t border-line pt-3 text-sm">
                <a
                  href={pkg.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-ink"
                >
                  <Github size={14} /> GitHub
                </a>
                {pkg.docs && (
                  <a
                    href={pkg.docs}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-medium text-brand hover:text-ink"
                  >
                    <BookOpen size={14} /> Documentation
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
