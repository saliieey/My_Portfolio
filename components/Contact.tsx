"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Twitter, 
  Dribbble, 
  ArrowRight,
  Send,
  MessageCircle,
  CheckCircle2,
  Globe
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Contact cards animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          y: 50,
          opacity: 0.5,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Social links animation
      if (socialRef.current) {
        gsap.from(socialRef.current.children, {
          x: -30,
          opacity: 0.5,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Form animation
      if (formRef.current) {
        gsap.from(formRef.current.children, {
          y: 30,
          opacity: 0.5,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Card hover effects
      const cards = document.querySelectorAll(".contact-card");
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            y: -5,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-32 overflow-hidden z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-[#0ea5e9] uppercase tracking-wider font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Available for freelance opportunities, full-time positions and consulting projects. 
            Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          style={{ opacity: 1 }}
        >
          {[
            {
              icon: Mail,
              label: "EMAIL",
              value: "your.email@example.com",
              href: "mailto:your.email@example.com",
              description: "Send me an email anytime",
              color: "#0ea5e9",
            },
            {
              icon: Phone,
              label: "PHONE",
              value: "+1 (234) 567-890",
              href: "tel:+1234567890",
              description: "Call me for urgent matters",
              color: "#10b981",
            },
            {
              icon: MapPin,
              label: "LOCATION",
              value: "Your City, Country",
              href: "#",
              description: "Available worldwide",
              color: "#a855f7",
            },
          ].map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                className="contact-card bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-8 hover:border-[#0ea5e9]/50 transition-all duration-300 group relative overflow-hidden"
                style={{ opacity: 1 }}
              >
                {/* Hover Gradient */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${contact.color}20, transparent)` }}
                ></div>

                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ 
                        background: `${contact.color}20`, 
                        border: `2px solid ${contact.color}40` 
                      }}
                    >
                      <Icon className="w-8 h-8" style={{ color: contact.color }} />
                    </div>
                  </div>
                  <div className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider mb-3">
                    {contact.label}
                  </div>
                  <div className="text-white text-xl font-bold mb-2">{contact.value}</div>
                  <div className="text-gray-400 text-sm">{contact.description}</div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Social Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="w-6 h-6 text-[#0ea5e9]" />
              <h3 className="text-2xl font-bold text-white">Send a Message</h3>
            </div>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-16 h-16 text-[#10b981] mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-gray-400">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" style={{ opacity: 1 }}>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all duration-300"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[#0a0a0f] border-2 border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[#0ea5e9]/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Social Links Section */}
          <div className="bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-6 h-6 text-[#0ea5e9]" />
              <h3 className="text-2xl font-bold text-white">Connect on Social</h3>
            </div>
            <p className="text-gray-400 mb-8">
              Follow me on social media to stay updated with my latest projects, insights, and tech discussions.
            </p>
            
            <div
              ref={socialRef}
              className="space-y-4"
              style={{ opacity: 1 }}
            >
              {[
                { 
                  icon: Github, 
                  label: "GITHUB", 
                  href: "https://github.com",
                  description: "Check out my code repositories",
                  color: "#ffffff",
                },
                { 
                  icon: Linkedin, 
                  label: "LINKEDIN", 
                  href: "https://linkedin.com",
                  description: "Connect professionally",
                  color: "#0ea5e9",
                },
                { 
                  icon: Twitter, 
                  label: "TWITTER", 
                  href: "https://twitter.com",
                  description: "Follow for tech updates",
                  color: "#38bdf8",
                },
                { 
                  icon: Dribbble, 
                  label: "DRIBBBLE", 
                  href: "https://dribbble.com",
                  description: "View my design work",
                  color: "#ec4899",
                },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-5 bg-[#0a0a0f] border-2 border-white/10 rounded-xl hover:border-[#0ea5e9]/50 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div 
                        className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        style={{ 
                          background: `${social.color}20`, 
                          border: `2px solid ${social.color}40` 
                        }}
                      >
                        <Icon className="w-6 h-6" style={{ color: social.color }} />
                      </div>
                      <div>
                        <div className="text-white font-bold uppercase tracking-wider mb-1">
                          {social.label}
                        </div>
                        <div className="text-gray-400 text-sm">{social.description}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0ea5e9] group-hover:translate-x-2 transition-transform" />
                  </a>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-[#0ea5e9] mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-semibold mb-1">Quick Response</div>
                  <div className="text-gray-400 text-sm">
                    I typically respond within 24 hours. For urgent matters, please call directly.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-4" style={{ fontFamily: "var(--font-space)" }}>
              MOHAMED SALIH . CK
            </div>
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} Mohamed Salih . CK. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">Crafted with precision and passion</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
