"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const VIDEO_SRC = "/projects/demo.mp4";

const BharatKrishiDemo = () => {
    return (
        <main
            className="min-h-screen flex flex-col items-center justify-center px-2 md:px-4 py-4 bg-background text-foreground animation-delay-0 animate-in fade-in zoom-in duration-500"
            role="main"
            aria-label="BharatKrishi project demo page"
        >
            <div className="w-full max-w-6xl space-y-8">
                {/* Header Section */}
                <div className="flex flex-col gap-4 text-center items-center">

                    <nav aria-label="Back navigation" className="self-start">
                        <Link href="/">
                            <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary/80">
                                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                                Back to Portfolio
                            </Button>
                        </Link>
                    </nav>

                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-700 dark:from-emerald-400 dark:to-green-600">
                        BharatKrishi Demo
                    </h1>

                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit mx-auto" role="status">
                        <span className="relative flex h-2 w-2" aria-hidden="true">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            SIH 2025 Finalist
                        </span>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Offline On-Device Crop Disease Detection using MobileViT &amp; Transformer models.
                    </p>
                </div>

                {/* Video Container */}
                <div className="relative w-full flex justify-center">
                    <video
                        className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label="BharatKrishi application demo video showing crop disease detection"
                    >
                        <source src={VIDEO_SRC} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Tech Stack */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4" role="list" aria-label="Technologies used">
                    {["Kotlin", "TensorFlow Lite", "MobileViT", "Offline First"].map((tech) => (
                        <div key={tech} role="listitem" className="p-3 bg-muted/30 border border-border/50 rounded-lg text-center text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default BharatKrishiDemo;
