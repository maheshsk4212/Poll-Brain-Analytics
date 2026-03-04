import { cn } from "@/lib/utils";

type MetricCardProps = {
  title: string;
  value: string;
  className?: string;
};

export function MetricCard({ title, value, className }: MetricCardProps) {
  return (
    <div className={cn("rounded-2xl border border-[var(--border-color-2)] bg-[var(--card-bg)] p-4 shadow-[var(--shadow-card)]", className)}>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)]">{title}</p>
      <p className="mt-2 text-xl font-heading font-black text-[var(--text-primary)]">{value}</p>
    </div>
  );
}
