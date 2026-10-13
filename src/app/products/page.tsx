import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCatalog from "../../components/product-catalog";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Products | Import & Export",
  description:
    "Explore Trishulan's product portfolio including cashew nuts, guava plants, coffee beans, rice, chilli, bananas, peanuts, dry fruits, machinery, furniture, and custom import sourcing.",
  alternates: { canonical: "/products" },
};

const tradeBenefits = [
  {
    title: "Buyer-focused sourcing",
    description: "Every enquiry is reviewed with attention to quality, quantity, and delivery expectations.",
  },
  {
    title: "Flexible trade support",
    description: "We work with client-specific requirements, product specifications, and market preferences.",
  },
  {
    title: "Dependable coordination",
    description: "From product discussion to follow-up, we aim to keep communication clear and professional.",
  },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero.jpg"
          alt="International product sourcing and trade"
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
              OUR PRODUCT PORTFOLIO
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Products according to your requirements.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Explore agricultural produce, food grains, nuts, spices, fresh fruits, coffee, planting
              materials, biodegradable products, and custom sourcing options.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#product-catalog"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                Browse products
              </Link>
              <Link
                href="/contactus#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D778] hover:text-[#F1D778]"
              >
                Discuss a requirement
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#D4AF37] sm:w-40" />
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {tradeBenefits.map((benefit) => (
            <div key={benefit.title} className="interactive-surface rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9A7720]">
                {benefit.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="product-catalog" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Product categories
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              Products we deal in
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              Below is an overview of the products we actively work with. If you need an item that is
              not listed here, we can still discuss your requirement and help with custom sourcing.
            </p>
          </div>

          <ProductCatalog products={products} />
        </div>
      </section>

      <section className="bg-[#F3F6F8] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="interactive-surface mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7720]">
            Need something else?
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
            We also deal with products not listed here.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            If your required product is not visible in this catalog, we are still ready to discuss it.
            Trishulan works with customer-specific sourcing requirements, imported materials, and trade
            enquiries based on quantity, packaging, destination, and product specifications.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contactus#contact-form"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
            >
              Request a custom quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
