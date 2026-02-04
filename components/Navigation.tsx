"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X, ChevronRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { name: "HOME", href: "#hero" },
  { name: "ABOUT", href: "#about" },
  { name: "SKILLS", href: "#skills" },
  { name: "EXPERIENCE", href: "#experience" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);

          // Update active section - optimized
          const scrollPos = window.scrollY + 200;
          let newActiveSection = "";

          navItems.forEach((item) => {
            const section = document.querySelector(item.href);
            if (section) {
              const rect = section.getBoundingClientRect();
              const top = rect.top + window.scrollY;
              const bottom = top + rect.height;
              if (scrollPos >= top && scrollPos < bottom) {
                newActiveSection = item.href;
              }
            }
          });

          setActiveSection((prev) => {
            if (prev !== newActiveSection) {
              return newActiveSection;
            }
            return prev;
          });

          // Update progress bar - throttled
          const winScroll = document.documentElement.scrollTop;
          const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
          
          if (progressRef.current && scrolled >= 0 && scrolled <= 100) {
            gsap.to(progressRef.current, {
              width: `${scrolled}%`,
              duration: 0.1,
              ease: "none",
            });
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (progressRef.current) {
        gsap.killTweensOf(progressRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { opacity: 1, y: 0 });
      gsap.from(navRef.current, {
        y: -20,
        opacity: 0.8,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-0.5 bg-black/30 z-[60]">
        <div
          ref={progressRef}
          className="h-full bg-[#0ea5e9]"
          style={{ width: "0%" }}
        />
      </div>

      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-md border-b border-white/5 pt-4 pb-3 md:py-4"
            : "bg-[#0a0a0f]/90 backdrop-blur-sm border-b border-white/5 pt-5 pb-3 md:py-6"
        }`}
        style={{ opacity: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Name */}
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
              Mohamed Salih . CK
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 lg:px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    activeSection === item.href
                      ? "text-[#0ea5e9]"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-[#0ea5e9] transition-colors p-2 -mr-2 relative z-50"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Outside nav for proper z-index stacking */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ pointerEvents: 'auto' }}
          />
          
          {/* Mobile Menu - Full Screen Professional Design */}
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed inset-0 bg-[#0a0a0f] z-[101] overflow-y-auto flex flex-col"
            style={{ 
              pointerEvents: 'auto',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%'
            }}
          >
            {/* Menu Header - Fixed at Top */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0a0a0f] flex-shrink-0 sticky top-0 z-10">
              <div className="text-xl font-bold text-white uppercase tracking-wider" style={{ fontFamily: "var(--font-space)" }}>
                MENU
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links - Centered Professional Layout */}
            <div 
              className="flex-1 flex flex-col justify-center px-4 sm:px-6 py-8 w-full"
              style={{
                minHeight: '0',
                overflow: 'visible',
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div className="space-y-3 w-full max-w-md mx-auto" style={{ width: '100%' }}>
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`menu-item w-full px-5 py-4 rounded-xl text-base sm:text-lg font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-between relative ${
                        isActive
                          ? "bg-[#0ea5e9]/20 border-2 border-[#0ea5e9] shadow-lg shadow-[#0ea5e9]/30"
                          : "hover:bg-white/10 border-2 border-white/10"
                      }`}
                      style={{ 
                        minHeight: "56px",
                        opacity: 1,
                        visibility: "visible",
                        display: "flex",
                        position: "relative",
                        zIndex: 2,
                        pointerEvents: "auto",
                        color: isActive ? "#ffffff" : "#e5e7eb",
                        backgroundColor: isActive ? "rgba(14, 165, 233, 0.2)" : "transparent",
                        width: "100%",
                        marginBottom: index < navItems.length - 1 ? "12px" : "0"
                      }}
                    >
                      <span 
                        className="flex-1 text-left pr-4 font-semibold" 
                        style={{ 
                          color: isActive ? "#ffffff" : "#e5e7eb",
                          fontWeight: 600,
                          fontSize: "16px",
                          lineHeight: "1.5"
                        }}
                      >
                        {item.name}
                      </span>
                      <ChevronRight 
                        className={`w-5 h-5 flex-shrink-0 transition-transform ${
                          isActive ? "text-[#0ea5e9]" : "text-gray-400"
                        }`} 
                        style={{ color: isActive ? "#0ea5e9" : "#9ca3af" }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Menu Footer - Fixed at Bottom */}
            <div className="px-6 py-4 border-t border-white/10 bg-[#0a0a0f] flex-shrink-0">
              <div className="text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Mohamed Salih . CK
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
