import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { profile, publications } from "@/data/content";

export function PublicationsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="Research Output" title="Selected Publications" />

      <div className="space-y-4">
        {publications.map((pub) => (
          <Card
            key={pub.title}
            className="flex flex-col overflow-hidden p-0 transition-colors hover:border-brand sm:flex-row"
          >
            {pub.figure && (
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View figure for ${pub.title}`}
                className="relative block h-44 shrink-0 border-b border-line bg-white sm:h-auto sm:w-[180px] sm:border-b-0 sm:border-r"
              >
                <img
                  src={pub.figure}
                  alt={`Figure from: ${pub.title}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </a>
            )}
            <div className="min-w-0 flex-1 p-5">
              <a
                href={pub.link}
                target="_blank"
                rel="noreferrer"
                className="font-serif-heading text-xl font-bold text-brand hover:text-ink"
              >
                {pub.title}
              </a>
              <p className="mt-1.5 text-base text-ink-soft">{pub.authors}</p>
              <p className="mt-1 text-sm font-bold italic text-ink">
                {pub.venue}
                <span className="mx-2 font-normal not-italic">&middot;</span>
                {pub.year}
              </p>
              <p className="mt-3 max-w-2xl text-sm text-ink-soft">{pub.description}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
                >
                  View publication <ExternalLink size={14} />
                </a>
                <div className="flex flex-wrap gap-2">
                  {pub.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-10 flex gap-6 text-sm">
        <a href={profile.social.orcid} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-brand">
          ORCID Profile
        </a>
        <a href={profile.social.researchgate} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-brand">
          ResearchGate
        </a>
      </div>
    </div>
  );
}
