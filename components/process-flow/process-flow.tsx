"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types";
import {
  Search,
  Lightbulb,
  MessageSquare,
  Zap,
  BarChart2,
  Trophy
} from "lucide-react";

type ProcessFlowProps = {
  steps: ProcessStep[];
};

const stepIcons = [Search, Lightbulb, MessageSquare, Zap, BarChart2, Trophy];
const stepColors = ["#FF6A00", "#0A3D91", "#FF8C42", "#138808", "#0A3D91", "#FF6A00"];

export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="relative mt-10">
      {/* Connector line */}
      <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-saffron/0 via-saffron/40 to-saffron/0 md:block" />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => {
          const Icon = stepIcons[index] ?? Search;
          const color = stepColors[index];
          return (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface p-5 shadow-xl hover:border-saffron/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Background pulse on hover */}
              <div
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-400"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />

              {/* Step number badge */}
              <div className="absolute top-3 right-3 text-[10px] font-bold text-[var(--text-primary)]/20 tracking-widest">
                0{index + 1}
              </div>

              {/* Icon */}
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
              >
                <Icon className="h-5 w-5" style={{ color }} />
              </div>

              <h3 className="text-base font-heading font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-saffron transition-colors">
                {step.title}
              </h3>
              <p className="mt-2 text-xs text-[var(--text-secondary)] leading-relaxed">{step.details}</p>

              {/* Bottom accent */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + index * 0.07 }}
              />
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
