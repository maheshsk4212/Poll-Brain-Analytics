"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
    { label: "Campaigns Managed", value: 120, suffix: "+", color: "#FF6A00" },
    { label: "States Covered", value: 18, suffix: "+", color: "#138808" },
    { label: "Voter Data Points", value: 5, suffix: "Cr+", color: "#0A3D91" },
    { label: "Win Rate", value: 72, suffix: "%", color: "#FF6A00" }
];

const barData = [
    { label: "Strategy", value: 95 },
    { label: "Data Intel", value: 88 },
    { label: "Ground Ops", value: 82 },
    { label: "Media", value: 90 },
    { label: "Digital", value: 85 }
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        const duration = 1800;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [inView, target]);

    return (
        <span ref={ref} className="tabular-nums">
            {count}
            {suffix}
        </span>
    );
}

export function StatsInfographic() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <div ref={ref} className="w-full">
            {/* KPI Tiles */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-8">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative overflow-hidden rounded-2xl border border-[var(--border-color-2)] bg-[var(--card-bg)] p-4 text-center shadow-md backdrop-blur-sm hover:border-saffron/40 transition-all duration-300 group"
                    >
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                            style={{ background: `radial-gradient(circle at 50% 50%, ${stat.color}, transparent 70%)` }}
                        />
                        <p className="text-2xl sm:text-3xl font-heading font-black" style={{ color: stat.color }}>
                            <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-1 text-xs text-[var(--text-secondary)] font-medium">{stat.label}</p>
                        {/* Animated bottom bar */}
                        <motion.div
                            className="absolute bottom-0 left-0 h-0.5 rounded-full"
                            style={{ backgroundColor: stat.color }}
                            initial={{ width: "0%" }}
                            animate={inView ? { width: "100%" } : {}}
                            transition={{ duration: 1, delay: 0.4 + i * 0.1 }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Horizontal Bar Chart */}
            <div className="rounded-2xl border border-[var(--border-color-2)] bg-[var(--card-bg)] p-5 shadow-lg backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron mb-4">
                    Service Capability Index
                </p>
                <div className="space-y-3">
                    {barData.map((bar, i) => (
                        <div key={bar.label}>
                            <div className="flex justify-between text-xs text-[var(--text-secondary)] mb-1">
                                <span>{bar.label}</span>
                                <span className="font-bold text-[var(--text-primary)]">{bar.value}%</span>
                            </div>
                            <div className="h-2 w-full rounded-full bg-[var(--border-color-2)] overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        background: `linear-gradient(90deg, #FF6A00, ${i % 2 === 0 ? "#FF8C42" : "#0A3D91"})`
                                    }}
                                    initial={{ width: "0%" }}
                                    animate={inView ? { width: `${bar.value}%` } : {}}
                                    transition={{ duration: 1.2, delay: 0.2 + i * 0.12, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
