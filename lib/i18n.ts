export const locales = ['en', 'es'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeCookieName = 'NEXT_LOCALE'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español'
}

export function isLocale(value: string | undefined | null): value is Locale {
  return value === 'en' || value === 'es'
}

/** Prefer an explicit cookie, then Accept-Language, then English. */
export function resolveLocale(
  cookieValue: string | undefined,
  acceptLanguage: string | null
): Locale {
  if (isLocale(cookieValue)) return cookieValue

  if (!acceptLanguage) return defaultLocale

  const candidates = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const qualityParam = params.find((param) => param.trim().startsWith('q='))
      const quality = qualityParam ? Number(qualityParam.trim().slice(2)) : 1
      return {
        tag: tag.trim().toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 1
      }
    })
    .filter((candidate) => candidate.tag.length > 0)
    .sort((a, b) => b.quality - a.quality)

  for (const candidate of candidates) {
    if (isLocale(candidate.tag)) return candidate.tag
    const language = candidate.tag.split('-')[0]
    if (isLocale(language)) return language
  }

  return defaultLocale
}

export function localePath(locale: Locale, hash = ''): string {
  return `/${locale}${hash}`
}
