"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Code2, Sparkles, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure content is visible first
      gsap.set([badgeRef.current, titleRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 1,
        y: 0,
      });

      // Badge animation - subtle
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          scale: 0.9,
          opacity: 0.6,
          duration: 0.5,
          ease: "power2.out",
          delay: 0.1,
        });
      }

      // Title animation - smoother
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll(".word");
        gsap.from(words, {
          y: 20,
          opacity: 0.5,
          duration: 0.7,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.3,
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          y: 15,
          opacity: 0.6,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.6,
        });
      }

      // CTA animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          y: 15,
          opacity: 0.6,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.8,
        });
      }

      // Floating icons animation - desktop only
      const floatingIcons = document.querySelectorAll(".floating-icon");
      floatingIcons.forEach((icon, index) => {
        gsap.to(icon, {
          y: -15,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-16 pb-8 md:pt-16 md:pb-0 lg:pt-20"
    >
      {/* Starry Background - Optimized for Memory */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => {
          const size = 0.5 + (i % 3) * 0.3;
          const left = (i * 4) % 100;
          const top = (i * 7) % 100;
          return (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                opacity: 0.3 + (i % 3) * 0.1,
                animation: `twinkle ${3 + (i % 3)}s infinite`,
                animationDelay: `${(i % 2) * 0.5}s`,
              }}
            />
          );
        })}
      </div>

      {/* Background Gradient Orbs - Responsive */}
      <div className="absolute top-1/4 right-1/4 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-[#0ea5e9] rounded-full filter blur-[80px] md:blur-[100px] opacity-15 md:opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-48 md:w-80 lg:w-96 h-48 md:h-80 lg:h-96 bg-[#10b981] rounded-full filter blur-[80px] md:blur-[100px] opacity-10 md:opacity-15"></div>

      {/* Floating Icons - Desktop Only */}
      <div className="hidden lg:block">
        <div className="floating-icon absolute top-20 right-20">
          <Code2 className="w-8 h-8 text-[#0ea5e9] opacity-25" />
        </div>
        <div className="floating-icon absolute top-40 right-40">
          <Sparkles className="w-6 h-6 text-[#10b981] opacity-25" />
        </div>
        <div className="floating-icon absolute bottom-40 left-20">
          <Rocket className="w-10 h-10 text-[#0ea5e9] opacity-25" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
        <div className="max-w-4xl mx-auto text-center md:text-left">
          {/* Badge - Desktop View */}
          <div 
            ref={badgeRef} 
            className="mb-4 md:mb-6 hidden md:inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-full whitespace-nowrap"
            style={{ opacity: 1 }}
          >
            <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-[#0ea5e9] rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-xs lg:text-sm text-[#0ea5e9] font-medium uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>

          {/* Badge - Mobile View */}
          <div 
            className="mb-4 md:hidden inline-flex items-center gap-2 px-3 py-1.5 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-full"
            style={{ opacity: 1 }}
          >
            <div className="w-1.5 h-1.5 bg-[#0ea5e9] rounded-full animate-pulse flex-shrink-0"></div>
            <span className="text-[10px] sm:text-xs text-[#0ea5e9] font-medium uppercase tracking-wider">
              Available for Opportunities
            </span>
          </div>

          {/* Main Title - Perfect Mobile Sizing */}
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 lg:mb-6 leading-[1.1] md:leading-tight"
            style={{ fontFamily: "var(--font-space)", opacity: 1 }}
          >
            <span className="word block text-white">INNOVATIVE</span>
            <span className="word block text-white">SOFTWARE</span>
            <span className="word block text-[#0ea5e9]">DEVELOPER</span>
          </h1>

          {/* Subtitle - Perfect Mobile Sizing */}
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-6 md:mb-8 lg:mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed px-2 md:px-0"
            style={{ opacity: 1 }}
          >
            Crafting exceptional digital experiences through cutting-edge technology and design
          </p>

          {/* CTA Button */}
          <div ref={ctaRef} className="mb-6 md:mb-0" style={{ opacity: 1 }}>
            <button
              onClick={scrollToNext}
              className="group px-5 py-2.5 md:px-7 md:py-3.5 lg:px-8 lg:py-4 bg-gradient-to-r from-[#0ea5e9] to-[#38bdf8] text-white rounded-lg md:rounded-xl font-semibold text-sm md:text-base lg:text-lg hover:shadow-2xl hover:shadow-[#0ea5e9]/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto md:mx-0"
            >
              Explore My Work
              <ArrowDown className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Quick Stats - Perfect Mobile Layout */}
          <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 max-w-sm md:max-w-md mx-auto md:mx-0">
            {[
              { number: "2+", label: "Years" },
              { number: "50+", label: "Projects" },
              { number: "100%", label: "Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0ea5e9] mb-0.5 md:mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Desktop Only */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center">
        <span className="text-xs text-gray-500 mb-2 md:mb-3 uppercase tracking-wider">Scroll</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-600 rounded-full flex justify-center p-1.5 md:p-2">
          <div className="w-1 h-2 md:h-3 bg-[#0ea5e9] rounded-full animate-bounce"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </section>
  );
}
