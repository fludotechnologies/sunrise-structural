"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site-config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 border-b border-border bg-background/90 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-[38px] h-[38px] rounded-lg bg-[#E8711A] flex items-center justify-center">
          <i className="ti ti-sun text-white text-xl" aria-hidden="true" />
        </div>
        <div>
          <p className="text-[15px] font-medium leading-tight">{SITE_CONFIG.name}</p>
          <span className="text-[11px] text-muted-foreground font-normal">
            {SITE_CONFIG.tagline}
          </span>
        </div>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="flex items-center gap-3">
        <Link
          href="#contact"
          className="hidden sm:inline-block bg-[#E8711A] hover:bg-[#d4621a] transition-colors text-white text-sm font-medium px-4 py-2 rounded-lg"
        >
          Get a Quote
        </Link>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-border md:hidden flex flex-col px-6 py-4 gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#E8711A] text-white text-sm font-medium px-4 py-2 rounded-lg text-center"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}