"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setHidden(true);
      return;
    }

    const timer = setTimeout(() => {
      setHidden(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#090a0f] transition-opacity duration-500"
      style={{ opacity: hidden ? 0 : 1 }}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#0ea5e9] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
          MOHAMED SALIH CK
        </span>
      </div>
    </div>
  );
}
