import { NextRequest, NextResponse } from 'next/server'
import { isLocale, localeCookieName, resolveLocale } from './lib/i18n'

function pathnameLocale(pathname: string) {
  const segment = pathname.split('/')[1]
  return isLocale(segment) ? segment : null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const currentLocale = pathnameLocale(pathname)

  if (currentLocale) {
    const response = NextResponse.next()
    response.cookies.set(localeCookieName, currentLocale, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax'
    })
    return response
  }

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  const locale = resolveLocale(
    request.cookies.get(localeCookieName)?.value,
    request.headers.get('accept-language')
  )
  const url = request.nextUrl.clone()
  url.pathname = pathname === '/' ? `/${locale}` : `/${locale}${pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)']
}
