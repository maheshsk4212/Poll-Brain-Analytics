import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { ImagePanel } from "@/components/common/image-panel";
import { values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Poll Brain Analytics vision, mission, values and leadership approach for disciplined election consulting."
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="Who We Are"
        description="We are a strategic political consulting firm committed to designing disciplined, data-driven and ethically grounded electoral campaigns. We operate at the intersection of research, strategy, communication and execution."
        image="/images/parliament.jpg"
      />

      <section className="section-shell mt-16 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-premium">
          <h2 className="text-2xl font-semibold text-slate-900">Our Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            To elevate political campaigns through intelligence, integrity and precision, building leadership that resonates with people and sustains trust.
          </p>

          <h2 className="mt-8 text-2xl font-semibold text-slate-900">Our Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            To provide candidates and parties with structured campaign architecture integrating data insights, narrative control, grassroots mobilisation and measurable outcomes.
          </p>
        </article>

        <ImagePanel src="/images/strategy-board.jpg" alt="Campaign strategy planning" className="h-full min-h-[300px]" />
      </section>

      <section className="section-shell mt-16">
        <SectionHeading eyebrow="Values" title="What Defines Our Work" />
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-premium">
              <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-16">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-8 shadow-premium">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,153,51,0.35),transparent_36%)]" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white">Leadership</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                Our leadership team brings deep experience in electoral research, constituency strategy, political communication and campaign execution across multiple regions.
              </p>
              <p className="mt-3 text-sm font-semibold text-saffron">
                Elections are not won by chance. They are won by structure.
              </p>
            </div>
            <ImagePanel
              src="/images/hyderabad-charminar.jpg"
              alt="Hyderabad heritage architecture"
              className="h-[240px] border-white/20"
            />
          </div>
        </div>
      </section>
    </>
  );
}
