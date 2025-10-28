import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Trophy } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      name: "Prix de la Fondation Silab Jean Paufique",
      category: "Research Excellence",
      year: "2024"
    },
    {
      name: "Best poster presentation award",
      category: "Conference Recognition",
      year: "2024"
    },
    {
      name: "Campus France – France Excellence Eiffel PhD scholarship",
      category: "PhD Fellowship",
      year: "2023"
    },
    {
      name: "Toulouse Foundation Cancer Sante – PhD scholarship",
      category: "PhD Fellowship",
      year: "2023"
    },
    {
      name: "CARe Graduate School Univ. Paul Sabatier – Doctoral School Fellowship",
      category: "PhD Fellowship",
      year: "2023"
    },
    {
      name: "CARe Graduate School Univ. Paul Sabatier – M2 internship fellowship",
      category: "Master Fellowship",
      year: "2022"
    },
    {
      name: "Research for Peruvian Undergraduates (REPU) program – International stage fellowship",
      category: "International Fellowship",
      year: "2021"
    },
    {
      name: "iGEM Design League – Gold medal",
      category: "Competition",
      year: "2021"
    },
    {
      name: "iGEM Design League – Best Human Practices",
      category: "Competition",
      year: "2021"
    },
    {
      name: "iGEM Design League – Best aligned with Sustainable Development Goals (SGD)",
      category: "Competition",
      year: "2021"
    }
  ];

  const getCategoryColor = (category: string) => {
    if (category.includes("Excellence") || category.includes("Best")) return "from-primary to-primary/80";
    if (category.includes("Fellowship")) return "from-accent to-accent/80";
    if (category.includes("Competition")) return "from-secondary to-secondary/80";
    return "from-primary via-accent to-secondary";
  };

  return (
    <section className="py-24 bg-background" id="awards">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="h-10 w-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Awards & Achievements
              </h2>
            </div>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${getCategoryColor(award.category)} flex items-center justify-center`}>
                      <Award className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground leading-tight">
                        {award.name}
                      </h3>
                      <Badge 
                        variant="secondary"
                        className="text-xs whitespace-nowrap"
                      >
                        {award.year}
                      </Badge>
                    </div>
                    <Badge 
                      variant="outline"
                      className="text-xs"
                    >
                      {award.category}
                    </Badge>
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

export default Awards;
