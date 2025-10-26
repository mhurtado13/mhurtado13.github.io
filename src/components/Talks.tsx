import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Presentation, MapPin, Calendar, Video } from "lucide-react";

const Talks = () => {
  const talks = [
    {
      title: "Deep Learning for Immune Repertoire Analysis: From Sequences to Predictions",
      event: "International Conference on Machine Learning in Computational Biology",
      type: "Keynote",
      location: "San Francisco, CA",
      date: "October 2024",
      description: "Presented novel deep learning architectures for analyzing T cell receptor sequences and predicting antigen specificity.",
      tags: ["Deep Learning", "Immunology"],
      slides: "#",
      video: "#"
    },
    {
      title: "Integrating Multi-Omics Data for Systems Immunology",
      event: "European Bioinformatics Symposium",
      type: "Invited Talk",
      location: "Berlin, Germany",
      date: "June 2024",
      description: "Discussed computational strategies for integrating genomic, transcriptomic, and proteomic data in immunological research.",
      tags: ["Multi-omics", "Systems Biology"],
      slides: "#",
      video: null
    },
    {
      title: "Single-Cell Analysis Reveals Novel Immune Cell States",
      event: "Annual Meeting of Immunology Research",
      type: "Oral Presentation",
      location: "Boston, MA",
      date: "March 2024",
      description: "Showcased findings from single-cell transcriptomics study identifying previously unknown immune cell subpopulations.",
      tags: ["scRNA-seq", "Cell Biology"],
      slides: "#",
      video: "#"
    },
    {
      title: "Open Source Tools for Computational Immunology",
      event: "Bioinformatics Workshop Series",
      type: "Workshop",
      location: "Virtual",
      date: "January 2024",
      description: "Hands-on workshop teaching researchers how to use open-source computational tools for immune repertoire analysis.",
      tags: ["Software", "Education"],
      slides: "#",
      video: "#"
    }
  ];

  return (
    <section className="py-24 bg-card" id="talks">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Talks & Presentations
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {talks.map((talk, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-lg shadow-[var(--shadow-soft)] flex-shrink-0">
                    <Presentation className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {talk.type}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {talk.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-primary">
                    {talk.event}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {talk.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {talk.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80 flex-1"
                    asChild
                  >
                    <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                      <Presentation className="w-4 h-4" />
                      Slides
                    </a>
                  </Button>
                  {talk.video && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 flex-1"
                      asChild
                    >
                      <a href={talk.video} target="_blank" rel="noopener noreferrer">
                        <Video className="w-4 h-4" />
                        Video
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;
