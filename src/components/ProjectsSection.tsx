import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Project = { title: string; subtitle?: string; highlights: string[]; stack: string[]; image: string; imageFit?: "cover" | "contain" };

const ProjectImageCarousel = ({ project }: { project: Project }) => {
  return (
    <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-white rounded-lg m-3 mb-0">
      <img src={encodeURI(project.image)} alt={project.title} className={project.imageFit === "contain" ? "w-full h-full object-contain object-center p-3 sm:p-4" : "w-full h-full object-cover"} />
    </div>
  );
};

const ProjectsSection = () => {
  const projects: Project[] = [
    {
      title: "Promotional Planning for Two-Wheelers",
      subtitle: "MBA Research Project — Osmania University",
      highlights: [
        "Conducted customer surveys to understand purchasing behaviour and promotional preferences in the two-wheeler market.",
        "Applied MS Excel analytics to identify the most effective promotional mix tools for campaign planning.",
        "Delivered research findings supporting data-driven promotional strategy recommendations.",
      ],
      stack: ["MS Excel", "Customer Surveys", "Market Research", "Promotional Planning", "Data Analysis"],
      image: "/two-wheeler-project.webp",
      imageFit: "cover",
    },
    {
      title: "KPI Dashboard & Performance Framework",
      subtitle: "Meghana Auto Agencies",
      highlights: [
        "Built and maintained KPI dashboards tracking weekly and monthly business objectives across Sales, Service & Spare Parts.",
        "Implemented performance frameworks that improved workflow throughput by ~25% while meeting dealership targets.",
        "Presented actionable insights to senior stakeholders to drive operational decision-making.",
      ],
      stack: ["KPI Dashboards", "Tableau", "MS Excel", "Performance Management", "Stakeholder Reporting"],
      image: "/kpidash.jpg",
      imageFit: "cover",
    },
    {
      title: "DMS Inventory Control Programme",
      subtitle: "Meghana Auto Agencies",
      highlights: [
        "Implemented inventory control using Dealer Management System (DMS) software across spare parts and consumables.",
        "Achieved 100% stock accuracy and zero stockout incidents, significantly reducing overhead costs.",
        "Minimised waste through structured stock monitoring and replenishment processes.",
      ],
      stack: ["DMS", "Inventory Control", "Process Improvement", "Quality Assurance", "Cost Reduction"],
      image: "/dms.png",
      imageFit: "cover",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-3">Projects</h2>
            <div className="w-16 h-px bg-[hsl(var(--primary))] mx-auto mb-5" />
            <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">Research, dashboards, and operational initiatives with measurable business impact.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-2 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="rounded-lg border border-border/70 bg-card shadow-sm overflow-hidden flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
                <ProjectImageCarousel project={project} />
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-semibold text-foreground leading-snug">{project.title}</CardTitle>
                  {project.subtitle && <p className="text-sm font-medium text-[hsl(var(--primary))] mt-1">{project.subtitle}</p>}
                </CardHeader>
                <CardContent className="flex flex-col gap-4 flex-1 pt-0">
                  <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                    {project.highlights.map((line) => (
                      <li key={line.slice(0, 48)} className="flex gap-2.5 leading-relaxed">
                        <span className="text-[hsl(var(--primary))] shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-current" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-foreground/80 mb-2">Skills used</p>
                    <div className="flex flex-wrap gap-1.5">{project.stack.map((tech) => <Badge key={tech} variant="secondary" className="font-normal text-xs rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{tech}</Badge>)}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
