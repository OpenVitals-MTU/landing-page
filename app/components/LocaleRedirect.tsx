'use client'

import { useEffect } from 'react'
import { localeCookieName, resolveLocale } from '@/lib/i18n'

/**
 * Sends `/` to the visitor's language: the `NEXT_LOCALE` cookie when set,
 * otherwise the browser's languages, otherwise English. A static host has no
 * middleware to do this on the server.
 */
export function LocaleRedirect() {
  useEffect(() => {
    const cookie = document.cookie
      .split('; ')
      .find((entry) => entry.startsWith(`${localeCookieName}=`))
      ?.slice(localeCookieName.length + 1)
    const locale = resolveLocale(cookie, navigator.languages.join(','))
    window.location.replace(`/${locale}/${window.location.hash}`)
  }, [])

  return null
}
