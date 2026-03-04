import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type CtaSectionProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref?: string;
  className?: string;
};

export function CtaSection({
  title,
  description,
  buttonLabel,
  buttonHref = "/contact",
  className
}: CtaSectionProps) {
  return (
    <section className={cn("section-shell mt-20", className)}>
      <div className="relative overflow-hidden rounded-3xl border border-saffron/20 bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,106,0,0.2),transparent_40%),radial-gradient(circle_at_90%_85%,rgba(10,61,145,0.2),transparent_40%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <Image src="/images/hyderabad-charminar.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10">
          <h2 className="text-3xl font-heading font-black tracking-tighter uppercase sm:text-5xl md:text-6xl text-white drop-shadow-md">
            {title.split('\n').map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/90 drop-shadow-sm">{description}</p>
          <div className="mt-8">
            <Link href={buttonHref}>
              <Button size="lg">{buttonLabel}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
