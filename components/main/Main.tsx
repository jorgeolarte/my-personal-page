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

async function GetLinks(): Promise<Props> {
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
          allLinks(filter: { active: { eq: true } }) {
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

export default async function Main() {
  const data = await GetLinks();

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
