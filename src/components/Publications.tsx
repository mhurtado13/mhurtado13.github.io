import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Deep Learning Approaches for T Cell Receptor Repertoire Analysis",
      authors: "Your Name, et al.",
      journal: "Nature Computational Science",
      year: "2024",
      description: "Novel deep learning architecture for predicting T cell receptor specificity from sequence data, achieving state-of-the-art performance.",
      tags: ["Machine Learning", "Immunology", "Deep Learning"],
      link: "#"
    },
    {
      title: "Single-Cell Transcriptomics Reveals Novel Immune Cell States in Chronic Inflammation",
      authors: "Collaborator A, Your Name, et al.",
      journal: "Cell Systems",
      year: "2023",
      description: "Comprehensive single-cell analysis identifying previously unknown immune cell subpopulations and their functional roles.",
      tags: ["scRNA-seq", "Immunology", "Systems Biology"],
      link: "#"
    },
    {
      title: "Computational Framework for Multi-Omics Integration in Immunological Studies",
      authors: "Your Name, Collaborator B",
      journal: "Bioinformatics",
      year: "2023",
      description: "Open-source computational pipeline for integrating genomic, transcriptomic, and proteomic data in immunology research.",
      tags: ["Multi-omics", "Software", "Computational Biology"],
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[var(--gradient-subtle)]" id="publications">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Selected Publications
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-lg shadow-[var(--shadow-soft)] flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 leading-tight">
                        {pub.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-1">
                        {pub.authors}
                      </p>
                      <p className="text-sm font-medium text-primary">
                        {pub.journal} • {pub.year}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {pub.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 -ml-2"
                      asChild
                    >
                      <a href={pub.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Publication
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              View my complete publication list on Google Scholar
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink />
                Google Scholar Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
