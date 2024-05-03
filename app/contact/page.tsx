import { Contact } from "@/components/contact";

export const runtime = "edge";

/**
 * Show the main component.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function ContactPage(): JSX.Element {
  return <Contact />;
}
