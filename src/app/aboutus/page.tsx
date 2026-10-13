import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Import & Export Company in Andhra Pradesh",
  description:
    "Learn about Trishulan Import and Export Company, a quality-focused trading and supply chain business based in Jangareddygudem, Andhra Pradesh, serving India and international markets.",
  alternates: { canonical: "/aboutus" },
};

const values = [
  {
    title: "Integrity & Transparency",
    description:
      "We communicate honestly with customers, suppliers, employees, and partners, maintaining accurate information on quality, pricing, packaging, and delivery commitments.",
  },
  {
    title: "Quality & Responsibility",
    description:
      "We focus on product consistency, timely coordination, appropriate handling, and documentation that supports trust throughout the supply chain.",
  },
  {
    title: "Fair Business Practices",
    description:
      "Every relationship is treated with dignity, respect, and professionalism, and we reject exploitation, fraud, and unethical conduct.",
  },
  {
    title: "Responsible Sourcing",
    description:
      "We work with dependable suppliers and promote sourcing practices that respect legal compliance, environmental responsibility, and producer communities.",
  },
  {
    title: "Environmental Stewardship",
    description:
      "We support eco-friendly, biodegradable, and resource-conscious solutions while encouraging better packaging and reduced waste in trade operations.",
  },
  {
    title: "Compliance & Accountability",
    description:
      "Our import and export activities are guided by legal requirements, customs procedures, standards, and documentation obligations that protect both buyers and suppliers.",
  },
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero.jpg"
          alt="Trade and agricultural exports from India"
          fill
          priority
          sizes="100vw"
          className="home-hero-poster -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/75 to-[#0B1F3A]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F1D778] sm:text-sm">
              <span className="h-px w-8 bg-[#D4AF37]" />
              ABOUT TRISHULAN
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              A partner for thoughtful global trade.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Founded in Jangareddygudem, Andhra Pradesh, Trishulan connects Indian agricultural
              produce, food commodities, plantation products, and eco-friendly packaging with buyers
              in India and international markets.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products#product-catalog"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                Explore our products
              </Link>
              <Link
                href="/contactus#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D778] hover:text-[#F1D778]"
              >
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#D4AF37] sm:w-40" />
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
              <Image
                src="/office/office1.png"
                alt="Trishulan office exterior"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Our story
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              Built on trust, consistency, and practical trade expertise.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Trishulan Import and Export Company is based in Jangareddygudem, Andhra Pradesh. We work
              with buyers and suppliers across India and international markets,
              connecting them with agricultural produce, food commodities, plantation products,
              eco-friendly packaging, and other client-specific sourcing requirements.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Our focus is on appropriate product quality and packaging, reliable sourcing, and
              professional import-export coordination. Product specifications, grades, packaging
              formats, and order quantities are discussed in line with buyer requirements and market
              availability, helping each enquiry move forward with clear expectations.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              What sets Trishulan apart is our commitment to honest business practices, responsible
              sourcing, and building relationships that last. We believe trust is created through
              consistent service, careful attention to product requirements, and respect for every
              business partner we work with.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#F3F6F8] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <article className="interactive-surface rounded-xl border border-slate-200 border-t-4 border-t-[#D4AF37] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Find our office
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">Visit Trishulan</h2>
            <address className="mt-4 not-italic text-base leading-7 text-slate-700">
              First Floor, Chitti Fast Food Center<br />
              Near Nirmala Hospital, Beside Building<br />
              Jangareddygudem, Andhra Pradesh 534447
            </address>
            <a
              href="https://maps.app.goo.gl/YSGFRFhYGELHhi9w5?g_st=ac"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-10 items-center justify-center rounded-md border border-[#0B1F3A] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              Open map location <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </article>

          <article className="interactive-surface rounded-xl border border-slate-200 border-t-4 border-t-[#D4AF37] bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Follow and connect
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A]">Trishulan online</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="https://wa.me/917989273309"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#D4AF37] hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1D778] text-xs font-bold text-[#0B1F3A]" aria-hidden="true">W</span>
                <span>
                  <span className="block text-xs font-medium text-slate-500">WhatsApp</span>
                  <span className="block text-sm font-semibold text-[#0B1F3A]">+91 7989273309</span>
                </span>
              </a>
              <a
                href="mailto:market@trishulan.com"
                className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#D4AF37] hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-bold text-white" aria-hidden="true">@</span>
                <span>
                  <span className="block text-xs font-medium text-slate-500">Email</span>
                  <span className="block text-sm font-semibold text-[#0B1F3A]">market@trishulan.com</span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/trishulan_groups"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#D4AF37] hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1D778] text-lg font-bold text-[#0B1F3A]" aria-hidden="true">◎</span>
                <span>
                  <span className="block text-xs font-medium text-slate-500">Instagram</span>
                  <span className="block text-sm font-semibold text-[#0B1F3A]">@Trishulan_groups</span>
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/surya-sai-allamsetty-839283425"
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-[#D4AF37] hover:bg-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1F3A] text-xs font-bold text-white" aria-hidden="true">in</span>
                <span>
                  <span className="block text-xs font-medium text-slate-500">Founder on LinkedIn</span>
                  <span className="block text-sm font-semibold text-[#0B1F3A]">Surya Sai Allamsetty</span>
                </span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#F3F6F8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <figure className="interactive-surface mx-auto w-full max-w-[250px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[5/8] overflow-hidden bg-white">
                <Image
                  src="/Surya.jpeg"
                  alt="Founder Surya Sai Allamsetty"
                  fill
                  sizes="(min-width: 1024px) 20vw, 60vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-slate-200 px-4 py-4 text-center">
                <h2 className="text-xl font-bold text-[#0B1F3A]">Surya Sai Allamsetty</h2>
                <p className="mt-1 text-sm font-medium text-[#9A7720]">Founder &amp; leadership</p>
              </figcaption>
            </figure>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                Leadership philosophy
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
                Building partnerships through responsible trade.
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Surya Sai Allamsetty leads Trishulan with a focus on practical trade relationships,
                honest communication, and disciplined business execution. His vision is rooted in the
                belief that long-term success comes from dependable service, quality standards, and
                respect for every supplier and customer relationship.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Under his leadership, the company continues to grow with a strong emphasis on
                transparent coordination, ethical sourcing, and a customer-first mindset. Every trade
                discussion is approached with care, market understanding, and a commitment to doing
                business in a way that is both reliable and sustainable.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                His leadership style reflects the values of Trishulan itself: integrity, accountability,
                and a sincere commitment to creating value for the people and businesses connected to
                the company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Our commitment
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              A business model shaped by quality, ethics, and dependable execution.
            </h2>
          </div>

          <div className="mt-10">
            <div className="interactive-surface w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-base leading-8 text-slate-700">
                Trishulan Import and Export Company aims to connect quality Indian agricultural
                produce, food commodities, plantation products, and eco-friendly packaging materials
                with domestic and international buyers. We focus on product quality, appropriate
                packaging, reliable sourcing, and professional export-import coordination.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-700">
                Product specifications, grades, packaging formats, and order quantities can be
                discussed according to buyer requirements and market availability. We work to deliver
                honest, practical trade support that helps buyers and suppliers move forward with
                confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Ethical values
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              The principles that guide every partnership.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="interactive-surface rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F1D778] text-sm font-bold text-[#0B1F3A]">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3A]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.38fr_0.62fr]">
            <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200">
                <Image
                  src="/office/office2.png"
                  alt="Trishulan warehouse and business operations"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="interactive-surface rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                Our approach
              </p>
              <h3 className="mt-3 text-3xl font-bold text-[#0B1F3A]">Why businesses choose Trishulan</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-slate-700">
                <li>• Clear communication across import, export, and supply chain discussions.</li>
                <li>• Focus on product quality and appropriate sourcing for buyer requirements.</li>
                <li>• Support for domestic and international business opportunities.</li>
                <li>• Commitment to ethical practices, dependable coordination, and long-term trust.</li>
                <li>• A business mindset rooted in transparency, professionalism, and responsible growth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
