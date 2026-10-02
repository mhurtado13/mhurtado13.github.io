import { MapPin, Calendar } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { talksOral, talksPoster } from "@/data/content";

export function OutreachPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="Conferences & Talks" title="Outreach" />

      <h3 className="mb-6 font-serif-heading text-2xl font-semibold text-ink">Oral Presentations</h3>
      <div className="space-y-4">
        {talksOral.map((talk, i) => (
          <Card key={i}>
            <span className="text-xs font-bold uppercase tracking-wide text-accent">{talk.type}</span>
            <h4 className="mt-1 font-semibold text-ink">{talk.title}</h4>
            <p className="mt-1 text-sm font-bold italic text-ink">{talk.venue}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> {talk.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} /> {talk.date}
              </span>
            </div>
          </Card>
        ))}
      </div>

      <h3 className="mb-6 mt-16 font-serif-heading text-2xl font-semibold text-ink">Poster Presentations</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {talksPoster.map((poster, i) => (
          <Card key={i} className="flex flex-col">
            <h4 className="font-semibold text-ink">{poster.title}</h4>
            <p className="mt-1 flex-1 text-sm font-bold italic text-ink">{poster.venue}</p>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink-soft">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> {poster.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={12} /> {poster.year}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
