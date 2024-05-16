import { Contact } from "@/components/contact";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui/footer";

/**
 * Show the main component.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function ContactPage(): JSX.Element {
  return (
    <>
      <Header />
      <Contact />
      <Footer />
    </>
  );
}
