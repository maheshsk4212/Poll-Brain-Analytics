import { cn } from "@/lib/utils";

type MetricCardProps = {
  title: string;
  value: string;
  className?: string;
};

export function MetricCard({ title, value, className }: MetricCardProps) {
  return (
    <div className={cn("rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur", className)}>
      <p className="text-xs uppercase tracking-[0.2em] text-slate-200">{title}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
