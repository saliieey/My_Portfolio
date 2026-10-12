"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowDown, Github, Linkedin, Mail, FileText, Code2, Layers, Cpu } from "lucide-react";

interface HeroProps {
  onOpenResume?: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // GSAP Entrance animation respecting reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 20,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative flex flex-col justify-center pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 md:min-h-[90vh] overflow-hidden"
    >
      {/* Background Micro Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* Subtle Accent Glows */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#0ea5e9]/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-600/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl w-full mx-auto sm:mx-0 space-y-4 sm:space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
          {/* Availability Status Badge */}
          <div className="hero-animate inline-flex items-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-full text-[11px] sm:text-xs font-semibold text-[#0ea5e9] tracking-wider uppercase max-w-full">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
            </span>
            <span className="truncate">Available for Full-time & Contract Roles</span>
          </div>

          {/* Name & Headline */}
          <div className="hero-animate space-y-1.5 sm:space-y-2 w-full">
            <h1
              ref={titleRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.12] sm:leading-[1.08]"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Mohamed Salih CK
            </h1>
            <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#0ea5e9]">
              Full-Stack Software Developer
            </h2>
          </div>

          {/* Concise Believable Subtitle */}
          <p className="hero-animate text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto sm:mx-0 w-full">
            I build polished, high-performance web applications with React, Next.js, Node.js, and modern database architectures. Focused on clean code, intuitive UI/UX, and robust API design.
          </p>

          {/* Primary Action Buttons */}
          <div className="hero-animate w-full max-w-md sm:max-w-none grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:items-center sm:gap-3 pt-1 sm:pt-2 mx-auto sm:mx-0">
            <button
              onClick={() => scrollToSection("#projects")}
              className="col-span-2 sm:col-auto w-full sm:w-auto px-6 py-3.5 bg-[#0ea5e9] hover:bg-[#38bdf8] text-white font-bold text-sm rounded-xl shadow-lg shadow-[#0ea5e9]/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>View Projects</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="col-span-1 sm:col-auto w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/10 transition-colors text-center flex items-center justify-center"
            >
              Contact Me
            </button>

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="col-span-1 sm:col-auto w-full sm:w-auto px-4 sm:px-5 py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 text-[#0ea5e9] font-semibold text-xs sm:text-sm rounded-xl border border-[#0ea5e9]/30 transition-colors flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Social Quick Links */}
          <div className="hero-animate w-full flex items-center justify-center sm:justify-start gap-3 sm:gap-5 pt-2 sm:pt-4 text-gray-400">
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-gray-500">Connect:</span>
            <div className="flex items-center gap-2 sm:gap-5">
              <a
                href="https://github.com/saliieey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 hover:text-white hover:border-[#0ea5e9]/40 transition-colors flex items-center justify-center"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://linkedin.com/in/mohamed-salih-ck"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 hover:text-white hover:border-[#0ea5e9]/40 transition-colors flex items-center justify-center"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:salihck7777@gmail.com"
                className="p-2 sm:p-0 rounded-lg bg-white/5 sm:bg-transparent border border-white/10 sm:border-0 hover:text-white hover:border-[#0ea5e9]/40 transition-colors flex items-center justify-center"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Compact Credibility Strip (Truthful & Verified Only) */}
        <div className="mt-10 sm:mt-16 md:mt-24 pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white/[0.02] border border-white/10 sm:border-white/5 rounded-xl hover:border-white/20 transition-colors">
            <div className="p-2 sm:p-2.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg text-[#0ea5e9] flex-shrink-0">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                1.5+ Years
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 font-medium">Professional Software Experience</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white/[0.02] border border-white/10 sm:border-white/5 rounded-xl hover:border-white/20 transition-colors">
            <div className="p-2 sm:p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg text-emerald-400 flex-shrink-0">
              <Layers className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                9+ Web Apps
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 font-medium">Full-Stack & Client Work Shipped</div>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3.5 sm:p-4 bg-white/[0.02] border border-white/10 sm:border-white/5 rounded-xl hover:border-white/20 transition-colors">
            <div className="p-2 sm:p-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-indigo-400 flex-shrink-0">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-space)" }}>
                Full-Stack
              </div>
              <div className="text-[11px] sm:text-xs text-gray-400 font-medium">React, Next.js, Node & Databases</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
