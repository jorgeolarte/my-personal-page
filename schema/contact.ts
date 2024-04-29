import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "Tu nombre debe ser mayor a 3 caracteres").max(50),
  message: z
    .string()
    .min(3, "El mensaje debe ser mayor a 3 caracteres")
    .max(50),
  recaptcha: z.string({
    required_error: "Debes completar el captcha",
  }),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
