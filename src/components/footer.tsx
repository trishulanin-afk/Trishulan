import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/trishulan_groups", icon: "◎" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/surya-sai-allamsetty-839283425?utm_source=share_via&utm_content=profile&utm_medium=member_android", icon: "in" },
  { label: "WhatsApp", href: "https://wa.me/917989273309", icon: "W" },
  { label: "Email", href: "mailto:market@trishulan.com", icon: "E" },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/aboutus" },
  { label: "Products", href: "/products" },
  { label: "Certificates", href: "/certificates" },
  { label: "Contact us", href: "/contactus" },
  { label: "Blogs", href: "/blogs" },
  { label: "Privacy", href: "/privacy" },
];

function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#ffd13b]">
                <Image src="/logo.png" alt="Trishulan logo" width={40} height={40} className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="text-base font-bold tracking-wide">TRISHULAN</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-slate-300">
                  Import & Export
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300">
              Import and export coordination from Andhra Pradesh, India.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd13b]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-[#ffd13b]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd13b]">
              Business Focus
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>Global Sourcing</li>
              <li>International Trade</li>
              <li>Bulk Supply Support</li>
              <li>Export Documentation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd13b]">
              Contact us at
            </h3>
            <div className="mt-3 flex flex-col gap-1 text-sm">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-md px-1 py-1 text-slate-200 transition hover:text-[#ffd13b]"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ffd13b] text-[8px] font-bold text-[#0B1F3A]">
                    {item.icon}
                  </span>
                  <span className="text-xs font-medium">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-4 text-sm text-slate-300">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Trishulan. All rights reserved.</p>
            <p>Andhra Pradesh, India</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;