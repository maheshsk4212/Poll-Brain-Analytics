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
          <article key={service.title} className="group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? -1 : idx)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-2)] text-xs font-bold text-saffron ring-1 ring-border-subtle">
                  {idx + 1}
                </span>
                <span className="text-lg font-heading font-bold text-[var(--text-primary)]">{service.title}</span>
              </div>
              <span
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-color)] text-lg text-[var(--text-primary)] transition",
                  isOpen ? "rotate-45 bg-[var(--surface-2)]" : "rotate-0"
                )}
                aria-hidden="true"
              >
                +
              </span>
            </button>

            {isOpen ? (
              <div className="border-t border-[var(--border-color)] bg-[var(--background)] px-5 pb-5 pt-4">
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{service.description}</p>
                {service.bullets ? (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {service.bullets.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm text-[var(--text-secondary)]"
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
