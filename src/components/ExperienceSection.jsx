import { Briefcase } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const experiences = [
    {
        role: "Data Science & Business Intelligence Intern",
        company: "APL Logistics",
        location: "Scottsdale, AZ",
        period: "May 2026 – July 2026",
        bullets: [
            "Enabled real-time cargo-risk monitoring across 4 global chokepoints (Strait of Hormuz, Panama Canal, Cape of Good Hope, Singapore) by integrating live AIS vessel data from Snowflake with a ~9M-row shipment dataset, classifying 260+ vessels and 1,300+ shipments each cycle.",
            "Migrated maritime geofencing from Snowflake spatial SQL to Python and Shapely, letting operators define new risk zones anywhere in the world without code changes.",
            "Shipped 20+ production features and fixes through a disciplined Git PR workflow while preserving app uptime.",
            "Applied enterprise-approved AI tools (Claude Code, GitHub Copilot, Snowflake Cortex) to plan multi-file changes, generate tests, write documentation, and review implementations with agentic workflows.",
        ],
        tags: ["Python", "FastAPI", "Snowflake", "Shapely", "SQL", "Git", "Claude Code"],
    },
    {
        role: "Warehouse Associate II",
        company: "Incora",
        location: "Tempe, AZ",
        period: "April 2022 – January 2026",
        bullets: [
            "Led daily and weekly cross-team meetings to ensure quotas were met and to surface safety concerns and opportunities for growth.",
            "Collaborated with internal IT to troubleshoot, maintain, and configure networked printers and label devices, reducing downtime for the warehouse team.",
        ],
        tags: ["Operations", "Cross-team Leadership", "IT Support"],
    },
];

export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Work <span className="text-primary"> Experience</span>
                </h2>

                <div className="space-y-8">
                    {experiences.map((exp, key) => (
                        <Reveal key={key} delay={key * 100}>
                        <div className="group gradient-border p-6 card-hover text-left">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                        <h3 className="text-xl font-semibold">{exp.role}</h3>
                                        <span className="text-sm text-muted-foreground">{exp.period}</span>
                                    </div>
                                    <p className="text-primary font-medium mb-4">
                                        {exp.company} <span className="text-muted-foreground font-normal">· {exp.location}</span>
                                    </p>

                                    <ul className="space-y-2 mb-4 list-disc list-outside pl-5">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-muted-foreground text-sm">
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="px-2 py-1 text-xs border font-medium bg-secondary text-secondary-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};
