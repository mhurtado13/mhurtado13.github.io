import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Presentation, MapPin, Calendar, Video } from "lucide-react";

const Talks = () => {
  const talks = [
    {
      title: "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
      event: "Bioinformatics and Computational Biology Conference",
      type: "Oral presentation",
      location: "Napoli, Italy",
      date: "December 2025",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    },
    {
      title: "Estimating tumour microenvironment cellular states from bulk RNAseq produces biomarkers of clinical outcome across stages",
      event: "21èmes Journées annuelles du Cancéropôle GSO",
      type: "Oral presentation",
      location: "Agen, France",
      date: "November 2025",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    },
    {
      title: "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
      event: "European Conference on Computational Biology - ISMB/ECCB 2025",
      type: "Oral presentation",
      location: "Liverpool, UK",
      date: "July 2025",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: null
    },
    {
      title: "CellTFusion: Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Journee Bioinfo/Biostat GenoToul",
      type: "Oral Presentation",
      location: "Toulouse, France",
      date: "November 2024",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "EMBO Workshop | Computational models of life: From molecular biology to digital twins",
      type: "Flash presentation",
      location: "Sant Feliu de Guíxols, Spain",
      date: "December 2023",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "19th Annual Meeting of the Canceropole GSO",
      type: "Oral presentation",
      location: "Arcachon, France",
      date: "November 2023",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Institut Curie | Computational Systems Biology of Cancer 6th edition",
      type: "Oral presentation",
      location: "Paris, France",
      date: "September 2023",
      description: "#",
      tags: ["#", "#"],
      slides: "#",
      video: "#"
    }
  ];

  return (
    <section className="py-24 bg-card" id="talks">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Talks & Presentations
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {talks.map((talk, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-accent to-secondary rounded-lg shadow-[var(--shadow-soft)] flex-shrink-0">
                    <Presentation className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {talk.type}
                    </Badge>
                    <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                      {talk.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-sm font-medium text-primary">
                    {talk.event}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{talk.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {talk.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {talk.tags.map((tag, tagIndex) => (
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
                    <a href={talk.slides} target="_blank" rel="noopener noreferrer">
                      <Presentation className="w-4 h-4" />
                      Slides
                    </a>
                  </Button>
                  {talk.video && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-primary hover:text-primary/80 flex-1"
                      asChild
                    >
                      <a href={talk.video} target="_blank" rel="noopener noreferrer">
                        <Video className="w-4 h-4" />
                        Video
                      </a>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Talks;
