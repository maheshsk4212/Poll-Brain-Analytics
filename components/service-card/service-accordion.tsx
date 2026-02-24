"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServiceAccordionProps = {
  services: Service[];
};

export function ServiceAccordion({ services }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {services.map((service, idx) => {
        const isOpen = openIndex === idx;

        return (
          <article key={service.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-premium">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-navyBlue text-xs font-semibold text-white">
                  {idx + 1}
                </span>
                <span className="text-lg font-semibold text-slate-900">{service.title}</span>
              </div>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 text-lg text-navyBlue transition",
                  isOpen ? "rotate-45 bg-slate-100" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {isOpen ? (
              <div className="border-t border-slate-200 bg-slate-50/70 px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-slate-700">{service.description}</p>
                {service.bullets ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
