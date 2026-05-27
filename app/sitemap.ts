import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const baseUrl = "https://www.alekfurgal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
    },

    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.href}`,
      lastModified: new Date(),
    })),
  ];
}