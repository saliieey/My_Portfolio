"use client";

import { useEffect } from "react";
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, Code2, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-auto cursor-default text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0e14]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-[#0ea5e9]" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Curriculum Vitae</h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#0ea5e9] hover:bg-[#38bdf8] text-white text-xs font-semibold rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 md:p-10 space-y-8 print:p-0 print:text-black">
          {/* Header Info */}
          <div className="border-b border-white/10 pb-6 space-y-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>
                Mohamed Salih CK
              </h1>
              <p className="text-lg text-[#0ea5e9] font-medium mt-1">Full-Stack Software Developer</p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-gray-300">
              <a href="mailto:salihck7777@gmail.com" className="flex items-center gap-1.5 hover:text-[#0ea5e9] transition-colors">
                <Mail className="w-4 h-4 text-[#0ea5e9]" />
                <span>salihck7777@gmail.com</span>
              </a>
              <a href="tel:+916238520429" className="flex items-center gap-1.5 hover:text-[#0ea5e9] transition-colors">
                <Phone className="w-4 h-4 text-[#0ea5e9]" />
                <span>+91 6238520429</span>
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0ea5e9]" />
                <span>Kerala, India</span>
              </span>
              <a href="https://github.com/saliieey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-[#0ea5e9] transition-colors">
                <ExternalLink className="w-4 h-4 text-[#0ea5e9]" />
                <span>github.com/saliieey</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Summary</h2>
            <p className="text-sm leading-relaxed text-gray-300">
              Full-Stack Developer with 2.5+ years of practical experience building web applications using React, Next.js, Node.js, Express, MongoDB, and PostgreSQL. Experienced in API integration, state management, UI/UX implementation, performance optimization, and custom CMS integrations.
            </p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Professional Experience</h2>

            {/* Role 1 */}
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">Software Developer</h3>
                  <p className="text-xs text-[#0ea5e9]">NicorAI Intelligent System Pvt Ltd</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">August 2024 – Present</span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1 pl-1">
                <li>Engineered responsive web interfaces using React.js, Next.js, and Tailwind CSS from Figma designs.</li>
                <li>Built dynamic backend RESTful APIs with Node.js, Express, and MongoDB.</li>
                <li>Implemented smooth UI animations using GSAP and Framer Motion, improving render performance by 30%.</li>
                <li>Collaborated using Git/GitHub for version control, code reviews, and structured feature updates.</li>
              </ul>
            </div>

            {/* Role 2 */}
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">Web Developer</h3>
                  <p className="text-xs text-[#0ea5e9]">Maelstrom Global Pvt Ltd</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">August 2024 – Present</span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1 pl-1">
                <li>Developed scalable frontend solutions with Next.js, React, and CSS for client showcase platforms.</li>
                <li>Customized and integrated WordPress Headless CMS for non-technical team content management.</li>
                <li>Ensured cross-browser compatibility, responsive mobile layouts, and high audit lighthouse scores.</li>
              </ul>
            </div>

            {/* Role 3 */}
            <div className="p-4 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-base font-bold text-white">MERN Stack Developer Intern</h3>
                  <p className="text-xs text-[#0ea5e9]">Luminar Technolab Pvt Ltd</p>
                </div>
                <span className="text-xs text-gray-400 font-mono">July 2023 – January 2024</span>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-gray-300 space-y-1 pl-1">
                <li>Acquired hands-on practical experience across MongoDB, Express, React, and Node.js.</li>
                <li>Designed RESTful CRUD APIs and integrated frontend state management.</li>
                <li>Constructed responsive web layouts using Bootstrap, Tailwind CSS, and Material UI.</li>
              </ul>
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <h4 className="text-sm font-bold text-white">Enterprise MERN Investment SaaS</h4>
                <p className="text-xs text-gray-400">JWT Auth, MongoDB Atlas, Node-Cron daily ROI payouts, multi-level referral tracking.</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <h4 className="text-sm font-bold text-white">MusicFlow Streaming Web App</h4>
                <p className="text-xs text-gray-400">React, TypeScript, Node.js, Express, PostgreSQL, Drizzle ORM, Jamendo API.</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <h4 className="text-sm font-bold text-white">NicorAI Web Platform</h4>
                <p className="text-xs text-gray-400">Next.js, TypeScript, AWS, RAG Chat interface, Tailwind CSS.</p>
              </div>
              <div className="p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                <h4 className="text-sm font-bold text-white">Simpex Services Platform</h4>
                <p className="text-xs text-gray-400">React 19, Vite, Multi-step booking drawer, dynamic SEO schema.</p>
              </div>
            </div>
          </div>

          {/* Skills Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#0ea5e9]">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <span className="font-semibold text-white">Languages & Core:</span>{" "}
                <span className="text-gray-300">JavaScript (ES6+), TypeScript, HTML5, CSS3</span>
              </div>
              <div>
                <span className="font-semibold text-white">Frontend:</span>{" "}
                <span className="text-gray-300">React.js, Next.js, Tailwind CSS, GSAP, Framer Motion</span>
              </div>
              <div>
                <span className="font-semibold text-white">Backend & DB:</span>{" "}
                <span className="text-gray-300">Node.js, Express.js, MongoDB, PostgreSQL, REST APIs, JWT</span>
              </div>
              <div>
                <span className="font-semibold text-white">Tools & Workflow:</span>{" "}
                <span className="text-gray-300">Git, GitHub, Vite, Vercel, Figma, Postman</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0d0e14]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-500">Mohamed Salih CK</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
