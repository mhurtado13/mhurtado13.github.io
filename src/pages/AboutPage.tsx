import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { about, researchFocus } from "@/data/content";

const LAB_LINK = "https://verapancaldilab.github.io/";
const LAB_MARKER = "Vera Pancaldi";

function renderWithLabLink(text: string) {
  const idx = text.indexOf(LAB_MARKER);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <a
        href={LAB_LINK}
        target="_blank"
        rel="noreferrer"
        className="text-brand underline-offset-2 hover:underline"
      >
        {LAB_MARKER}
      </a>
      {text.slice(idx + LAB_MARKER.length)}
    </>
  );
}

export function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="About" title="About Me" />
      <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{renderWithLabLink(p)}</p>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="mb-6 font-serif-heading text-2xl font-semibold text-ink">Research Interests</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchFocus.map((item) => (
            <Card key={item.title}>
              <h4 className="mb-2 font-semibold text-ink">{item.title}</h4>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
