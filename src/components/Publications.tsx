import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "multideconv - Integrative pipeline for cell type deconvolution from bulk RNAseq using first and second generation methods",
      authors: "Marcelo Hurtado, Abdelmounim Essabbar, Leila Khajavi, Vera Pancaldi",
      journal: "bioRxiv (Preprint)",
      year: "2025",
      description: "A novel computational pipeline addressing the high feature complexity and variability in cell type deconvolution methods, improving patient stratification from bulk RNA-seq data.",
      tags: ["RNA-seq", "Deconvolution", "Computational Biology", "Machine Learning"],
      link: "https://doi.org/10.1101/2025.04.29.651220"
    },
    {
      title: "Data driven network inference and longitudinal transcriptomics unveil dynamic regulation in Chronic Lymphocytic Leukaemia models",
      authors: "Marku M.*, Chenel H.*, ..., Hurtado M., et al.",
      journal: "npj Systems Biology and Applications",
      year: "2026",
      description: "In-depth analysis revealing dynamic regulatory changes within cancer cells in response to immune cell interactions, uncovering key regulators in Chronic Lymphocytic Leukaemia.",
      tags: ["RNA-seq", "Network Inference", "Cancer", "Immunology"],
      link: "https://doi.org/10.1038/s41540-025-00645-4"
    },
    {
      title: "PhysiGym: bridging the gap between the Gymnasium reinforcement learning application interface and the PhysiCell agent-based model software",
      authors: "Bertin A.*, Bucher E.*, ..., Hurtado M., et al.",
      journal: "bioRxiv (Preprint)",
      year: "2025",
      description: "A novel framework bridging reinforcement learning interfaces with agent-based modeling for computational biology applications.",
      tags: ["Reinforcement Learning", "Agent-Based Modeling", "Computational Biology"],
      link: "https://doi.org/10.1101/2025.09.18.677030"
    },
    {
      title: "Transcriptomics profiling of the non-small cell lung cancer microenvironment across disease stages reveals dual immune cell-type behaviors",
      authors: "Marcelo Hurtado, Leila Khajavi, Abdelmounim Essabbar, et al., Vera Pancaldi",
      journal: "Frontiers in Immunology",
      year: "2024",
      description: "Computational immunology approach revealing dual immune cell behaviors in non-small cell lung cancer across disease stages, providing insights for improved patient outcomes.",
      tags: ["Cancer", "Immunology", "Transcriptomics", "Systems Biology"],
      link: "https://doi.org/10.3389/fimmu.2024.1394965"
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
              View my complete publication list and profile
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" size="lg" asChild>
                <a href="https://orcid.org/0009-0004-6712-0864" target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  ORCID Profile
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://www.researchgate.net/profile/Marcelo-Hurtado-2" target="_blank" rel="noopener noreferrer">
                  <ExternalLink />
                  ResearchGate Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
