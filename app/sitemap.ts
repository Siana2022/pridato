import { MetadataRoute } from 'next'
import { createReader } from '@keystatic/core/reader'
import config from '@/keystatic.config'

const BASE_URL = 'https://pridato.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Páginas estáticas
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/servicios`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/contacto`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/normativa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/normativa/rgpd`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/normativa/lopdgdd`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/normativa/lssi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/normativa/ia-act`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/normativa/dsa`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/normativa/eidas2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/normativa/nis2`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/normativa/dma`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/guias/aepd`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/guias/aesia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  // Posts del blog (dinámicos desde Keystatic)
  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const reader = createReader(process.cwd(), config)
    const slugs = await reader.collections.posts.list()
    const posts = await Promise.all(
      slugs.map(async slug => {
        const post = await reader.collections.posts.read(slug)
        return { slug, date: post?.date }
      })
    )
    blogRoutes = posts.map(({ slug, date }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: date ? new Date(date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // Si falla la lectura del blog, continúa sin los posts
  }

  return [...staticRoutes, ...blogRoutes]
}
