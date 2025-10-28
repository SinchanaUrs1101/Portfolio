import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Sinchana S Urs. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Built with passion and modern web technologies
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="footer-link-github"
            >
              <a href="https://github.com/sinchana-urs" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="footer-link-linkedin"
            >
              <a href="https://www.linkedin.com/in/sinchana-s-urs/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              data-testid="footer-link-email"
            >
              <a href="mailto:sinchuurs17@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="gap-2"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}
