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
  const { name, phone, address } = (await request.json()) as RequestBody;

  return new Response(
    JSON.stringify({
      bookingId: Math.floor(Math.random() * 1000),
      message: `Hey ${name}!, tu movil ha sido confirmado a la dirección ${address}, hemos enviado un mensaje a ${phone} con los detalles de tu viaje.`,
    }),
    { status: 200 }
  );
}
