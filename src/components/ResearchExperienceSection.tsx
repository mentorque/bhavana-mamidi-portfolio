import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from "lucide-react";

type ResearchProject = {
  title: string;
  highlights: string[];
  stack: string[];
  image?: string;
};

type ResearchGroup = {
  institution: string;
  degree: string;
  projects: ResearchProject[];
};

const ResearchExperienceSection = () => {
  const research: ResearchGroup[] = [
    {
      institution: "Osmania University",
      degree: "MBA",
      projects: [
        {
          title: "Promotional Planning for Two-Wheelers",
          highlights: [
            "Analyzed the best promotional tools to benefit an organization in the two-wheeler market.",
            "Collected data through customer surveys on purchasing interest and promotional preferences.",
            "Used MS Excel charts and graphs to identify the most effective tools in the promotional mix.",
            "Presented resulting survey data to the organization, giving a clear view of activities creating product awareness and attracting customers.",
          ],
          stack: ["MS Excel", "Customer Surveys", "Market Research", "Promotional Planning", "Data Analysis"],
        },
      ],
    },
    {
      institution: "GRIET University",
      degree: "Electronics Engineering",
      projects: [
        {
          title: "Robust Railway Crack Detection Scheme using IoT",
          highlights: [
            "Designed a system to detect cracks on railway tracks in real time.",
            "Captured latitude and longitude coordinates of detected cracks using GPS.",
            "Enabled remote crack location monitoring to help prevent accidents before they occur.",
          ],
          stack: ["IoT", "GPS", "Embedded Systems", "Railway Safety", "Sensors"],
        },
        {
          title: "Smart Coffee Maker",
          highlights: [
            "Built a voice-activated coffee maker triggered by the command \"Make Me Coffee\" with minimal delay and no manual intervention.",
            "Sent a mobile notification — \"Coffee is ready\" — once brewing completed.",
            "Removed the need to wait on-site by automating preparation and alerting the user remotely.",
          ],
          stack: ["IoT", "Voice Commands", "Mobile Notifications", "Automation", "Embedded Systems"],
        },
      ],
    },
  ];

  return (
    <section id="research" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Research Experience</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Academic research across business analytics and electronics engineering.
            </p>
          </div>

          <div className="space-y-12">
            {research.map((group) => (
              <div key={group.institution}>
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[hsl(var(--primary))]" />
                  {group.degree}, {group.institution}
                </h3>
                <div className="grid gap-6">
                  {group.projects.map((project) => (
                    <Card key={project.title} className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                      {project.image && (
                        <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-white m-3 mb-0 rounded-lg">
                          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        </div>
                      )}
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold text-foreground leading-snug">{project.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-4 pt-0">
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.highlights.map((line) => (
                            <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                              <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                              <span>{line}</span>
                            </li>
                          ))}
                        </ul>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Skills used</p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <Badge key={tech} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchExperienceSection;
