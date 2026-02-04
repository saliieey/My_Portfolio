
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowRight, Star, TrendingUp, Zap, Users, Shield, Code2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "MusicFlow",
    subtitle: "Music Streaming Platform",
    description:
      "A full-stack Spotify-inspired music streaming web application featuring real-time playback, playlist management, and advanced search capabilities. Built with modern architecture supporting 10K+ concurrent users with sub-100ms response times.",
    technologies: ["REACT", "TYPESCRIPT", "NODE.JS", "EXPRESS", "POSTGRESQL", "TAILWINDCSS"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-purple-600 via-pink-600 to-red-600",
    stats: [
      { icon: Users, label: "Users", value: "10K+" },
      { icon: Star, label: "Rating", value: "4.9/5" },
      { icon: Zap, label: "Performance", value: "<100ms" },
    ],
    featured: true,
  },
  {
    title: "NicorAI",
    subtitle: "AI-Powered Enterprise Platform",
    description:
      "Production-ready AI company website with RAG-based chat interface, real-time data processing, and scalable cloud infrastructure. Features advanced AI integrations, automated content management, and enterprise-grade security.",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT", "NODE.JS", "AWS", "TERRAFORM"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    stats: [
      { icon: TrendingUp, label: "Requests", value: "1M+/day" },
      { icon: Zap, label: "Uptime", value: "99.9%" },
      { icon: Shield, label: "Scale", value: "Enterprise" },
    ],
    featured: true,
  },
  {
    title: "LUXE NOIR",
    subtitle: "Premium E-Commerce Platform",
    description:
      "High-end luxury watch showcase website demonstrating advanced GSAP animations, 3D product visualization, and seamless checkout experience. Features custom CMS, inventory management, and integrated payment processing.",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "GSAP", "THREE.JS", "STRIPE API"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    stats: [
      { icon: TrendingUp, label: "Conversion", value: "+45%" },
      { icon: Zap, label: "Load Time", value: "1.2s" },
      { icon: Users, label: "Mobile", value: "100%" },
    ],
    featured: false,
  },
  {
    title: "TaskFlow",
    subtitle: "Collaborative Project Management",
    description:
      "Enterprise-grade project management tool with real-time collaboration, advanced task tracking, and comprehensive analytics. Built with microservices architecture, supporting teams of 1000+ members.",
    technologies: ["REACT", "NODE.JS", "MONGODB", "WEBSOCKET", "DOCKER", "KUBERNETES"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    stats: [
      { icon: Users, label: "Teams", value: "500+" },
      { icon: TrendingUp, label: "Tasks", value: "50K+" },
      { icon: Zap, label: "Efficiency", value: "+60%" },
    ],
    featured: false,
  },
  {
    title: "FinTech Dashboard",
    subtitle: "Banking Analytics Platform",
    description:
      "Secure financial analytics dashboard for banking institutions with real-time transaction monitoring, fraud detection, and comprehensive reporting. Built with bank-level security, encryption, and compliance standards.",
    technologies: ["REACT", "PYTHON", "DJANGO", "POSTGRESQL", "AWS", "ELASTICSEARCH"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    stats: [
      { icon: TrendingUp, label: "Transactions", value: "10M+" },
      { icon: Shield, label: "Security", value: "A+" },
      { icon: Zap, label: "Accuracy", value: "99.99%" },
    ],
    featured: false,
  },
  {
    title: "SocialConnect",
    subtitle: "Next-Gen Social Platform",
    description:
      "Modern social networking platform with real-time messaging, content sharing, live streaming, and advanced privacy controls. Features AI-powered content moderation, recommendation algorithms, and seamless cross-platform synchronization.",
    technologies: ["NEXT.JS", "REACT", "NODE.JS", "MONGODB", "WEBSOCKET", "GRAPHQL"],
    github: "https://github.com",
    live: "https://example.com",
    gradient: "from-cyan-600 via-blue-600 to-indigo-600",
    stats: [
      { icon: Users, label: "Users", value: "1M+" },
      { icon: Zap, label: "Real-time", value: "Yes" },
      { icon: TrendingUp, label: "Engagement", value: "+80%" },
    ],
    featured: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Projects animation - start visible, just animate in
      if (projectsRef.current) {
        const projectCards = projectsRef.current.children;
        gsap.from(projectCards, {
          y: 50,
          opacity: 0.3,
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

      // Professional developer-focused hover animations
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card, cardIndex) => {
        const gradientHeader = card.querySelector(".gradient-header") as HTMLElement;
        const cardContent = card.querySelector(".card-content") as HTMLElement;
        const codeIcon = gradientHeader?.querySelector("svg") as SVGSVGElement;
        const techTags = Array.from(card.querySelectorAll(".tech-tag")) as HTMLElement[];
        const stats = Array.from(card.querySelectorAll(".stat-item")) as HTMLElement[];
        const statIcons = Array.from(card.querySelectorAll(".stat-item svg")) as SVGSVGElement[];
        
        // Ensure all elements are visible by default
        gsap.set([cardContent, ...techTags, ...stats, ...statIcons], {
          opacity: 1,
          visibility: "visible",
          display: "block"
        });
        
        if (codeIcon) {
          gsap.set(codeIcon, {
            opacity: 1,
            visibility: "visible",
            display: "block"
          });
        }
        
        // Create border glow effect element if it doesn't exist
        let borderGlow = card.querySelector(".border-glow") as HTMLElement;
        if (!borderGlow) {
          borderGlow = document.createElement("div");
          borderGlow.className = "border-glow";
          borderGlow.style.cssText = `
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            padding: 2px;
            background: linear-gradient(45deg, #0ea5e9, #38bdf8, #0ea5e9);
            background-size: 200% 200%;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            pointer-events: none;
            z-index: -1;
          `;
          card.appendChild(borderGlow);
        }
        
        // Mouse enter animation - Developer showcase effect
        card.addEventListener("mouseenter", () => {
          // Kill any existing animations first
          gsap.killTweensOf([card, borderGlow, gradientHeader, cardContent, codeIcon, ...techTags, ...stats, ...statIcons]);
          
          const tl = gsap.timeline();
          
          // Ensure all elements are visible before animating
          gsap.set([cardContent, ...techTags, ...stats, ...statIcons], { opacity: 1, visibility: "visible" });
          if (codeIcon) {
            gsap.set(codeIcon, { opacity: 1, visibility: "visible" });
          }
          
          // Card lift with tech glow
          tl.to(card, {
            y: -12,
            scale: 1.02,
            duration: 0.5,
            ease: "power3.out",
          })
          // Border glow animation - code execution effect
          .to(borderGlow, {
            opacity: 1,
            backgroundPosition: "200% 200%",
            duration: 1.5,
            ease: "none",
            repeat: -1,
          }, "<")
          // Gradient header - code compilation effect
          .to(gradientHeader, {
            scale: 1.05,
            filter: "brightness(1.2) saturate(1.3)",
            duration: 0.5,
            ease: "power2.out",
          }, "<0.1");
          
          // Code icon pulse - like typing
          if (codeIcon) {
            tl.to(codeIcon, {
              scale: 1.2,
              rotation: 5,
              duration: 0.3,
              ease: "back.out(1.7)",
              yoyo: true,
              repeat: 1,
            }, "<0.2");
          }
          
          // Content slide up - subtle animation
          tl.to(cardContent, {
            y: -3,
            duration: 0.4,
            ease: "power2.out",
          }, "<0.3")
          // Tech tags stagger - subtle scale and movement
          .to(techTags, {
            scale: 1.05,
            y: -2,
            duration: 0.3,
            stagger: 0.05,
            ease: "back.out(1.5)",
          }, "<0.4")
          // Stats animation - subtle scale
          .to(stats, {
            scale: 1.05,
            duration: 0.3,
            stagger: 0.08,
            ease: "power2.out",
          }, "<0.5")
          // Stat icons animation - bounce and rotate on enter
          .to(statIcons, {
            scale: 1.3,
            rotation: 360,
            y: -5,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            yoyo: true,
            repeat: 1,
          }, "<0.6")
          // Continuous pulsing animation for icons while hovering
          .to(statIcons, {
            scale: 1.15,
            y: -3,
            duration: 1.2,
            stagger: 0.15,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }, "<0.8");
        });
        
        // Mouse leave animation - smooth reset
        card.addEventListener("mouseleave", () => {
          const tl = gsap.timeline();
          
          // Kill all repeating animations
          gsap.killTweensOf([borderGlow, ...statIcons]);
          
          // Ensure all elements are visible before resetting
          gsap.set([cardContent, ...techTags, ...stats, ...statIcons], { 
            opacity: 1, 
            visibility: "visible",
            display: "block"
          });
          if (codeIcon) {
            gsap.set(codeIcon, { 
              opacity: 1, 
              visibility: "visible",
              display: "block"
            });
          }
          
          tl.to(card, {
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          })
          .to(borderGlow, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.inOut",
          }, "<")
          .to(gradientHeader, {
            scale: 1,
            filter: "brightness(1) saturate(1)",
            duration: 0.4,
            ease: "power2.inOut",
          }, "<");
          
          if (codeIcon) {
            tl.to(codeIcon, {
              scale: 1,
              rotation: 0,
              opacity: 1,
              visibility: "visible",
              duration: 0.4,
              ease: "power2.inOut",
            }, "<");
          }
          
          tl.to(cardContent, {
            y: 0,
            opacity: 1,
            visibility: "visible",
            duration: 0.4,
            ease: "power2.inOut",
          }, "<")
          .to(techTags, {
            scale: 1,
            y: 0,
            opacity: 1,
            visibility: "visible",
            duration: 0.3,
            ease: "power2.inOut",
          }, "<")
          .to(stats, {
            scale: 1,
            opacity: 1,
            visibility: "visible",
            duration: 0.3,
            ease: "power2.inOut",
          }, "<")
          .to(statIcons, {
            scale: 1,
            rotation: 0,
            y: 0,
            opacity: 1,
            visibility: "visible",
            duration: 0.4,
            ease: "power2.inOut",
          }, "<");
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-32 overflow-hidden z-10"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#10b981] rounded-full filter blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm text-[#0ea5e9] uppercase tracking-wider font-semibold">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-space)" }}>
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#0ea5e9] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies. 
            Each project demonstrates expertise in full-stack development, system architecture, and user experience design.
          </p>
        </div>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-[#0a0a0f] border-2 border-white/10 rounded-xl overflow-hidden hover:border-[#0ea5e9]/50 transition-all duration-300 group relative flex flex-col"
              style={{ 
                opacity: 1,
                willChange: "transform",
                maxHeight: "600px",
                position: "relative"
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-3 right-3 z-20">
                  <div className="bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-white px-3 py-1 rounded-full text-[10px] font-bold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-2.5 h-2.5 fill-white" />
                    FEATURED
                  </div>
                </div>
              )}

              {/* Project Image - Using Gradient Background - Reduced Height */}
              <div className={`gradient-header relative h-40 lg:h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 lg:w-20 lg:h-20 text-white opacity-30" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
                {/* Pattern Overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="card-content p-4 lg:p-5 flex flex-col flex-1">
                <div className="mb-2">
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-0.5 group-hover:text-[#0ea5e9] transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-[#0ea5e9] font-semibold truncate">{project.subtitle}</p>
                </div>
                
                <p 
                  className="text-gray-300 mb-3 text-xs lg:text-sm leading-relaxed flex-1"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  {project.description}
                </p>

                {/* Stats - More Compact */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-2 mb-3 pb-3 border-b border-white/10">
                    {project.stats.map((stat, statIndex) => {
                      const Icon = stat.icon;
                      return (
                        <div key={statIndex} className="stat-item text-center">
                          <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-[#0ea5e9] mx-auto mb-0.5" />
                          <div className="text-[10px] lg:text-xs text-gray-500 mb-0.5 leading-tight">{stat.label}</div>
                          <div className="text-xs lg:text-sm font-bold text-white">{stat.value}</div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Technologies - More Compact */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] lg:text-xs font-semibold text-gray-300 uppercase hover:bg-[#0ea5e9]/10 hover:border-[#0ea5e9]/30 hover:text-[#0ea5e9] transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-[10px] lg:text-xs font-semibold text-gray-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Links - More Compact */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group/link font-semibold"
                  >
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                    <span className="text-xs lg:text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[#0ea5e9] hover:text-[#38bdf8] transition-colors group/link font-bold"
                  >
                    <span className="text-xs lg:text-sm">Live Demo</span>
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#0a0a0f] border-2 border-white/10 rounded-2xl p-8 max-w-2xl hover:border-[#0ea5e9]/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              Explore more projects, contributions, and open-source work on GitHub
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-[#0ea5e9]/50 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
