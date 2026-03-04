import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 overflow-hidden border-t border-border-subtle bg-background text-[var(--text-primary)]">
      <div className="relative">
        <Image
          src="/images/hyderabad-night.jpg"
          alt="Hyderabad city skyline"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/90" />

        <div className="section-shell relative grid gap-12 py-16 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
          <div>
            <h3 className="text-xl font-semibold">{siteConfig.name}</h3>
            <p className="mt-2 max-w-sm text-sm text-[var(--text-secondary)]">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-[var(--text-secondary)]">Email: {siteConfig.email}</p>
            <p className="text-sm text-[var(--text-secondary)]">Phone: {siteConfig.phone}</p>
            <p className="text-sm text-[var(--text-secondary)]">Office: {siteConfig.office}</p>
            <div className="mt-5 h-1.5 w-36 rounded-full bg-gradient-to-r from-saffron via-white to-indiaGreen" />
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[var(--text-primary)]">Navigation</h4>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--saffron)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide text-[var(--text-primary)]">Policy</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--saffron)]">
                  Privacy & Confidentiality
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-subtle">
        <p className="section-shell py-6 text-xs text-[var(--text-muted)]">
          Copyright {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
