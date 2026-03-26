import { HeaderWrapper } from '@/components/header/header-wrapper'
import { ImageHeader } from '@/components/header/image-header'

/**
 * Show the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <ImageHeader />
      <div>
        <p>💻 MSc In Software Engineering just because</p>
        <p>🤓 Following my heart since I was born</p>
        <p>😎 I found out my purpose helping others</p>
      </div>
    </HeaderWrapper>
  )
}
