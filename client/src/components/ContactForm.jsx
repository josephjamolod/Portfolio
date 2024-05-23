import { FiSend } from "react-icons/fi";

import emailjs from "@emailjs/browser";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function ContactForm({ big }) {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Please Provide your name."),
    email: yup
      .string()
      .required("Please provide an email")
      .email("Please provide a valid email."),
    message: yup
      .string()
      .required("Please provide a message")
      .min(20, "Message atleast 20 characters."),
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
      className="flex flex-col flex-1 justify-start w-full pt-5 md:pt-10  gap-y-4"
    >
      <h1 className="text-5xl font-bold text-gray-900">Contact.</h1>
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm">Your Name:</label>
        <p className="text-red-400 text-sm">{errors.name?.message}</p>
      </div>

      <input
        placeholder={`${big ? "What's your name?" : ""}`}
        type="text"
        id="name"
        {...register("name")}
        className="placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-gray-900 outline-none px-3 py-2 rounded"
      />
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm">Your Email:</label>
        <p className="text-red-400 text-sm">{errors.email?.message}</p>
      </div>
      <input
        placeholder={`${big ? "What's your web address?" : ""}`}
        type="email"
        id="email"
        {...register("email")}
        className="placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-gray-900 outline-none px-3 py-2 rounded"
      />
      <div className="flex items-center justify-between ">
        <label className="font-semibold text-sm">Your Message:</label>
        <p className="text-red-400 text-sm ">{errors.message?.message}</p>
      </div>
      <textarea
        placeholder={`${big ? "What do you want to say?" : ""}`}
        type="text"
        id="message"
        {...register("message")}
        className="h-1/2 placeholder:text-sm placeholder:text-slate-400 border bg-neutral-50 border-slate-400 text-gray-900 outline-none px-3 py-4 rounded resize-none"
      />
      <button
        disabled={loading}
        className="flex items-center justify-center gap-x-2 font-semibold text-gray-900 bg-neutral-50 hover:bg-neutral-200 w-1/2 self-center py-2 mt-2"
      >
        {loading ? "Sending..." : "Send"}{" "}
        <FiSend className="font-semibold text-xl " />
      </button>
    </form>
  );
}
