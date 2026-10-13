import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Learn how Trishulan handles contact enquiries and customer reviews submitted through this website.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <article className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
          Website information
        </p>
        <h1 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
          Privacy notice
        </h1>
        <p className="mt-4 text-sm leading-7 text-slate-600">
          This notice explains how Trishulan Import and Export Company handles
          information you submit through this website.
        </p>

        <div className="mt-8 space-y-8 text-base leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Information you provide
            </h2>
            <p className="mt-3">
              If you send a business enquiry, the form may collect your name,
              company, phone number, email address, product interest, and
              message. If you submit a review, we collect your name, optional
              company name, rating, and feedback.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              How we use information
            </h2>
            <p className="mt-3">
              Enquiry details are used to respond to your request and coordinate
              related business communications. Reviews are held for moderation;
              only approved reviews are displayed publicly, together with the
              name and optional company details you submitted and consented to
              display.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Service providers
            </h2>
            <p className="mt-3">
              The website uses EmailJS to deliver contact-form messages and
              Supabase to store and display moderated reviews. Information
              submitted through these features is processed by those providers
              under their own terms and privacy policies. The website may
              also be hosted by a third-party provider.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              Retention and requests
            </h2>
            <p className="mt-3">
              We retain submitted information only as needed to respond to
              enquiries, manage reviews, meet applicable obligations, and
              maintain business records. To request access to, correction of,
              or deletion of information you submitted, email{" "}
              <a
                className="font-semibold text-[#0B1F3A] underline underline-offset-4"
                href="mailto:market@trishulan.com"
              >
                market@trishulan.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#0B1F3A]">
              External services and updates
            </h2>
            <p className="mt-3">
              Links to WhatsApp and other external websites are governed by
              those services&apos; own privacy practices. We may update this
              notice when the website or its data practices change.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
