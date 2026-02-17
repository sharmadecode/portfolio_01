"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// This points to a file in your project's `public/projects` folder.
const VIDEO_SRC = "/projects/demo.mp4";


const BharatKrishiDemo = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-background text-foreground animation-delay-0 animate-in fade-in zoom-in duration-500">
            <div className="w-full max-w-4xl space-y-8">
                {/* Header Section */}
                <div className="flex flex-col gap-4 text-center items-center">

                    <Link href="/" className="self-start">
                        <Button variant="ghost" className="gap-2 pl-0 hover:bg-transparent hover:text-primary/80">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Portfolio
                        </Button>
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-green-700 dark:from-emerald-400 dark:to-green-600">
                        Bharat Krishi Demo
                    </h1>

                    <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit mx-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            SIH 2025 Finalist
                        </span>
                    </div>

                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Offline On-Device Crop Disease Detection using MobileViT & Transformer models.
                    </p>
                </div>

                {/* Video Container - Aspect Ratio 16:9 */}
                <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-border/50 bg-card">
                    <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                    >
                        <source src={VIDEO_SRC} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>



                {/* Tech Stack / Info */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                    {["Kotlin", "TensorFlow Lite", "MobileViT", "Offline First"].map((tech) => (
                        <div key={tech} className="p-3 bg-muted/30 border border-border/50 rounded-lg text-center text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default BharatKrishiDemo;
