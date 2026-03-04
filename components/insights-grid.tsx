"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { insightCategories, insightPosts } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function InsightsGrid() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") {
      return insightPosts;
    }

    return insightPosts.filter((post) => post.category === active);
  }, [active]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {insightCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-sm border px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200",
              active === category
                ? "border-saffron bg-saffron text-white shadow-md"
                : "border-[var(--card-border)] bg-[var(--card-bg)] text-[var(--text-secondary)] hover:border-saffron/50 hover:text-saffron"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.title} className="group overflow-hidden rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40">
            <Image src={post.image} alt={post.title} width={1600} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-saffron">{post.category}</p>
              <h3 className="mt-3 text-lg font-heading font-bold tracking-tight text-[var(--text-primary)]">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{post.excerpt}</p>
              <p className="mt-4 text-xs text-[var(--text-muted)]">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
