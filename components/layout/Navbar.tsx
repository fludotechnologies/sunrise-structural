"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site-config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg shadow-black/5"
            : "bg-white border-b border-gray-200"
        }
      `}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-[38px] h-[38px] rounded-lg bg-[#E8711A] flex items-center justify-center">
            <i className="ti ti-sun text-white text-xl" aria-hidden="true" />
          </div>
          <div className="hidden sm:block">
            <p className="text-[15px] font-medium leading-tight text-gray-900">
              {SITE_CONFIG.name}
            </p>
            <span className="text-[11px] text-gray-500 font-normal">
              {SITE_CONFIG.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop links — centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-[#E8711A] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile button */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-block bg-[#E8711A] hover:bg-[#d4621a] transition-colors text-white text-sm font-semibold px-5 py-2 rounded-full"
          >
            Get a Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-gray-900 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-[#E8711A] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#E8711A] text-white text-sm font-semibold px-4 py-2 rounded-full text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}