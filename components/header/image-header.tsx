import Image from 'next/image'
import Link from 'next/link'
import type { Locale, Messages } from '@/src/i18n/messages'

/**
 * Profile image with name, role, and language switcher.
 * @return {JSX.Element} The image header component.
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
    <div className="flex flex-col gap-6 items-center">
      <div className="relative">
        <Link href={homeHref} className="cursor-pointer group/image">
          <Image
            src="/jorge-olarte-pic.jpg"
            className="w-36 md:w-48 rounded-full ring-2 ring-white/5 group-hover/image:ring-white/10 transition-all duration-200"
            alt="Jorge Olarte"
            width={192}
            height={192}
          />
        </Link>
        <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
          <Link
            href={toggleHref}
            className="cursor-pointer group"
            aria-label={toggleLabel}
          >
            <span
              aria-label={flagLabel}
              role="img"
              className="w-8 h-8 md:w-10 md:h-10 aspect-square rounded-full flex items-center justify-center leading-none text-base md:text-lg bg-accent border border-white/10 group-hover:border-magenta/50 group-hover:scale-105 transition-all duration-200 shadow-lg"
            >
              {flag}
            </span>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-display">Jorge Olarte</h1>
        <h2 className="font-display font-medium text-white/80">
          {messages.header.role}
        </h2>
      </div>
    </div>
  )
}
