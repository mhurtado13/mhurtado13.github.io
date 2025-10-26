import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Microscope, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "LungPredict",
      description: "Profiling the Non-Small Cell Lung Cancer (NSCLC) microenvironment by integrating transcriptomics to uncover potential phenotypic profiles associated to patterns in immune infiltration",
      tags: ["Non small cell lung cancer", "Immunotherapy", "Survival analysis"],
      github: "https://github.com/VeraPancaldiLab/LungPredict1_paper",
      demo: "#"
    },
    {
      title: "ABM NLC-CLL",
      description: "Physicell model of NLC-CLL differentiation",
      tags: ["Physicell", "Agent based models", "Modeling", "Chronic Lymphocytic Leukemia"],
      github: "#",
      demo: "#"
    },
    {
      title: "NLC_CLL_HPC_exploration",
      description: "HPC exploration of parameters for NLC-CLL physicell model",
      tags: ["HPC arquitecture", "Bash", "Python", "Calibration", "Sensitivity analysis", "Genetic algorithms"],
      github: "https://github.com/mhurtado13/NLC-CLL_HPC_exploration",
      demo: "#"
    }
  ];

  return (
    <section className="py-24 bg-card" id="projects">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Projects
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 bg-gradient-to-br from-primary to-accent rounded-lg shadow-[var(--shadow-soft)] w-fit mb-4">
                  <Microscope className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
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
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary hover:text-primary/80 flex-1"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
