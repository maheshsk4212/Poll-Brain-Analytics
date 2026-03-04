"use client";

import { motion } from "framer-motion";

export function NetworkMap() {
    // Simple SVG data visualization with glowing nodes and connecting lines
    const nodes = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: 20 + Math.random() * 60,
        y: 20 + Math.random() * 60,
        size: Math.random() > 0.8 ? 8 : 4,
        delay: Math.random() * 2
    }));

    const connections = [];
    for (let i = 0; i < 20; i++) {
        const from = nodes[Math.floor(Math.random() * nodes.length)];
        const to = nodes[Math.floor(Math.random() * nodes.length)];
        if (from.id !== to.id) {
            connections.push({ from, to });
        }
    }

    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-80">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Draw lines */}
                {connections.map((conn, i) => (
                    <motion.line
                        key={`line-${i}`}
                        x1={`${conn.from.x}%`}
                        y1={`${conn.from.y}%`}
                        x2={`${conn.to.x}%`}
                        y2={`${conn.to.y}%`}
                        stroke="rgba(255, 106, 0, 0.2)"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, delay: conn.from.delay, repeat: Infinity, repeatType: "reverse" }}
                    />
                ))}

                {/* Draw nodes */}
                {nodes.map((node) => (
                    <motion.circle
                        key={`node-${node.id}`}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r={node.size / 4}
                        fill="#FF6A00"
                        className="drop-shadow-[0_0_8px_rgba(255,106,0,0.8)]"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            delay: node.delay,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}
