"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Award, TrendingUp, User } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation - start visible
      if (contentRef.current) {
        gsap.set(contentRef.current.children, { opacity: 1, y: 0 });
        gsap.from(contentRef.current.children, {
          y: 30,
          opacity: 0.6,
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

      // Code snippets animation
      const codeSnippets = document.querySelectorAll(".code-snippet");
      codeSnippets.forEach((snippet, index) => {
        gsap.set(snippet, { opacity: 1 });
        gsap.from(snippet, {
          x: -20,
          opacity: 0.5,
          duration: 0.6,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: snippet,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Stats counter animation
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const suffix = counter.getAttribute("data-suffix") || "";

        ScrollTrigger.create({
          trigger: counter,
          start: "top 85%",
          onEnter: () => {
            let current = 0;
            const increment = target / 60;
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.textContent = Math.floor(current).toString() + suffix;
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toString() + suffix;
              }
            };
            updateCounter();
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-32 overflow-hidden z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#0ea5e9] rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-[#10b981] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <div className="inline-block mb-3 md:mb-4">
            <span className="text-xs md:text-sm text-[#0ea5e9] uppercase tracking-wider font-semibold">About</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4" style={{ fontFamily: "var(--font-space)" }}>
            About Me
          </h2>
          <div className="w-16 md:w-20 h-0.5 md:h-1 bg-[#0ea5e9] mx-auto"></div>
        </div>

        <div ref={contentRef} className="space-y-8 md:space-y-12" style={{ opacity: 1 }}>
          {/* Main Content - Single Column on Mobile */}
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-4 md:mb-6">
              I'm a passionate software developer with{" "}
              <span className="text-[#0ea5e9] font-semibold">2+ years</span> of
              professional experience, specializing in building scalable,
              enterprise-grade web applications.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              My expertise lies in transforming complex business requirements
              into elegant, performant solutions. I combine technical excellence
              with a deep understanding of user experience to deliver products
              that don't just work—they inspire.
            </p>
          </div>

          {/* Stats Section - Better Mobile Layout */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-2xl mx-auto">
            {[
              { number: "2", suffix: "+", label: "YEARS EXPERIENCE", icon: Award, color: "#0ea5e9" },
              { number: "50", suffix: "+", label: "PROJECTS DELIVERED", icon: TrendingUp, color: "#10b981" },
              { number: "100", suffix: "%", label: "CLIENT SATISFACTION", icon: User, color: "#0ea5e9" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 md:mb-4">
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center"
                      style={{ 
                        background: `${stat.color}20`, 
                        border: `2px solid ${stat.color}40` 
                      }}
                    >
                      <Icon className="w-6 h-6 md:w-7 md:h-7" style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div
                    className="stat-number text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
                    data-target={stat.number}
                    data-suffix={stat.suffix}
                    style={{ fontFamily: "var(--font-space)", color: stat.color }}
                  >
                    0{stat.suffix}
                  </div>
                  <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider leading-tight px-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Code Snippets Section - Better Mobile Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {/* Code Snippet 1 */}
            <div className="code-snippet bg-[#0a0a0f] border border-[#0ea5e9]/20 rounded-xl p-4 md:p-6" style={{ opacity: 1 }}>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="ml-3 md:ml-4 text-gray-500 text-xs md:text-sm font-medium">about.js</span>
              </div>
              <pre className="text-gray-300 overflow-x-auto text-xs md:text-sm leading-relaxed">
                <code>{`const developer = {
  skills: ['React', 'Node.js'],
  experience: '2+ years'
};`}</code>
              </pre>
            </div>

            {/* Code Snippet 2 */}
            <div className="code-snippet bg-[#0a0a0f] border border-[#0ea5e9]/20 rounded-xl p-4 md:p-6" style={{ opacity: 1 }}>
              <div className="flex items-center gap-2 mb-3 md:mb-4">
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                <span className="ml-3 md:ml-4 text-gray-500 text-xs md:text-sm font-medium">philosophy.js</span>
              </div>
              <pre className="text-gray-300 overflow-x-auto text-xs md:text-sm leading-relaxed">
                <code>{`function build() {
  return 'excellence';
}`}</code>
              </pre>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-4 md:mb-6">
              <h3 className="text-lg md:text-xl font-semibold text-white mb-2">Technologies I Work With</h3>
              <div className="w-12 md:w-16 h-0.5 bg-[#0ea5e9] mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {["React", "Node.js", "MongoDB", "GSAP", "TypeScript", "Next.js", "Express", "PostgreSQL"].map((tech, index) => (
                <div
                  key={index}
                  className="px-4 py-2 md:px-5 md:py-2.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg text-[#0ea5e9] text-sm md:text-base font-semibold hover:bg-[#0ea5e9]/20 hover:border-[#0ea5e9]/50 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
