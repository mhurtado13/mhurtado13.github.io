import { ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { media } from "@/data/content";

export function MediaPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="Press" title="Media & Press" />
      <div className="space-y-5">
        {media.map((item) => (
          <Card key={item.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-semibold text-ink">{item.title}</h4>
              <span className="text-sm font-medium text-accent">{item.year}</span>
            </div>
            <p className="text-sm font-medium italic text-ink-soft">{item.outlet}</p>
            <p className="mt-2 text-sm text-ink-soft">{item.description}</p>
            <div className="mt-3 flex items-center gap-3">
              <Badge>{item.type}</Badge>
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                View <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
