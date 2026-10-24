import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import HeroVideo from "../components/hero-video";
import CustomerReviews from "../components/customer-reviews";
import WhyChooseUs from "@/components/why-choose-us";

export const metadata: Metadata = {
  title: "Import & Export from Andhra Pradesh, India",
  description:
    "Meet Trishulan, an import and export business based in Andhra Pradesh, India. Explore rice, chilli, coffee, and machinery categories and discuss a trade enquiry.",
  alternates: { canonical: "/" },
};

const productCategories = [
  {
    name: "Dry Fruits",
    description: "Premium Dry Fruits for reliable supply and consistent trade enquiries.",
    image: "/products/Dry_Fruits.jpg",
    alt: "Dry Fruits",
    slug: "dry-fruits",
  },
  {
    name: "Vegetables",
    description: "Vegetable sourcing for agricultural trade and customer-specific requirements.",
    image: "/products/Vegetables.jpg",
    alt: "Fresh vegetables",
    slug: "vegetables",
  },
  {
    name: "Furniture",
    description: "Furniture sourcing based on client specifications and market availability.",
    image: "/products/Furniture.jpeg",
    alt: "Furniture products",
    slug: "furniture",
  },
  {
    name: "Machinery",
    description: "Machinery and equipment sourcing coordinated around client requirements.",
    image: "/products/Machinery.jpg",
    alt: "Industrial machinery",
    slug: "machinery",
  },
];

const tradePriorities = [
  {
    number: "01",
    title: "Understand the requirements",
    description:
      "Every enquiry starts with a clear understanding of the product, specifications, quantity, quality expectations, packaging, and destination.",
  },
  {
    number: "02",
    title: "Plan for the market",
    description:
      "Requirements differ by product and destination. Check applicable policies, standards, and import conditions before making commitments.",
  },
  {
    number: "03",
    title: "Coordinate with clarity",
    description:
      "Clear communication and consistent order and shipment information help buyers and suppliers stay aligned throughout the trade process.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero.jpeg"
          alt="Cargo containers ready for international shipping"
          fill
          priority
          sizes="100vw"
          className="home-hero-poster -z-20 object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/hero.jpeg"
          aria-hidden="true"
          className="home-hero-video absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source
            src="/herovideo.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 z-0 bg-linear-to-r from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-[#0B1F3A]/1" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F1D778] sm:text-sm">
              <span className="h-px w-8 bg-[#ffd13b]" />
              Based in Andhra Pradesh, India
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Trishulan Import &amp; export from India.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Trishulan is an import and export business helping turn product enquiries into clear,
              considered trade conversations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contactus#contact-form"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#ffd13b] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                Discuss an enquiry
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#ffd13b] sm:w-40" />
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-3 sm:gap-8">
          <div>
            <p className="text-sm font-semibold text-[#0B1F3A]">India-based business</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Rooted in Andhra Pradesh.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0B1F3A]">Multiple categories</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Agricultural goods and machinery.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0B1F3A]">Trade-focused guidance</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">Practical resources for import and export.</p>
          </div>
        </div>
      </section>

      <section id="categories" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                Explore product categories
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
                What are you looking to trade?
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Browse the categories featured by Trishulan and get in touch to discuss a specific
                requirement.
              </p>
            </div>
            <Link
              href="/products"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#0B1F3A] transition hover:text-[#8A6A1D]"
            >
              View all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                href={`/products/${category.slug}`}
                className="interactive-surface group overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-200 hover:border-[#ffd13b] hover:shadow-lg hover:shadow-slate-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd13b]"
                aria-label={`View ${category.name} product details`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#0B1F3A]">{category.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{category.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8A6A1D]">
                    View product details <span aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />

      <section className="bg-[#eff2f4] px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              A thoughtful approach to trade
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              Clear requirements. Confident trade.
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-600">
              Successful trade begins with the right information, an understanding of market requirements, and clear communication at every stage.</p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            {tradePriorities.map((priority) => (
              <article key={priority.number} className="group flex h-full flex-col rounded-3xl border border-[#E4E8EF] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#ffd13b]/70 hover:shadow-lg sm:p-7">
                <p className="text-sm font-semibold text-[#9A7720]">{priority.number}</p>
                <h3 className="mt-3 text-xl font-bold text-[#0B1F3A]">{priority.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{priority.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CustomerReviews />

      <section className="bg-[#0B1F3A] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Have a product requirement?</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
              Share the product, quantity, specification, and destination with Trishulan to start an enquiry.
            </p>
          </div>
          <Link
            href="/contactus#contact-form"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-[#ffd13b] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
          >
            Discuss your requirement
          </Link>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
              Built on clear credentials
            </p>
            <h2 className="mt-2 max-w-xl text-3xl font-bold text-[#0B1F3A] sm:text-4xl">
              The right details make business easier to trust.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
              Explore Trishulan&apos;s listed business certificates and learn more about the documents
              that support its trade profile.
            </p>
            <Link
              href="/certificates"
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md border border-[#0B1F3A] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
            >
              View certificates
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-slate-100">
            <Image
              src="/certificates/Import-Export-Code-IEC/Import%20Export%20Code%20(IEC)_page-0001.jpg"
              alt="Trishulan Import Export Code certificate"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-contain p-4 sm:p-7"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
