import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/20 shadow-premium min-h-[400px] flex flex-col justify-center">
        <Image
          src={image}
          alt={title}
          width={1600}
          height={900}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        {/* Dark overlay for text visibility on any background */}
        <div className="absolute inset-0 -z-10 bg-black/60" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(255,106,0,0.25),transparent_45%)]" />

        <div className="grid gap-10 px-6 py-14 sm:px-10 md:grid-cols-[1.2fr_0.8fr] md:py-16">
          <div>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white/90">
              {eyebrow}
            </p>
            <h1 className="mt-5 max-w-3xl text-4xl font-heading font-black tracking-tighter uppercase leading-tight text-white sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">{description}</p>
            <div className="mt-8">
              <Link href={ctaHref}>
                <Button size="lg">{ctaLabel}</Button>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex md:items-end md:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/25 bg-black/40 p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.22em] text-slate-200">Strategic Positioning</p>
              <p className="mt-3 text-lg font-bold font-heading uppercase text-white tracking-widest text-balance text-center">Confidential | Disciplined | Data-Driven</p>
              <div className="mt-4 h-1.5 rounded-full bg-white/20">
                <div className="h-1.5 w-4/5 rounded-full bg-saffron" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
