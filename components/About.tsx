"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Terminal, Code2, ShieldCheck, Cpu, Zap, Layers } from "lucide-react";

const engineeringPrinciples = [
  {
    title: "User-Centered UI/UX",
    desc: "Interfaces should be responsive, intuitive, and accessible on all devices without layout jumping.",
    icon: Code2,
  },
  {
    title: "Maintainable Architecture",
    desc: "Clean component boundaries, strict typing with TypeScript, and predictable state management.",
    icon: Layers,
  },
  {
    title: "Robust Backend & APIs",
    desc: "Secure authentication, transactional database updates, and efficient REST API structures.",
    icon: ShieldCheck,
  },
  {
    title: "Performance & SEO First",
    desc: "Optimized render pipelines, semantic HTML markup, metadata schemas, and fast initial page loads.",
    icon: Zap,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
            01 — Background & Mindset
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: "var(--font-space)" }}
          >
            About Me
          </h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mt-4 rounded-full" />
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#0ea5e9]" />
                <span>Full-Stack Developer based in Kerala, India</span>
              </h3>
              <p className="text-sm sm:text-base">
                I have over 1.5 years of practical software development experience, specializing in full-stack web applications built with <strong className="text-white">React, Next.js, Node.js, Express, MongoDB, and PostgreSQL</strong>.
              </p>
              <p className="text-sm sm:text-base">
                My work spans building client platforms at <strong className="text-white">Maelstrom Global</strong>, AI application interfaces at <strong className="text-white">NicorAI</strong>, and full-stack MERN SaaS products such as investment engines, music streaming platforms, and agency booking web apps.
              </p>
              <p className="text-sm sm:text-base">
                I enjoy solving complex workflow problems—whether it’s architecting multi-level referral algorithms, integrating Jamendo API streams, setting up JWT auth sessions, or crafting interactive UI animations with GSAP and Framer Motion.
              </p>
            </div>

            {/* Current Focus / Target Roles */}
            <div className="p-5 bg-[#0ea5e9]/5 border border-[#0ea5e9]/20 rounded-xl space-y-2">
              <h4 className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
                What I am looking for
              </h4>
              <p className="text-xs sm:text-sm text-gray-200">
                I am actively seeking <strong className="text-white">Full-Stack Developer</strong> or <strong className="text-white">Frontend Engineer</strong> roles where I can contribute to production applications, build clean user interfaces, and collaborate with focused engineering teams.
              </p>
            </div>
          </div>

          {/* Right Column: Engineering Principles */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Development Philosophy
            </h3>

            <div className="space-y-3">
              {engineeringPrinciples.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                    className="p-4 bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 rounded-xl transition-all space-y-1"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-[#0ea5e9]" />
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed pl-6">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
