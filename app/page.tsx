import Script from "next/script";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { HomeHero } from "@/components/hero/home-hero";
import { ServiceCard } from "@/components/service-card/service-card";
import { ProcessFlow } from "@/components/process-flow/process-flow";
import { CtaSection } from "@/components/cta-section/cta-section";
import { ImagePanel } from "@/components/common/image-panel";
import { StatsInfographic } from "@/components/common/stats-infographic";
import { homeCoreServices, processSteps, whyChooseUs } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.domain,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN"
    },
    slogan: siteConfig.tagline
  };

  return (
    <>
      <HomeHero />

      <section className="section-shell mt-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface p-8 shadow-2xl sm:p-10">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_92%_12%,rgba(255,106,0,0.1),transparent_34%),radial-gradient(circle_at_8%_88%,rgba(19,136,8,0.05),transparent_38%)]"
                aria-hidden="true"
              />
              <SectionHeading
                eyebrow="What We Do"
                title="WE ENGINEER ELECTORAL SUCCESS"
                description="We partner with political leaders, candidates, and parties to design and execute data-driven, ground-integrated campaigns that deliver measurable results. Our approach combines research precision, strategic clarity, narrative control, and disciplined execution."
                tone="default"
              />
              <div className="mt-8 grid gap-3 text-sm text-white/80 sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-saffron font-bold">01</p>
                  <p className="mt-1 font-medium text-white">Research Precision</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-saffron font-bold">02</p>
                  <p className="mt-1 font-medium text-white">Narrative Control</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-saffron font-bold">03</p>
                  <p className="mt-1 font-medium text-white">Execution Discipline</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/70 backdrop-blur-md">
                <span className="font-bold text-white uppercase tracking-wider">Strategic Edge:</span> One integrated command structure
                across research, field operations, digital and media response.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <StatsInfographic />
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-24">
        <SectionHeading eyebrow="Core Services" title="Capabilities for Victory" tone="default" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeCoreServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-surface px-6 py-10 sm:px-8 sm:py-12 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,106,0,0.15),transparent_34%),radial-gradient(circle_at_88%_80%,rgba(10,61,145,0.15),transparent_34%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ImagePanel
              src="/images/media-room-abstract.png"
              alt="Media production for campaign narrative"
              className="h-[320px] border-white/10"
            />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-saffron">Campaign War Room</p>
              <h2 className="mt-3 text-3xl font-heading font-black tracking-tighter uppercase text-white sm:text-4xl">
                Strategic Political Consulting | Data Intelligence | Ground Operations | Media & Narrative Management | Social Media
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-white/70 leading-relaxed">
                Every layer is integrated into one command structure so your messaging, field movement and digital response stay synchronized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/5 bg-background px-6 py-16 shadow-2xl sm:px-12 sm:py-20">
          <div
            className="absolute inset-0 opacity-20 bg-hero-glow"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-sm bg-surface px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-saffron ring-1 ring-white/10">
                Why Choose Us
              </span>
              <h2 className="mt-6 text-4xl font-heading font-black uppercase tracking-tighter text-white sm:text-5xl">
                Built for High-Stakes <span className="text-transparent bg-clip-text bg-tricolor-gradient">Electoral Environments</span>
              </h2>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => {
                const IconComponent = (() => {
                  const {
                    Database,
                    Map: MapIcon,
                    Globe,
                    ShieldCheck,
                    TrendingUp
                  } = require("lucide-react");
                  const icons: Record<string, any> = {
                    Database,
                    Map: MapIcon,
                    Globe,
                    ShieldCheck,
                    TrendingUp
                  };
                  return icons[item.iconName];
                })();

                return (
                  <Reveal key={item.title} delay={index * 0.1}>
                    <div className="group relative h-full rounded-2xl border border-white/5 bg-surface/50 p-8 transition-all duration-300 hover:bg-white/5 hover:shadow-[0_0_30px_-10px_rgba(255,106,0,0.2)] hover:border-saffron/30">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background shadow-[0_4px_20px_rgba(0,0,0,0.5)] ring-1 ring-white/5 transition-transform group-hover:scale-110 group-hover:ring-saffron/50">
                        {IconComponent && <IconComponent className="h-7 w-7 text-saffron" />}
                      </div>
                      <h3 className="mb-3 text-xl font-heading font-bold uppercase tracking-tight text-white transition-colors group-hover:text-saffron">
                        {item.title}
                      </h3>
                      <p className="text-balance text-sm leading-relaxed text-white/70">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-20 flex flex-col items-center border-t border-white/5 pt-10 text-center">
              <p className="max-w-3xl text-3xl font-heading font-black uppercase tracking-tighter text-white sm:text-4xl md:text-5xl drop-shadow-lg">
                WE DON&apos;T RUN CAMPAIGNS.<br />
                <span className="text-transparent bg-clip-text bg-saffron-highlight">WE DESIGN POLITICAL VICTORIES.</span>
              </p>
              <div className="mt-4 flex h-1.5 w-24 gap-1">
                <div className="h-full w-1/3 rounded-full bg-saffron" />
                <div className="h-full w-1/3 rounded-full bg-[var(--text-primary)]" />
                <div className="h-full w-1/3 rounded-full bg-indiaGreen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-24">
        <SectionHeading eyebrow="Our Process" title="Research to Victory" tone="default" />
        <ProcessFlow steps={processSteps} />
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
          <ImagePanel
            src="/images/campaign-outreach.png"
            alt="Grassroots campaign outreach: handing over a flyer and national flag"
            className="h-[320px] rounded-none border-0"
          />
          {/* Fixed dark overlay for text visibility on image banner - independent of theme switcher */}
          <div className="absolute inset-0 -z-10 bg-slate-950/70" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-12 max-w-2xl">
              <p className="text-2xl font-heading font-bold uppercase tracking-tight leading-tight text-white sm:text-4xl drop-shadow-md">
                High-trust political advisory built for campaigns where message discipline and timing define outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="READY TO BUILD A\nWINNING CAMPAIGN?"
        description="Let's create a strategy that delivers results."
        buttonLabel="Request Strategy Consultation"
      />

      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
