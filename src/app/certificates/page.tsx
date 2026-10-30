import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Credentials and Certificates",
  description:
    "Review Trishulan's business credentials and available registration documentation. Contact us to verify applicable details.",
  alternates: {
    canonical: "/certificates",
  },
};

const certificates = [
  {
    title: "Import Export Code Certificate",
    image:
      "/certificates/Import-Export-Code-IEC/Import%20Export%20Code%20(IEC)_page-0001.webp",
    alt: "Trishulan Import Export Code certificate",
  },
  {
    title: "RCMC Certificate",
    image: "/certificates/RCMC/RCMC_page-0001.webp",
    alt: "Trishulan RCMC certificate",
  },
  {
    title: "Registration Certificate",
    image: "/certificates/Registration/Registration_page-0001.webp",
    alt: "Trishulan registration certificate",
  },
];

export default function CertificatesPage() {
  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero2.webp"
          alt="Trade credentials and compliance documents"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 z-0 bg-linear-to-r from-[#0B1F3A]/80 via-[#0B1F3A]/60 to-[#0B1F3A]/5" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F1D778] sm:text-sm">
              <span className="h-px w-8 bg-[#ffd13b]" />
              TRUST &amp; COMPLIANCE
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Our certificates and business credentials.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Review the registrations and trade documents that support Trishulan’s import and export
              operations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#credentials"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#ffd13b] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                View credentials
              </Link>
              <Link
                href="/contactus#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D778] hover:text-[#F1D778]"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#ffd13b] sm:w-40" />
      </section>

      <section id="credentials" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">Business Credentials and Certificates</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              View the registrations and trade credentials that support our import and export operations.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {certificates.map((certificate) => (
              <article
                key={certificate.title}
                className="interactive-surface overflow-hidden rounded-lg border border-slate-200 bg-white"
              >
                <div className="relative aspect-[4/3] bg-slate-100 p-3 sm:p-5">
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-contain p-3 sm:p-5"
                    unoptimized
                  />
                </div>
                <h3 className="border-t border-slate-200 px-5 py-4 text-base font-semibold text-[#0B1F3A]">
                  {certificate.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
