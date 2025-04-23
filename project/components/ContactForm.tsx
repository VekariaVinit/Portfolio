import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle"|"success">("idle");

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-4"
      onSubmit={() => setStatus("success")}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label className="block mb-1">Name</label>
        <input
          name="name"
          type="text"
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block mb-1">Email</label>
        <input
          name="email"
          type="email"
          required
          className="w-full border rounded p-2"
        />
      </div>
      <div>
        <label className="block mb-1">Message</label>
        <textarea
          name="message"
          required
          className="w-full border rounded p-2 h-32"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded w-full"
      >
        {status === "success" ? "Thanks!" : "Send Message"}
      </button>
    </form>
  );
}
