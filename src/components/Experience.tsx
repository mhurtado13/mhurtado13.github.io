import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "PhD student",
      institution: "Paul Sabatier University, Toulouse, France",
      department: "Cancer Research Center of Toulouse (CRCT)",
      team: "NetB(IO)² | Supervisor: Vera Pancaldi",
      period: "Oct 2023 - Present",
      project: "Reinforcement learning approaches to control the tumor microenvironment",
      achievements: [
        "Develop a multiscale ABM of NLC-CLL differentiation using the Physicell software (Github repository).",
        "Develop a Python and Bash pipeline for Physicell model exploration (including parameter exploration, sensitivity analysis and genetic algorithms) for running in HPC architectures (Github repository).",
        "Apply basic reinforcement learning algorithms into the NLC-CLL model to evaluate cancer cell concentration.",
        "Develop an advanced machine learning framework in R to extract clinically relevant features from bulk RNAseq data (pipeML)."
      ]
    },
    {
      title: "Bioinformatics Engineer",
      institution: "Cancer Research Center of Toulouse (CRCT)",
      team: "NetB(IO)² | Principal Investigator: Vera Pancaldi",
      period: "Apr 2023 - Oct 2023",
      tasks: "Analysis of transcriptomics data to evaluate patient profiles of early and late stage NSCLC patients.",
      achievements: [
        "Develop a novel framework for characterizing TME patient profiles by constructing transcriptional regulatory networks (TRNs) based on inferred transcription factor (TF) activity and cell type deconvolution from bulk RNA-seq data (CellTFusion)."
      ]
    },
    {
      title: "Intern of Bioinformatics",
      institution: "Cancer Research Center of Toulouse (CRCT)",
      team: "NetB(IO)² | Principal Investigator: Vera Pancaldi",
      period: "Jan 2022 - Aug 2022",
      tasks: "Analysis of tumor cell composition on NSCLC patients using computational tools based on transcriptomics data.",
      achievements: [
        "Develop of an algorithm that integrates a combination of multiple first or second-generation deconvolution methods and several cell type signatures to ensure robust and accurate profiling of cell composition starting from bulk RNAseq data (multideconv)."
      ]
    },
    {
      title: "Research Assistant",
      institution: "Universidad de Ingenieria y Tecnologia UTEC Lima, Peru",
      department: "Bioengineer Department | Supervisor: Dr. Alberto Donayre",
      period: "Jan 2021 - Aug 2021",
      tasks: "Design of a bioactive polymer based on self-assembling and antimicrobial peptides for wound applications.",
      achievements: [
        "Propose a genetic cassette for the production of self-assembling peptides with antimicrobial properties via the implementation of genetic engineering techniques and cloning methods (Gibson assembly, restriction enzymes, golden gate)."
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30" id="experience">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Research Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-muted-foreground font-medium">
                        {exp.institution}
                      </p>
                      {exp.department && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {exp.department}
                        </p>
                      )}
                      {exp.team && (
                        <p className="text-sm text-muted-foreground">
                          {exp.team}
                        </p>
                      )}
                    </div>
                    <Badge 
                      variant="secondary"
                      className="flex items-center gap-2 px-4 py-2 whitespace-nowrap self-start"
                    >
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </Badge>
                  </div>

                  {exp.project && (
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-primary mb-1">Project:</p>
                      <p className="text-sm text-muted-foreground italic">{exp.project}</p>
                    </div>
                  )}

                  {exp.tasks && (
                    <div className="mt-2">
                      <p className="text-sm font-semibold text-primary mb-1">Tasks:</p>
                      <p className="text-sm text-muted-foreground">{exp.tasks}</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-primary mb-3">
                      {exp.achievements.length > 1 ? "Achievements:" : "Achievement:"}
                    </p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li 
                          key={achIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-accent mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
