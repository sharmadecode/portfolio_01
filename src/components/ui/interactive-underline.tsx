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

    const startY = 10;
    const p0 = useRef({ x: 0, y: startY });
    const p1 = useRef({ x: 0, y: startY });
    const p2 = useRef({ x: 0, y: startY });

    const connected = useRef(false);
    const hasPlayed = useRef(false);

    useEffect(() => {
        if (!containerRef.current) return;
        const updateWidth = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                setWidth(w);
                p1.current.x = w / 2;
                p2.current.x = w;
                render();
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

                const y = e.clientY - rect.top - (rect.height - 20);

                const relY = e.clientY - rect.bottom + 20;

                const svgY = e.clientY - (rect.bottom - 20);

                const distanceFromString = Math.abs(svgY - startY);

                if (Math.abs(svgY - startY) < 20) {
                }

                if (svgY < -10 || svgY > 30) {
                    connected.current = false;
                    gsap.to(p1.current, {
                        duration: 1.8,
                        y: startY,
                        ease: "elastic.out(1, 0.3)",
                    });
                    return;
                }

                if (!connected.current) {
                    connected.current = true;
                    hasPlayed.current = false;
                    gsap.killTweensOf(p1.current);
                }

                if (connected.current) {
                    p1.current.y = svgY;

                    if (distanceFromString > 15 && !hasPlayed.current) {
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
