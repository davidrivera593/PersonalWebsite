import {useState} from "react";
import {cn} from "@/lib/utils"
import { Reveal } from "@/components/Reveal";

const skills = [
    // Languages
    {name: "Python", category: "languages"},
    {name: "JavaScript", category: "languages"},
    {name: "TypeScript", category: "languages"},
    {name: "SQL", category: "languages"},
    {name: "HTML/CSS", category: "languages"},
    {name: "Java", category: "languages"},

    // Data & Databases
    {name: "PostgreSQL", category: "data"},
    {name: "MySQL", category: "data"},
    {name: "Snowflake", category: "data"},
    {name: "Firebase", category: "data"},
    {name: "Power BI", category: "data"},

    // Frameworks & Libraries
    {name: "FastAPI", category: "frameworks"},
    {name: "React", category: "frameworks"},
    {name: "Next.js", category: "frameworks"},
    {name: "Node.js", category: "frameworks"},
    {name: "Flask", category: "frameworks"},
    {name: "Tailwind CSS", category: "frameworks"},
    {name: "Express", category: "frameworks"},
    {name: "Material UI", category: "frameworks"},

    // Cloud & Tools
    {name: "Azure", category: "cloud"},
    {name: "AWS", category: "cloud"},
    {name: "Git", category: "cloud"},
    {name: "GitHub", category: "cloud"},
    {name: "VS Code", category: "cloud"},

    // AI Development
    {name: "Claude (Anthropic API)", category: "ai"},
    {name: "LLM Agents", category: "ai"},
    {name: "Agentic Workflows", category: "ai"},
    {name: "MCP", category: "ai"},
    {name: "Prompt Engineering", category: "ai"},
];

const categories = [
    {id: "all", label: "All"},
    {id: "languages", label: "Languages"},
    {id: "data", label: "Data & Databases"},
    {id: "frameworks", label: "Frameworks"},
    {id: "cloud", label: "Cloud & Tools"},
    {id: "ai", label: "AI Development"},
];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter(
        skill => activeCategory === "all" || skill.category === activeCategory
    );

    return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key}
                        onClick = {() => setActiveCategory(category.id)}
                        className={cn(
                            "px-5 py-2 transition-colors duration-300 capitalize",
                            activeCategory === category.id ? "bg-primary text-primary-foreground" :
                                                          "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}
                    >
                        {category.label}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <Reveal key={`${activeCategory}-${skill.name}`} delay={key * 40}>
                        <div className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
)};
