"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
    {
        src: "/images/slider-parliament.png",
        caption: "Political Power Architecture",
        tag: "Strategic Vision"
    },
    {
        src: "/images/slider-data-intelligence.png",
        caption: "Data Intelligence Hub",
        tag: "Analytics Engine"
    },
    {
        src: "/images/slider-ground-map.png",
        caption: "Ground Operations Coverage",
        tag: "Constituency Mapping"
    },
    {
        src: "/images/slider-war-room.png",
        caption: "Digital War Room",
        tag: "Real-time Monitoring"
    }
];

export function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[420px] lg:h-[560px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
            {/* Glow border effect */}
            <div className="absolute inset-0 z-10 rounded-3xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            <div className="absolute -inset-0.5 z-0 rounded-3xl bg-gradient-to-br from-saffron/20 via-transparent to-blue-500/20 blur-sm opacity-60" />

            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Image
                        src={slides[current].src}
                        alt={slides[current].caption}
                        fill
                        className="object-cover"
                        priority={current === 0}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Dark overlay gradient - always dark for white text visibility */}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
            </AnimatePresence>

            {/* Caption overlay */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`caption-${current}`}
                    className="absolute bottom-0 left-0 right-0 z-20 p-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <span className="inline-block rounded-sm bg-saffron/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-background mb-2">
                        {slides[current].tag}
                    </span>
                    <p className="text-sm font-semibold text-white drop-shadow-md">{slides[current].caption}</p>
                </motion.div>
            </AnimatePresence>

            {/* Dot indicators */}
            <div className="absolute bottom-5 right-5 z-20 flex gap-1.5">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-saffron" : "w-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            {/* Animated scan line */}
            <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-saffron/60 to-transparent z-20 pointer-events-none"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
        </div>
    );
}
