"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";
import Preloader from "@/components/Preloader";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for preloader to complete before showing main content
    const checkPreloader = setInterval(() => {
      const preloader = document.getElementById("preloader");
      if (preloader && preloader.style.display === "none") {
        setIsLoading(false);
        clearInterval(checkPreloader);
      }
    }, 100);

    return () => clearInterval(checkPreloader);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const ctx = gsap.context(() => {
        // Smooth page load animation after preloader
        if (mainRef.current) {
          gsap.from(mainRef.current, {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power3.out",
          });
        }
      }, mainRef);

      return () => ctx.revert();
    }
  }, [isLoading]);

  return (
    <>
      <Preloader />
      <main ref={mainRef} className="relative min-h-screen">
        <Navigation />
        <div className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}

