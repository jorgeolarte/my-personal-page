import Image from 'next/image'
import Link from 'next/link'
import type { Locale, Messages } from '@/src/i18n/messages'

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
  const flagLabel =
    locale === 'es' ? 'Español (Colombia)' : 'English (United States)'
  const toggleHref =
    locale === 'es'
      ? `/locale/en?next=${encodeURIComponent('/en')}`
      : `/locale/es?next=${encodeURIComponent('/es')}`
  const toggleLabel =
    locale === 'es' ? 'Cambiar idioma a English' : 'Switch language to Español'

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="relative">
        <Link href={homeHref} className="cursor-pointer">
          <Image
            src="/jorge-olarte-pic.jpg"
            className="w-32 md:w-44 rounded-full"
            alt="Jorge Olarte"
            width={176}
            height={176}
          />
        </Link>
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2">
          <Link
            href={toggleHref}
            className="cursor-pointer"
            aria-label={toggleLabel}
          >
            <span
              aria-label={flagLabel}
              role="img"
              className="w-7 h-7 md:w-9 md:h-9 aspect-square rounded-full flex items-center justify-center leading-none text-base md:text-lg bg-accent border border-white/10 hover:border-magenta/50 transition-colors"
            >
              {flag}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="font-display">Jorge Olarte</h1>
        <h2 className="font-display font-medium text-white/80">
          {messages.header.role}
        </h2>
      </div>
    </div>
  )
}
