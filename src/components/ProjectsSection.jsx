import { ArrowRight, ExternalLink, Github} from "lucide-react";

const projects = [
    {
        id: 1,
        title: "ASU Ticketing System",
        description: "Ticketing system for ASU Computer Science students and faculty.", 
        image: "/projects/project1.png",
        tags: ["React", "Javascript", "Node.js", "TailwindCSS", "PostgreSQL"],
        demoUrl: "#",
        githubUrl: "https://github.com/Swimming7birdz/ticketing_system",
    }, 
    {
        id: 2, 
        title: 'Polyview (Polymarket MCP Chatbot)',
        description: "Claude Builder Club Hackathon project that analyzes Polymarket data in real-time using Anthropic AI that can create charts and recommend articles based on user input.",
        image: "/projects/project2.png",
        tags: ["React",  "Typescript","Node.js", "Express", "TailwindCSS"],
        demoUrl: "https://youtu.be/edB_MoEx7mA?si=sYv0ouqiGLuXwLLt",
        githubUrl: "https://github.com/Americana808/PolyView",
    }
];

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
                {projects.map((projects, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                        <div className="h-48 overflow-hidden">
                            <img src={projects.image} 
                            alt={projects.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {projects.tags.map((tag) => (
                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                        <p className="text-muted-foreground text-sm mb-4">{projects.description}</p>
                        <div className="flex justify-between items-center"> 
                                <div className="flex space-x-3">
                                    <a href={projects.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20}/>
                                    </a>
                                    <a a href={projects.githubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
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