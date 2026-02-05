"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Code2, Terminal, Cpu, Zap } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const progressBar = document.getElementById("progress-bar");
      const progressPercent = document.getElementById("progress-percent");
      
      if (!progressBar || !progressPercent) return;
      
      // Initialize at 0%
      progressBar.style.width = "0%";
      progressPercent.textContent = "0%";
      setProgress(0);
      
      // Create a progress object that GSAP can animate
      const progressObj = { value: 0 };
      
      // Animate the progress value from 0 to 100
      const progressTween = gsap.to(progressObj, {
        value: 100,
        duration: 2.8,
        ease: "power1.out",
        onUpdate: () => {
          const currentProgress = progressObj.value;
          const roundedProgress = Math.round(currentProgress);
          
          // Update progress bar width - synchronized with percentage
          progressBar.style.width = `${currentProgress}%`;
          
          // Update percentage text in perfect sync
          progressPercent.textContent = `${roundedProgress}%`;
          
          // Update state for status messages
          setProgress(currentProgress);
        },
        onComplete: () => {
          // Ensure we end at exactly 100%
          progressBar.style.width = "100%";
          progressPercent.textContent = "100%";
          setProgress(100);
          setIsComplete(true);
        }
      });

      return () => {
        progressTween.kill();
      };
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (isComplete) {
      // Animate progress bar to 100% smoothly
      gsap.to("#progress-bar", {
        width: "100%",
        duration: 0.3,
        ease: "power2.out",
      });

      // Wait a bit then animate preloader out
      setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => {
            // Hide preloader after animation
            const preloader = document.getElementById("preloader");
            if (preloader) {
              preloader.style.display = "none";
            }
          }
        });

        tl.to("#preloader", {
          opacity: 0,
          duration: 0.6,
          ease: "power3.inOut",
        })
        .to("#preloader", {
          scale: 1.1,
          duration: 0.6,
          ease: "power3.inOut",
        }, "<");
      }, 300);
    }
  }, [isComplete]);

  // Animate icons on mount
  useEffect(() => {
    const icons = ["#code-icon", "#terminal-icon", "#cpu-icon", "#zap-icon"];
    
    icons.forEach((icon, index) => {
      gsap.from(icon, {
        scale: 0,
        rotation: -180,
        opacity: 0,
        duration: 0.6,
        delay: index * 0.15,
        ease: "back.out(1.7)",
      });

      // Continuous floating animation
      gsap.to(icon, {
        y: -10,
        duration: 2 + index * 0.3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });
    });

    // Animate progress text
    gsap.from("#progress-text", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.5,
      ease: "power3.out",
    });

    // Animate progress bar container
    gsap.from("#progress-container", {
      opacity: 0,
      scaleX: 0,
      duration: 1,
      delay: 0.7,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0ea5e9] rounded-full filter blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#38bdf8] rounded-full filter blur-[120px] opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6">
        {/* Developer Icons */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="relative">
            <Code2
              id="code-icon"
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#0ea5e9]"
            />
            <div className="absolute inset-0 bg-[#0ea5e9] rounded-full blur-xl opacity-50 animate-pulse" />
          </div>
          <div className="relative">
            <Terminal
              id="terminal-icon"
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#38bdf8]"
            />
            <div className="absolute inset-0 bg-[#38bdf8] rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: "0.2s" }} />
          </div>
          <div className="relative">
            <Cpu
              id="cpu-icon"
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#0ea5e9]"
            />
            <div className="absolute inset-0 bg-[#0ea5e9] rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: "0.4s" }} />
          </div>
          <div className="relative">
            <Zap
              id="zap-icon"
              className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#38bdf8]"
            />
            <div className="absolute inset-0 bg-[#38bdf8] rounded-full blur-xl opacity-50 animate-pulse" style={{ animationDelay: "0.6s" }} />
          </div>
        </div>

        {/* Loading Text */}
        <div id="progress-text" className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            <span className="text-[#0ea5e9]">&lt;</span>
            <span className="mx-2">Loading Portfolio</span>
            <span className="text-[#0ea5e9]">/&gt;</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-mono">
            Initializing developer environment...
          </p>
        </div>

        {/* Progress Bar Container */}
        <div
          id="progress-container"
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-2 sm:h-3 bg-white/10 rounded-full overflow-hidden border border-white/20 shadow-lg relative"
        >
          {/* Progress Bar */}
          <div
            id="progress-bar"
            className="h-full rounded-full relative overflow-hidden will-change-[width]"
            style={{
              width: "0%",
              minWidth: "0%",
              maxWidth: "100%",
              background: "linear-gradient(to right, #0ea5e9, #38bdf8, #0ea5e9)",
              backgroundSize: "200% 100%",
              backgroundPosition: "0% 50%",
              transition: "none",
              display: "block",
              position: "relative",
            }}
          >
            {/* Animated Gradient Overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0ea5e9] rounded-full"
              style={{
                backgroundSize: "200% 100%",
                animation: "gradient-shift 3s ease infinite",
                mixBlendMode: "overlay",
              }}
            />
            
            {/* Shimmer Effect */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
              style={{
                animation: "shimmer 2s infinite",
                pointerEvents: "none",
              }}
            />
            
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(14, 165, 233, 0.5) 0%, transparent 70%)",
                filter: "blur(4px)",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Progress Percentage */}
        <div className="mt-4 sm:mt-6 text-center">
          <span 
            id="progress-percent"
            className="text-lg sm:text-xl lg:text-2xl font-bold text-[#0ea5e9] font-mono tabular-nums"
          >
            0%
          </span>
        </div>

        {/* Terminal-like Status Messages */}
        <div className="mt-6 sm:mt-8 text-center">
          <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-gray-400 font-mono">
              <span className="text-[#0ea5e9]">$</span>{" "}
              <span className="text-gray-300">
                {progress < 30
                  ? "Compiling assets..."
                  : progress < 60
                  ? "Optimizing performance..."
                  : progress < 90
                  ? "Loading components..."
                  : "Finalizing..."}
              </span>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

