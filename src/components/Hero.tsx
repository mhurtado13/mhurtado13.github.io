import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/80" />
      </div>

      {/* Animated glow effect */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                Marcelo Hurtado
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto">
              PhD student in Computational Biology and Bioinformatics
            </p>
          </div>

          <p className="text-base md:text-lg text-white/75 max-w-3xl mx-auto animate-fade-in-slow leading-relaxed px-4">
            Advancing cancer systems biology through multiscale modeling and transcriptomics approaches to decode the tumor microenvironment.
          </p>

          <div className="flex flex-wrap gap-4 justify-center animate-fade-in-slow pt-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <a href="/contact">
                <Mail className="group-hover:scale-110 transition-transform" />
                Get in Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
              <a href="/about">
                <FileText />
                View Profile
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('/CV_Marcelo_Hurtado.pdf', '_blank')}
            >
              <Download />
              Download CV
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8 animate-fade-in-slow">
            <a 
              href="https://github.com/mhurtado13" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/marcelo-hurtado/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
