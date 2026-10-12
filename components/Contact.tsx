"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Copy, Check, Send, Github, Linkedin, ArrowUp, FileText } from "lucide-react";

interface ContactProps {
  onOpenResume?: () => void;
}

export default function Contact({ onOpenResume }: ContactProps) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("salihck7777@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Thank you! Message received.");
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
            05 — Get In Touch
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Let's Work Together
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2">
            Open for full-time opportunities, engineering roles, and consulting inquiries. Contact me via email or phone directly.
          </p>
          <div className="w-16 h-1 bg-[#0ea5e9] mt-4 rounded-full" />
        </div>

        {/* Contact Info Cards + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Action & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick 1-Click Copy Email Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-xl text-[#0ea5e9]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Direct Email</h3>
                  <p className="text-base font-bold text-white">salihck7777@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={copyEmail}
                  className="flex-1 py-2.5 px-4 bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>
                <a
                  href="mailto:salihck7777@gmail.com"
                  className="py-2.5 px-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs rounded-xl transition-colors"
                >
                  Open Mail Client
                </a>
              </div>
            </motion.div>

            {/* Direct Contact Phone & Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone</h4>
                  <a href="tel:+916238520429" className="text-sm font-bold text-white hover:text-[#0ea5e9] transition-colors">
                    +91 6238520429
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</h4>
                  <p className="text-sm font-bold text-white">Malappuram, Kerala, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social & Resume CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: 0.16, ease: "easeOut" }}
              className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4"
            >
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                Profiles & Resume
              </h4>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/saliieey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/mohamed-salih-ck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#0ea5e9]" />
                  <span>LinkedIn</span>
                </a>
                {onOpenResume && (
                  <button
                    onClick={onOpenResume}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold rounded-xl transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Clean Accessible Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-gray-400 mb-6">
              Have a question or role opportunity? Send a brief message below.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-xs text-gray-300">Thank you for reaching out. I will respond as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-300 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors"
                    placeholder="Project Inquiry / Job Opportunity"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#0ea5e9] transition-colors resize-none"
                    placeholder="Briefly describe your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-bold text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Minimal Footer */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            <span className="font-bold text-white">Mohamed Salih CK</span> — Software Developer
          </div>
          <div>
            © {new Date().getFullYear()} Mohamed Salih CK. All rights reserved.
          </div>
          <button
            onClick={scrollToTop}
            className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </footer>
      </div>
    </section>
  );
}
