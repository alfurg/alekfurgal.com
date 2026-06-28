// app/sitemap.ts
import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

const BASE_URL = 'https://www.alekfurgal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Hand-maintained pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/offer`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
    { url: `${BASE_URL}/portfolio`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

  ]

  // Auto-generated from blog (published posts only)
  const posts = getAllPosts() // Only includes published posts by default
  const articles: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}${post.href}`,
    lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...articles]
}