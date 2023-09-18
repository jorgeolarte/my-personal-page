import Bio from "./Bio";
import ImageHeader from "./Image";

export default function Header() {
  return (
    <div className="flex flex-col gap-6 md:gap-5 text-center">
      <ImageHeader />
      <Bio />
    </div>
  );
}
