import { FiSend } from "react-icons/fi";

import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm({ big }) {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Please provide a name."),
    email: yup
      .string()
      .required("Please provide an email")
      .email("Please provide a valid email."),
    message: yup
      .string()
      .required("Message is required.")
      .min(20, "Atleast 20 chars."),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          to_name: "Joseph",
          from_email: data.email,
          to_email: "josephjamolod@gmail.com",
          message: data.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);

          alert("Thank you. I will get back to you as soon as possible.");
          reset();
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col flex-1 justify-start w-full pt-3 gap-y-1 md:gap-y-1"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
        Contact.
      </h1>
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm dark:text-white">
          Your Name:
        </label>
        <p className="text-red-400 text-sm">{errors.name?.message}</p>
      </div>

      <input
        placeholder={`${big ? "What's your name?" : ""}`}
        type="text"
        id="name"
        {...register("name")}
        className="placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-slate-900 outline-none px-3 py-1 sm:py-2 "
      />
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm dark:text-white">
          Your Email:
        </label>
        <p className="text-red-400 text-sm">{errors.email?.message}</p>
      </div>
      <input
        placeholder={`${big ? "What's your web address?" : ""}`}
        type="email"
        id="email"
        {...register("email")}
        className="placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-slate-900 outline-none px-3 py-1 sm:py-2 "
      />
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm dark:text-white">
          Your Message:
        </label>
        <p className="text-red-400 text-sm ">{errors.message?.message}</p>
      </div>
      <textarea
        placeholder={`${big ? "What do you want to say?" : ""}`}
        type="text"
        id="message"
        {...register("message")}
        className="h-1/2 placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-slate-900 outline-none px-3 py-1 sm:py-2  resize-none"
      />
      <button
        disabled={loading}
        className="flex items-center justify-center gap-x-2 font-semibold text-slate-900 bg-neutral-50 hover:bg-neutral-200 w-1/2 self-center py-2 mt-3"
      >
        {loading ? "Sending..." : "Send"}{" "}
        <FiSend className="font-semibold text-xl " />
      </button>
    </form>
  );
}
