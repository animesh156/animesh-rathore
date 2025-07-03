import React, { useState } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/animeshrathore255@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          _replyto: form.email,
          message: form.message,
          _captcha: "false",
          _subject: "📩 New Portfolio Contact Form Message",
          _template: "box",
        }),
      });

      const data = await response.json();

      if (data.success === "true" || response.ok) {
        toast.success("Message sent successfully! 🚀");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Try again later.");
      }
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center border border-dashed dark:border-[#3c3b3b] border-gray-400 rounded-xl p-4 sm:p-6 md:p-8 mt-12 mb-4 w-full max-w-2xl mx-auto">
      <Toaster position="top-center" />
      <section className="w-full flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="flex-1 flex flex-col justify-center text-left">
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 dark:text-gray-200">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Have an idea or want to collaborate?
            <br />
            Drop a message and I’ll get back to you soon.
          </p>
        </div>

        <div className="flex-1 flex flex-col items-start md:items-end w-full">
          <form
            className="flex flex-col gap-3 w-full max-w-full sm:max-w-xs"
            onSubmit={handleSubmit}
          >
            <input
              className="bg-white dark:bg-[#18181b] rounded px-3 py-2 text-black dark:text-white border dark:border-gray-700 border-gray-300 focus:outline-none text-sm w-full"
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              className="bg-white dark:bg-[#18181b] rounded px-3 py-2 text-black dark:text-white border dark:border-gray-700 border-gray-300 focus:outline-none text-sm w-full"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              className="bg-white dark:bg-[#18181b] rounded px-3 py-2 text-black dark:text-white border dark:border-gray-700 border-gray-300 focus:outline-none text-sm w-full"
              name="message"
              placeholder="Your message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <motion.button
              type="submit"
              className="bg-[#080808] dark:bg-[#f5f5f7] text-white dark:text-[#080808] rounded px-4 py-2 font-semibold mt-2 text-sm"
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.03 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>

          <span className="text-xs text-gray-600 dark:text-gray-400 mt-4">
            animeshrathore255@gmail.com
          </span>
        </div>
      </section>
    </div>
  );
}
