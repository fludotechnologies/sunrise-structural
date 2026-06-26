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
            ? "bg-[hsl(var(--color-surface)/0.9)] backdrop-blur-xl border-b border-[hsl(var(--color-border))] shadow-lg shadow-black/5"
            : "bg-[hsl(var(--color-surface))] border-b border-[hsl(var(--color-border))]"
        }
      `}
    >
      <nav className="flex items-center justify-between px-6 sm:px-12 lg:px-20 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-[38px] h-[38px] rounded-lg bg-[hsl(var(--color-primary))] flex items-center justify-center shadow-md">
            <i
              className="ti ti-sun text-[hsl(var(--color-primary-foreground))] text-xl"
              aria-hidden="true"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[15px] font-semibold leading-tight text-[hsl(var(--color-foreground))]">
              {SITE_CONFIG.name}
            </p>
            <span className="text-[11px] text-[hsl(var(--color-foreground-muted))] font-normal">
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
              className="text-sm text-[hsl(var(--color-foreground-muted))] hover:text-[hsl(var(--color-primary))] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile button */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden sm:inline-block bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-dark))] transition-colors text-[hsl(var(--color-primary-foreground))] text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg"
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
              className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[hsl(var(--color-surface))] border-t border-[hsl(var(--color-border))] px-6 py-4 flex flex-col gap-4 shadow-lg">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[hsl(var(--color-foreground-muted))] hover:text-[hsl(var(--color-primary))] font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[hsl(var(--color-primary))] hover:bg-[hsl(var(--color-primary-dark))] text-[hsl(var(--color-primary-foreground))] text-sm font-semibold px-4 py-2 rounded-full text-center transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}