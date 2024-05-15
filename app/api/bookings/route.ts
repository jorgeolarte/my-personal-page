type RequestBody = {
  name: string;
  phone: string;
  address: string;
};

/**
 * Recieve a POST request with phone, name, and location of a taxi driver
 * @param {Request} request - The request object.
 * @return {Promise<Response>} The response object.
 */
export async function POST(request: Request) {
  const authorization = request.headers.get("authorization");

  if (!authorization?.startsWith(`Bearer ${process.env.BOOKING_TOKEN}`))
    return new Response("Unauthorized", { status: 401 });

  const { name, phone, address } = (await request.json()) as RequestBody;

  console.log(name, phone, address);

  return new Response("OK", { status: 200 });
}
