import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Wraps content so it fades + slides up the first time it scrolls into view.
 * Respects prefers-reduced-motion (falls back to no transition).
 *
 * Props:
 *  - delay: ms of transition-delay, useful for staggering siblings (e.g. index * 80)
 *  - className: passthrough classes for the wrapper
 */
export const Reveal = ({ children, delay = 0, className }) => {
    const ref = useRef(null);
    const [shown, setShown] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={cn(
                "transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0",
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
                className
            )}
        >
            {children}
        </div>
    );
};
