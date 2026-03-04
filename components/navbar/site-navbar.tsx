"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/theme-toggle";

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
  // The navbar uses a glass effect upon scroll
  const isSolid = scrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        isSolid ? "bg-[var(--nav-bg)] shadow-md backdrop-blur-xl border-b border-[var(--nav-border)]" : "bg-transparent"
      )}
    >
      <nav className="section-shell flex h-24 items-center justify-between" aria-label="Main navigation">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 px-1 py-2"
        >
          <span className="inline-block h-8 w-1.5 rounded-sm bg-saffron shadow-[0_0_12px_rgba(255,106,0,0.6)]" aria-hidden="true" />
          <span className="text-xl font-bold font-heading tracking-tight text-white uppercase transition-colors duration-300">
            Poll Brain <span className="text-saffron">Analytics</span>
          </span>
        </Link>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md border border-[var(--border-color-2)] bg-[var(--surface)] px-3 py-2 text-sm text-[var(--text-primary)] shadow-sm"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            Menu
          </button>
        </div>

        <div className={cn(
          "hidden items-center gap-1 rounded-sm border p-1.5 transition-all duration-300 lg:flex",
          isSolid
            ? "border-white/10 bg-surface/50 shadow-sm backdrop-blur-md"
            : "border-white/20 bg-black/10 shadow-xl backdrop-blur-xl"
        )}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-300",
                  isActive
                    ? "bg-[var(--text-primary)] text-[var(--background)] shadow-lg"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-sm bg-saffron px-5 py-2 text-sm font-bold uppercase tracking-wider text-white shadow-lg transition-all duration-300 hover:bg-saffron-highlight hover:shadow-saffron/20 active:scale-95"
          >
            Consultation
          </Link>
          <ThemeToggle />
        </div>
      </nav>

      <div id="mobile-menu" className={cn(
        "absolute inset-x-0 top-full overflow-hidden border-t border-border-subtle bg-background shadow-2xl transition-all duration-300 ease-in-out lg:hidden",
        open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="section-shell flex flex-col gap-2 py-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-sm px-4 py-3 text-base uppercase tracking-wider font-bold transition-all duration-200",
                pathname === item.href
                  ? "bg-[var(--text-primary)] text-[var(--background)] shadow-lg"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)]"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm bg-saffron px-4 py-4 text-center text-base font-bold uppercase tracking-wider text-white shadow-lg transition-all active:scale-95"
          >
            Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
