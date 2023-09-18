import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  url: string;
  target: string;
  icon: string;
};

/**
 * Show the profile link.
 * @param {string} title - The title of the link.
 * @param {string} url - The url of the link.
 * @param {string} target - The target of the link.
 * @param {string} icon - The icon of the link."
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function ProfileLink({
  title,
  url,
  target,
  icon,
}: Props): JSX.Element {
  return (
    <Link
      className="relative flex flex-row justify-center items-center"
      href={url}
      target={target}
      rel="noreferrer"
    >
      <div className="absolute backdrop-blur-2xl bg-gray/40 hover:bg-black rounded-xl w-full h-9"></div>

      <div className="flex flex-row justify-center items-center gap-2 z-10">
        <Image
          src={icon}
          alt={title}
          className="fill-magenta"
          width={20}
          height={20}
        />

        <div className="hover:btn-text">{title}</div>
      </div>
    </Link>
  );
}
