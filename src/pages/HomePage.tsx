import { Link } from "react-router-dom";
import {
  Github,
  Linkedin,
  ExternalLink,
  Download,
  ArrowRight,
  Sparkles,
  FileText,
  Package2,
  Award,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { profile, researchFocus, consulting, publications, software, awards } from "@/data/content";

const stats = [
  { label: "Publications", value: `${publications.length}+`, icon: FileText },
  { label: "Open-source tools", value: `${software.length}`, icon: Package2 },
  { label: "Awards & fellowships", value: `${awards.length}+`, icon: Award },
  { label: "Countries worked in", value: "3", icon: MapPin },
];

export function HomePage() {
  return (
    <div>
      <Link
        to="/awards"
        className="flex items-center justify-center gap-2 border-b border-line bg-brand px-6 py-2.5 text-center text-xs font-medium text-white transition-colors hover:bg-brand/90 sm:text-sm"
      >
        <span>PhD completion fellowship awarded by Fondation ARC &amp; FRM</span>
        <ArrowRight size={14} />
      </Link>

      <section className="border-b border-line bg-paper-dim">
        <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">
            {profile.name} &middot; {profile.institution}
          </p>
          <h1 className="font-serif-heading text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl">
            Decoding the tumor microenvironment through computational biology and machine learning.
          </h1>
          <p className="max-w-2xl text-lg text-ink-soft">{profile.tagline}</p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
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

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2 bg-paper px-4 py-10 text-center">
                <stat.icon className="text-accent" size={22} />
                <p className="font-serif-heading text-3xl font-semibold text-ink">{stat.value}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">Research Focus</p>
        <h2 className="mb-10 font-serif-heading text-3xl font-semibold text-ink md:text-4xl">
          Where my work lives
        </h2>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {researchFocus.map((item, index) => (
            <Card key={item.title} className="relative">
              <span className="mb-3 block font-serif-heading text-sm font-semibold text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 font-serif-heading text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm text-ink-soft">{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-dim">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Card className="relative overflow-hidden bg-gradient-to-br from-brand to-accent p-10 text-paper">
            <Sparkles className="absolute right-6 top-6 opacity-30" size={48} />
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-paper/70">
              Consulting
            </p>
            <h2 className="mb-4 max-w-xl font-serif-heading text-3xl font-semibold md:text-4xl">
              Bring computational biology expertise to your project
            </h2>
            <p className="max-w-xl text-paper/85">{consulting.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {consulting.topics.map((topic) => (
                <Badge key={topic} className="border-paper/30 bg-paper/10 text-paper">
                  {topic}
                </Badge>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-block">
              <Button variant="primary" className="bg-paper text-brand hover:bg-paper/90">
                Get in Touch <ArrowRight size={16} />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
