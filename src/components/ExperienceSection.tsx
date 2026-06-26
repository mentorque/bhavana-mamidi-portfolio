import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Meghana Auto Agencies",
      position: "Operations Manager",
      location: "India",
      duration: "Sep 2023 – Mar 2026",
      logoSrc: "/meghana-auto-logo.svg",
      logoAlt: "Meghana Auto Agencies",
      achievements: [
        { impact: "~25% workflow throughput improvement", description: "Directed daily operations across Sales, Service & Spare Parts, implementing performance frameworks that achieved monthly dealership targets and elevated the customer experience." },
        { impact: "30% reduction in staff turnover", description: "Launched a structured performance management and coaching programme for 12 staff with regular 1:1s and quarterly reviews, boosting team engagement scores year-on-year." },
        { impact: "SOP standardisation across departments", description: "Standardised and rolled out SOPs across all departments, raising quality assurance standards and reducing process errors." },
        { impact: "KPI dashboards for business objectives", description: "Built and maintained KPI dashboards to track weekly and monthly business objectives, presenting actionable insights to senior stakeholders." },
        { impact: "100% stock accuracy, zero stockouts", description: "Implemented inventory control using DMS software, achieving 100% stock accuracy for spare parts and consumables, reducing overhead costs and minimising waste." },
        { impact: "Cross-functional escalation resolution", description: "Coordinated cross-functional teams to resolve escalations, improve satisfaction, and drive continuous improvement initiatives." },
      ],
      technologies: ["SOP Design", "DMS", "KPI Dashboards", "Quality Assurance", "Inventory Control", "Team Leadership"],
    },
    {
      company: "Abtran",
      position: "Payment Operations Analyst",
      location: "Ireland",
      duration: "Apr 2023 – Aug 2023",
      logoSrc: "/abtran-logo.png",
      logoAlt: "Abtran",
      achievements: [
        { impact: "100% SLA compliance", description: "Managed and prioritised live payment queues across email, phone, and live chat channels, maintaining SLA compliance and high-quality standards in a fast-paced omnichannel environment." },
        { impact: "Salesforce CRM data stewardship", description: "Served as CRM data steward in Salesforce, ensuring accurate client records, tags, and site profile configurations with 100% data integrity across all accounts." },
        { impact: "Cross-functional delivery", description: "Collaborated with operations, finance, and client services to meet objectives and resolve escalations within SLAs." },
        { impact: "Operational KPI reporting", description: "Produced and presented operational KPI reports to stakeholders, supporting service improvement and efficiency gains." },
      ],
      technologies: ["Salesforce", "Payment Processing", "SLA Management", "KPI Reporting", "Omnichannel Support"],
    },
    {
      company: "Accenture",
      position: "Trust & Safety Analyst",
      location: "Ireland",
      duration: "Nov 2022 – Apr 2023",
      logoSrc: "/accenture.png",
      logoAlt: "Accenture",
      achievements: [
        { impact: "Top-tier quality assurance scores", description: "Investigated and resolved content safety and account support issues within SLA turnaround times while maintaining top-tier QA scores and minimising user experience risks." },
        { impact: "High CSAT on sensitive enquiries", description: "Applied empathy and strong communication skills to sensitive user enquiries, achieving high customer satisfaction ratings." },
        { impact: "Policy and escalation management", description: "Monitored evolving client policies and guidelines, resolving complex escalations in line with Trust & Safety procedures." },
        { impact: "Global content moderation", description: "Safeguarded digital platforms through content moderation and collaborated with international language teams across multiple global sites to align regional strategies and ensure compliance." },
      ],
      technologies: ["Trust & Safety", "Content Moderation", "Quality Assurance", "Escalation Management", "Policy Compliance"],
    },
    {
      company: "Telus International",
      position: "Customer Support Analyst",
      location: "Ireland",
      duration: "Dec 2021 – Sep 2022",
      logoSrc: "/telus-logo.png",
      logoAlt: "Telus International",
      achievements: [
        { impact: "Exceeded CSAT targets", description: "Delivered omnichannel customer support (voice, email, live chat) across global markets, consistently exceeding internal customer satisfaction targets on complex user cases." },
        { impact: "Salesforce case management", description: "Used Salesforce CRM to log, manage, and track customer interactions, ensuring accurate data recording and seamless case handover between shifts and teams." },
        { impact: "Engineering collaboration on bugs", description: "Identified, escalated, and followed up on system bugs and product issues with engineering teams, contributing to faster resolution times and improved user experience." },
        { impact: "Trusted escalation point", description: "Communicated effectively with stakeholders, acting as a trusted escalation point for complex queries." },
      ],
      technologies: ["Salesforce", "Zendesk", "Omnichannel Support", "Case Management", "Stakeholder Communication"],
    },
    {
      company: "Amazon",
      position: "Data Operations Associate (Tron)",
      location: "India",
      duration: "Sep 2019 – Jun 2021",
      logoSrc: "/amazon-logo.png",
      logoAlt: "Amazon",
      achievements: [
        { impact: "Productivity & quality under pressure", description: "Consistently achieved productivity and quality metrics under aggressive deadlines in high-volume data operations." },
        { impact: "Onboarding & training leadership", description: "Led onboarding and training for new team members on pilot projects (MMDA, Proxemics), boosting team productivity and accelerating ramp-up while maintaining quality benchmarks." },
        { impact: "Performance metrics analysis", description: "Analysed performance metrics and process data over 6 months to drive business outcomes and identify exceptions." },
      ],
      technologies: ["Data Operations", "Process Analysis", "Training & Onboarding", "Quality Metrics", "High-Volume Processing"],
    },
    {
      company: "MyClass Board",
      position: "Inside Sales Manager",
      location: "India",
      duration: "Apr 2019 – Aug 2019",
      logoSrc: "/mcb-logo.png",
      logoAlt: "MyClass Board",
      achievements: [
        { impact: "Regional team leadership", description: "Managed a team of 10 members across another region, coordinating daily sales activity and performance." },
        { impact: "Lead generation", description: "Generated leads by engaging with customers through phone and email outreach." },
        { impact: "Target-driven planning", description: "Developed operational plans aligned to sales targets and tracked progress against goals." },
        { impact: "Field team training", description: "Trained new employees who would work on the field, supporting ramp-up and consistent delivery standards." },
      ],
      technologies: ["Inside Sales", "Lead Generation", "Team Leadership", "Operational Planning", "Training", "Phone & Email Outreach"],
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-[hsl(var(--section-bg))]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground font-space-grotesk">
            Work <span className="bg-gradient-to-r from-[hsl(202_100%_42%)] to-[hsl(202_85%_28%)] bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Operations leadership, payment processing, trust & safety, and data-driven process improvement across Ireland and India.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="rounded-lg border border-border/70 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-[9.5rem] sm:w-[10.5rem] shrink-0 rounded-xl bg-white border border-border px-2.5 py-2 shadow-sm flex items-center justify-start">
                      <img src={exp.logoSrc} alt={exp.logoAlt} className="h-14 sm:h-16 w-auto max-w-none object-contain object-left" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-space-grotesk">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-[hsl(var(--primary))] font-semibold text-lg mt-1"><Building2 className="w-4 h-4 shrink-0" />{exp.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 shrink-0" />{exp.duration}</div>
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{exp.location}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="hidden md:block space-y-4">
                  {exp.achievements.map((a, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                      <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                      <div><div className="text-[hsl(var(--primary))] font-semibold text-lg leading-snug">{a.impact}</div><p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{a.description}</p></div>
                    </div>
                  ))}
                </div>
                <div className="md:hidden">
                  <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                    <CarouselContent className="-ml-2">
                      {exp.achievements.map((a, i) => (
                        <CarouselItem key={i} className="pl-2 basis-full">
                          <div className="flex gap-4 p-4 bg-muted/40 rounded-lg border border-primary/10">
                            <div className="w-8 h-8 bg-primary/15 rounded-full flex items-center justify-center shrink-0 mt-1"><TrendingUp className="w-4 h-4 text-[hsl(var(--primary))]" /></div>
                            <div><div className="text-[hsl(var(--primary))] font-semibold text-lg">{a.impact}</div><p className="text-muted-foreground text-sm">{a.description}</p></div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2 border-border bg-background shadow-sm" />
                    <CarouselNext className="right-2 border-border bg-background shadow-sm" />
                  </Carousel>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">Skills used</h4>
                  <div className="flex flex-wrap gap-2">{exp.technologies.map((t, i) => <Badge key={i} variant="secondary" className="text-xs font-normal rounded-md bg-[hsl(var(--skill-bg))] text-foreground border border-border/60">{t}</Badge>)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
