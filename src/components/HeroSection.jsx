import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <img
                    src="/headshot-placeholder.svg"
                    alt="David Rivera"
                    className="h-32 w-32 rounded-full object-cover mx-auto ring-4 ring-primary/40 shadow-lg opacity-0 animate-fade-in"
                />
                <h1 className = "text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hello there, I am </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> David</span>
                    <span className ="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Rivera</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Computer Science student at Arizona State University and a Data Science &amp;
                    Business Intelligence intern, building full-stack and AI-powered applications —
                    from real-time analytics platforms to agentic workflows.
                </p>
                <div className="opacity-0 pt-4 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>

            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>
    </section>
    );
};