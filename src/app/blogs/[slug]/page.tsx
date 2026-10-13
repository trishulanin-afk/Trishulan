import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return { title: "Article Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
    },
  };
}

function BlogPostFallback() {
  return (
    <main>
      <div
        role="status"
        aria-label="Loading trade guide"
        className="mx-auto w-[90%] max-w-7xl space-y-8 pb-14 pt-10"
      >
        <span className="sr-only">Loading trade guide...</span>
        <div className="h-8 w-2/3 animate-pulse rounded bg-slate-200" />
        <div className="space-y-3">
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
        </div>
        <div className="space-y-3">
          <div className="h-7 w-1/2 animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
          <div className="h-4 w-4/5 animate-pulse rounded bg-slate-200" />
        </div>
      </div>
    </main>
  );
}

async function BlogPostContent({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const siteUrl = (process.env.PUBLIC_SITE_URL || "https://www.trishulan.com").replace(/\/+$/, "");
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: new URL(post.image, siteUrl).toString(),
    mainEntityOfPage: new URL(`/blogs/${post.slug}`, siteUrl).toString(),
    author: {
      "@type": "Organization",
      name: "Trishulan Trade Journal",
    },
    publisher: {
      "@type": "Organization",
      name: "Trishulan",
      url: siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <article>
        <div className="pb-14 pt-10">
          <div className="mx-auto w-[90%] max-w-7xl">
            <header className="mb-8 border-b border-slate-200 pb-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7720]">
                {post.category}
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[#0B1F3A] sm:text-4xl">
                {post.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                {post.excerpt}
              </p>
            </header>
            <div>
              {post.sections.map((section) => (
                <section key={section.heading} className="mt-8 first:mt-0">
                  <h2 className="text-2xl font-bold text-[#0B1F3A]">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mt-4 text-base leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              <aside className="mt-10 border-l-4 border-[#D4AF37] bg-slate-50 px-5 py-4 text-sm leading-6 text-slate-700">
                Trade rules, eligibility, rates, and destination requirements can change. Verify current
                requirements with the relevant official authority and a qualified professional before
                acting on a shipment.
              </aside>
            </div>

            <aside className="mt-10 rounded-lg border border-[#D4AF37]/50 bg-[#FBF8EA] p-5 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A1D]">
                Verify with primary sources
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#0B1F3A]">Official references</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Check the current requirements and guidance directly with these organizations.
              </p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {post.sources.map((source) => (
                  <li key={source.href}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-start gap-2 text-sm font-semibold leading-6 text-[#0B1F3A] underline decoration-[#D4AF37]/70 underline-offset-4 transition hover:text-[#8A6A1D]"
                    >
                      <span>{source.label}</span>
                      <span aria-hidden="true" className="shrink-0">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#0B1F3A]">Explore more trade guides</h2>
            <p className="mt-1 text-sm text-slate-600">Browse practical articles from the Trishulan Trade Journal.</p>
          </div>
          <Link
            href="/blogs"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white hover:bg-[#16365d]"
          >
            View all guides
          </Link>
        </div>
      </section>
    </>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <Suspense fallback={<BlogPostFallback />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
