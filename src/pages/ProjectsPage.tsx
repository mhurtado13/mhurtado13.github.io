import { Github } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/content";

export function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeader eyebrow="Research Projects" title="Projects" />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <h3 className="font-serif-heading text-lg font-semibold text-ink">{project.name}</h3>
            <p className="mt-2 flex-1 text-sm text-ink-soft">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            {project.github && (
              <div className="mt-4 border-t border-line pt-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-ink"
                >
                  <Github size={14} /> GitHub repository
                </a>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
