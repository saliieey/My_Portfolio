"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight, ChevronDown, Eye } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const featuredProjects: ProjectData[] = [
  {
    title: "Enterprise MERN Investment, ROI & Referral SaaS",
    subtitle: "Full-Stack Financial SaaS Platform",
    type: "Full-Stack SaaS",
    description:
      "Production-grade MERN SaaS application featuring secure JWT authentication, MongoDB Atlas integration, investment package management, automated daily ROI payouts, multi-level referral commissions, wallet tracking, and audit ledger history.",
    fullOverview:
      "This application demonstrates enterprise full-stack development capability beyond standard landing pages. Built with Node.js, Express, and MongoDB on the backend, paired with a fast React & Vite frontend, it handles complete investment workflows, wallet transactions, automated daily ROI yield calculations via background cron scheduling, multi-level referral payouts, and admin controls.",
    problem:
      "Financial platforms require absolute data consistency, secure session handling, transactional wallet updates, and automated background calculations without manual database updates.",
    solution:
      "Designed a modular MERN architecture with JWT-authenticated API endpoints, schema validation, scheduled node-cron processes for daily ROI payouts, and a real-time analytics dashboard.",
    keyFeatures: [
      "JWT Authentication & Password Hashing with Bcrypt",
      "Investment Package Subscription & Wallet Balance Management",
      "Automated Daily ROI Yield Processing via Node-Cron",
      "Multi-Level Referral Commission Calculation (5 Levels)",
      "Transactional Wallet Audit Ledger & Transaction History",
      "Admin Control Panel & Analytics Dashboard",
    ],
    technologies: ["React", "Vite", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Node-Cron"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://investment-app-inky.vercel.app",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=1000&q=80",
    badge: "Featured SaaS",
  },
  {
    title: "MusicFlow",
    subtitle: "Spotify-Inspired Streaming Web App",
    type: "Full-Stack Web App",
    description:
      "Full-stack music streaming platform that allows users to search tracks, play audio seamlessly, build custom playlists, and save favorite songs using the Jamendo API.",
    fullOverview:
      "MusicFlow is a Spotify-inspired web streaming application engineered with React, TypeScript, Node.js, Express, and PostgreSQL. It features real-time audio playback controls, persistent custom playlists, tracks search via Jamendo API integration, and clean responsive UI styling.",
    problem:
      "Delivering smooth, uninterrupted audio playback while managing state transitions, track searches, and asynchronous playlist updates on mobile and desktop devices.",
    solution:
      "Architected a centralized audio playback engine with React Context, type-safe API requests, and responsive media layout patterns.",
    keyFeatures: [
      "Jamendo API Integration for Global Track Search",
      "Persistent Audio Playback Engine with Progress Controls",
      "Custom User Playlist Creation & Management",
      "Type-Safe Backend API with Express & PostgreSQL",
      "Responsive Dark Aesthetics with Tailwind CSS",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://musicflow-1.onrender.com/",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1000&q=80",
    badge: "Featured App",
  },
  {
    title: "NicorAI Platform",
    subtitle: "AI Enterprise Company Showcase & RAG Interface",
    type: "Professional / Client Work",
    description:
      "Production company web platform for NicorAI, featuring an integrated RAG-based AI chat interface, modular content structure, and AWS cloud deployment.",
    fullOverview:
      "Built for NicorAI Intelligent System Pvt Ltd, this web application communicates company services, AI capabilities, and interactive product demonstrations. Includes an AI chat component, clean content rendering, and responsive UI performance.",
    problem:
      "Presenting complex AI solutions and platform capabilities through a clean, fast, and accessible digital interface.",
    solution:
      "Utilized Next.js App Router for server-rendered page speed, Tailwind CSS for modular visual components, and Framer Motion for subtle interactive transitions.",
    keyFeatures: [
      "Next.js App Router with Server-Side Rendering",
      "RAG AI Chat Assistant Interface Integration",
      "Responsive Component Architecture with Tailwind CSS",
      "Framer Motion Micro-Interactions",
      "AWS Infrastructure Deployment",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Express", "AWS", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://nicorai-website.vercel.app",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1000&q=80",
    badge: "Client Work",
  },
  {
    title: "Simpex Services",
    subtitle: "HVAC & Appliance Repair Booking Platform",
    type: "Web Application",
    description:
      "Agency-grade home services and appliance repair platform with an interactive multi-step booking drawer, dynamic SEO metadata schema, and responsive service pages.",
    fullOverview:
      "Simpex Services is a dedicated booking web app built with React 19 and Vite for AC repair, refrigerator maintenance, and washer servicing. Features lazy-loaded routing, an interactive multi-step booking drawer, structured JSON-LD SEO schema integration, and zero layout shift.",
    problem:
      "Service business web applications require immediate booking clarity, fast mobile response, and strong search engine visibility.",
    solution:
      "Engineered an instant booking modal drawer with client validation, dynamic React Router pages for individual repair categories, and structured meta schema.",
    keyFeatures: [
      "Interactive Multi-step Service Booking Drawer",
      "Category Pages for AC, Washer, and Refrigerator Repair",
      "Dynamic SEO Metadata & JSON-LD Structured Schema",
      "React 19 & Vite for Sub-Second Load Speeds",
      "Responsive Mobile-First UI Layout",
    ],
    technologies: ["React 19", "Vite", "React Router", "Framer Motion", "Lucide Icons", "Vanilla CSS"],
    github: "https://github.com/saliieey/Simpex-Website",
    live: "https://simpex-website.vercel.app",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1000&q=80",
    badge: "Featured Web App",
  },
];

const secondaryProjects: ProjectData[] = [
  {
    title: "Maelstrom Global Website",
    subtitle: "Corporate Web Platform & Headless CMS",
    type: "Client Work",
    description:
      "Official company website for Maelstrom Global Pvt Ltd featuring Next.js, custom GSAP scroll triggers, and WordPress Headless CMS integration for dynamic content management.",
    technologies: ["Next.js", "React", "GSAP", "CSS", "WordPress CMS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://maelstrom-global-website.vercel.app/",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    title: "Maelstrom Frames",
    subtitle: "Editorial Photography Portfolio",
    type: "Frontend Showcase",
    description:
      "High-performance editorial photography showcase website featuring dynamic media handling, interactive grid galleries, and smooth scroll animations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://maelstrom-frames.vercel.app/",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80",
  },
  {
    title: "LUXE NOIR",
    subtitle: "Luxury Product Showcase",
    type: "Interactive Showcase",
    description:
      "High-end luxury watch showcase website demonstrating advanced GSAP animation sequences, dark gold-accented styling, and responsive layout craftsmanship.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP ScrollTrigger"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://luxenoirwatches.netlify.app/",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
  },
  {
    title: "Podnest YouTube Agent",
    subtitle: "YouTube Content Workflow Platform",
    type: "Web Application",
    description:
      "Content workflow platform built with Next.js, React, and TypeScript for organizing video agent tasks and channel content workflows.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://podnest-youtube-agent.vercel.app",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "Pikuboo",
    subtitle: "Lightweight Web App",
    type: "Web Application",
    description:
      "Modern, responsive web application built with React and Vite featuring dynamic component architecture and clean frontend performance.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://pikuboo-website.vercel.app/",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <>
      <section
        id="projects"
        className="relative py-20 md:py-28 overflow-hidden z-10 border-t border-white/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-14">
            <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
              04 — Portfolio Centerpiece
            </span>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
              style={{ fontFamily: "var(--font-space)" }}
            >
              Featured Projects
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2">
              Curated selection of full-stack web applications, SaaS systems, and client products. Click any project to inspect case study details.
            </p>
            <div className="w-16 h-1 bg-[#0ea5e9] mt-4 rounded-full" />
          </div>

          {/* Primary Featured Projects Grid (Top 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {featuredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#0ea5e9]/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Thumbnail Image */}
                <div className="relative h-52 sm:h-60 overflow-hidden bg-gradient-to-br from-slate-900 to-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-90" />

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-md text-[11px] font-bold text-[#0ea5e9] uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>

                  {/* Quick Inspection Action */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="px-3 py-1 bg-[#0ea5e9] text-white text-[11px] font-bold rounded-md flex items-center gap-1.5 shadow-lg">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0ea5e9] mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed flex-1 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 bg-white/5 border border-white/10 rounded text-[11px] font-semibold text-gray-300 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Links */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto text-xs">
                    <button
                      type="button"
                      className="text-[#0ea5e9] font-bold flex items-center gap-1.5 hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <span>Read Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-gray-400 hover:text-white transition-colors"
                          aria-label="Live Demo Link"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Expandable Secondary Projects Section */}
          <div className="mt-14 space-y-6">
            <div className="text-center">
              <button
                onClick={() => setShowSecondary(!showSecondary)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-sm rounded-xl transition-all"
              >
                <span>{showSecondary ? "Hide Additional Projects" : "View Additional Projects"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showSecondary ? "rotate-180" : ""}`} />
              </button>
            </div>

            {showSecondary && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 animate-in fade-in duration-300">
                {secondaryProjects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-[#0ea5e9]/40 rounded-xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {project.image && (
                      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-slate-900 to-black">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-85" />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-0.5 bg-black/70 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold text-[#0ea5e9] uppercase tracking-wider">
                            {project.type}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-5 flex-1 flex flex-col space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <h4 className="text-base font-bold text-white group-hover:text-[#0ea5e9] transition-colors">
                          {project.title}
                        </h4>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-[#0ea5e9] hover:underline flex items-center gap-1 text-xs font-semibold"
                          >
                            <span>Live</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      <p className="text-xs text-gray-300 leading-relaxed flex-1 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 pt-2">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 bg-white/5 border border-white/5 rounded text-[10px] font-semibold text-gray-400 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
