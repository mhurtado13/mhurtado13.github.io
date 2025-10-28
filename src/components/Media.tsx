import { Card } from "@/components/ui/card";
import { ExternalLink, Newspaper } from "lucide-react";

const Media = () => {
  const pressReleases = [
    {
      title: "LECCHAIN: Improving vaccine thermal tolerance",
      outlet: "Centro Bio",
      description: "Coverage of the iGEM Design League 2021 project focusing on improving SARS-CoV-2 vaccine stability using plant lectins.",
      url: "https://www.centrobio.pe/2021/10/22/lecchain-mejorando-la-tolerancia-termica-de-las-vacunas/",
      type: "Press Release",
      date: "2021"
    },
    {
      title: "UTEC team develops technology for vaccine conservation",
      outlet: "Peru21",
      description: "Feature on the innovative approach to vaccine thermal stability developed by the iGEM team.",
      url: "https://peru21.pe/vida/equipo-de-la-utec-desarrollo-tecnologia-para-conservacion-de-vacunas-noticia/",
      type: "Press Release",
      date: "2021"
    },
    {
      title: "Peruvian students develop system to preserve COVID-19 vaccines",
      outlet: "El Comercio",
      description: "Press coverage highlighting the development of LECCHAIN technology for vaccine preservation.",
      url: "https://elcomercio.pe/tecnologia/ciencias/estudiantes-peruanos-desarrollan-sistema-para-preservar-vacunas-contra-la-covid-19-noticia/",
      type: "Press Coverage",
      date: "2021"
    }
  ];

  return (
    <section className="py-24 min-h-screen bg-[var(--gradient-subtle)]" id="media">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Newspaper className="w-10 h-10 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Media & Press
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Featured articles and press coverage of research and innovation projects
            </p>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid gap-6">
            {pressReleases.map((article, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                            {article.type}
                          </span>
                          <span className="text-xs text-muted-foreground">{article.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {article.title}
                        </h3>
                        <p className="text-sm font-medium text-accent mb-2">
                          {article.outlet}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {article.description}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                    >
                      Read full article
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
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

export default Media;
