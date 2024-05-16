"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import { ContactSchema, ContactFormValues } from "@/schema/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

/**
 * Show the contact page.
 * @return {JSX} JSX Element.
 */
export function Contact(): JSX.Element {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = (data: ContactFormValues) => {
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h2>Send me a message</h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <Input
          type="text"
          {...register("name", { required: true })}
          placeholder="Tu nombre *"
        />
        {errors.name && (
          <span className="bg-clip-text bg-linear-gradient from-violet to-magenta text-clip text-transparent text-sm">
            {errors.name.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <Textarea
          {...register("message", { required: true })}
          placeholder="Escribe tu mensaje..."
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
          theme="dark"
          size="normal"
        />
        {errors.recaptcha && (
          <span className="bg-clip-text bg-linear-gradient from-violet to-magenta text-clip text-transparent text-sm">
            {errors.recaptcha.message}
          </span>
        )}
      </div>

      <Button className="space-x-2" type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          viewBox="0 0 14 14"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12.101 13.5v-2.833a2.573 2.573 0 0 0-2.573-2.573H7.294V3.918c0-.664-.539-1.202-1.202-1.202v0c-.664 0-1.203.538-1.203 1.202v5.474l-.4.075a1.715 1.715 0 0 0-1.096 2.659l.161.234l.784 1.14" />
            <path d="M2.597 4.932a3.611 3.611 0 1 1 7.034 0" />
          </g>
        </svg>
        <span>Press to touch me</span>
      </Button>
    </form>
  );
}
