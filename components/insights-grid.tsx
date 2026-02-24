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
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              active === category
                ? "border-navyBlue bg-navyBlue text-white"
                : "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-premium">
            <Image src={post.image} alt={post.title} width={1600} height={900} className="h-48 w-full object-cover" />
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-navyBlue">{post.category}</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
              <p className="mt-4 text-xs text-slate-500">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
