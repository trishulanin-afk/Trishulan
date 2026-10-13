import type { MetadataRoute } from "next";

const siteUrl = (process.env.PUBLIC_SITE_URL || "https://www.trishulan.com").replace(/\/+$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
