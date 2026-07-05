import { Award } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { awards } from "@/data/content";

export function AwardsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="Recognition" title="Awards & Achievements" />
      <div className="space-y-4">
        {awards.map((award) => (
          <Card key={award.title} className="flex items-start gap-4">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              <Award size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-ink">{award.title}</h4>
              <p className="text-sm text-ink-soft">
                {award.category} &middot; {award.year}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
