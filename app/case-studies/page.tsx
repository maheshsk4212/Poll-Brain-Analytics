import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";
import { SectionHeading } from "@/components/common/section-heading";
import { CaseStudyCard } from "@/components/case-study-card";
import { caseStudies } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected campaign engagements showing challenge, strategic approach and measurable outcomes."
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Case Studies"
        title="Selected Campaign Engagements"
        description="Representative examples below are placeholders and can be replaced with approved public case studies."
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
