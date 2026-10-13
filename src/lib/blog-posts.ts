export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  sections: BlogSection[];
  sources: { label: string; href: string }[];
};

import { additionalBlogPosts } from "./additional-blog-posts";

export const blogPosts: BlogPost[] = additionalBlogPosts.map((post, index) => ({
  ...post,
  featured: index < 5,
}));

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
