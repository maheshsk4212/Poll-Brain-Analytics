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
            "text-sm font-semibold uppercase tracking-[0.2em]",
            tone === "light" ? "text-slate-200" : "text-navyBlue/80"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-2 text-2xl font-bold leading-tight sm:text-4xl md:text-5xl",
          tone === "light" ? "text-white" : "text-slate-900"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={cn("mt-4 max-w-3xl text-sm sm:text-base", tone === "light" ? "text-slate-200" : "text-slate-600")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
