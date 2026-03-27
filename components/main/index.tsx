import { SocialButton } from '@/components/main/social-button'
import { getLinks } from '@/src/data/links'
import { getMessages, type Locale } from '@/src/i18n/messages'

/**
 * Show the main component.
 * @return {JSX.Element} The main CTA block.
 */
export function Main({ locale }: { locale: Locale }): JSX.Element {
  const messages = getMessages(locale)
  const linksConfig = getLinks(locale)
  const socialLinks = linksConfig.allLinks.filter((link) => link.social)
  const otherLinks = linksConfig.allLinks.filter((link) => !link.social)

  return (
    <div className="flex flex-col gap-12 text-center w-full">
      <nav aria-label={messages.main.contentCtaTitle}>
        <div className="space-y-5">
          <h2 className="font-display mb-2">{messages.main.contentCtaTitle}</h2>
          <ul className="space-y-3 list-none">
            {otherLinks.map((link, index) => (
              <li key={link.title}>
                <SocialButton
                  {...link}
                  variant={index === 0 ? 'primary' : 'secondary'}
                  isPrimary={index === 0}
                />
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav aria-label={messages.main.socialCtaTitle}>
        <div className="space-y-5">
          <h3 className="font-display text-white/80">
            {messages.main.socialCtaTitle}
          </h3>
          <ul className="flex flex-row gap-3 justify-center flex-wrap list-none">
            {socialLinks.map((link) => (
              <li key={link.title}>
                <SocialButton {...link} variant="ghost" />
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}
