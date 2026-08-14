import { useEffect, useRef } from "react";

/**
 * Full-viewport reactive dot grid rendered on a single canvas.
 * Dots sit faint by default and brighten + grow toward the pointer, tinted
 * with the theme's --primary. Replaces the old 200-div star field.
 *
 * Draws a static frame immediately, then only repaints (coalesced into one
 * rAF) while the pointer moves — no perpetual animation loop. Reads colours
 * live from CSS variables, so it follows light/dark automatically, and falls
 * back to a plain static grid when the user prefers reduced motion.
 */
export const GridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const SPACING = 26;   // px between dots
        const RADIUS = 130;   // px cursor influence radius
        const DPR = Math.min(window.devicePixelRatio || 1, 2);

        let width = 0, height = 0, raf = 0;
        const pointer = { x: -9999, y: -9999, inside: false };

        let primary = "221 83% 53%";
        let foreground = "222 47% 11%";
        const readColors = () => {
            const s = getComputedStyle(document.documentElement);
            primary = s.getPropertyValue("--primary").trim() || primary;
            foreground = s.getPropertyValue("--foreground").trim() || foreground;
        };

        const smoothstep = (t) => t * t * (3 - 2 * t);

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            const { x: mx, y: my, inside } = pointer;
            for (let y = SPACING; y < height; y += SPACING) {
                for (let x = SPACING; x < width; x += SPACING) {
                    let t = 0;
                    if (inside) {
                        const d = Math.hypot(x - mx, y - my);
                        if (d < RADIUS) t = smoothstep(1 - d / RADIUS);
                    }
                    const opacity = 0.1 + t * 0.8;
                    const size = 1 + t * 1.8;
                    const color = t > 0.02 ? primary : foreground;
                    ctx.beginPath();
                    ctx.fillStyle = `hsl(${color} / ${opacity})`;
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        };

        const scheduleDraw = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => { raf = 0; draw(); });
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = Math.round(width * DPR);
            canvas.height = Math.round(height * DPR);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
            readColors();
            draw();
        };

        const onPointerMove = (e) => {
            pointer.x = e.clientX;
            pointer.y = e.clientY;
            pointer.inside = true;
            scheduleDraw();
        };
        const onPointerLeave = () => {
            pointer.inside = false;
            pointer.x = -9999;
            pointer.y = -9999;
            scheduleDraw();
        };

        resize(); // paints the static grid immediately
        window.addEventListener("resize", resize);
        if (!reduce) {
            window.addEventListener("pointermove", onPointerMove);
            window.addEventListener("pointerleave", onPointerLeave);
        }

        // Repaint on theme toggle (the `dark` class flips on <html>).
        const observer = new MutationObserver(() => { readColors(); draw(); });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("resize", resize);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
            observer.disconnect();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    );
};
