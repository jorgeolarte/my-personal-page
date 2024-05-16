import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  url: string;
  target: string;
  icon: string;
  social: boolean;
};

/**
 * Print button with social network icon.
 * @param {string} title - The title of the link.
 * @param {string} url - The url of the link.
 * @param {string} target - The target of the link.
 * @param {string} icon - The icon of the link.
 * @param {boolean} social - If the link is a social network.
 * @return {JSX.Element} The SocialButton component.
 *
 */
export function SocialButton({
  title,
  url,
  target,
  icon,
  social,
}: Props): JSX.Element {
  return (
    <Button className="w-full">
      <Link
        className="flex flex-row gap-2"
        href={url}
        target={target}
        rel="noreferrer"
      >
        <Image src={icon} alt={title} width={20} height={20} />

        {!social && title}
      </Link>
    </Button>
  );
}
