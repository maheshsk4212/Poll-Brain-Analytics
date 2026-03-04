import type { Metadata } from "next";
import { PageBanner } from "@/components/common/page-banner";

export const metadata: Metadata = {
  title: "Privacy & Confidentiality",
  description:
    "Privacy and confidentiality commitments for consultations and campaign advisory engagements."
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Policy"
        title="Privacy & Confidentiality"
        description="We operate with high-discretion standards for every consultation and client engagement."
        image="/images/parliament.jpg"
      />

      <section className="section-shell mt-16 space-y-4">
        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-heading font-bold text-[var(--text-primary)]">Data Confidentiality</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            Client strategy data, field intelligence and communication plans are treated as confidential and are accessed only on a need-to-know basis.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-heading font-bold text-[var(--text-primary)]">Secure Storage</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            Engagement records are stored in secured systems with layered controls to prevent unauthorized access, disclosure or data leakage.
          </p>
        </article>

        <article className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-heading font-bold text-[var(--text-primary)]">Non-Disclosure Commitment</h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
            We maintain strict non-disclosure practices for campaign plans, candidate communication and strategic advisory work unless disclosure is legally required.
          </p>
        </article>
      </section>
    </>
  );
}
