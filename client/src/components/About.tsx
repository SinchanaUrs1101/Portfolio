import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating innovative solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-card-border animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a Computer Science student at Adichunchanagiri Institute of Technology, 
                passionate about leveraging cutting-edge technology to solve real-world problems. 
                My expertise spans across Machine Learning, Artificial Intelligence, and Full-Stack Development.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                With a strong foundation in data structures, algorithms, and modern development frameworks, 
                I strive to build intelligent systems that are not only functional but also elegant and 
                user-friendly. My projects reflect my commitment to innovation, from AI-powered disease 
                detection systems to educational platforms that make learning more accessible.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="flex items-start gap-3 hover-elevate active-elevate-2 p-4 rounded-lg transition-all overflow-visible">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Location</p>
                    <p className="text-sm text-muted-foreground">Chikkamagaluru, Karnataka</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 hover-elevate active-elevate-2 p-4 rounded-lg transition-all overflow-visible">
                  <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Phone</p>
                    <a href="tel:+917022644424" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91-7022644424
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 hover-elevate active-elevate-2 p-4 rounded-lg transition-all overflow-visible">
                  <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="font-medium mb-1">Email</p>
                    <a href="mailto:sinchuurs17@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                      sinchuurs17@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
