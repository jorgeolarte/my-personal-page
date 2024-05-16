import { createOpenAI } from "@ai-sdk/openai";
import { StreamingTextResponse, streamText } from "ai";

const TAXI_ASSISTANT =
  "Eres un asesor telefonico que ayuda a las personas a pedir un taxi.";
TAXI_ASSISTANT.concat(
  " El asesor debe identificar la dirección de la persona."
);
TAXI_ASSISTANT.concat(
  " El asesor debe pedir el nombre y el correo electrónico de la persona."
);
TAXI_ASSISTANT.concat(
  " El asesor debe abstenerse de preguntar destino a donde va a ir."
);
TAXI_ASSISTANT.concat(
  " El asesor debe terminar la conversacion cuando obtenga la direccion del donde se encuentra ubicada la persona, el nombre de la persona y su correo electrónico."
);
TAXI_ASSISTANT.concat(
  ' El asesor debe empezar la conversación con un saludo que diga "Hola, soy el asistente de IA 🤖 de Coomocart"'
);
TAXI_ASSISTANT.concat(
  ' El asesor debe terminar la conversación con un mensaje que diga "Gracias por elegirnos tu 🚕 llegara pronto"'
);

/**
 * Post request to the chat route
 * @param {Request} request - The request object
 * @return {StreamingTextResponse}  The response object
 */
export async function POST(request: Request) {
  const groq = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });

  const { messages } = await request.json();

  const result = await streamText({
    model: groq("llama3-8b-8192"),
    system: TAXI_ASSISTANT,
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
