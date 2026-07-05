import { Link } from "react-router-dom";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { about, researchFocus, consulting } from "@/data/content";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <SectionHeader eyebrow="About" title="About Me" />
      <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 font-serif-heading text-2xl font-semibold text-ink">Research Interests</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {researchFocus.map((item) => (
            <Card key={item.title}>
              <h4 className="mb-2 font-semibold text-ink">{item.title}</h4>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-4 font-serif-heading text-2xl font-semibold text-ink">Consulting</h3>
        <Card>
          <p className="text-ink-soft">{consulting.intro}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {consulting.topics.map((topic) => (
              <Badge key={topic}>{topic}</Badge>
            ))}
          </div>
          <Link to="/contact" className="mt-6 inline-block">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
