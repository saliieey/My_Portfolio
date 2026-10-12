"use client";

import { motion } from "framer-motion";
import { Code2, Server, Database, Wrench, Shield, Check } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend Development",
    icon: Code2,
    color: "#0ea5e9",
    skills: [
      { name: "React.js", detail: "Component Architecture, Hooks, Context API, State Management" },
      { name: "Next.js", detail: "App Router, SSR, Static Site Generation, API Routes" },
      { name: "TypeScript", detail: "Strict Typing, Interfaces, Generics, Component Props" },
      { name: "JavaScript (ES6+)", detail: "Async/Await, Promises, Closures, DOM Manipulation" },
      { name: "Tailwind CSS & CSS3", detail: "Responsive Design Systems, Flexbox/Grid, Custom Properties" },
      { name: "GSAP & Framer Motion", detail: "Timeline Animations, Micro-interactions, Scroll-Triggered Reveals" },
    ],
  },
  {
    category: "Backend & API Architecture",
    icon: Server,
    color: "#10b981",
    skills: [
      { name: "Node.js", detail: "Server-side Runtimes, Event-driven Logic, NPM Ecosystem" },
      { name: "Express.js", detail: "RESTful Route Controllers, Middleware Pipelines, Error Handlers" },
      { name: "RESTful API Design", detail: "Clean Resource Naming, HTTP Verbs, Standardized Response Schemas" },
      { name: "Authentication & Security", detail: "JWT Tokens, Password Hashing (Bcrypt), Session Security" },
      { name: "Scheduled Automation", detail: "Node-Cron execution, Background ROI / Wallet Ledger Processing" },
      { name: "Headless CMS Integration", detail: "WordPress REST API / GraphQL content fetching" },
    ],
  },
  {
    category: "Databases & Storage",
    icon: Database,
    color: "#3b82f6",
    skills: [
      { name: "MongoDB & Mongoose", detail: "Document Schemas, Indexing, Aggregation Pipelines, Atlas Cloud" },
      { name: "PostgreSQL", detail: "Relational Tables, Foreign Key Constraints, SQL Queries" },
      { name: "Drizzle ORM", detail: "Type-safe SQL Schema definitions and Migration Management" },
      { name: "Data Validation & Models", detail: "Server-side Input Sanitation, Schema Schema Validation" },
    ],
  },
  {
    category: "Tools & Engineering Practices",
    icon: Wrench,
    color: "#a855f7",
    skills: [
      { name: "Git & GitHub", detail: "Branching workflows, Pull Requests, Code Reviews, Versioning" },
      { name: "Vite & Webpack", detail: "Modern Frontend Bundling, HMR, Build Optimizations" },
      { name: "API Testing & Docs", detail: "Postman workspace testing, Endpoint Documentation" },
      { name: "UI/UX & Prototyping", detail: "Figma design translation, Responsive Breakpoint Audits" },
      { name: "Deployment & Hosting", detail: "Vercel, Render, Netlify static & full-stack deployments" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-28 overflow-hidden z-10 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <span className="text-xs font-bold text-[#0ea5e9] uppercase tracking-wider">
            03 — Capabilities & Stack
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Technical Skills
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mt-2">
            Categorized technical stack based on actual production development and project implementations.
          </p>
          <div className="w-16 h-1 bg-[#0ea5e9] mt-4 rounded-full" />
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, gIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={gIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: gIdx * 0.1, ease: "easeOut" }}
                className="p-6 md:p-8 bg-white/[0.02] border border-white/10 rounded-2xl space-y-6"
              >
                {/* Category Title Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div
                    className="p-3 rounded-xl border"
                    style={{
                      backgroundColor: `${group.color}15`,
                      borderColor: `${group.color}35`,
                      color: group.color,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{group.category}</h3>
                </div>

                {/* Skill List Items */}
                <div className="space-y-4">
                  {group.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-white">
                        <Check className="w-4 h-4 text-[#0ea5e9] flex-shrink-0" />
                        <span>{skill.name}</span>
                      </div>
                      <p className="text-xs text-gray-400 pl-6 leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
