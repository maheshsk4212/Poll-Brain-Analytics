import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-premium transition hover:-translate-y-1 hover:border-navyBlue/30">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-saffron/20 blur-2xl" aria-hidden="true" />
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-navyBlue via-navyBlue/80 to-indiaGreen text-sm font-semibold text-white">
        {service.title.split(" ")[0].slice(0, 1)}
      </div>
      <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
      <div className="mt-5 h-1.5 w-full rounded-full bg-slate-100">
        <div className="h-1.5 w-2/3 rounded-full bg-gradient-to-r from-saffron via-white to-indiaGreen transition group-hover:w-full" />
      </div>
    </article>
  );
}
