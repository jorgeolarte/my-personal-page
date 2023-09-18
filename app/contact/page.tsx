"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";

const schema = z.object({
  name: z.string().min(3, "Tu nombre debe ser mayor a 3 caracteres").max(50),
  message: z
    .string()
    .min(3, "El mensaje debe ser mayor a 3 caracteres")
    .max(50),
  recaptcha: z.string({
    required_error: "Debes completar el captcha",
  }),
});

type FormValues = z.infer<typeof schema>;

export default function Page() {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    const { name, message } = data;

    const allMessage = `Hey Tote!, soy ${name} y quiero decirte que ${message}`;

    const url = `https://api.whatsapp.com/send?phone=${
      process.env.NEXT_PUBLIC_MY_PHONE_NUMBER
    }&text=${encodeURIComponent(allMessage)}`;

    window.open(url, "_blank");
    recaptchaRef.current?.reset();
    router.push("/");
  };

  const handleRecaptcha = (value: string | null) => {
    setValue("recaptcha", value || "");
  };

  return (
    <div className="md:w-4/12 w-10/12">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 mt-10 md:mt-7"
      >
        <h2>Contáctame</h2>
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="hidden">
            Nombre
          </label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Tu nombre *"
            className="rounded-xl h-9 p-4 text-white border-0 bg-gray/40 outline-none hover:border-2 hover:border-magenta focus:border-magenta focus:border-2 focus:bg-white/6 placeholder-white"
          />
          {errors.name && (
            <span className="bg-clip-text bg-linear-gradient from-violet to-magenta text-clip text-transparent text-sm">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="hidden">
            Escribe tu mensaje
          </label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Escribe tu mensaje..."
            className="rounded-xl h-24 p-4 text-white border-0 bg-gray/40 outline-none hover:border-2 hover:border-magenta focus:border-magenta focus:border-2 focus:bg-white/ placeholder-white"
          />
          {errors.message && (
            <span className="bg-clip-text bg-linear-gradient from-violet to-magenta text-clip text-transparent text-sm">
              {errors.message.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 justify-center items-center">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_GOOGLE_PUBLIC_SITE_KEY || ""}
            ref={recaptchaRef}
            onChange={handleRecaptcha}
          />
          {errors.recaptcha && (
            <span className="bg-clip-text bg-linear-gradient from-violet to-magenta text-clip text-transparent text-sm">
              {errors.recaptcha.message}
            </span>
          )}
        </div>

        <button type="submit">
          <div className="flex flex-row justify-center items-center gap-2 backdrop-blur-2xl bg-gray/40 hover:bg-black rounded-xl h-9 hover:btn-text cursor-pointer">
            <Image
              src="/whatsapp.svg"
              alt="Enviar mensaje"
              className="fill-magenta"
              width={20}
              height={20}
            />
            Enviar mensaje
          </div>
        </button>
      </form>
    </div>
  );
}
