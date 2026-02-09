"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { Code2, Terminal, Cpu, Zap, CheckCircle2 } from "lucide-react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [statusMessage, setStatusMessage] = useState("Initializing...");

  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const progressBar = document.getElementById("progress-bar");
      const progressPercent = document.getElementById("progress-percent");
      
      if (!progressBar || !progressPercent) return;
      
      // Initialize at 0% - ensure visibility
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
          
          // Update React state - this will trigger smooth re-render
          setProgress(currentProgress);
          
          // Update status messages based on progress
          if (currentProgress < 20) {
            setStatusMessage("Loading assets...");
          } else if (currentProgress < 40) {
            setStatusMessage("Compiling TypeScript...");
          } else if (currentProgress < 60) {
            setStatusMessage("Optimizing bundle...");
          } else if (currentProgress < 80) {
            setStatusMessage("Rendering components...");
          } else {
            setStatusMessage("Finalizing...");
          }
        },
        onComplete: () => {
          // Ensure we end at exactly 100%
          setProgress(100);
          setStatusMessage("Ready!");
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

        tl.to("#preloader-content", {
          opacity: 0,
          scale: 0.95,
          duration: 0.5,
          ease: "power3.inOut",
        })
        .to("#preloader", {
          opacity: 0,
          duration: 0.4,
          ease: "power3.inOut",
        }, "-=0.3");
      }, 800);
    }
  }, [isComplete]);

  // Animate elements on mount - but NOT the progress bar
  useEffect(() => {
    // Set initial visible state - ensure everything is visible
    gsap.set("#preloader-content", { opacity: 1, scale: 1, y: 0 });
    gsap.set("#logo-container", { opacity: 1, scale: 1 });
    
    // CRITICAL: Status text must NEVER fade out - always visible
    gsap.set("#status-text", { 
      opacity: 1, 
      y: 0,
      visibility: "visible",
      display: "block"
    });
    
    // CRITICAL: Progress bar elements must NEVER be animated by GSAP
    // Set them to always be visible and never touched by animations
    gsap.set("#progress-wrapper", { 
      opacity: 1, 
      y: 0,
      visibility: "visible",
      display: "block"
    });
    gsap.set("#progress-container", { 
      opacity: 1, 
      visibility: "visible", 
      display: "block",
      y: 0
    });
    gsap.set("#progress-bar", { 
      opacity: 1, 
      visibility: "visible", 
      display: "block",
      y: 0
    });
    gsap.set("#progress-percent", { 
      opacity: 1, 
      visibility: "visible",
      y: 0
    });

    // Animate in sequence - EXCLUDE status-text and progress-wrapper completely
    const tl = gsap.timeline();
    
    tl.from("#logo-container", {
      opacity: 0,
      scale: 0.8,
      y: -20,
      duration: 0.6,
      ease: "back.out(1.7)",
    });
    // NOTE: status-text and progress-wrapper are NOT animated - they stay visible from the start

    // Animate icons rotation
    const icons = ["#icon-code", "#icon-terminal", "#icon-cpu", "#icon-zap"];
    icons.forEach((icon, index) => {
      gsap.from(icon, {
        opacity: 0,
        scale: 0,
        rotation: -180,
        duration: 0.4,
        delay: 0.2 + index * 0.1,
        ease: "back.out(1.7)",
      });
    });
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ 
        minHeight: "100vh", 
        minWidth: "100vw",
        display: "flex",
        opacity: 1,
        visibility: "visible",
        backgroundColor: "#0a0a0f",
        background: "#0a0a0f"
      }}
    >
      {/* Solid Background Layer - Fully Opaque */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundColor: "#0a0a0f",
          opacity: 1,
          zIndex: 0
        }}
      />

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ zIndex: 1 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h1v1H0zm99 99h1v1h-1z' fill='%230ea5e9'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Gradient Orbs - Very Subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0ea5e9] rounded-full filter blur-[180px] opacity-[0.04]" style={{ zIndex: 1 }} />

      {/* Main Content Container */}
      <div 
        id="preloader-content"
        className="relative w-full max-w-lg mx-auto px-4 sm:px-6 flex flex-col items-center justify-center"
        style={{ 
          opacity: 1, 
          visibility: "visible",
          zIndex: 10,
          position: "relative"
        }}
      >
        {/* Logo/Icon Container */}
        <div 
          id="logo-container"
          className="mb-6 sm:mb-8 relative"
          style={{ opacity: 1 }}
        >
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
            {/* Animated Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-[#0ea5e9]/20">
              <div 
                className="absolute inset-0 rounded-full border-2 border-[#0ea5e9]"
                style={{
                  clipPath: `polygon(0 0, ${progress}% 0, ${progress}% 100%, 0 100%)`,
                  transition: "clip-path 0.1s linear"
                }}
              />
            </div>
            
            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Code2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#0ea5e9]" />
            </div>
            
            {/* Rotating Icons */}
            <div className="absolute inset-0">
              <div 
                id="icon-code"
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${progress * 3.6}deg) translateY(-35px) rotate(-${progress * 3.6}deg)`
                }}
              >
                <Code2 className="w-4 h-4 text-[#0ea5e9]/50" />
              </div>
              <div 
                id="icon-terminal"
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${progress * 3.6 + 90}deg) translateX(35px) rotate(-${progress * 3.6 + 90}deg)`
                }}
              >
                <Terminal className="w-4 h-4 text-[#38bdf8]/50" />
              </div>
              <div 
                id="icon-cpu"
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                style={{
                  transform: `rotate(${progress * 3.6 + 180}deg) translateY(35px) rotate(-${progress * 3.6 + 180}deg)`
                }}
              >
                <Cpu className="w-4 h-4 text-[#0ea5e9]/50" />
              </div>
              <div 
                id="icon-zap"
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
                style={{
                  transform: `rotate(${progress * 3.6 + 270}deg) translateX(-35px) rotate(-${progress * 3.6 + 270}deg)`
                }}
              >
                <Zap className="w-4 h-4 text-[#38bdf8]/50" />
              </div>
            </div>
          </div>
        </div>

        {/* Status Text - ALWAYS VISIBLE */}
        <div 
          id="status-text"
          className="mb-5 sm:mb-6 text-center"
          style={{ 
            opacity: 1,
            visibility: "visible",
            display: "block",
            transform: "translateY(0)"
          }}
        >
          <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-white font-mono">
            <span className="text-[#0ea5e9]">&lt;</span>
            <span className="mx-1.5">{statusMessage}</span>
            <span className="text-[#0ea5e9]">/&gt;</span>
          </h2>
        </div>

        {/* Progress Wrapper - ALWAYS VISIBLE - NEVER ANIMATED */}
        <div 
          id="progress-wrapper"
          className="w-full max-w-md mx-auto mb-6"
          style={{ 
            opacity: 1,
            visibility: "visible",
            position: "relative",
            zIndex: 10,
            display: "block",
            transform: "translateY(0)"
          }}
        >
          {/* Progress Bar Container - ALWAYS VISIBLE */}
          <div className="w-full">
            {/* Progress Label and Percentage */}
            <div className="flex items-center justify-between mb-2.5 px-1">
              <span className="text-xs sm:text-sm text-gray-400 font-mono">Loading Progress</span>
              <span 
                id="progress-percent"
                className="text-lg sm:text-xl font-bold text-[#0ea5e9] font-mono tabular-nums"
                style={{ 
                  textShadow: "0 0 15px rgba(14, 165, 233, 0.7)",
                  opacity: 1,
                  visibility: "visible"
                }}
              >
                {Math.round(progress)}%
              </span>
            </div>
            <div
              id="progress-container"
              className="w-full h-2.5 sm:h-3 bg-[#0a0a0f] rounded-full overflow-hidden border border-[#0ea5e9]/40 relative"
              style={{
                backgroundColor: "#0a0a0f",
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.8)",
                opacity: 1,
                visibility: "visible",
                position: "relative",
                zIndex: 10,
                display: "block",
                transform: "translateY(0)"
              }}
            >
              {/* Progress Bar - ALWAYS VISIBLE - SMOOTH FILL */}
              <div
                id="progress-bar"
                className="h-full rounded-full relative overflow-hidden"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, #0ea5e9 0%, #38bdf8 50%, #0ea5e9 100%)",
                  backgroundSize: "200% 100%",
                  transition: "width 0.1s linear",
                  boxShadow: "0 0 20px rgba(14, 165, 233, 0.8), inset 0 0 10px rgba(14, 165, 233, 0.3)",
                  opacity: 1,
                  visibility: "visible",
                  minWidth: progress > 0 ? "4px" : "0px",
                  display: "block",
                  position: "relative",
                  zIndex: 11,
                  border: "none",
                  transform: "translateY(0) translateX(0)"
                }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-[#0ea5e9] via-[#38bdf8] to-[#0ea5e9] rounded-full"
                  style={{
                    backgroundSize: "200% 100%",
                    animation: "gradient-shift 3s ease infinite",
                    opacity: 1
                  }}
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full"
                  style={{
                    animation: "shimmer 2s infinite",
                    opacity: 1,
                    width: "60%"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Terminal-like Status Messages */}
        <div className="w-full max-w-md">
          <div 
            className="bg-[#0f1117] border border-[#0ea5e9]/30 rounded-lg p-4 sm:p-5 shadow-lg"
            style={{
              backgroundColor: "#0f1117",
              opacity: 1,
              boxShadow: "0 0 15px rgba(14, 165, 233, 0.2)"
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span className="text-xs text-gray-400 font-mono font-semibold">System Status</span>
            </div>
            <div className="space-y-2 font-mono text-xs sm:text-sm">
              {progress >= 20 && (
                <div className="flex items-center gap-2 text-[#27c93f]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Assets loaded</span>
                </div>
              )}
              {progress >= 50 && (
                <div className="flex items-center gap-2 text-[#27c93f]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>TypeScript compiled</span>
                </div>
              )}
              {progress >= 75 && (
                <div className="flex items-center gap-2 text-[#27c93f]">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Bundle optimized</span>
                </div>
              )}
              {progress >= 90 && (
                <div className="flex items-center gap-2 text-[#0ea5e9]">
                  <Zap className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="font-semibold">Ready to launch</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
