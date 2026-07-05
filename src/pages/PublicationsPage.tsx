import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { profile, publications } from "@/data/content";

export function PublicationsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="Research Output" title="Selected Publications" />

      <div className="space-y-6">
        {publications.map((pub) => (
          <Card key={pub.title}>
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="font-serif-heading text-lg font-semibold text-ink">{pub.title}</h3>
              <span className="whitespace-nowrap text-sm font-medium text-accent">{pub.year}</span>
            </div>
            <p className="mt-1 text-sm text-ink-soft">{pub.authors}</p>
            <p className="text-sm font-medium italic text-ink">{pub.venue}</p>
            <p className="mt-3 text-sm text-ink-soft">{pub.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pub.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <a
              href={pub.link}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
            >
              View publication <ExternalLink size={14} />
            </a>
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
