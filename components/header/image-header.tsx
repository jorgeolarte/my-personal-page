import Image from 'next/image'
import Link from 'next/link'
import type { Messages } from '@/src/i18n/messages'
import type { Locale } from '@/src/i18n/messages'

/**
 * Show the image header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function ImageHeader({
  messages,
  homeHref,
  locale,
}: {
  messages: Messages
  homeHref: string
  locale: Locale
}): JSX.Element {
  const flag = locale === 'es' ? '🇨🇴' : '🇺🇸'
  const flagLabel = locale === 'es' ? 'Español (Colombia)' : 'English (United States)'
  const toggleHref =
    locale === 'es'
      ? `/locale/en?next=${encodeURIComponent('/')}`
      : `/locale/es?next=${encodeURIComponent('/es')}`
  const toggleLabel =
    locale === 'es' ? 'Cambiar idioma a English' : 'Switch language to Español'

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="relative">
        <div className="relative">
          <div className="absolute -z-10 w-32 h-32 md:w-44 md:h-44 bg-linear-gradient from-magenta to-violet animate-rotate rounded-full blur-xl"></div>
          <Link href={homeHref} className="cursor-pointer">
            <Image
              src="/jorge-olarte-pic.jpg"
              className="w-32 md:w-44 rounded-full"
              alt="Jorge Olarte"
              width={176}
              height={176}
            />
          </Link>
        </div>
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 animate-pulse">
          <Link href={toggleHref} className="cursor-pointer" aria-label={toggleLabel}>
            <span
              aria-label={flagLabel}
              role="img"
              className="w-7 h-7 md:w-9 md:h-9 aspect-square rounded-full flex items-center justify-center leading-none text-base md:text-lg bg-gray"
            >
              {flag}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Jorge Olarte</h1>
        <h3>{messages.header.role}</h3>
      </div>
    </div>
  )
}
