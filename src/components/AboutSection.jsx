import { Code, Database, Bot } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Full-Stack &amp; Data-Focused Software Engineer</h3>
                    <p className="text-muted-foreground">
                        I'm a Computer Science student at Arizona State University (Dean's List, graduating
                        May 2026) who enjoys building software end-to-end — from responsive React frontends
                        to data pipelines and APIs that turn messy data into something useful.
                    </p>
                    <p className="text-muted-foreground">
                        Most recently, as a Data Science &amp; Business Intelligence intern at APL Logistics,
                        I built real-time analytics on millions of rows of shipment data and shipped features
                        through a disciplined Git workflow using modern AI-assisted, agentic development tools.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Get In Touch
                        </a>

                        <a href="/resume.pdf" download="David_Rivera_Resume.pdf" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download Resume
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Full-Stack Development</h4>
                                <p className="text-muted-foreground">
                                    Building responsive web applications end-to-end with React,
                                    Node.js, and modern frameworks.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Database className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Data &amp; Business Intelligence</h4>
                                <p className="text-muted-foreground">
                                    Turning large datasets into real-time insights with Python, SQL,
                                    Snowflake, and Power BI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Bot className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">AI &amp; Agentic Workflows</h4>
                                <p className="text-muted-foreground">
                                    Developing AI-powered features and agents using the Claude API,
                                    MCP, and prompt engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};
