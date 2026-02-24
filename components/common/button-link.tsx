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
          ? "bg-navyBlue text-white shadow-lg shadow-navyBlue/20 hover:bg-navyBlue/90 focus-visible:ring-navyBlue"
          : "border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-slate-400",
        className
      )}
    >
      {children}
    </Link>
  );
}
