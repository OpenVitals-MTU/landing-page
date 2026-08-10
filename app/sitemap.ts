import type { MetadataRoute } from 'next'
import { locales } from '../lib/i18n'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    {
      url: 'https://openvitals.health',
      lastModified,
      changeFrequency: 'weekly',
      priority: 1
    },
    ...locales.map((locale) => ({
      url: `https://openvitals.health/${locale}`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 1
    }))
  ]
}
