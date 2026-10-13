import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../../components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Import & Export Enquiries",
  description:
    "Contact Trishulan Import and Export Company for trade enquiries, product sourcing, and export-import discussions in India and international markets.",
  alternates: { canonical: "/contactus" },
};

const contactCards = [
  {
    label: "Call / WhatsApp",
    value: "+91 7989273309",
    href: "https://wa.me/917989273309",
    brand: "whatsapp",
  },
  {
    label: "Email",
    value: "market@trishulan.com",
    href: "mailto:market@trishulan.com",
    brand: "email",
  },
  {
    label: "Instagram",
    value: "@Trishulan_groups",
    href: "https://www.instagram.com/trishulan_groups",
    brand: "instagram",
  },
  {
    label: "LinkedIn",
    value: "Surya Sai Allamsetty",
    href: "https://www.linkedin.com/in/surya-sai-allamsetty-839283425",
    brand: "linkedin",
  },
];

const businessHighlights = [
  "India and international trade support",
  "Agricultural produce and food commodity sourcing",
  "Eco-friendly and packaging-focused solutions",
  "Professional import/export coordination",
];

export default function ContactUsPage() {
  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero.jpg"
          alt="International trade and shipping logistics"
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
              CONTACT TRISHULAN
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Let’s discuss your trade requirement.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Share the product, grade, quantity, destination, and timeline you have in mind. Our team
              will help you take the next step in your sourcing or export enquiry.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/917989273309"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                WhatsApp our team
              </a>
              <a
                href="mailto:market@trishulan.com"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D778] hover:text-[#F1D778]"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#D4AF37] sm:w-40" />
      </section>

      <ContactForm contactCards={contactCards} businessHighlights={businessHighlights} />
    </main>
  );
}
