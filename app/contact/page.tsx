import type { Metadata } from "next";
import { ContactForm } from "@/components/form/contact-form";
import { PageBanner } from "@/components/common/page-banner";
import { ImagePanel } from "@/components/common/image-panel";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect confidentially with Poll Brain Analytics for strategic political consulting and campaign advisory."
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let us Build a Winning Campaign"
        description="If you are preparing for an upcoming election or seeking strategic advisory support, connect with us confidentially."
        image="/images/hyderabad-night.jpg"
        ctaLabel="Start Confidential Discussion"
      />

      <section className="section-shell mt-16">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl">
              <h3 className="text-xl font-heading font-black tracking-tight text-white uppercase">Direct Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <span className="font-bold text-white uppercase tracking-wider text-xs">Email:</span> {siteConfig.email}
                </li>
                <li>
                  <span className="font-bold text-white uppercase tracking-wider text-xs">Phone:</span> {siteConfig.phone}
                </li>
                <li>
                  <span className="font-bold text-white uppercase tracking-wider text-xs">Office:</span> {siteConfig.office}
                </li>
              </ul>

              <div className="mt-7 rounded-xl border border-white/5 bg-background p-4">
                <p className="text-sm font-bold uppercase tracking-wider text-white">Privacy & Confidentiality</p>
                <p className="mt-2 text-sm text-white/60">
                  All consultations and client engagements are handled with strict confidentiality standards, controlled access and data security compliance.
                </p>
              </div>
            </div>

            <ImagePanel src="/images/hyderabad-charminar.jpg" alt="Hyderabad office region visual" className="h-[220px]" />
          </aside>
        </div>
      </section>
    </>
  );
}
