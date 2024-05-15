import { SocialButton } from "@/components/main/social-button";
import { getLinks } from "@/actions/datocms";

/**
 * Show the main component.
 * @return {Promise<JSX.Element>} The sum of the two numbers.
 *
 */
export async function Main(): Promise<JSX.Element> {
  const data = await getLinks();

  return (
    <div className="container md:w-4/12 w-11/12">
      <div className="flex flex-col gap-6 mt-10 md:mt-7">
        {data.allLinks.map((link) => (
          <SocialButton key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}
