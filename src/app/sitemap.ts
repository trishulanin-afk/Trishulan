
import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { blogPosts } from "@/lib/blog-posts";

const siteUrl = (process.env.PUBLIC_SITE_URL || "https://www.trishulan.com").replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/aboutus",
    "/products",
    "/certificates",
    "/blogs",
    "/contactus",
    "/privacy",
  ];

  const staticEntries: MetadataRoute.Sitemap =
    staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
    }));

  const productEntries: MetadataRoute.Sitemap =
    products.map((product) => ({
      url: `${siteUrl}/products/${product.slug}`,
    }));

  const blogEntries: MetadataRoute.Sitemap =
    blogPosts.map((post) => ({
      url: `${siteUrl}/blogs/${post.slug}`,
    }));

  return [
    ...staticEntries,
    ...productEntries,
    ...blogEntries,
  ];
}
