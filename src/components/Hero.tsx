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
            <a 
              href="https://orcid.org/0009-0004-6712-0864" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors hover:scale-110 transform duration-200"
              aria-label="ORCID Profile"
            >
              <svg className="w-7 h-7" viewBox="0 0 256 256" fill="currentColor">
                <path d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z M86.3,186.2H70.9V79.1h15.4V186.2z M78.6,65.4c-5.7,0-10.3-4.6-10.3-10.2c0-5.7,4.6-10.3,10.3-10.3c5.7,0,10.2,4.6,10.2,10.3C88.9,60.8,84.3,65.4,78.6,65.4z M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
