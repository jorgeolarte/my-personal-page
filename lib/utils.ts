import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Tailwind CSS classnames
 * @param {ClassValue[]} inputs The sum of the two numbers.
 * @return {string} The sum of the two numbers.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
