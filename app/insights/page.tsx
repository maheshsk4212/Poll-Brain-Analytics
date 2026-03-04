import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { InsightsGrid } from "@/components/insights-grid";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Research-backed perspectives on elections, political communication, campaign management and voter behavior."
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Political Intelligence & Insights"
        title="Research-Backed Perspectives"
        description="We publish perspectives on elections, political communication, campaign management and voter behavior with strategic applicability."
        image="/images/media-room-abstract.png"
        ctaLabel="Subscribe for Insights"
      />

      <section className="section-shell mt-16">
        <SectionHeading
          eyebrow="Knowledge Desk"
          title="Data, Strategy and Campaign Operations"
          description="Filter by topic to browse election-focused, research-backed strategic notes."
        />
        <div className="mt-10">
          <InsightsGrid />
        </div>
      </section>
    </>
  );
}
