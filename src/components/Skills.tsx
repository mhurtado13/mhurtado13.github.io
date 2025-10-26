import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Python", "R", "Julia", "Bash/Shell", "C++", "SQL"],
      color: "from-primary to-primary/80"
    },
    {
      category: "Computational Tools",
      skills: ["PyTorch", "TensorFlow", "Scanpy", "Seurat", "Bioconductor", "scikit-learn"],
      color: "from-accent to-accent/80"
    },
    {
      category: "Bioinformatics",
      skills: ["RNA-seq", "scRNA-seq", "TCR-seq", "Genomic alignment", "Variant calling", "GWAS"],
      color: "from-secondary to-secondary/80"
    },
    {
      category: "Data Science",
      skills: ["Deep Learning", "Statistical Modeling", "Data Visualization", "Dimensionality Reduction", "Network Analysis"],
      color: "from-primary via-accent to-secondary"
    },
    {
      category: "High-Performance Computing",
      skills: ["Cluster computing", "GPU acceleration", "Workflow management", "Docker", "Nextflow"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-24 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full`} />
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-muted to-muted/80 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 border-border"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
