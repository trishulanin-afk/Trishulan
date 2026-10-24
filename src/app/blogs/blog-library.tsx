"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useState } from "react";
import { blogCategories, blogPosts } from "@/lib/blog-posts";

export default function BlogLibrary() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());

  const visiblePosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesQuery =
      !deferredQuery ||
      `${post.title} ${post.excerpt} ${post.category}`.toLowerCase().includes(deferredQuery);
    return matchesCategory && matchesQuery;
  });
  const featuredPosts = visiblePosts.filter((post) => post.featured);
  const questionPosts = visiblePosts.filter((post) => !post.featured);

  return (
    <main>
      <section className="site-hero relative isolate overflow-hidden bg-[#0B1F3A] text-white">
        <Image
          src="/hero4.jpg"
          alt="International shipping and trade research"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 z-0 bg-linear-to-r from-[#0B1F3A]/95 via-[#0B1F3A]/75 to-[#0B1F3A]/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F1D778] sm:text-sm">
              <span className="h-px w-8 bg-[#ffd13b]" />
              TRISHULAN TRADE JOURNAL
            </p>
            <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Practical answers for your trade journey.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">
              Explore clear guides to export setup, finding buyers, product compliance, shipping,
              payments, and growing international trade relationships.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#guide-library"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#ffd13b] px-6 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
              >
                Browse trade guides
              </Link>
              <Link
                href="/contactus"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#F1D778] hover:text-[#F1D778]"
              >
                Ask us a question
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-28 bg-[#ffd13b] sm:w-40" />
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="sr-only">Search trade guides</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search topics or keywords"
              className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-[#9A7720] focus:ring-2 focus:ring-[#ffd13b]/30"
            />
          </label>
          <label className="block">
            <span className="sr-only">Filter articles by category</span>
            <select
              value={activeCategory}
              onChange={(event) => setActiveCategory(event.target.value)}
              className="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#9A7720] focus:ring-2 focus:ring-[#ffd13b]/30"
            >
              {blogCategories.map((category) => (
                <option key={category} value={category}>
                  {category === "All" ? "All categories" : category}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section id="guide-library" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {visiblePosts.length > 0 ? (
            <>
              {featuredPosts.length > 0 && (
                <div>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                      Start with these guides
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
                      Featured trade topics
                    </h2>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
                    {featuredPosts.map((post, index) => (
                      <article
                        key={post.slug}
                        className="h-full"
                      >
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="interactive-surface group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:border-[#ffd13b] hover:shadow-lg hover:shadow-slate-900/5"
                          style={{ animationDelay: `${index * 45}ms` }}
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                            <Image
                              src={post.image}
                              alt={post.imageAlt}
                              fill
                              sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw"
                              className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="flex flex-1 flex-col p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9A7720]">
                              {post.category}
                            </p>
                            <h3 className="mt-3 text-lg font-bold leading-snug text-[#0B1F3A]">
                              {post.title}
                            </h3>
                            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#8A6A1D]">
                              Read guide <span aria-hidden="true">→</span>
                            </span>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {questionPosts.length > 0 && (
                <div className={featuredPosts.length > 0 ? "mt-14" : ""}>
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9A7720]">
                      All trade questions
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-[#0B1F3A] sm:text-3xl">
                      Browse the complete guide library
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {questionPosts.map((post) => (
                      <article key={post.slug}>
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="interactive-surface block rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:bg-slate-50"
                        >
                          {/* <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#9A7720]">
                            {post.category}
                          </p> */}
                          <h3 className="mt-1 text-base font-semibold leading-6 text-[#0B1F3A] sm:text-lg">
                            {post.title}
                          </h3>
                          <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600">{post.excerpt}</p>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="py-16 text-center">
              <h2 className="text-xl font-semibold text-[#0B1F3A]">No guides match that search</h2>
              <p className="mt-2 text-sm text-slate-600">Try another keyword or select a different category.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="mt-5 rounded-md bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#16365d]"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0B1F3A] px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold">Planning an import or export?</h2>
            <p className="mt-1 text-sm text-slate-300">Talk with Trishulan about your trade requirements.</p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#ffd13b] px-5 py-3 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
          >
            Contact Trishulan
          </Link>
        </div>
      </section>
    </main>
  );
}
