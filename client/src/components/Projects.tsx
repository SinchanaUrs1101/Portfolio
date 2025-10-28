import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Teat and Udder Disease Detection in Cattles",
    description: "AI-based system to detect 7 cow udder conditions using deep learning and computer vision",
    technologies: ["Python", "VGG-16", "Streamlit", "Random Forest"],
    highlights: [
      "Applied preprocessing: Median Filtering, High-Pass Filtering, Canny Edge Detection",
      "Multifeatured extraction using VGG-16 and histogram features",
      "Interactive Streamlit web app with real-time analysis and treatment recommendations",
      "Disease classification using Random Forest algorithm"
    ],
    github: "https://github.com",
    demo: null
  },
  {
    title: "Kalika - Smart Learning Platform",
    description: "Intelligent learning platform for SSLC and 2nd PUC students with personalized lessons",
    technologies: ["Next.js", "TypeScript", "React"],
    highlights: [
      "Personalized lessons, interactive quizzes, and progress tracking",
      "Real-time feedback to enhance learning experience",
      "Streak maintenance and daily challenges",
      "Study guidance and student-friendly features",
    ],
    github: "https://github.com",
    demo: "https://kalika-demo.com"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-muted/30">
      {/* Background Decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions leveraging AI, machine learning, and modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="flex flex-col hover-elevate active-elevate-2 transition-all duration-300 animate-fade-in-up border-card-border overflow-visible"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-muted-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-tech-${tech.toLowerCase()}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 flex-wrap">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2"
                    asChild
                    data-testid={`button-github-${index}`}
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="sm"
                    className="gap-2"
                    asChild
                    data-testid={`button-demo-${index}`}
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
