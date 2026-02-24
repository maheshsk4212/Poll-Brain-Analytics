"use client";

import { motion } from "framer-motion";
import type { ProcessStep } from "@/types";

type ProcessFlowProps = {
  steps: ProcessStep[];
};

export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <div className="relative mt-10">
      <div className="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-saffron via-navyBlue to-indiaGreen md:block" />
      <ol className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => (
          <motion.li
            key={step.title}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-premium"
          >
            <div className="absolute -right-7 -top-7 h-16 w-16 rounded-full bg-navyBlue/10 blur-2xl" aria-hidden="true" />
            <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-navyBlue text-sm font-semibold text-white transition group-hover:bg-saffron group-hover:text-slate-900">
              {index + 1}
            </span>
            <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.details}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
