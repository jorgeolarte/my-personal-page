import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    {
      url: 'https://jorgeolarte.com/en',
      lastModified: now,
    },
    {
      url: 'https://jorgeolarte.com/es',
      lastModified: now,
    },
  ]
}
