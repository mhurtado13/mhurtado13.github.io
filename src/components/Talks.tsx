import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Presentation, MapPin, Calendar, Video, Image } from "lucide-react";

const Talks = () => {
  const talks = [
    {
      title: "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
      event: "Bioinformatics and Computational Biology Conference",
      type: "Oral presentation",
      location: "Napoli, Italy",
      date: "December 2025",
      slides: "#",
      video: "#"
    },
    {
      title: "Estimating tumour microenvironment cellular states from bulk RNAseq produces biomarkers of clinical outcome across stages",
      event: "21èmes Journées annuelles du Cancéropôle GSO",
      type: "Oral presentation",
      location: "Agen, France",
      date: "November 2025",
      slides: "#",
      video: "#"
    },
    {
      title: "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies clinically relevant cell niches",
      event: "European Conference on Computational Biology - ISMB/ECCB 2025",
      type: "Oral presentation",
      location: "Liverpool, UK",
      date: "July 2025",
      slides: "#",
      video: null
    },
    {
      title: "CellTFusion: Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Journee Bioinfo/Biostat GenoToul",
      type: "Oral Presentation",
      location: "Toulouse, France",
      date: "November 2024",
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "EMBO Workshop | Computational models of life: From molecular biology to digital twins",
      type: "Flash presentation",
      location: "Sant Feliu de Guíxols, Spain",
      date: "December 2023",
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "19th Annual Meeting of the Canceropole GSO",
      type: "Oral presentation",
      location: "Arcachon, France",
      date: "November 2023",
      slides: "#",
      video: "#"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Institut Curie | Computational Systems Biology of Cancer 6th edition",
      type: "Oral presentation",
      location: "Paris, France",
      date: "September 2023",
      slides: "#",
      video: "#"
    }
  ];

  const posters = [
    {
      title: "Estimating NSCLC tumour microenvironment cellular states from bulk RNAseq produces biomarkers of clinical outcome across stages",
      event: "World Conference on Lung Cancer (WCLC) 2025",
      location: "Barcelona, Spain",
      date: "2025"
    },
    {
      title: "CellTFusion: A novel approach to unravel cell states via cell type deconvolution and TF activity estimated from bulk RNAseq data identifies cell niches potentially predictive of cancer progression",
      event: "JOBIM 2025",
      location: "Bordeaux, France",
      date: "2025"
    },
    {
      title: "CellTFusion: Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Toulouse Oncoweek 2025",
      location: "Toulouse, France",
      date: "2025"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "1st edition Young Scientist Cancer Congress",
      location: "Toulouse, France",
      date: "2024"
    },
    {
      title: "Transcriptional regulatory networks unravel cell states from immune cell type deconvolution and uncovers cell niches predictive of cancer progression",
      event: "Computational models of life: From molecular biology to digital twins - EMBO Workshop",
      location: "Sant Feliu de Guíxols, Spain",
      date: "2023"
    },
    {
      title: "Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages",
      event: "EACR Defence is the Best Attack: Immuno-Oncology Breakthroughs 2023",
      location: "Barcelona, Spain",
      date: "2023"
    },
    {
      title: "Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages",
      event: "The Festival of Genomics & Biodata 2023",
      location: "London, UK",
      date: "2023"
    },
    {
      title: "Multi-omics Profiling of the Non-Small Cell Lung Cancer (NSCLC) Microenvironment Across Disease Stages and Gender",
      event: "Cancéropôle Grand Sud-Ouest 18th Annual Meeting",
      location: "Montpellier, France",
      date: "2022"
    },
    {
      title: "Computational analysis and multi-omics in oncology",
      event: "CARe Graduate School",
      location: "Toulouse, France",
      date: "2022"
    },
    {
      title: "Axis 2 workshop 'Genome Dynamics and Cancer'",
      event: "Canceropole Grand Sud-Ouest",
      location: "Toulouse, France",
      date: "2022"
    }
  ];

  return (
    <section className="py-24 bg-card" id="talks">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Talks & Poster Presentations
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
          </div>

          {/* Oral Presentations */}
          <h3 className="text-2xl font-semibold text-foreground mb-6">Oral Presentations</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
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

                <div className="space-y-2 mb-4 flex-1">
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

          {/* Poster Presentations */}
          <h3 className="text-2xl font-semibold text-foreground mb-6">Poster Presentations</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posters.map((poster, index) => (
              <Card 
                key={index}
                className="p-5 bg-card border-border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg shadow-[var(--shadow-soft)] flex-shrink-0">
                    <Image className="w-4 h-4 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Poster
                  </Badge>
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-2 leading-tight">
                  {poster.title}
                </h4>
                <p className="text-xs font-medium text-primary mb-2">
                  {poster.event}
                </p>
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{poster.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{poster.date}</span>
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

export default Talks;
