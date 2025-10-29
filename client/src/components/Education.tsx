import { useState } from "react";
import { GraduationCap, Award, Trophy, Eye, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const education = [
  {
    degree: "B.E in Computer Science",
    institution: "Adichunchanagiri Institute of Technology",
    location: "Chikkamagaluru, Karnataka",
    period: "Present",
    grade: "CGPA - 8.35/10.00",
  },
  {
    degree: "Pre-University Education",
    institution: "Sri Sai Angels PU College",
    location: "Chikkamagaluru, Karnataka",
    period: "April 2022",
    grade: "74.16%",
  },
  {
    degree: "ICSE - Class 10",
    institution: "St. Mary's International School",
    location: "Chikkamagaluru, Karnataka",
    period: "June 2020",
    grade: "83.6%",
  },
];

const certifications = [
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "Infosys Springboard",
    type: "Certification",
    // use the provided attachment image for this certification
    fileName: "info certifi.jpeg",
  },
  {
    title: "Machine Learning",
    issuer: "Unknown",
    type: "Online Certification",
    // use the provided attachment image for the ML certification
    fileName: "ML certifi.jpeg",
  },
];

const achievements = [
  {
    title: "Smart Hack - 2025",
    description: "Participated in Free and Open Source Software Hackathon",
    year: "2025",
  },
  {
    title: "Kannada Rajyotsava Dance Competition",
    description: "Winners",
    year: "2024",
  },
];

export function Education() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic journey and professional certifications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* === Education === */}
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Academic Background</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
                        <p className="text-muted-foreground mb-1">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                      </div>
                      <div className="text-left md:text-right">
                        <Badge variant="secondary" className="mb-2">
                          {edu.period}
                        </Badge>
                        <p className="text-sm font-medium text-primary">{edu.grade}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* === Certifications === */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center gap-3 mb-8">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="text-xs mb-4">
                      {cert.type}
                    </Badge>
                    <div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-primary border-primary/50 hover:bg-primary hover:text-white"
                        onClick={() =>
                          // server exposes attached assets at /assets/certs
                          setSelectedCert(`/assets/certs/${encodeURIComponent(cert.fileName)}`)
                        }
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* === Extracurricular === */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">Extracurricular</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((a, i) => (
                <Card key={i} className="hover-elevate transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-lg">{a.title}</CardTitle>
                      <Badge variant="secondary" className="shrink-0">
                        {a.year}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{a.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* === Certificate Modal === */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 rounded-xl w-full max-w-4xl shadow-lg relative">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="p-4 flex items-center justify-center">
              {/* Render an <img> for common image types, fallback to an iframe for PDFs/other types */}
              {selectedCert.match(/\.(png|jpe?g|gif|webp)$/i) ? (
                // image viewer
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={selectedCert}
                  alt="Certificate"
                  className="w-full h-[80vh] object-contain rounded-lg"
                />
              ) : (
                <iframe
                  src={selectedCert}
                  className="w-full h-[80vh] rounded-lg"
                  title="Certificate Viewer"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
