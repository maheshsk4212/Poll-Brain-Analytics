import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "duration-300 hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-saffron text-white shadow-lg shadow-saffron/20 hover:bg-saffron-highlight focus-visible:ring-saffron"
          : "border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] hover:border-saffron/50 hover:text-saffron focus-visible:ring-saffron",
        className
      )}
    >
      {children}
    </Link>
  );
}
