import Link from "next/link";
import Image from "next/image";
import {
  SITE_CONFIG,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/constants/site-config";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--color-primary-dark))] text-[hsl(var(--color-primary-foreground))] relative overflow-hidden">
      {/* Decorative gold accent at top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--color-secondary))] to-transparent" />

      {/* Background decoration */}
      <div
        className="absolute -top-20 -right-20 w-96 h-96 bg-[hsl(var(--color-secondary)/0.05)] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -left-20 w-96 h-96 bg-[hsl(var(--color-primary)/0.1)] rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Main footer */}
      <div className="relative px-6 sm:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              {/* Logo image */}
              <div className="relative w-[48px] h-[48px] rounded-lg overflow-hidden shadow-gold ring-2 ring-[hsl(var(--color-secondary)/0.3)]">
                <Image
                  src="/images/logo.png"
                  alt={`${SITE_CONFIG.name} logo`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-base font-semibold leading-tight">
                  {SITE_CONFIG.name}
                </p>
                <span className="text-[11px] text-[hsl(var(--color-primary-foreground)/0.6)]">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-[14px] text-[hsl(var(--color-primary-foreground)/0.7)] leading-relaxed max-w-md mb-6">
              Professional engineering training, consultancy, and architecture
              services — empowering individuals and corporations to move forward
              with confidence.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-md bg-white/10 hover:bg-[hsl(var(--color-secondary))] transition-all flex items-center justify-center group hover:-translate-y-0.5"
                >
                  <i
                    className={`ti ${social.icon} text-[hsl(var(--color-primary-foreground))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors`}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[hsl(var(--color-secondary))]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[hsl(var(--color-primary-foreground)/0.7)] hover:text-[hsl(var(--color-secondary))] transition-colors inline-flex items-center gap-2 group"
                  >
                    <i
                      className="ti ti-chevron-right text-xs group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[hsl(var(--color-secondary))]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[14px] text-[hsl(var(--color-primary-foreground)/0.7)]">
                <i
                  className="ti ti-phone text-[hsl(var(--color-secondary))] text-base mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/[\s-]/g, "")}`}
                  className="hover:text-[hsl(var(--color-secondary))] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[hsl(var(--color-primary-foreground)/0.7)]">
                <i
                  className="ti ti-mail text-[hsl(var(--color-secondary))] text-base mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[hsl(var(--color-secondary))] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-[hsl(var(--color-primary-foreground)/0.7)]">
                <i
                  className="ti ti-map-pin text-[hsl(var(--color-secondary))] text-base mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>{SITE_CONFIG.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 px-6 sm:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[hsl(var(--color-primary-foreground)/0.6)]">
            {SITE_CONFIG.copyright}
          </p>
          <p className="text-[13px] text-[hsl(var(--color-primary-foreground)/0.6)]">
            Designed & Built with{" "}
            <span className="text-[hsl(var(--color-secondary))]">♥</span> by{" "}
            <span className="text-[hsl(var(--color-primary-foreground))] font-medium">
              Royal Infra
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}