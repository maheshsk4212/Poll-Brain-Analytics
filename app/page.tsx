import Script from "next/script";
import { SectionHeading } from "@/components/common/section-heading";
import { Reveal } from "@/components/common/reveal";
import { HomeHero } from "@/components/hero/home-hero";
import { ServiceCard } from "@/components/service-card/service-card";
import { ProcessFlow } from "@/components/process-flow/process-flow";
import { CtaSection } from "@/components/cta-section/cta-section";
import { ImagePanel } from "@/components/common/image-panel";
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
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-premium sm:p-10">
              <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_92%_12%,rgba(255,153,51,0.22),transparent_34%),radial-gradient(circle_at_8%_88%,rgba(19,136,8,0.14),transparent_38%)]"
                aria-hidden="true"
              />
              <SectionHeading
                eyebrow="What We Do"
                title="We Engineer Electoral Success."
                description="We partner with political leaders, candidates and parties to design and execute data-driven, ground-integrated campaigns that deliver measurable results. Our approach combines research precision, strategic clarity, narrative control and disciplined execution."
              />
              <div className="mt-8 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-navyBlue">01</p>
                  <p className="mt-1 font-medium">Research Precision</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-navyBlue">02</p>
                  <p className="mt-1 font-medium">Narrative Control</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white px-3 py-3 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.15em] text-navyBlue">03</p>
                  <p className="mt-1 font-medium">Execution Discipline</p>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">Strategic Edge:</span> One integrated command structure
                across research, field operations, digital and media response.
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-[1fr_0.9fr]">
              <ImagePanel
                src="/images/parliament.jpg"
                alt="Indian Parliament architecture"
                className="h-[320px] sm:h-[360px]"
              />
              <div className="space-y-4">
                <ImagePanel
                  src="/images/field-outreach.jpg"
                  alt="Field outreach with Indian flag"
                  className="h-[172px]"
                />
                <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-navyBlue to-[#2336a0] p-4 text-white shadow-premium">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-200">Campaign Positioning</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-100">
                    Premium strategic consulting for campaigns that demand confidentiality, speed and constituency-level precision.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell mt-24">
        <SectionHeading eyebrow="Core Services" title="Integrated Capabilities for Campaign Victory" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {homeCoreServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-6 py-10 sm:px-8 sm:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(255,153,51,0.32),transparent_34%),radial-gradient(circle_at_88%_80%,rgba(19,136,8,0.28),transparent_34%)]" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <ImagePanel
              src="/images/media-room.jpg"
              alt="Media production for campaign narrative"
              className="h-[320px] border-white/20"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Campaign War Room</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Strategic Political Consulting | Data Intelligence | Ground Operations | Media and Narrative Management | Social Media
              </h2>
              <p className="mt-4 max-w-2xl text-sm text-slate-200">
                Every layer is integrated into one command structure so your messaging, field movement and digital response stay synchronized.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-950 px-6 py-16 shadow-2xl sm:px-12 sm:py-20">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, rgba(255, 153, 51, 0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(19, 136, 8, 0.3), transparent 40%)`
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              <span className="inline-block rounded-full bg-slate-800/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-saffron">
                Why Choose Us
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Built for High-Stakes <span className="text-indiaGreen">Electoral Environments</span>
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
                    <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10 hover:shadow-[0_0_30px_-10px_rgba(255,153,51,0.3)]">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-lg transition-transform group-hover:scale-110">
                        {IconComponent && <IconComponent className="h-7 w-7 text-saffron" />}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-saffron">
                        {item.title}
                      </h3>
                      <p className="text-balance text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <div className="mt-20 flex flex-col items-center border-t border-white/10 pt-10 text-center">
              <p className="max-w-2xl text-2xl font-bold italic tracking-tight text-white sm:text-3xl">
                &ldquo;We do not run campaigns. We design political victories.&rdquo;
              </p>
              <div className="mt-4 flex h-1.5 w-24 gap-1">
                <div className="h-full w-1/3 rounded-full bg-saffron" />
                <div className="h-full w-1/3 rounded-full bg-white" />
                <div className="h-full w-1/3 rounded-full bg-indiaGreen" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell mt-24">
        <SectionHeading eyebrow="Our Process" title="Research to Victory" />
        <ProcessFlow steps={processSteps} />
      </section>

      <section className="section-shell mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200">
          <ImagePanel
            src="/images/india-flag-street.jpg"
            alt="Indian city street with national flag"
            className="h-[280px] rounded-none border-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-6 sm:px-10">
              <p className="max-w-xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                High-trust political advisory built for campaigns where message discipline and timing define outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="Ready to Build a Winning Campaign?"
        description="Let us create a strategy architecture that drives measurable electoral outcomes."
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
