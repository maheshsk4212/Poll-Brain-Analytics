import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/constants";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected campaign engagements showing challenge, strategic approach and measurable outcomes.",
  alternates: {
    canonical: `${siteConfig.domain}/case-studies`
  }
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Case Studies"
        title="Selected Campaign Engagements"
        description="A look at how we have helped candidates and parties navigate complex electoral environments with data-driven strategy, disciplined ground execution, and narrative precision."
        image="/images/campaign-outreach.png"
      />

      <section className="section-shell mt-16">
        <SectionHeading
          eyebrow="Engagement Highlights"
          title="Challenge, Strategic Intervention and Outcome"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </section>
    </>
  );
}
