"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

interface InteractiveUnderlineProps {
    children: React.ReactNode;
    className?: string;
    lineColor?: string;
    pathClassName?: string;
}

export const InteractiveUnderline = ({
    children,
    className,
    lineColor,
    pathClassName,
}: InteractiveUnderlineProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const [width, setWidth] = useState(0);

    // String physics variables
    const startY = 10; // Position of the line within SVG (height is 20)
    const p0 = useRef({ x: 0, y: startY });
    const p1 = useRef({ x: 0, y: startY }); // Control point (will be center)
    const p2 = useRef({ x: 0, y: startY }); // End point

    const connected = useRef(false);
    const hasPlayed = useRef(false);

    // Update logic on resize
    useEffect(() => {
        if (!containerRef.current) return;
        const updateWidth = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                setWidth(w);
                p1.current.x = w / 2;
                p2.current.x = w;
                render(); // Force initial render with correct width
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const curveString = useCallback(() => {
        return `M${p0.current.x},${p0.current.y} Q${p1.current.x},${p1.current.y} ${p2.current.x},${p2.current.y}`;
    }, []);

    const playSound = useCallback(() => {
        // Optional: Add sound if desired, keeping it silent for now or lightweight
        // const audio = new Audio("/audio/string-pluck.mp3");
        // audio.volume = 0.1;
        // audio.play().catch(() => {});
    }, []);

    const render = useCallback(() => {
        if (pathRef.current) {
            pathRef.current.setAttribute("d", curveString());
        }
    }, [curveString]);

    useGSAP(
        () => {
            gsap.ticker.add(render);

            const container = containerRef.current;

            const handlePointerMove = (e: PointerEvent) => {
                if (!container) return;
                const rect = container.getBoundingClientRect();

                // Check if mouse is near the line vertically
                // The SVG is at the bottom.
                // Let's use coordinates relative to the SVG container logic if possible, 
                // or just track relative to the whole text container.

                // We really want the interaction when hovering the UNDERLINE, 
                // but often it's easier to pluck if we track the whole box roughly.
                // Let's rely on the SVG BoundingRect for the "pluck".

                // Map mouse Y relative to the SVG top
                // The SVG is absolute bottom-0.
                // But the mouse move is on the main container.

                const y = e.clientY - rect.top - (rect.height - 20); // adjust for SVG offset?
                // Actually simplest: relative to SVG top if we knew where SVG is.
                // Let's assume container is wrapper. SVG is at bottom.
                // p0.y is startY (10). 
                // If SVG is height 20, and at bottom.

                // Let's calculate Y relative to the SVG element specifically
                // But we attached listener to container.

                // Simpler approach: center the interaction on existing line.
                // container height include text. 
                // line is at bottom.
                const relY = e.clientY - rect.bottom + 20; // 20px from bottom is 0
                // inside SVG (height 20):
                // top of SVG is rect.bottom - 20.
                // so e.clientY - (rect.bottom - 20) = pixel inside SVG.

                const svgY = e.clientY - (rect.bottom - 20);

                const distanceFromString = Math.abs(svgY - startY);

                if (Math.abs(svgY - startY) < 20) {
                    // Close enough to engage
                    // We initiate "connected" state if we cross the line?
                    // Footer logic: "overPath = e.target === hit"
                    // We can just use proximity.
                }

                // Footer logic simplified:
                // Ideally we track if we crossed the line.

                // Only engage if we are roughly inside the SVG area
                if (svgY < -10 || svgY > 30) {
                    // Mouse too far away, release
                    connected.current = false;
                    gsap.to(p1.current, {
                        duration: 1.8,
                        y: startY,
                        ease: "elastic.out(1, 0.3)",
                    });
                    return;
                }

                // If not connected, connect
                if (!connected.current) {
                    connected.current = true;
                    hasPlayed.current = false;
                    gsap.killTweensOf(p1.current);
                }

                if (connected.current) {
                    // Move point with mouse
                    p1.current.y = svgY;

                    // Snap logic
                    if (distanceFromString > 15 && !hasPlayed.current) {
                        // Pluck!
                        playSound();
                        hasPlayed.current = true;
                        connected.current = false;
                        gsap.to(p1.current, {
                            duration: 2.5,
                            y: startY,
                            ease: "elastic.out(1.2, 0.2)",
                        });
                    }
                }
            };

            const handlePointerLeave = () => {
                connected.current = false;
                gsap.to(p1.current, {
                    duration: 2.5,
                    y: startY,
                    ease: "elastic.out(1.2, 0.2)",
                });
            };

            container?.addEventListener("pointermove", handlePointerMove);
            container?.addEventListener("pointerleave", handlePointerLeave);

            return () => {
                gsap.ticker.remove(render);
                container?.removeEventListener("pointermove", handlePointerMove);
                container?.removeEventListener("pointerleave", handlePointerLeave);
            };
        },
        { scope: containerRef, dependencies: [width] }
    );

    return (
        <div ref={containerRef} className={cn("relative inline-block cursor-pointer", className)}>
            <span className="relative z-10">{children}</span>
            <svg
                className="absolute bottom-[-20px] left-0 w-full h-[30px] overflow-visible z-0 pointer-events-none"
            >
                <path
                    ref={pathRef}
                    d={`M0,${startY} Q${width / 2},${startY} ${width},${startY}`}
                    stroke={lineColor}
                    strokeWidth={3}
                    fill="none"
                    strokeLinecap="round"
                    className={pathClassName}
                />
            </svg>
        </div>
    );
};
