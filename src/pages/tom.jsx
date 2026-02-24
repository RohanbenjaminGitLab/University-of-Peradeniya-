import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ ok: true, msg: "Message sent successfully!" });
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ ok: false, msg: data.error });
      }

    } catch (err) {
      setStatus({ ok: false, msg: "Network error" });
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input name="name" value={form.name} onChange={handleChange} required
          className="mt-1 w-full p-2 rounded border" />
      </div>

      <div>
        <label className="block text-sm font-medium">Email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required
          className="mt-1 w-full p-2 rounded border" />
      </div>

      <div>
        <label className="block text-sm font-medium">Subject</label>
        <input name="subject" value={form.subject} onChange={handleChange}
          className="mt-1 w-full p-2 rounded border" />
      </div>

      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows="5" required
          className="mt-1 w-full p-2 rounded border" />
      </div>

      <button type="submit" disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50">
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <div className={`p-3 mt-2 rounded ${status.ok ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
          {status.msg}
        </div>
      )}
    </form>
  );
}
