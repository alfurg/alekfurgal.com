// app/sitemap.ts
import type { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://www.alekfurgal.com'

export default function sitemap(): MetadataRoute.Sitemap {
  // Hand-maintained pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.5 },
  ]

  // Auto-generated from blog
  const blogDir = path.join(process.cwd(), 'app', 'blog')
  const articles: MetadataRoute.Sitemap = fs
    .readdirSync(blogDir, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .filter((e) => fs.existsSync(path.join(blogDir, e.name, 'page.mdx')))
    .map((e) => ({
      url: `${BASE_URL}/blog/${e.name}`,
      lastModified: fs.statSync(path.join(blogDir, e.name, 'page.mdx')).mtime,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...articles]
}