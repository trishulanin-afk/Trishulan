import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductCatalogProps = {
  products: Product[];
};

export default function ProductCatalog({ products }: ProductCatalogProps) {
  return (
    <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {products.map((product, index) => (
        <article
          key={product.slug}
          className="interactive-surface group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#0B1F3A]/10"
        >
          <div className="relative aspect-[5/4] overflow-hidden bg-slate-100">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.06]"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B1F3A]/45 to-transparent opacity-70" />
            <span className="absolute left-3 top-3 inline-flex h-8 min-w-8 items-center justify-center rounded-full border border-white/70 bg-[#0B1F3A]/80 px-2 text-[10px] font-semibold text-white backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-4">
            <div className="mb-3 h-0.5 w-8 bg-[#D4AF37] transition-all duration-300 group-hover:w-14" />
            <h3 className="text-base font-bold leading-5 text-[#0B1F3A]">{product.name}</h3>
            <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-slate-600">
              {product.description}
            </p>
            <p className="mt-3 line-clamp-2 border-t border-slate-100 pt-3 text-[11px] leading-4 text-slate-500">
              <span className="font-semibold text-[#8A6A1D]">Options: </span>
              {product.details[0]}
            </p>
            <div className="mt-auto pt-4">
              <Link
                href={`/products/${product.slug}`}
                aria-label={`View ${product.name} details`}
                className="inline-flex min-h-10 w-full items-center justify-between rounded-md bg-[#0B1F3A] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#17345B] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <span>View details</span>
                <span aria-hidden="true" className="text-base text-[#F1D778] transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
