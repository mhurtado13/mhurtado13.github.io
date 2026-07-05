import { Link } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { profile, researchFocus } from "@/data/content";

export function HomePage() {
  return (
    <div>
      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {profile.institution}
          </p>
          <h1 className="font-serif-heading text-4xl font-semibold leading-tight text-ink md:text-6xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lg text-ink-soft md:text-xl">{profile.title}</p>
          <p className="max-w-2xl text-base text-ink-soft">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link to="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline">
                View Profile <ArrowRight size={16} />
              </Button>
            </Link>
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              <Button variant="ghost">
                <Download size={16} /> Download CV
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-brand" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-brand" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.social.orcid} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-brand" aria-label="ORCID">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Research Focus</p>
        <h2 className="mb-10 font-serif-heading text-3xl font-semibold text-ink md:text-4xl">
          Where my work lives
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchFocus.map((item) => (
            <Card key={item.title}>
              <h3 className="mb-2 font-serif-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
