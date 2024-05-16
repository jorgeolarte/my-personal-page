import Image from "next/image";
import Link from "next/link";

/**
 * Show the image header.
 * @return {JSX.Element} The sum of the two numbers.
 */
export function ImageHeader(): JSX.Element {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="relative">
        <div className="relative">
          <div className="absolute -z-10 w-32 h-32 md:w-44 md:h-44 bg-linear-gradient from-magenta to-violet animate-rotate rounded-full blur-xl"></div>
          <Link href="/" className="cursor-pointer">
            <Image
              src="/jorge-olarte.jpg"
              className="w-32 md:w-44 rounded-full"
              alt="Jorge Olarte"
              width={176}
              height={176}
            />
          </Link>
        </div>
        <div className="absolute bottom-1 right-1 md:bottom-2 md:right-2 animate-pulse">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/logo-color.png"
              alt="Following my heart"
              className="w-7 md:w-9 rounded-full"
              width={36}
              height={36}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1>Jorge Olarte</h1>
        <h3>Software Developer</h3>
      </div>
    </div>
  );
}
