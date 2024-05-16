import { Main } from "@/components/main";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui/footer";

/**
 * Show the main component.
 * @return {JSX.Element} The sum of the two numbers.
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
