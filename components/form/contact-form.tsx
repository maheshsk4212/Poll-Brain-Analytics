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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/10 bg-surface p-6 shadow-2xl" noValidate>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name} className="mb-1 block text-sm font-bold uppercase tracking-wider text-white/80">
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type ?? "text"}
            className="w-full rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white outline-none transition focus:border-saffron focus:ring-1 focus:ring-saffron/50"
            {...register(field.name)}
          />
          {errors[field.name] ? <p className="mt-1 text-xs text-red-600">{errors[field.name]?.message}</p> : null}
        </div>
      ))}

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-bold uppercase tracking-wider text-white/80">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className="w-full rounded-md border border-white/20 bg-background px-4 py-3 text-sm text-white outline-none transition focus:border-saffron focus:ring-1 focus:ring-saffron/50"
          {...register("message")}
        />
        {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md bg-saffron px-6 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-saffron-highlight disabled:pointer-events-none disabled:opacity-50"
      >
        {isSubmitting ? "Submitting..." : "Request Strategy Consultation"}
      </button>

      {serverMessage ? <p className="text-sm text-white/70">{serverMessage}</p> : null}
    </form>
  );
}
