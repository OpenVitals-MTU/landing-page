/** The app's languages, in its picker's order. `pt` is European Portuguese, `zh` Simplified Chinese. */
export const locales = [
  'en',
  'cs',
  'de',
  'es',
  'et',
  'fi',
  'fr',
  'gl',
  'it',
  'ja',
  'pl',
  'pt',
  'ru',
  'zh'
] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export const localeCookieName = 'NEXT_LOCALE'

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  cs: 'Čeština',
  de: 'Deutsch',
  es: 'Español',
  et: 'Eesti',
  fi: 'Suomi',
  fr: 'Français',
  gl: 'Galego',
  it: 'Italiano',
  ja: '日本語',
  pl: 'Polski',
  pt: 'Português',
  ru: 'Русский',
  zh: '简体中文'
}

/** Full language tag, for `<html lang>`, hreflang and date formats. */
export const localeTags: Record<Locale, string> = {
  en: 'en',
  cs: 'cs',
  de: 'de',
  es: 'es',
  et: 'et',
  fi: 'fi',
  fr: 'fr',
  gl: 'gl',
  it: 'it',
  ja: 'ja',
  pl: 'pl',
  pt: 'pt-PT',
  ru: 'ru',
  zh: 'zh-CN'
}

/** Open Graph locale. */
export const ogLocales: Record<Locale, string> = {
  en: 'en_US',
  cs: 'cs_CZ',
  de: 'de_DE',
  es: 'es_ES',
  et: 'et_EE',
  fi: 'fi_FI',
  fr: 'fr_FR',
  gl: 'gl_ES',
  it: 'it_IT',
  ja: 'ja_JP',
  pl: 'pl_PL',
  pt: 'pt_PT',
  ru: 'ru_RU',
  zh: 'zh_CN'
}

export function isLocale(value: string | undefined | null): value is Locale {
  return (locales as readonly string[]).includes(value ?? '')
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
