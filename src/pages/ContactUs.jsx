import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent successfully!" });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ ok: false, msg: data.error || "Mail failed!" });
      }
    } catch (error) {
      setStatus({ ok: false, msg: "Network error. Server not running!" });
    }

    setLoading(false);
  };

  // Auto hide popup
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <main className="flex-grow text-center px-4 pt-32">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 mb-10 text-base">
          We’d love to hear from you 💌
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="input"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="input"
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="input"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="input resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-indigo-600 text-white py-3 text-base rounded-2xl font-semibold hover:bg-indigo-700 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </main>

      {/* POPUP MESSAGE */}
      {status && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-slideIn">
          <div
            className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg backdrop-blur-md
            ${
              status.ok
                ? "bg-green-100/90 text-green-800"
                : "bg-red-100/90 text-red-800"
            }`}
          >
            {status.ok ? (
              <CheckCircle className="w-6 h-6" />
            ) : (
              <XCircle className="w-6 h-6" />
            )}
            <span className="font-medium text-sm">{status.msg}</span>
          </div>
        </div>
      )}
    </div>
  );
}
