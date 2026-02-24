import { ButtonLink } from "@/components/common/button-link";
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
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-navyBlue px-6 py-12 text-white shadow-premium sm:px-10 sm:py-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(255,153,51,0.4),transparent_34%),radial-gradient(circle_at_90%_85%,rgba(19,136,8,0.25),transparent_32%)]" />
        <div className="absolute inset-0 opacity-20 mix-blend-screen">
          <Image src="/images/hyderabad-charminar.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative">
          <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-slate-200">{description}</p>
          <div className="mt-8">
            <ButtonLink href={buttonHref} className="bg-saffron text-slate-950 hover:bg-[#f0891d] focus-visible:ring-saffron">
              {buttonLabel}
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
