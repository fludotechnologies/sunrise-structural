"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants/site-config";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex justify-center
      transition-[padding,top] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
      ${scrolled ? "px-3 sm:px-4 lg:px-6 pt-3" : "px-0 pt-0"}`}
    >
      <div
        className={`w-full transform-gpu origin-top will-change-transform
        transition-[transform,border-radius,background-color,box-shadow,backdrop-filter,border-color]
        duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${
          scrolled
            ? "scale-[0.985] rounded-2xl border border-[hsl(var(--color-border))] bg-[hsl(var(--color-surface)/0.82)] backdrop-blur-2xl shadow-[0_12px_40px_rgba(0,0,0,0.10)]"
            : "scale-100 rounded-none border-b border-[hsl(var(--color-border))] bg-[hsl(var(--color-surface))] shadow-none"
        }`}
      >
        <nav className="mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center px-6 sm:px-12 lg:px-20 py-4 max-w-7xl">
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

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[hsl(var(--color-foreground-muted))] hover:text-[hsl(var(--color-primary))] font-medium transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile button */}
          <div className="flex items-center gap-3 md:justify-self-end">
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
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-[hsl(var(--color-foreground))] transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`grid md:hidden overflow-hidden transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-[hsl(var(--color-border))] px-6 py-4 flex flex-col gap-4">
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
          </div>
        </div>
      </div>
    </header>
  );
}