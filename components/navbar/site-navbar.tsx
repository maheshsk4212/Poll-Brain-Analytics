"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled ? "bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-1 py-2"
        >
          <span className="inline-block h-8 w-1 rounded bg-saffron" aria-hidden="true" />
          <span className="text-lg font-semibold tracking-tight text-slate-900">Poll Brain Analytics</span>
        </Link>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 shadow-sm lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        <div className="hidden items-center gap-2 rounded-full border border-slate-300/70 bg-transparent p-2 lg:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-100/70 hover:text-slate-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-[#f08a1d]"
          >
            Schedule Consultation
          </Link>
        </div>
      </nav>

      <div id="mobile-menu" className={cn("border-t border-slate-200 bg-white lg:hidden", open ? "block" : "hidden")}>
        <div className="section-shell flex flex-col gap-2 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-2 py-2 text-sm text-slate-700 transition hover:bg-slate-100",
                pathname === item.href ? "bg-slate-100 text-slate-900" : ""
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-saffron px-4 py-2 text-center text-sm font-semibold text-slate-900"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
