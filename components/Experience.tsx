"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    period: "AUGUST 2024 - PRESENT",
    title: "Software Developer",
    company: "Company Name",
    achievements: [
      "Designed and developed modern web interfaces using React.js and Figma",
      "Built dynamic backend APIs with Node.js and Express",
      "Created engaging animations using GSAP and improved performance by 30%",
      "Worked with Git/GitHub for version control and team collaboration",
      "Developed and maintained responsive front-end interfaces",
      "Designed prototypes in Figma and translated them into production-ready code",
      "Integrated backend APIs and handled data management using MongoDB",
      "Ensured code quality and optimized performance across all platforms",
    ],
    technologies: ["React.js", "Node.js", "Express", "MongoDB", "GSAP", "Figma", "Git"],
  },
  {
    period: "JANUARY 2023 - JULY 2024",
    title: "Junior Developer",
    company: "Previous Company",
    achievements: [
      "Developed responsive web applications using modern JavaScript frameworks",
      "Collaborated with cross-functional teams in Agile environment",
      "Implemented RESTful APIs and integrated third-party services",
      "Improved code quality through unit testing and code reviews",
    ],
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline items animation
      if (timelineRef.current) {
        const items = timelineRef.current.children;
        gsap.from(items, {
          x: -100,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // Animate timeline line
      gsap.to(".timeline-line", {
        height: "100%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
      });

      // Animate timeline dots
      const dots = document.querySelectorAll(".timeline-dot");
      dots.forEach((dot) => {
        ScrollTrigger.create({
          trigger: dot,
          start: "top 85%",
          onEnter: () => {
            gsap.to(dot, {
              scale: 1.5,
              duration: 0.3,
              yoyo: true,
              repeat: 1,
              ease: "power2.out",
            });
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-32 overflow-hidden z-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Experience
          </h2>
          <div className="w-20 h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div
            className="absolute left-8 md:left-0 top-0 bottom-0 w-0.5 bg-[#0ea5e9] timeline-line"
            style={{ height: "0%" }}
          ></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 md:pl-12 mb-12">
              {/* Timeline Dot */}
              <div className="timeline-dot absolute left-6 md:left-[-6px] top-0 w-4 h-4 bg-[#0ea5e9] rounded-full border-4 border-[#0a0a0f] z-10"></div>

              {/* Content Card */}
              <div className="bg-[#0a0a0f] border border-white/10 rounded-xl p-6 md:p-8 hover:border-[#0ea5e9]/50 transition-all duration-300">
                <div className="mb-4">
                  <div className="text-sm text-[#0ea5e9] font-semibold uppercase tracking-wider mb-2">
                    {exp.period}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <div className="flex items-center text-gray-400">
                    <Briefcase className="w-5 h-5 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-gray-300 flex items-start"
                    >
                      <span className="text-[#0ea5e9] mr-3 mt-1">▸</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg text-xs font-medium text-[#0ea5e9] uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
