import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
  url: string
  target: string
  icon: string
  social: boolean
  variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'
  isPrimary?: boolean
}

/**
 * Print button with social network icon.
 * @param {Props} props - Component props
 * @return {JSX.Element} The SocialButton component.
 *
 */
export function SocialButton({
  title,
  url,
  target,
  icon,
  social,
  variant = 'default',
  isPrimary = false,
}: Props): JSX.Element {
  const buttonClass = social
    ? 'w-auto'
    : isPrimary
      ? 'w-full'
      : 'w-full max-w-md'

  const buttonSize = isPrimary ? 'lg' : 'default'

  return (
    <Button className={buttonClass} variant={variant} size={buttonSize}>
      <Link
        className="flex flex-row gap-2.5 items-center"
        href={url}
        target={target}
        rel="noreferrer"
      >
        <Image src={icon} alt={title} width={20} height={20} />
        {!social && title}
      </Link>
    </Button>
  )
}
