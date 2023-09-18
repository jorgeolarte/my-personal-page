import Bio from "./Bio";
import ImageHeader from "./Image";

/**
 * Show the header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function Header(): JSX.Element {
  return (
    <div className="flex flex-col gap-6 md:gap-5 text-center">
      <ImageHeader />
      <Bio />
    </div>
  );
}
