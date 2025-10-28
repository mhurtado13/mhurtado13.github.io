import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Awards from "@/components/Awards";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <About />
        <Skills />
        <Experience />
        <Awards />
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6 text-center">
            <Button 
              size="lg"
              className="gap-2"
              onClick={() => window.open('/CV_Marcelo_Hurtado.pdf', '_blank')}
            >
              <Download className="h-5 w-5" />
              Download Full CV
            </Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
