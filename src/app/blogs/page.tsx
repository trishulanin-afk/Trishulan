import type { Metadata } from "next";
import BlogLibrary from "./blog-library";

export const metadata: Metadata = {
  title: "Export Guides & Trade Insights",
  description:
    "Explore practical guides for Indian exporters, including IEC, RCMC, export documents, customs, market research, logistics, and product readiness.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return <BlogLibrary />;
}
