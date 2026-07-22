import { ArrowRight, ExternalLink, Github, Lock } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const projects = [
    {
        id: 1,
        title: "ASU Ticketing System",
        description: "Full-stack ticketing system for managing support requests between ASU students, faculty, and sponsors. Built with a React + Material UI frontend and a Node.js/Express + Sequelize backend with role-based access control, developed in two-week Agile/Scrum sprints.",
        image: "/projects/project1.png",
        tags: ["React", "JavaScript", "Node.js", "Express", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Swimming7birdz/ticketing_system",
    },
    {
        id: 2,
        title: "Polyview (Polymarket AI Agent)",
        description: "Claude Builder Club Hackathon project delivering a live prediction-market analytics dashboard in 24 hours. An MCP-powered AI chatbot contextualizes real-time Polymarket data and renders interactive volume and probability charts on demand.",
        image: "/projects/project2.png",
        tags: ["React", "TypeScript", "Node.js", "Express", "MCP"],
        demoUrl: "https://youtu.be/edB_MoEx7mA?si=sYv0ouqiGLuXwLLt",
        githubUrl: "https://github.com/Americana808/PolyView",
    },
    {
        id: 3,
        title: "Goofy Ravers",
        description: "Claude Builder Club Hackathon (Spring 2026) project built with the Anthropic API. A collaborative, AI-powered web app created rapidly with a small team.",
        image: "/projects/placeholder.svg",
        tags: ["JavaScript", "React", "Anthropic AI"],
        demoUrl: "#",
        githubUrl: "https://github.com/davidrivera593/goofy-ravers",
    },
    {
        id: 4,
        title: "Maritime Cargo-Risk Monitoring",
        description: "Real-time cargo-risk monitoring across 4 global chokepoints, integrating live AIS vessel data with a ~9M-row shipment dataset to classify hundreds of vessels and shipments each cycle. Geofencing was migrated from spatial SQL to Python/Shapely so operators can define risk zones anywhere without code changes.",
        image: "/projects/placeholder.svg",
        tags: ["Python", "Snowflake", "Shapely", "MarineTraffic API"],
        // Private company work (APL Logistics) — case study only, no public code/demo links.
        demoUrl: "#",
        githubUrl: "#",
        privateNote: "Private company project",
    },
];

const isRealLink = (url) => Boolean(url) && url !== "#";

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Recent projects that I am proud to display. Each project highlights a different
                skillset that I have with careful attention to detail, performance, and user
                experience.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <Reveal key={key} delay={key * 80} className="h-full">
                    <div className="group h-full bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    {isRealLink(project.demoUrl) && (
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <ExternalLink size={20}/>
                                        </a>
                                    )}
                                    {isRealLink(project.githubUrl) && (
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            <Github size={20}/>
                                        </a>
                                    )}
                                    {project.privateNote && (
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Lock size={14}/> {project.privateNote}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://github.com/davidrivera593">
                    Check My Github <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>
};
