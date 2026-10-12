"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github, CheckCircle2, Cpu, Layers, ShieldCheck, Zap } from "lucide-react";

export interface ProjectData {
  title: string;
  subtitle: string;
  description: string;
  fullOverview?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  architecture?: string;
  technologies: string[];
  github?: string;
  live?: string;
  image: string;
  badge?: string;
  type: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0e14] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto flex flex-col my-auto cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#0d0e14]/90 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0ea5e9] bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-md">
              {project.type}
            </span>
            <h3 className="text-lg font-bold text-white truncate max-w-md">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Banner Image */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden border border-white/10 bg-black/40">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0e14] via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>
                  {project.title}
                </h2>
                <p className="text-sm text-[#0ea5e9] font-medium">{project.subtitle}</p>
              </div>
              <div className="flex items-center gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ea5e9] hover:bg-[#38bdf8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-lg transition-all transform hover:scale-105"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold rounded-lg border border-white/10 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Overview</h4>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Problem & Solution Grid */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
                    <Zap className="w-4 h-4" />
                    <span>The Challenge</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.problem}</p>
                </div>
              )}
              {project.solution && (
                <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-[#0ea5e9] font-semibold text-sm">
                    <ShieldCheck className="w-4 h-4" />
                    <span>The Engineering Solution</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{project.solution}</p>
                </div>
              )}
            </div>
          )}

          {/* Key Architectural Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Key Features & Technical Implementations</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 bg-white/[0.02] border border-white/5 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-[#0ea5e9] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#0ea5e9]/10 border border-[#0ea5e9]/30 rounded-lg text-xs font-semibold text-[#0ea5e9] uppercase"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 px-6 py-4 bg-[#0d0e14]/90 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-500">Case Study Detail</span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
