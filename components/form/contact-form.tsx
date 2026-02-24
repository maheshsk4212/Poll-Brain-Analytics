"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  designation: z.string().min(2, "Please enter your designation"),
  constituency: z.string().min(2, "Please enter your constituency"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Please share a short project message")
});

type ContactFormValues = z.infer<typeof contactSchema>;

const fields: Array<{ name: keyof ContactFormValues; label: string; type?: string }> = [
  { name: "name", label: "Name" },
  { name: "designation", label: "Designation" },
  { name: "constituency", label: "Constituency" },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "email", label: "Email", type: "email" }
];

export function ContactForm() {
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });

  const onSubmit = async (values: ContactFormValues) => {
    setServerMessage(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    const payload: { message?: string } = await response.json();

    if (!response.ok) {
      setServerMessage(payload.message ?? "Something went wrong. Please try again.");
      return;
    }

    setServerMessage(payload.message ?? "Request submitted.");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-premium" noValidate>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1 block text-sm font-medium text-slate-800">
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type ?? "text"}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-navyBlue focus:ring-2 focus:ring-navyBlue/20"
            {...register(field.name)}
          />
          {errors[field.name] ? <p className="mt-1 text-xs text-red-600">{errors[field.name]?.message}</p> : null}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-navyBlue focus:ring-2 focus:ring-navyBlue/20"
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-full bg-gradient-to-r from-navyBlue to-indiaGreen px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Request Strategy Consultation"}
      </button>

      {serverMessage ? <p className="text-sm text-slate-700">{serverMessage}</p> : null}
    </form>
  );
}
