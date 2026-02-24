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

  const isHomePage = pathname === "/";
  // Always use solid styling for premium legibility and consistency, 
  // as the transparent-to-solid transition was causing visibility issues on light hero slides.
  const isSolid = true;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isSolid ? "bg-white/80 shadow-sm backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <nav className="section-shell flex h-20 items-center justify-between" aria-label="Main navigation">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-1 py-2"
        >
          <span className="inline-block h-8 w-1.5 rounded-full bg-saffron shadow-[0_0_12px_rgba(245,158,11,0.6)]" aria-hidden="true" />
          <span className={cn(
            "text-xl font-bold tracking-tight transition-colors duration-300",
            isSolid ? "text-slate-900" : "text-white drop-shadow-md"
          )}>
            Poll Brain <span className="text-saffron">Analytics</span>
          </span>
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

        <div className={cn(
          "hidden items-center gap-1 rounded-full border p-1.5 transition-all duration-300 lg:flex",
          isSolid
            ? "border-slate-200 bg-white/50 shadow-sm backdrop-blur-md"
            : "border-white/20 bg-white/10 shadow-xl backdrop-blur-xl"
        )}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition-all duration-300",
                  isActive
                    ? (isSolid ? "bg-slate-900 text-white" : "bg-white text-slate-900 shadow-lg")
                    : (isSolid
                      ? "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900"
                      : "text-white/90 hover:bg-white/20 hover:text-white"
                    )
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-full bg-saffron px-5 py-2 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#f08a1d] hover:shadow-saffron/20 active:scale-95"
          >
            Schedule Consultation
          </Link>
        </div>
      </nav>

      <div id="mobile-menu" className={cn(
        "absolute inset-x-0 top-full overflow-hidden border-t border-slate-200 bg-white shadow-2xl transition-all duration-300 ease-in-out lg:hidden",
        open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="section-shell flex flex-col gap-2 py-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-xl px-4 py-3 text-base capitalize transition-all duration-200",
                pathname === item.href
                  ? "bg-slate-900 font-bold text-white"
                  : "font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-xl bg-saffron px-4 py-4 text-center text-base font-bold text-slate-950 shadow-lg shadow-saffron/20 transition-all active:scale-95"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
