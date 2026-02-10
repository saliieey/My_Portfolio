"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Database, Cloud, Smartphone, Layers, Palette } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    color: "#0ea5e9",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS / SCSS", level: 90 },
      { name: "GSAP / Framer Motion", level: 88 },
      { name: "Redux / Zustand", level: 85 },
      { name: "Webpack / Vite", level: 82 },
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    color: "#10b981",
    skills: [
      { name: "Node.js / Express", level: 93 },
      { name: "Next.js API Routes", level: 90 },
      { name: "RESTful APIs", level: 92 },
      { name: "Authentication & Authorization (JWT)", level: 88 },
      { name: "Server-side Logic & Data Handling", level: 90 },
      { name: "Database Integration (MongoDB / SQL)", level: 89 },
    ],
  },
  {
    title: "Database & DevOps",
    icon: Cloud,
    color: "#3b82f6",
    skills: [
      { name: "MongoDB / Mongoose", level: 90 },
      { name: "PostgreSQL / MySQL", level: 88 },
      { name: "AWS / Azure Cloud", level: 85 },
      { name: "Docker / Kubernetes", level: 82 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform / Infrastructure", level: 78 },
    ],
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    color: "#a855f7",
    skills: [
      { name: "React Native", level: 88 },
      { name: "Expo (React Native)", level: 85 },
      { name: "Cross-Platform Mobile Development", level: 87 },
      { name: "Mobile API Integration", level: 86 },
      { name: "PWA Development", level: 90 },
      { name: "Mobile UI/UX", level: 85 },
    ],
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    color: "#ec4899",
    skills: [
      { name: "Figma / Adobe XD", level: 92 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 88 },
      { name: "User Research", level: 82 },
      { name: "Wireframing", level: 90 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "System Architecture",
    icon: Layers,
    color: "#f59e0b",
    skills: [
      { name: "System Design", level: 88 },
      { name: "Design Patterns", level: 90 },
      { name: "SOLID Principles", level: 92 },
      { name: "Clean Architecture", level: 85 },
      { name: "Performance Optimization", level: 90 },
      { name: "Scalability Planning", level: 87 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for all cards to prevent layout shifts
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children) as HTMLElement[];
        cards.forEach((card) => {
          gsap.set(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            clearProps: "transform",
          });
        });
      }

      // Cards animation - start visible, just animate in
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.from(cards, {
          y: 50,
          opacity: 0.5,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            refreshPriority: -1,
          },
        });
      }

      // Refresh ScrollTrigger to ensure proper initialization on reload
      ScrollTrigger.refresh();

      // Progress bar animations
      const progressBars = document.querySelectorAll(".progress-bar");
      progressBars.forEach((bar) => {
        const width = bar.getAttribute("data-width") || "0";
        ScrollTrigger.create({
          trigger: bar,
          start: "top 85%",
          onEnter: () => {
            gsap.to(bar, {
              width: `${width}%`,
              duration: 2,
              ease: "power3.out",
            });
          },
        });
      });

      // Card hover animations with live progress bar effects
      const cards = document.querySelectorAll(".skill-card");
      cards.forEach((card) => {
        const progressBars = card.querySelectorAll(".progress-bar");
        const shimmerOverlays = card.querySelectorAll(".shimmer-overlay");
        
        card.addEventListener("mouseenter", () => {
          // Progress bars live animation - pulsing and shimmer effect
          progressBars.forEach((bar, index) => {
            // Pulsing effect - slight scale animation
            gsap.to(bar, {
              scaleX: 1.02,
              duration: 0.6,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: index * 0.1,
            });
            
            // Shimmer wave effect - continuous loop
            const shimmer = shimmerOverlays[index];
            if (shimmer) {
              gsap.set(shimmer, { x: "-100%" });
              gsap.to(shimmer, {
                x: "200%",
                duration: 2,
                ease: "none",
                repeat: -1,
                delay: index * 0.2,
              });
            }
            
            // Slight brightness pulse
            gsap.to(bar, {
              filter: "brightness(1.2)",
              duration: 0.8,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
              delay: index * 0.1,
            });
          });
        });
        
        card.addEventListener("mouseleave", () => {
          // Kill all progress bar animations
          progressBars.forEach((bar) => {
            gsap.killTweensOf(bar);
            gsap.set(bar, {
              scaleX: 1,
              filter: "brightness(1)",
            });
          });
          
          // Reset shimmer overlays
          shimmerOverlays.forEach((shimmer) => {
            gsap.killTweensOf(shimmer);
            gsap.set(shimmer, { x: "-100%" });
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-32 overflow-hidden z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#10b981] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-[#0ea5e9] uppercase tracking-wider font-semibold">Skills</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Technical Expertise
          </h2>
          <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning frontend, backend, mobile, and cloud technologies. 
            Continuously evolving to stay at the forefront of software development.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ 
            opacity: 1,
            visibility: "visible"
          }}
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="skill-card bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-6 hover:border-[#0ea5e9]/50 transition-all duration-300 group relative overflow-hidden"
                style={{ 
                  opacity: 1,
                  visibility: "visible",
                  transform: "translateY(0) scale(1)",
                  position: "relative"
                }}
              >
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ background: `linear-gradient(135deg, ${category.color}20, transparent)` }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${category.color}20`, border: `2px solid ${category.color}40` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: category.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2 gap-3 min-w-0">
                          <span 
                            className="text-sm font-semibold text-gray-200 flex-1 min-w-0 truncate"
                            title={skill.name}
                          >
                            {skill.name}
                          </span>
                          <span className="text-xs text-gray-400 font-bold flex-shrink-0 whitespace-nowrap">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 bg-white/10 rounded-full overflow-hidden relative">
                          <div
                            className="progress-bar h-full rounded-full relative overflow-hidden"
                            data-width={skill.level}
                            style={{ 
                              width: "0%",
                              background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`,
                              transformOrigin: "left center"
                            }}
                          >
                            {/* Shimmer overlay for wave effect */}
                            <div
                              className="shimmer-overlay absolute top-0 left-0 h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)`,
                                width: "60%",
                                transform: "translateX(-100%)",
                                willChange: "transform"
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16">
          <div className="bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Additional Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Git", "GitHub", "Jira", "Agile", "Scrum", "Postman", "VS Code", 
                "WebSocket", "Redis", "Elasticsearch", "Nginx", "Linux", "Bash",
                "Jest", "Cypress", "Storybook", "ESLint", "Prettier", "TypeScript",
                "JavaScript", "HTML5", "CSS3", "SASS", "Less", "Bootstrap", "Material-UI"
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg text-sm text-[#0ea5e9] font-semibold hover:bg-[#0ea5e9]/20 hover:border-[#0ea5e9]/50 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
