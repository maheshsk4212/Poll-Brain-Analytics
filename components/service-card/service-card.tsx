"use client";

import { motion } from "framer-motion";
import type { Service } from "@/types";
import {
  BarChart3,
  Vote,
  Users,
  Megaphone,
  Globe,
  Calendar
} from "lucide-react";

type ServiceCardProps = {
  service: Service;
};

const serviceIcons: Record<string, React.ElementType> = {
  "Election Strategy & Campaign Architecture": Vote,
  "Data & Political Intelligence": BarChart3,
  "Ground Operations & Cadre Structuring": Users,
  "Media & Narrative Management": Megaphone,
  "Digital & Social Media War Room": Globe,
  "Election Day Management": Calendar
};

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = serviceIcons[service.title] ?? BarChart3;

  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,106,0,0.18)] hover:border-saffron/50">
      {/* Background glow */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-saffron/10 blur-3xl transition-all duration-500 group-hover:bg-saffron/25" aria-hidden="true" />

      {/* Icon */}
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-background border border-[var(--border-color-2)] ring-1 ring-[var(--border-color-2)] transition-all duration-300 group-hover:ring-saffron/50 group-hover:border-saffron/30 group-hover:scale-110">
        <IconComponent className="h-5 w-5 text-saffron" />
      </div>

      <h3 className="text-xl font-heading font-bold text-[var(--text-primary)] tracking-tight transition-colors group-hover:text-saffron">
        {service.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-4 sm:line-clamp-none">
        {service.description}
      </p>

      {/* Animated progress bar */}
      <div className="mt-6 h-px w-full bg-[var(--border-color-2)] relative overflow-hidden">
        <motion.div
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-saffron to-saffron-highlight"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </article>
  );
}
