"use client";

import { useState } from "react";
import { SITE_CONFIG, SOCIAL_LINKS } from "@/constants/site-config";

export default function ContactBanner() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Build WhatsApp message
    const message = `*New Inquiry from Website* 🚀

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    // Reset
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-20 bg-background overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-[#E8711A]/5 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#1a2842]/5 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[#E8711A]" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#E8711A]">
              Contact Us
            </p>
            <span className="h-px w-10 bg-[#E8711A]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Get in touch with our{" "}
            <span className="text-[#E8711A]">expert team</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            Have questions or need details? Our friendly team is here to help —
            from project consultation to training inquiries, reach out anytime.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT — Quick info */}
          <div className="lg:col-span-2 bg-[#E8711A]/5 border border-[#E8711A]/10 rounded-3xl p-8 sm:p-10 flex flex-col">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Quick info
            </h3>

            <div className="space-y-7 flex-1">
              {/* Phone */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <i
                    className="ti ti-phone text-[#E8711A] text-lg"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Phone
                  </p>
                </div>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="block text-sm font-medium text-foreground hover:text-[#E8711A] transition-colors"
                >
                  {SITE_CONFIG.phone}
                </a>
              </div>
              {/* Email */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <i
                    className="ti ti-mail text-[#E8711A] text-lg"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Email address
                  </p>
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm font-medium text-foreground hover:text-[#E8711A] transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              {/* Location */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <i
                    className="ti ti-map-pin text-[#E8711A] text-lg"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Location
                  </p>
                </div>
                <p className="text-sm font-medium text-foreground">
                  {SITE_CONFIG.address}
                </p>
              </div>

              {/* Working Hours */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <i
                    className="ti ti-clock text-[#E8711A] text-lg"
                    aria-hidden="true"
                  />
                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    Working hours
                  </p>
                </div>
                <div className="text-sm font-medium text-foreground space-y-1">
                  <p>{SITE_CONFIG.hours.weekdays}</p>
                  <p>{SITE_CONFIG.hours.saturday}</p>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.hours.sunday}
                  </p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 pt-8 border-t border-[#E8711A]/10">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-4">
                Follow us on
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-card border border-border hover:bg-[#E8711A] hover:border-[#E8711A] flex items-center justify-center group transition-all"
                  >
                    <i
                      className={`ti ${social.icon} text-foreground group-hover:text-white text-lg transition-colors`}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <div className="bg-[#1a2842] rounded-3xl p-8 sm:p-10 text-white h-full">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Fill out the form, we&apos;ll reply soon
              </h3>
              <p className="text-white/70 text-sm mb-8">
                Fill out the form and our team will get back shortly with the
                support you need.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <i
                      className="ti ti-user absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8711A] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your email
                  </label>
                  <div className="relative">
                    <i
                      className="ti ti-mail absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="info@example.com"
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8711A] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone number
                  </label>
                  <div className="relative">
                    <i
                      className="ti ti-phone absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-lg pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 56 123 4567"
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8711A] focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <i
                      className="ti ti-pencil absolute left-4 top-4 text-white/50 text-lg pointer-events-none"
                      aria-hidden="true"
                    />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Write a message..."
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#E8711A] focus:bg-white/10 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#E8711A] hover:bg-[#d4621a] disabled:opacity-70 text-white font-semibold text-sm py-4 rounded-full transition-all flex items-center justify-center gap-2 group"
                >
                  {submitting ? (
                    <>
                      <i className="ti ti-loader-2 animate-spin text-lg" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <i className="ti ti-brand-whatsapp text-lg" />
                      Send via WhatsApp
                      <i className="ti ti-arrow-right text-lg group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-white/50 text-center">
                  Clicking the button will open WhatsApp with your message
                  pre-filled.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}