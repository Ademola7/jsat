// ContactForm.jsx
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzdvnlbb", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="md:col-span-2">
      <h2 className="text-2xl font-semibold text-gray-900">
        Send us a message
      </h2>
      <p className="mt-2 max-w-md text-gray-600">
        Fill out the form and our team will get back to you within one business
        day.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      >
        {/* Hidden metadata for Formspree */}
        <input
          type="hidden"
          name="_subject"
          value="New Contact Form Submission"
        />

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Phone number
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full resize-none rounded-lg border-gray-300 px-4 py-3 focus:border-orange-500 focus:ring-orange-500"
            placeholder="Tell us a bit about your project..."
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 text-sm font-medium text-white transition hover:bg-orange-600 disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-green-600">
            Thanks! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}
