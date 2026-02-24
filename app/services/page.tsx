import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { ServiceAccordion } from "@/components/service-card/service-accordion";
import { ImagePanel } from "@/components/common/image-panel";
import { servicesDetailed } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Poll Brain Analytics services across election strategy, political data analytics, ground operations, media narrative and election-day management."
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title="Structured Consulting for Every Campaign Layer"
        description="From constituency profiling to polling-day command systems, our services are designed as one integrated campaign architecture."
        image="/images/media-room.jpg"
        ctaLabel="Discuss Service Scope"
      />

      <section className="section-shell mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Service Blocks"
            title="Election Strategy, Data Intelligence, Media and Ground Execution"
          />
          <div className="mt-8">
            <ServiceAccordion services={servicesDetailed} />
          </div>
        </div>

        <div className="space-y-4">
          <ImagePanel src="/images/strategy-board.jpg" alt="Strategy board session" className="h-[300px]" />
          <ImagePanel src="/images/field-outreach.jpg" alt="Ground outreach operations" className="h-[300px]" />
        </div>
      </section>
    </>
  );
}
