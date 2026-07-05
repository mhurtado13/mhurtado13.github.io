import { SectionHeader } from "@/components/SectionHeader";
import { experience, skills } from "@/data/content";

export function ExperiencePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="Career" title="Research Experience" />

      <div className="space-y-10">
        {experience.map((job) => (
          <div key={job.role + job.period} className="border-l-2 border-line pl-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif-heading text-xl font-semibold text-ink">{job.role}</h3>
              <span className="text-sm font-medium text-accent">{job.period}</span>
            </div>
            <p className="mt-1 text-sm font-medium text-ink">{job.org}</p>
            <p className="text-sm text-ink-soft">{job.detail}</p>
            <p className="mt-3 text-sm italic text-ink-soft">{job.project}</p>
            {job.achievements.length > 0 && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft">
                {job.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="mb-6 font-serif-heading text-2xl font-semibold text-ink">Technical Expertise</h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-paper-dim px-3 py-1 text-xs text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
