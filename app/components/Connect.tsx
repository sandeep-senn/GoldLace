"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, my name is ${name}. My phone number is ${phone}. Here's my query: ${query}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919981416552?text=${encodedMessage}`, "_blank"); 
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-5xl font-bold text-center text-blue-900 mb-10">Let’s Connect</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-md text-blue-600"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone / WhatsApp"
          className="w-full px-4 py-2 border rounded-md text-blue-600"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Query / Product"
          className="w-full px-4 py-2 border rounded-md text-blue-600"
          rows={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-900 hover:bg-green-900 text-white py-2 rounded-md transition"
        >
          Send on WhatsApp
        </button>
      </form>
    </div>
  );
}
