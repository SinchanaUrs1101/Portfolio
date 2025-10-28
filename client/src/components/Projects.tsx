import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Teat and Udder Disease Detection in Cattles",
    description:
      "AI-based system to detect 7 cow udder conditions using deep learning and computer vision",
    image: "/assets/teat-bg.jpg",
    technologies: ["Python", "VGG-16", "Streamlit", "Random Forest"],
    highlights: [
      "Applied preprocessing: Median Filtering, High-Pass Filtering, Canny Edge Detection",
      "Multifeatured extraction using VGG-16 and histogram features",
      "Interactive Streamlit web app with real-time analysis and treatment recommendations",
      "Disease classification using Random Forest algorithm",
    ],
    github: "https://github.com/SinchanaUrs1101/teat-and-udder-",
    demo: "https://teat-and-udder.onrender.com/",
  },
  {
    title: "Kalika - Smart Learning Platform",
    description:
      "Intelligent learning platform for SSLC and 2nd PUC students with personalized lessons",
    image: "/assets/kalika-bg.jpg",
    technologies: ["Next.js", "TypeScript", "React"],
    highlights: [
      "Personalized lessons, interactive quizzes, and progress tracking",
      "Real-time feedback to enhance learning experience",
      "Streak maintenance and daily challenges",
      "Study guidance and student-friendly features",
    ],
    github: "https://github.com/SinchanaUrs1101/Kalika",
    demo: "https://kalika-3.onrender.com/",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/kalika-bg.jpg')",
      }}
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Innovative solutions leveraging AI, machine learning, and modern web
            technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="flex flex-col relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:border-primary/50"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `url('${project.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Card background overlay for better contrast */}
              <div className="absolute inset-0 bg-black/55 z-0" />

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl mb-2 text-white">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 text-gray-200 relative z-10">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-3 text-primary/80">
                    Key Features:
                  </h4>
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
                      className="text-xs bg-primary/20 text-primary border border-primary/40"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-2 flex-wrap relative z-10">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 text-white border-white/40 hover:bg-primary hover:text-white"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                )}
                {project.demo && (
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/80 text-white"
                    asChild
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
