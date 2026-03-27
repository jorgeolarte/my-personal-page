import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type Locale = 'en' | 'es'

function parsePreferredLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return 'en'

  // Example header: "es-CO,es;q=0.9,en;q=0.8"
  // We only need to know if Spanish is preferred.
  const firstToken = acceptLanguage.split(',')[0]?.trim().toLowerCase()
  if (firstToken?.startsWith('es')) return 'es'
  return 'en'
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only auto-redirect on the root route.
  if (pathname !== '/') return NextResponse.next()

  const cookieLocale = request.cookies.get('locale')?.value as
    | Locale
    | undefined
  if (cookieLocale === 'es') {
    const url = request.nextUrl.clone()
    url.pathname = '/es'
    return NextResponse.redirect(url)
  }
  if (cookieLocale === 'en') {
    const url = request.nextUrl.clone()
    url.pathname = '/en'
    return NextResponse.redirect(url)
  }

  const preferred = parsePreferredLocale(request.headers.get('accept-language'))
  if (preferred === 'es') {
    const url = request.nextUrl.clone()
    url.pathname = '/es'
    const response = NextResponse.redirect(url)
    response.cookies.set('locale', 'es', {
      path: '/',
      sameSite: 'lax',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 365,
    })
    return response
  }

  const url = request.nextUrl.clone()
  url.pathname = '/en'
  return NextResponse.redirect(url)
}

export const proxyConfig = {
  matcher: ['/'],
}
