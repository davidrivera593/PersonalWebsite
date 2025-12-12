import {useState} from "react";
import {cn} from "@/lib/utils"

const skills = [
    //Languages
    {name: "HTML", category:"languages"},
    {name: "CSS", category: "languages"},
    {name: "Javascript",  category: "languages"},
    {name: "Typescript",  category: "languages"},
    {name: "Python", category: "languages"},
    {name: "R", category: "languages"},

    //Frameworks
    {name: "React",  category: "frameworks"},
    {name: "Next.js", category: "frameworks"},
    {name: "Flask", category: "frameworks"},

    //Backend
    {name: "Node.js", category: "backend"},

    //Databases
    {name:"PostgresSQL", category: "database"},
    {name:"MySQL", category: "database"},

    // Tools/Workflow
    {name: "Tailwind", category: "tools"},
    {name: "Bootstrap", category:"tools"},
    {name: "Git", category:"tools"},
    {name: "Scrum", category:"tools"},
    {name: "Agile", category:"tools"},
    {name: "VS Code", category: "tools"}
];

const categories = ["all", "languages", "database", "frameworks", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

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
                        onClick = {() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : 
                                                          "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div 
                        key={key} 
                        className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
)};