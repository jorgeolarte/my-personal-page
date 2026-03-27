import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Footer component with credits.
 * @return {JSX.Element} The footer component.
 */
export function Footer({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)

  return (
    <footer className="mt-auto pt-16 text-center space-y-0.5">
      <p className="font-body text-sm text-white/50">
        {messages.footer.developedBy}{' '}
        <span className="text-white/70 font-medium">Jorge Olarte</span>
      </p>
      <p className="font-body text-sm text-white/50">
        {messages.footer.designedBy}{' '}
        <span className="text-white/70 font-medium">Jhony Espinosa</span>
      </p>
    </footer>
  )
}
