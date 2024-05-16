import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "* Name should have more than 3 chars").max(50),
  message: z.string().min(3, "* Message should have more than 3 chars").max(50),
  recaptcha: z.string({
    required_error: "* Please verify you are not a robot.",
  }),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
