"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, FileText, ChevronRight } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Work", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

interface NavigationProps {
  onOpenResume?: () => void;
}

export default function Navigation({ onOpenResume }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const scrollPos = window.scrollY + 180;
      let currentSection = "";

      navItems.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = item.href;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 py-3.5"
          : "bg-transparent py-3.5 md:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Name / Brand */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="text-base sm:text-lg font-bold text-white tracking-wide hover:text-[#0ea5e9] transition-colors"
          style={{ fontFamily: "var(--font-space)" }}
        >
          Mohamed Salih CK
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-colors rounded-lg ${
                  isActive
                    ? "text-[#0ea5e9] bg-[#0ea5e9]/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="px-3.5 py-1.5 bg-[#0ea5e9]/10 hover:bg-[#0ea5e9]/20 border border-[#0ea5e9]/30 text-[#0ea5e9] text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none rounded-lg bg-white/5 border border-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#090a0f] flex flex-col p-6 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-base font-bold text-white" style={{ fontFamily: "var(--font-space)" }}>
              Mohamed Salih CK
            </span>
            <button
              onClick={() => setIsMobileOpen(false)}
              className="p-2 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 py-8 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between p-4 bg-white/[0.02] border border-white/10 rounded-xl text-base font-bold text-white uppercase tracking-wider hover:border-[#0ea5e9]"
              >
                <span>{item.name}</span>
                <ChevronRight className="w-5 h-5 text-[#0ea5e9]" />
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            {onOpenResume && (
              <button
                onClick={() => {
                  setIsMobileOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 bg-[#0ea5e9] text-white text-sm font-bold rounded-xl flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            )}
            <p className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Mohamed Salih CK
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
