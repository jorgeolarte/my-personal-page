import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type Locale = 'en' | 'es'

function isLocale(value: string): value is Locale {
  return value === 'en' || value === 'es'
}

export function GET(
  request: NextRequest,
  context: { params: Promise<{ lang: string }> },
) {
  // Next.js 15+ makes `params` async.
  // In Next.js 16 this signature is required for type-checking.
  const langPromise = context.params
  return langPromise.then(({ lang }) => {
  if (!isLocale(lang)) return NextResponse.redirect(new URL('/', request.url))

  const nextParam = request.nextUrl.searchParams.get('next')
  const safeNext =
    nextParam && nextParam.startsWith('/') ? nextParam : lang === 'es' ? '/es' : '/'

  const url = new URL(safeNext, request.url)
  const response = NextResponse.redirect(url)
  response.cookies.set('locale', lang, {
    path: '/',
    sameSite: 'lax',
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 365,
  })
  return response
  })
}

