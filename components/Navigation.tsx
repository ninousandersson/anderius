"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/lib/constants";

export function TulipLogo({ color = "#1A1A1A", size = 26 }: { color?: string; size?: number }) {
  const h = Math.round(size * 1.05);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 100 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left outer petal — sweeps out-left-down, J-curl at bottom */}
      <path
        d="M 41 24 C 28 17, 6 31, 6 54 C 6 72, 18 88, 36 92 C 42 94, 44 88, 41 82"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Right outer petal — mirror */}
      <path
        d="M 59 24 C 72 17, 94 31, 94 54 C 94 72, 82 88, 64 92 C 58 94, 56 88, 59 82"
        stroke={color}
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Center teardrop — sharp point at top, rounded at bottom */}
      <path
        d="M 50 14 C 58 14, 65 28, 63 48 C 61 64, 56 78, 50 90 C 44 78, 39 64, 37 48 C 35 28, 42 14, 50 14 Z"
        stroke={color}
        strokeWidth="6.5"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] h-[72px] flex items-center bg-[#F7F5F0]/90 backdrop-blur-[12px]">
        <div
          className="w-full max-w-[1200px] mx-auto flex items-center justify-between"
          style={{ paddingLeft: "clamp(20px, 5vw, 48px)", paddingRight: "clamp(20px, 5vw, 48px)" }}
        >
          <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
            <TulipLogo />
            <span className="font-serif text-[20px] text-text-primary leading-none">
              Anderius
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-[12px] uppercase tracking-[0.12em] transition-colors duration-300 ${
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  }`}
                  style={{ fontWeight: 400 }}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="font-sans text-[12px] uppercase tracking-[0.1em] font-medium text-stone bg-text-primary rounded-lg transition-colors duration-300 hover:bg-accent"
              style={{ padding: "10px 24px" }}
            >
              Projekt starten
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            className="md:hidden font-sans text-[12px] uppercase tracking-[0.12em] text-text-secondary"
            style={{ fontWeight: 400 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "Schließen" : "Menü"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] bg-stone flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-[32px] text-text-primary block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block font-sans text-[12px] uppercase tracking-[0.1em] font-medium text-stone bg-text-primary rounded-lg mt-4"
                  style={{ padding: "14px 32px" }}
                >
                  Projekt starten
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
