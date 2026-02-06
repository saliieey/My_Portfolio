
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://musicflow-1.onrender.com/",
    gradient: "from-purple-600 via-pink-600 to-red-600",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop&q=80",
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
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://nicorai-website.vercel.app",
    gradient: "from-blue-600 via-cyan-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop&q=80",
    stats: [
      { icon: TrendingUp, label: "Requests", value: "1M+/day" },
      { icon: Zap, label: "Uptime", value: "99.9%" },
      { icon: Shield, label: "Scale", value: "Enterprise" },
    ],
    featured: true,
  },
  {
    title: "Podnest YouTube Agent",
    subtitle: "YouTube Content Agent Platform",
    description:
      "Advanced YouTube agent platform built with Next.js, React, and TypeScript. Features intelligent content management, automated workflows, and seamless integration with YouTube APIs for efficient content creation and management.",
    technologies: ["NEXT.JS", "REACT", "TYPESCRIPT"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://podnest-youtube-agent.vercel.app",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=400&fit=crop&q=80",
    stats: [
      { icon: TrendingUp, label: "Efficiency", value: "+45%" },
      { icon: Zap, label: "Load Time", value: "1.2s" },
      { icon: Users, label: "Mobile", value: "100%" },
    ],
    featured: false,
  },
  {
    title: "Maelstrom Global",
    subtitle: "Corporate Website & CMS",
    description:
      "Official company website for Maelstrom Global Pvt Ltd featuring advanced GSAP animations, responsive design, and WordPress headless CMS integration. Content creators can manage portfolio works, services, and company information through WordPress backend.",
    technologies: ["NEXT.JS", "GSAP", "CSS", "WORDPRESS", "HEADLESS CMS"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://maelstrom-global-website.vercel.app/",
    gradient: "from-green-600 via-emerald-600 to-teal-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop&q=80",
    stats: [
      { icon: Users, label: "Projects", value: "150+" },
      { icon: TrendingUp, label: "Success", value: "95%" },
      { icon: Zap, label: "Performance", value: "Fast" },
    ],
    featured: false,
  },
  {
    title: "LUXE NOIR",
    subtitle: "Premium E-Commerce Platform",
    description:
      "High-end luxury watch showcase website demonstrating advanced GSAP animations, 3D product visualization, and seamless checkout experience. Features custom CMS, inventory management, and integrated payment processing.",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "GSAP", "THREE.JS", "STRIPE API"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://luxenoirwatches.netlify.app/",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=400&fit=crop&q=80",
    stats: [
      { icon: TrendingUp, label: "Conversion", value: "+45%" },
      { icon: Zap, label: "Load Time", value: "1.2s" },
      { icon: Users, label: "Mobile", value: "100%" },
    ],
    featured: false,
  },
  {
    title: "My Portfolio",
    subtitle: "Professional Portfolio Website",
    description:
      "Premium portfolio website showcasing professional skills and experience with advanced GSAP animations and fully responsive design. Built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and modern UI/UX.",
    technologies: ["NEXT.JS", "TYPESCRIPT", "TAILWINDCSS", "GSAP", "REACT"],
    github: "https://github.com/saliieey?tab=repositories",
    live: "https://github.com/saliieey?tab=repositories",
    gradient: "from-indigo-600 via-purple-600 to-pink-600",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=400&fit=crop&q=80",
    stats: [
      { icon: TrendingUp, label: "Performance", value: "Fast" },
      { icon: Zap, label: "Responsive", value: "100%" },
      { icon: Users, label: "Sections", value: "6+" },
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

      // Professional hover animations - clean and subtle
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        const gradientHeader = card.querySelector(".gradient-header") as HTMLElement;
        const cardImage = gradientHeader?.querySelector("img") as HTMLImageElement;
        
        // Mouse enter - professional lift and image zoom
        card.addEventListener("mouseenter", () => {
          gsap.killTweensOf([card, gradientHeader, cardImage]);
          
          gsap.to(card, {
            y: -8,
            duration: 0.4,
            ease: "power2.out",
          });
          
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1.08,
              duration: 0.6,
              ease: "power2.out",
            });
          }
          
          gsap.to(gradientHeader, {
            filter: "brightness(1.1)",
            duration: 0.4,
            ease: "power2.out",
          });
        });
        
        // Mouse leave - smooth reset
        card.addEventListener("mouseleave", () => {
          gsap.killTweensOf([card, gradientHeader, cardImage]);
          
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: "power2.inOut",
          });
          
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
          
          gsap.to(gradientHeader, {
            filter: "brightness(1)",
            duration: 0.4,
            ease: "power2.inOut",
          });
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
              className="project-card bg-[#0a0a0f] border-2 border-white/10 rounded-xl overflow-hidden hover:border-[#0ea5e9]/50 transition-all duration-300 group relative flex flex-col cursor-pointer"
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

              {/* Project Cover Image */}
              <div className={`gradient-header relative h-40 lg:h-44 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.subtitle}`}
                  fill
                  className="object-cover transition-transform duration-600 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={project.featured}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-80"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent"></div>
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
              href="https://github.com/saliieey?tab=repositories"
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
