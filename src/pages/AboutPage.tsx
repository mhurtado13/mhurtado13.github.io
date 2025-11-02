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
      </div>
    </>
  );
};

export default AboutPage;
