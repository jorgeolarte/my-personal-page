"use server";

type AllLinksProps = {
  allLinks: {
    title: string;
    url: string;
    target: string;
    icon: string;
    active: boolean;
    social: boolean;
  }[];
};

/**
 * Get the links from DatoCMS.
 * @return {AllLinksProps}
 * @throws Will throw an error if the response is not ok.
 */
export async function getLinks(): Promise<AllLinksProps> {
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
                social
              }
            }`,
    }),
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Error fetching data");
  }

  const json = await response.json();
  return json.data as AllLinksProps;
}
