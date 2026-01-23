"use client";
import React, { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SiDiscord } from "react-icons/si";
import Link from "next/link";

interface FooterStringProps {
  soundUrl?: string;
}

const FooterString = ({
  soundUrl = "/audio/string-pluck.mp3",
}: FooterStringProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const hitRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<SVGGElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startY = 5;
  const p0 = useRef({ x: 0, y: startY });
  const p1 = useRef({ x: 400, y: startY });
  const p2 = useRef({ x: 800, y: startY });
  const connected = useRef(false);
  const hasPlayed = useRef(false);

  const curveString = useCallback(() => {
    return `M${p0.current.x},${p0.current.y} Q${p1.current.x},${p1.current.y} ${p2.current.x},${p2.current.y}`;
  }, []);

  const playSound = useCallback(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(soundUrl);
      audioRef.current.volume = 0.1;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => { });
  }, [soundUrl]);

  const render = useCallback(() => {
    if (pathRef.current) {
      pathRef.current.setAttribute("d", curveString());
    }
    if (hitRef.current) {
      hitRef.current.setAttribute("d", curveString());
    }
  }, [curveString]);

  useGSAP(
    () => {
      gsap.ticker.add(render);

      const container = containerRef.current;
      const hit = hitRef.current;

      const handlePointerMove = (e: PointerEvent) => {
        if (!container) return;
        const svg = container.ownerSVGElement;
        if (!svg) return;

        const rect = svg.getBoundingClientRect();
        const y = (e.clientY - rect.top) * (30 / rect.height);

        const overPath = e.target === hit;
        const distanceFromString = Math.abs(y - startY);

        if (!connected.current && overPath) {
          connected.current = true;
          hasPlayed.current = false;
          gsap.killTweensOf(p1.current);
        }

        if (connected.current) {
          p1.current.y = y * 3 - (p0.current.y + p2.current.y);

          if (distanceFromString > 200 && !hasPlayed.current) {
            const displacement = Math.abs(p1.current.y - startY);
            if (displacement > 10) {
              playSound();
              hasPlayed.current = true;
            }
            connected.current = false;
            gsap.to(p1.current, {
              duration: 1.8,
              y: startY,
              ease: "elastic.out(1.5, 0.15)",
            });
          }
        }
      };

      const handlePointerLeave = () => {
        if (connected.current && !hasPlayed.current) {
          const displacement = Math.abs(p1.current.y - startY);
          if (displacement > 10) {
            playSound();
            hasPlayed.current = true;
          }
        }

        connected.current = false;
        gsap.to(p1.current, {
          duration: 1.8,
          y: startY,
          ease: "elastic.out(1.5, 0.15)",
        });
      };

      container?.addEventListener("pointermove", handlePointerMove);
      container?.addEventListener("pointerleave", handlePointerLeave);

      render();

      return () => {
        gsap.ticker.remove(render);
        container?.removeEventListener("pointermove", handlePointerMove);
        container?.removeEventListener("pointerleave", handlePointerLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <svg viewBox="0 0 800 10" className="w-full h-[10px] overflow-visible">
      <defs>
        <linearGradient
          id="footer-string-grad"
          x1="0"
          y1="0"
          x2="800"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="rgba(148, 163, 184, 0.3)" />
          <stop offset="0.5" stopColor="rgba(148, 163, 184, 0.8)" />
          <stop offset="1" stopColor="rgba(148, 163, 184, 0.3)" />
        </linearGradient>
      </defs>
      <g ref={containerRef}>
        <path
          ref={pathRef}
          d={`M0,${startY} Q400,${startY} 800,${startY}`}
          stroke="url(#footer-string-grad)"
          strokeWidth={1}
          strokeDasharray="6 6"
          fill="none"
          className="transition-colors"
        />
        <path
          ref={hitRef}
          d={`M0,${startY} Q400,${startY} 800,${startY}`}
          stroke="transparent"
          strokeWidth="20"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default function Footer() {
  return (
    <div className="flex justify-center">
      <footer className="pb-12 pt-5 flex flex-col justify-between relative w-[95vw] sm:w-[50vw]">
        <div className="absolute top-0 left-0 right-0">
          <FooterString soundUrl="/audio/string-pluck.mp3" />
        </div>
        <img
          src="/logo/leaf.svg"
          alt="Footer decorative leaf"
          className="w-32 sm:mask-r-from-90% absolute right-0 max-sm:blur-[2px] max-sm:hidden dark:hidden block"
          style={{ transform: "rotateX(180deg)" }}
        />

        {/* Discord Section - Compact & Animated */}
        <div className="mt-6 mb-8 flex justify-center">
          <Link
            href="https://discord.gg/83MQcgxy"
            target="_blank"
            className="group relative inline-flex items-center gap-3 px-4 py-2.5 rounded-xl
              bg-gradient-to-r from-[#5865F2]/10 via-[#7289DA]/10 to-[#5865F2]/10
              border border-[#5865F2]/30 hover:border-[#5865F2]/60
              hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]
              transition-all duration-300"
          >
            {/* Discord Icon */}
            <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#5865F2] to-[#7289DA]
              group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <SiDiscord className="w-4 h-4 text-white" />
            </div>

            {/* Animated Text */}
            <span className="relative text-sm font-medium h-5 overflow-hidden">
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                Want to talk?
              </span>
              <span className="absolute top-0 left-0 text-[#5865F2] font-semibold 
                translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                Let's connect! ✨
              </span>
            </span>

            {/* Arrow */}
            <svg
              className="w-4 h-4 text-[#5865F2] transition-transform duration-300
                group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Footer Text */}
        <div className="flex items-start">
          <div className="flex flex-col items-start">
            <h1 className="text-2xl">Aditya Sharma</h1>
            <h2 className="text-muted-foreground">
              Building <span className="underline">app frontends</span>,{" "}
              <span className="underline">Spring-based backends</span> &{" "}
              <span className="italic">ML models</span> ✧.
            </h2>
          </div>
        </div>

        <div className="text-right text-[15px] text-muted-foreground mt-8">
          <div>Made with ♡ using Next.js</div>
          <div className="text-xs text-muted-foreground">
            © 2026 Aditya Sharma
          </div>
        </div>
      </footer>
    </div>
  );
}

