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

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* === Text Section === */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up max-w-2xl">
            <div className="inline-block mb-4">
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name - single line */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight whitespace-nowrap">
              SINCHANA <span className="text-primary">S URS</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Computer Science student passionate about Machine Learning, AI, and Full-Stack Development.
              Building intelligent systems that solve real-world problems with elegant, user-centric design.
            </p>

            {/* Contact Links */}
            <div className="flex items-center gap-4 mb-8 justify-center lg:justify-start">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/sinchana-urs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/sinchana-s-urs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:sinchuurs17@gmail.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={scrollToProjects} className="gap-2">
                View Projects
                <ArrowDown className="h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="gap-2 flex items-center justify-center border-primary/40 hover:border-primary text-primary hover:text-primary/90 transition-colors"
                asChild
              >
                <a
                  href="/attached_assets/SINCHANA S URS-4AI22CS100-7022644424_1761654082369.pdf"
                  download
                >
                  <Download className="h-4 w-4" />
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* === Image Section === */}
          <div
            className="flex-1 flex items-center justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative group translate-x-[-2rem] lg:translate-x-[-4rem]">
              {/* Background tilted layer */}
              <div className="absolute top-6 right-6 w-80 h-[22rem] bg-primary/10 rounded-lg transform rotate-3" />

              {/* Foreground image */}
              <div className="relative w-80 h-[22rem] overflow-hidden rounded-lg shadow-2xl transform -rotate-3 transition-transform duration-700 ease-out group-hover:rotate-0">
                <img
                  src={portraitImage}
                  alt="Sinchana S Urs"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
