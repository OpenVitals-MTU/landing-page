'use client'

import { useRouter } from 'next/navigation'
import type { Locale } from '@/lib/i18n'
import { localeLabels, locales } from '@/lib/i18n'

export function LanguageSwitcher({
  locale,
  label
}: {
  locale: Locale
  label: string
}) {
  const router = useRouter()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value as Locale
    router.push(`/${newLocale}`)
  }

  return (
    <select
      value={locale}
      onChange={handleLanguageChange}
      aria-label={label}
      className="language-switcher"
    >
      {locales.map((option) => (
        <option key={option} value={option}>
          {localeLabels[option]}
        </option>
      ))}
    </select>
  )
}
