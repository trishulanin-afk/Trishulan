"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Products", href: "/products" },
  { label: "Certificates", href: "/certificates" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contactus" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-[#0B1F3A]/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Trishulan home">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-[#ffd13b] shadow-lg shadow-[#ffd13b]/20">
            <Image src="/logo.png" alt="Trishulan logo" width={44} height={44} className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide text-white">TRISHULAN</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300">
              Import & Export
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-bold text-slate-200 transition-colors duration-200 hover:text-[#ffd13b]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/contactus#contact-form"
            className="inline-flex items-center justify-center rounded-md bg-[#ffd13b] px-4 py-2 text-sm font-semibold text-[#0B1F3A] transition hover:bg-[#e5c55a]"
          >
            Get Quote
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-600 bg-slate-900/40 text-white transition hover:border-[#ffd13b] hover:text-[#ffd13b] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.8}
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-700 bg-[#0B1F3A] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:text-[#ffd13b]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contactus#contact-form"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-[#ffd13b] px-4 py-2 text-sm font-semibold text-[#0B1F3A]"
            >
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;