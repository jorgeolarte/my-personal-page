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
}: Props): JSX.Element {
  return (
    <Button className="w-full" variant={variant}>
      <Link
        className="flex flex-row gap-2 items-center"
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
