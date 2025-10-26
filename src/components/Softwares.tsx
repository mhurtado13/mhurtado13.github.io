import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, ExternalLink, Download, Github } from "lucide-react";

const Softwares = () => {
  const softwares = [
    {
      title: "ImmunoSeq-ML",
      description: "Python package for machine learning analysis of immune repertoire sequencing data. Includes preprocessing, feature extraction, and deep learning models for TCR/BCR analysis.",
      version: "v2.1.0",
      downloads: "10K+",
      tags: ["Python", "PyPI", "Machine Learning"],
      github: "#",
      docs: "#",
      pypi: "#"
    },
    {
      title: "scOmics-Integrate",
      description: "R package for integrated analysis of single-cell multi-omics data. Supports scRNA-seq, scATAC-seq, and CITE-seq with advanced visualization tools.",
      version: "v1.5.2",
      downloads: "5K+",
      tags: ["R", "Bioconductor", "Single-Cell"],
      github: "#",
      docs: "#",
      pypi: "#"
    },
    {
      title: "RepDiversity",
      description: "Command-line tool for calculating immune repertoire diversity metrics and comparing samples. Optimized for large-scale datasets with parallel processing.",
      version: "v1.2.0",
      downloads: "3K+",
      tags: ["Python", "CLI", "Bioinformatics"],
      github: "#",
      docs: "#",
      pypi: "#"
    }
  ];

  return (
    <section className="py-24 bg-[var(--gradient-subtle)]" id="software">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Open Source Software
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {softwares.map((software, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-secondary to-primary rounded-lg shadow-[var(--shadow-soft)] flex-shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-2xl font-semibold text-foreground">
                          {software.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {software.version}
                        </Badge>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Download className="w-4 h-4" />
                          <span>{software.downloads}</span>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {software.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {software.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="text-foreground"
                        asChild
                      >
                        <a href={software.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80"
                        asChild
                      >
                        <a href={software.docs} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Documentation
                        </a>
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary hover:text-primary/80"
                        asChild
                      >
                        <a href={software.pypi} target="_blank" rel="noopener noreferrer">
                          <Download className="w-4 h-4" />
                          Install
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Find more of my open source contributions on GitHub
            </p>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github />
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Softwares;
