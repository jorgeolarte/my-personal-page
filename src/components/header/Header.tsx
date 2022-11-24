import Bio from "./Bio";
import Image from "./Image";

export default function Header() {
  return (
    <div className="flex flex-col gap-5 text-center">
      <Image />
      <Bio />
    </div>
  );
}
