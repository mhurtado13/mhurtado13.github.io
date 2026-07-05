import { Github, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { software } from "@/data/content";

export function SoftwarePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="Tools & Packages" title="Open Source Software" />
      <div className="space-y-5">
        {software.map((pkg) => (
          <Card key={pkg.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif-heading text-lg font-semibold text-ink">{pkg.name}</h3>
              <span className="text-sm font-medium text-accent">{pkg.version}</span>
            </div>
            <p className="mt-2 text-sm text-ink-soft">{pkg.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {pkg.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <a
                href={pkg.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                <Github size={14} /> GitHub
              </a>
              <a
                href={pkg.docs}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline"
              >
                <BookOpen size={14} /> Documentation
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
