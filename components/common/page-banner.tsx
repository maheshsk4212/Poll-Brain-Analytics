import Image from "next/image";
import { ButtonLink } from "@/components/common/button-link";

type PageBannerProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageBanner({
  eyebrow,
  title,
  description,
  image,
  ctaLabel = "Schedule Consultation",
  ctaHref = "/contact"
}: PageBannerProps) {
  return (
    <section className="section-shell mt-10">
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 shadow-premium">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-navyBlue/90 to-slate-950/70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(255,153,51,0.28),transparent_38%)]" />

        <div className="grid gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">{description}</p>
            <div className="mt-8">
              <ButtonLink href={ctaHref} className="bg-saffron text-slate-950 hover:bg-[#f08a1d] focus-visible:ring-saffron">
                {ctaLabel}
              </ButtonLink>
            </div>
          </div>

          <div className="hidden md:flex md:items-end md:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/25 bg-white/10 p-5 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-200">Strategic Positioning</p>
              <p className="mt-3 text-lg font-semibold text-white">Confidential | Disciplined | Data-Driven</p>
              <div className="mt-4 h-1.5 rounded-full bg-white/20">
                <div className="h-1.5 w-4/5 rounded-full bg-gradient-to-r from-saffron via-white to-indiaGreen" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
