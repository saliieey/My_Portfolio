"use client";

import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
      <Preloader />
      <div className="relative min-h-screen bg-[#090a0f] text-white selection:bg-[#0ea5e9] selection:text-white overflow-x-clip">
        <Navigation onOpenResume={() => setIsResumeOpen(true)} />

        <main className="relative z-10">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact onOpenResume={() => setIsResumeOpen(true)} />
        </main>

        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </>
  );
}
