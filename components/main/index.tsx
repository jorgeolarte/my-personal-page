import { SocialButton } from '@/components/main/social-button'
import { links as linksConfig } from '@/src/data/links'

/**
 * Show the main component.
 * @return {JSX.Element} The main CTA block.
 */
export function Main(): JSX.Element {
  const socialLinks = linksConfig.allLinks.filter((link) => link.social)
  const otherLinks = linksConfig.allLinks.filter((link) => !link.social)

  return (
    <div className="flex flex-col gap-6 text-center ">
      <div className="space-y-4">
        <h2>Check out this</h2>
        {otherLinks.map((link) => (
          <SocialButton key={link.title} {...link} />
        ))}
      </div>

      <div className="space-y-4">
        <h3>Follow me</h3>
        <div className="flex flex-row gap-2">
          {socialLinks.map((link) => (
            <SocialButton key={link.title} {...link} />
          ))}
        </div>
      </div>
    </div>
  )
}
