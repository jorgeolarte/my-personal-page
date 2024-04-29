import { HeaderWrapper } from "@/components/ui/header-wrapper";
import { Bio } from "@/components/header/bio";
import { ImageHeader } from "@/components/header/image-header";

/**
 * Show the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function Header(): JSX.Element {
  return (
    <HeaderWrapper>
      <>
        <ImageHeader />
        <Bio />
      </>
    </HeaderWrapper>
  );
}
