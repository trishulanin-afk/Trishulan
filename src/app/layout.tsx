import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

const siteUrl = (process.env.PUBLIC_SITE_URL || "https://www.trishulan.com").replace(/\/+$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Trishulan Import & Export from Andhra Pradesh, India | Trishulan",
    template: "%s | Trishulan",
  },
  description:
    "Explore Trishulan's import and export product portfolio from Andhra Pradesh, India. Contact us for product specifications, sourcing and trade enquiries.",
  applicationName: "Trishulan",
  openGraph: {
    type: "website",
    siteName: "Trishulan",
    title: "Trishulan | Import & Export from India",
    description:
      "Discover Trishulan's product portfolio and submit import-export enquiries from India.",
    url: "/",
    images: ["/hero.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trishulan | Import & Export from India",
    description:
      "Explore our product portfolio and contact Trishulan for trade enquiries.",
    images: ["/hero.jpeg"],
  },
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trishulan Import and Export Company",
    url: siteUrl,
    email: "market@trishulan.com",
    telephone: "+917989273309",
    logo: new URL("/logo.png", siteUrl).toString(),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Jangareddygudem",
      addressRegion: "Andhra Pradesh",
      postalCode: "534447",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/trishulan_groups",
      "https://www.linkedin.com/in/surya-sai-allamsetty-839283425",
    ],
  };

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-900 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
