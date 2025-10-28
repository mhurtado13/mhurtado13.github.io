import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Building2 } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "marcelo.hurtado@inserm.fr",
      link: "mailto:marcelo.hurtado@inserm.fr"
    },
    {
      icon: Building2,
      label: "Institution",
      value: "Cancer Research Center of Toulouse (CRCT), Paul Sabatier University",
      link: null
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/mhurtado13",
      link: "https://github.com/mhurtado13"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/marcelo-hurtado",
      link: "https://www.linkedin.com/in/marcelo-hurtado/"
    }
  ];

  return (
    <section className="py-24 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interested in collaboration, discussing research ideas, or learning more about my work? 
              I'd love to hear from you.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-card to-card/80 border-border shadow-[var(--shadow-medium)] animate-fade-in-slow">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200"
                >
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg shadow-[var(--shadow-soft)]">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a 
                        href={item.link}
                        target={item.link.startsWith('http') ? "_blank" : undefined}
                        rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-6">
                Looking for collaborations or have questions about my research?
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:marcelo.hurtado@inserm.fr">
                  <Mail />
                  Send Me an Email
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
