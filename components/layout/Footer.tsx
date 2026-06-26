import Link from "next/link";
import {
  SITE_CONFIG,
  NAV_LINKS,
  SOCIAL_LINKS,
} from "@/constants/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#1a2842] text-white">
      {/* Main footer */}
      <div className="px-6 sm:px-12 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-[42px] h-[42px] rounded-lg bg-[#E8711A] flex items-center justify-center">
                <i
                  className="ti ti-sun text-white text-xl"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-base font-semibold leading-tight">
                  {SITE_CONFIG.name}
                </p>
                <span className="text-[11px] text-white/60">
                  {SITE_CONFIG.tagline}
                </span>
              </div>
            </div>

            <p className="text-[14px] text-white/70 leading-relaxed max-w-md mb-6">
              Professional engineering training, consultancy, and architecture
              services — empowering individuals and corporations to move
              forward with confidence.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-md bg-white/10 hover:bg-[#E8711A] transition-colors flex items-center justify-center group"
                >
                  <i
                    className={`ti ${social.icon} text-white text-lg`}
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#E8711A]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-white/70 hover:text-[#E8711A] transition-colors inline-flex items-center gap-2"
                  >
                    <i
                      className="ti ti-chevron-right text-xs"
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
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-5 text-[#E8711A]">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-[14px] text-white/70">
                <i
                  className="ti ti-phone text-[#E8711A] text-base mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="hover:text-[#E8711A] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[14px] text-white/70">
                <i
                  className="ti ti-mail text-[#E8711A] text-base mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-[#E8711A] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-6 sm:px-12 lg:px-20 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-white/60">{SITE_CONFIG.copyright}</p>
          <p className="text-[13px] text-white/60">
            Designed & Built with{" "}
            <span className="text-[#E8711A]">♥</span> by{" "}
            <span className="text-white font-medium">Royal Infra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}