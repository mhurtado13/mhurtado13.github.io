import { Card } from "@/components/ui/card";
import { Microscope, Brain, Database, TrendingUp } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Microscope,
      title: "Immunology",
      description: "Single-cell immune profiling, T cell repertoire analysis, and adaptive immunity dynamics"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning for biological sequences, dimensionality reduction, and predictive modeling"
    },
    {
      icon: Database,
      title: "Genomics",
      description: "RNA-seq analysis, multi-omics integration, and gene regulatory networks"
    },
    {
      icon: TrendingUp,
      title: "Systems Biology",
      description: "Network analysis, pathway modeling, and computational systems immunology"
    }
  ];

  return (
    <section className="py-24 bg-[var(--gradient-subtle)]" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Focus
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {interests.map((interest, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg shadow-[var(--shadow-soft)]">
                    <interest.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {interest.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="p-8 md:p-12 bg-card border-border shadow-[var(--shadow-soft)] animate-fade-in-slow">
            <h3 className="text-2xl font-bold text-foreground mb-6">About My Research</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My research sits at the intersection of computational biology, immunology, and data science. 
                I develop and apply cutting-edge computational methods to understand the complexity of the immune system, 
                with a particular focus on adaptive immunity and immune repertoire analysis.
              </p>
              <p>
                By integrating machine learning with high-throughput sequencing data, I aim to uncover novel 
                immunological insights that can inform therapeutic development and precision medicine approaches. 
                My work spans from algorithm development to biological discovery, always driven by the goal of 
                translating computational findings into actionable biological knowledge.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
