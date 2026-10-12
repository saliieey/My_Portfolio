"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    period: "August 2024 – Present",
    title: "Software Developer",
    company: "NicorAI Intelligent System Pvt Ltd",
    location: "Kerala, India",
    type: "Full-Time",
    summary:
      "Developing web application interfaces and backend services for AI-focused product platforms.",
    responsibilities: [
      "Engineered responsive web interfaces using React.js, Next.js, and Tailwind CSS from Figma designs.",
      "Developed RESTful backend APIs and server-side data handlers with Node.js, Express, and MongoDB.",
      "Implemented smooth UI animations using GSAP and Framer Motion, enhancing frontend interactivity and render efficiency.",
      "Collaborated using Git/GitHub for version control, code management, and structured release workflows.",
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express", "MongoDB", "GSAP", "Figma", "Git"],
  },
  {
    period: "August 2024 – Present",
    title: "Web Developer",
    company: "Maelstrom Global Pvt Ltd",
    location: "Kerala, India",
    type: "Client / Full-Time",
    summary:
      "Building and maintaining client websites, media portfolio showcases, and headless CMS integrations.",
    responsibilities: [
      "Built performant, mobile-first websites using Next.js, HTML5, CSS3, and JavaScript.",
      "Integrated and customized WordPress CMS / Headless CMS for non-technical content management.",
      "Ensured cross-browser compatibility, responsive layout scaling, and frontend optimization across all viewport sizes.",
    ],
    technologies: ["Next.js", "HTML5", "CSS3", "JavaScript", "WordPress", "Responsive Design", "Git"],
  },
  {
    period: "July 2023 – January 2024",
    title: "MERN Stack Intern",
    company: "Luminar Technolab Pvt Ltd",
    location: "Kerala, India",
    type: "Internship",
    summary:
      "Completed intensive practical training in full-stack JavaScript development across MongoDB, Express, React, and Node.js.",
    responsibilities: [
      "Gained hands-on experience developing full-stack web applications using the MERN stack.",
      "Built responsive frontends with Bootstrap, Tailwind CSS, and Material UI.",
      "Designed RESTful APIs, CRUD operations, database schemas, and client authentication integrations.",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Bootstrap", "REST APIs"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 overflow-hidden z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
            02 — Career Journey
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-[#0ea5e9] mt-4 rounded-full" />
        </div>

        {/* Timeline List */}
        <div className="relative space-y-8 before:absolute before:inset-0 before:left-3 md:before:left-6 before:w-0.5 before:bg-white/10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="relative pl-8 md:pl-14 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute left-1.5 md:left-4.5 top-1.5 w-3 h-3 bg-[#0ea5e9] rounded-full ring-4 ring-[#090a0f] group-hover:scale-125 transition-transform" />

              {/* Card Container */}
              <div className="p-6 md:p-8 bg-white/[0.02] hover:bg-white/[0.03] border border-white/10 rounded-2xl transition-all space-y-4">
                {/* Role Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-xs font-semibold text-[#0ea5e9] uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-300 font-medium mt-1">
                      <Briefcase className="w-4 h-4 text-[#0ea5e9]" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-gray-400 gap-1 font-mono">
                    <span className="flex items-center gap-1.5 text-gray-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                  {exp.summary}
                </p>

                {/* Bulleted Responsibilities */}
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-[#0ea5e9] font-bold mt-0.5">•</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Technology Badges */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[11px] font-semibold text-gray-300 uppercase tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
