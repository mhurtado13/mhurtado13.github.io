import { Link } from "react-router-dom";
import { Github, Linkedin, ExternalLink, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HeroNetwork } from "@/components/HeroNetwork";
import { profile, researchFocus, consulting } from "@/data/content";
import { getLatestHighlight } from "@/lib/highlights";

export function HomePage() {
  const highlight = getLatestHighlight();

  return (
    <div>
      <Link
        to={highlight.to}
        className="flex items-center justify-center gap-2 border-b border-white/10 bg-black px-6 py-2.5 text-center text-xs font-medium text-neutral-400 transition-colors hover:text-white sm:text-sm"
      >
        <span>{highlight.label}</span>
        <ArrowRight size={14} />
      </Link>

      <section className="relative overflow-hidden border-b border-white/10 bg-black">
        <HeroNetwork />
        <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-6xl flex-col items-center justify-center gap-6 px-6 py-24 text-center">
          <span className="text-lg font-semibold uppercase tracking-[0.3em] text-[#0df3f2] md:text-2xl">
            Marcelo Hurtado
          </span>
          <h1 className="font-serif-heading text-5xl font-semibold leading-[1.1] tracking-tight text-white md:text-7xl lg:text-8xl">
            Decoding the tumor microenvironment through computational biology.
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link to="/contact">
              <Button
                variant="primary"
                className="border-[#0df3f2] bg-[#0df3f2] text-black hover:bg-[#0df3f2]/90"
              >
                Get in Touch
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="outline"
                className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:border-[#0df3f2] hover:text-[#0df3f2]"
              >
                View Profile <ArrowRight size={16} />
              </Button>
            </Link>
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              <Button variant="ghost" className="text-neutral-300 hover:text-[#0df3f2]">
                <Download size={16} /> Download CV
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0df3f2]" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0df3f2]" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href={profile.social.orcid} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-[#0df3f2]" aria-label="ORCID">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#0df3f2]">Research Focus</p>
          <h2 className="mb-10 font-serif-heading text-3xl font-semibold text-white md:text-4xl">
            Where my work lives
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {researchFocus.map((item, index) => (
              <Card
                key={item.title}
                className="relative border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-[#0df3f2]/40 hover:shadow-none"
              >
                <span className="mb-3 block font-serif-heading text-sm font-semibold text-[#0df3f2]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-2 font-serif-heading text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <Card className="relative overflow-hidden bg-white p-10">
            <Sparkles className="absolute right-6 top-6 text-accent opacity-30" size={48} />
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              Consulting
            </p>
            <h2 className="mb-4 max-w-xl font-serif-heading text-3xl font-semibold text-ink md:text-4xl">
              Bring computational biology expertise to your project
            </h2>
            <p className="max-w-xl text-ink-soft">{consulting.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {consulting.topics.map((topic) => (
                <Badge key={topic}>{topic}</Badge>
              ))}
            </div>
            <Link to="/contact" className="mt-8 inline-block">
              <Button variant="primary">
                Get in Touch <ArrowRight size={16} />
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}
