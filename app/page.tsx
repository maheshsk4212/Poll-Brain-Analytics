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
        <SectionHeading eyebrow="Why Choose Us" title="Built for High-Stakes Electoral Environments" />
        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-premium sm:p-7">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((point, index) => (
              <Reveal key={point} delay={index * 0.06}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-5 transition hover:-translate-y-1 hover:shadow-lg">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-saffron via-white to-indiaGreen"
                    aria-hidden="true"
                  />
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-navyBlue text-xs font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <p className="mt-8 text-xl font-semibold text-navyBlue">We do not run campaigns. We design political victories.</p>
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
