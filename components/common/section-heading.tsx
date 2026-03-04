import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
  tone?: "default" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = false,
  className,
  tone = "default"
}: SectionHeadingProps) {
  return (
    <div className={cn(center ? "text-center" : "text-left", className)}>
      {eyebrow ? (
        <p
          className={cn(
            "text-sm font-bold uppercase tracking-[0.2em] text-saffron",
            tone === "light" && "text-saffron-highlight"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-3xl font-heading font-black leading-tight sm:text-4xl md:text-5xl uppercase tracking-tighter text-[var(--text-primary)]",
          tone === "light" && "text-[var(--text-primary)]/90"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]", tone === "light" && "text-[var(--text-secondary)]/80")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
