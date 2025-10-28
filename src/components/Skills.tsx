import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Transcriptomics",
      skills: ["Bulk RNA-Seq", "Single cell RNA-Seq", "Cell type deconvolution", "Transcription factor activity", "Network analysis"],
      color: "from-primary to-primary/80"
    },
    {
      category: "Multiscale Modeling",
      skills: ["Agent Based modeling", "Physicell software", "HPC architecture", "Model exploration", "Sensitivity analysis", "Genetic algorithms"],
      color: "from-accent to-accent/80"
    },
    {
      category: "Synthetic Biology",
      skills: ["CRISPR-CAS9 gRNAs design", "Vector cloning", "Plasmid design", "Primers design"],
      color: "from-secondary to-secondary/80"
    },
    {
      category: "Programming & Tools",
      skills: ["Python", "R", "C++", "Bash", "Julia", "SQL", "Git", "VSCode", "Matlab", "HTML5", "CSS3"],
      color: "from-primary via-accent to-secondary"
    },
    {
      category: "Bioinformatics & Data Science",
      skills: ["PyTorch", "TensorFlow", "Scanpy", "Seurat", "Bioconductor", "scikit-learn", "Deep Learning", "Statistical Modeling", "Machine Learning"],
      color: "from-accent to-primary"
    },
    {
      category: "Laboratory & Design",
      skills: ["Benchling", "Snapgene", "Biomedical signals", "Medical robotics", "Bioprocesses"],
      color: "from-secondary via-primary to-accent"
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
