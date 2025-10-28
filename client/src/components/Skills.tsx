import { Code2, Database, Globe, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["C", "C++", "Python", "JavaScript", "SQL"],
    description: "Proficient in multiple programming languages for diverse development needs"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
    description: "Experience with both SQL and NoSQL database management systems"
  },
  {
    icon: Globe,
    title: "Technologies",
    skills: ["Streamlit", "Next.js", "TypeScript", "AWS", "HTML", "CSS", "Git"],
    description: "Modern frameworks and tools for building scalable applications"
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Time Management", "Problem Solving", "Teamwork", "Communication"],
    description: "Essential interpersonal skills for effective collaboration"
  }
];

const coursework = [
  "Data Structures & Algorithms",
  "Database Management System",
  "Cybersecurity",
  "OOPS",
  "Machine Learning"
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning multiple technologies and programming paradigms
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover-elevate active-elevate-2 transition-all duration-300 hover:scale-105 animate-fade-in-up border-card-border"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`card-skill-${category.title.toLowerCase()}`}
              >
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {category.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Coursework Section */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <h3 className="text-2xl font-semibold mb-6">Relevant Coursework</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {coursework.map((course) => (
              <Badge
                key={course}
                variant="outline"
                className="text-sm py-2 px-4 hover-elevate active-elevate-2"
                data-testid={`badge-course-${course.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
