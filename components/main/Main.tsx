import ProfileLink from "./ProfileLink";

type Props = {
  allLinks: {
    title: string;
    url: string;
    target: string;
    icon: string;
    active: boolean;
  }[];
};

/**
 * Get the links from DatoCMS.
 * @return {Props} The sum of the two numbers.
 * @throws Will throw an error if the response is not ok.
 */
async function getLinks(): Promise<Props> {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_DATOCMS_API_URL}`, {
    method: "POST",
    headers: {
      Authorization: `${process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
          allLinks(filter: { active: { eq: true } }, orderBy: order_ASC) {
            title
            url
            target
            icon
            active
          }
        }`,
    }),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const json = await response.json();
  return json.data;
}

/**
 * Show the main component.
 * @return {Promise<JSX.Element>} The sum of the two numbers.
 *
 */
export default async function Main(): Promise<JSX.Element> {
  const data = await getLinks();

  return (
    <div className="container md:w-4/12 w-11/12">
      <div className="flex flex-col gap-6 mt-10 md:mt-7">
        {data.allLinks.map((link) => (
          <ProfileLink key={link.title} {...link} />
        ))}
      </div>
    </div>
  );
}
