import Link from 'next/link'
import type { Locale } from '@/lib/i18n'
import { localeLabels, locales } from '@/lib/i18n'

export function LanguageSwitcher({
  locale,
  label
}: {
  locale: Locale
  label: string
}) {
  return (
    <div className="language-switcher" aria-label={label}>
      {locales.map((option) => (
        <Link
          key={option}
          href={`/${option}`}
          hrefLang={option}
          className={option === locale ? 'is-active' : undefined}
          aria-current={option === locale ? 'page' : undefined}
        >
          {localeLabels[option]}
        </Link>
      ))}
    </div>
  )
}
