import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";

const AboutPage = () => {
  return (
    <>
      <Navigation />
      <div className="pt-16">
        <About />
        <Skills />
      </div>
    </>
  );
};

export default AboutPage;
