import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import portraitImage from "@assets/photo2_1761654082369.jpg";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-start))] via-[hsl(var(--gradient-middle))] to-[hsl(var(--gradient-end))]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Bringing Ideas To{" "}
              <span className="text-primary">Life</span>,{" "}
              <span className="text-primary">Beautifully</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Computer Science student passionate about Machine Learning, AI, and Full-Stack Development. 
              Building intelligent systems that solve real-world problems with elegant, user-centric design.
            </p>

            {/* Contact Links */}
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-github"
              >
                <a href="https://github.com/sinchana-urs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-linkedin"
              >
                <a href="https://www.linkedin.com/in/sinchana-s-urs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                data-testid="link-email"
              >
                <a href="mailto:sinchuurs17@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToProjects}
                className="gap-2"
                data-testid="button-view-projects"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 backdrop-blur-sm"
                asChild
                data-testid="button-download-resume"
              >
                <a href="/attached_assets/SINCHANA S URS-4AI22CS100-7022644424_1761654082369.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Portrait Photo with Tilted Design */}
          <div className="flex-1 flex items-center justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Background Card */}
              <div className="absolute inset-0 bg-card/30 backdrop-blur-sm rounded-2xl transform rotate-6 border border-primary/20" />
              
              {/* Main Photo Container */}
              <div className="relative transform -rotate-12 hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative overflow-hidden rounded-2xl border-2 border-primary/30 shadow-2xl animate-pulse-glow">
                  <img
                    src={portraitImage}
                    alt="Sinchana S Urs"
                    className="w-80 h-auto object-cover"
                    data-testid="img-portrait"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
