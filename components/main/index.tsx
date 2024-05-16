import { SocialButton } from "@/components/main/social-button";
import { getLinks } from "@/actions/datocms";

/**
 * Show the main component.
 * @return {Promise<JSX.Element>} The sum of the two numbers.
 *
 */
export async function Main(): Promise<JSX.Element> {
  const links = await getLinks();

  const socialLinks = links.allLinks.filter((link) => link.social);
  const otherLinks = links.allLinks.filter((link) => !link.social);

  return (
    <div className="w-full flex flex-col gap-6 text-center">
      {otherLinks.map((link) => (
        <SocialButton key={link.title} {...link} />
      ))}

      <div className="space-y-4">
        <h3>Follow me</h3>
        <div className="flex flex-row gap-2">
          {socialLinks.map((link) => (
            <SocialButton key={link.title} {...link} />
          ))}
        </div>
      </div>
    </div>
  );
}
