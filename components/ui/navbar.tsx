"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Show the navbar
 * @return {JSX.Element}
 */
export function Navbar() {
  return (
    <nav className="bg-primary/40 rounded-md w-full p-4 flex flex-row justify-between items-center">
      <div className="flex flex-row justify-center items-center gap-2">
        <Link href="/">
          <Image
            src="/logo-color.png"
            className="w-12 rounded-full"
            alt="Jorge Olarte"
            width={36}
            height={36}
          />
        </Link>
        <div className="flex flex-col ">
          <span className="text-sm font-bold">Jorge Olarte</span>
          <span className="text-xs">Software Developer</span>
        </div>
      </div>
      <ul className="list-none flex flex-row text-sm">
        <li>
          <Button variant="link">
            <Link href="/">Home</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/bot">Bot</Link>
          </Button>
        </li>
        <li>
          <Button variant="link">
            <Link href="/contact">Contact</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
