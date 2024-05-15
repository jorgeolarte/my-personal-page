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
  const authorization = request.headers.get("Authorization");

  console.log("Authorization", authorization);

  if (!authorization?.includes(`${process.env.BOOKING_TOKEN}`))
    return new Response("Unauthorized", { status: 401 });

  const { name, phone, address } = (await request.json()) as RequestBody;

  return new Response(
    JSON.stringify({
      bookingId: Math.floor(Math.random() * 1000),
      message: `Booking received for ${name} with phone number ${phone} at ${address}`,
    }),
    { status: 200 }
  );
}
