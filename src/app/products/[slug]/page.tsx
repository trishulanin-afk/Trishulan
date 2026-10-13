import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct, products } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.name} | Trishulan Import & Export`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  return (
    <main>
      <section className="bg-[#F3F6F8] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-[#8A6A1D]">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products" className="hover:text-[#8A6A1D]">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-[#0B1F3A]">{product.name}</li>
            </ol>
          </nav>

          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className="px-2 py-4 text-sm leading-6 text-slate-600">
                Product image for {product.name}
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                Trishulan product portfolio
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>

              <div className="mt-8 border-t border-slate-200 pt-6">
                <h2 className="text-xl font-bold text-[#0B1F3A]">Product details</h2>
                <ul className="mt-4 space-y-3">
                  {product.details.map((detail) => (
                    <li key={detail} className="flex gap-3 text-sm leading-6 text-slate-700 sm:text-base">
                      <span className="mt-0.5 shrink-0 text-[#9A7720]" aria-hidden="true">✓</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 rounded-xl bg-[#F3F6F8] p-5">
                <h2 className="text-base font-bold text-[#0B1F3A]">Discuss your requirement</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Share your required specification, quantity, packaging, and destination. Availability
                  and final details are confirmed for each enquiry.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/contactus?product=${encodeURIComponent(product.name)}#contact-form`}
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
                  >
                    Enquire about {product.name}
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#0B1F3A] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#0B1F3A] hover:text-white"
                  >
                    Browse all products
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {product.contentSections && (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {product.contentSections.map((section) => (
                <section
                  key={section.heading}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7"
                >
                  <h2 className="text-xl font-bold text-[#0B1F3A]">
                    {section.heading}
                  </h2>
                  {section.description && (
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {section.description}
                    </p>
                  )}
                  {section.items && (
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span
                            className="mt-0.5 shrink-0 text-[#9A7720]"
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <p className="mt-4 rounded-lg bg-[#F3F6F8] px-4 py-3 text-sm leading-6 text-slate-600">
                      {section.note}
                    </p>
                  )}
                </section>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
