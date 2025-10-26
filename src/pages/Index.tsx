import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Publications />
      <Contact />
      
      <footer className="bg-foreground/5 py-8 text-center border-t border-border">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} • Computational Biology Portfolio
        </p>
      </footer>
    </main>
  );
};

export default Index;
