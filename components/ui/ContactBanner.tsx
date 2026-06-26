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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const message = `*New Inquiry from Website* 🚀

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSubmitting(false);
    }, 500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-12 lg:px-20 bg-[hsl(var(--color-background))] overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-[hsl(var(--color-secondary)/0.08)] rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[hsl(var(--color-primary)/0.08)] rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
              Contact Us
            </p>
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--color-foreground))] leading-tight mb-4">
            Get in touch with our{" "}
            <span className="text-gradient-luxury">expert team</span>
          </h2>
          <p className="text-[hsl(var(--color-foreground-muted))] max-w-2xl mx-auto text-base leading-relaxed">
            Have questions or need details? Our friendly team is here to help —
            from project consultation to training inquiries, reach out anytime.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* LEFT — Quick info */}
          {/* LEFT — Quick info */}
          <div className="lg:col-span-2 bg-[hsl(var(--color-secondary)/0.06)] border border-[hsl(var(--color-secondary)/0.15)] rounded-3xl p-8 sm:p-10 flex flex-col h-full">
            {/* Header */}
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--color-secondary))] mb-3">
                Get In Touch
              </p>
              <h3 className="text-3xl font-bold text-[hsl(var(--color-foreground))] mb-3">
                Quick info
              </h3>
              <p className="text-sm text-[hsl(var(--color-foreground-muted))] leading-relaxed">
                Reach us through any of these channels — we typically respond
                within a few hours during business days.
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-[hsl(var(--color-secondary)/0.2)] my-8" />

            {/* Contact details — distributed evenly */}
            <div className="flex-1 flex flex-col justify-between gap-6">
              {/* Phone */}
              <div className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-secondary)/0.15)] group-hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <i
                    className="ti ti-phone text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--color-foreground-muted))] font-semibold mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/[\s-]/g, "")}`}
                    className="block text-sm font-semibold text-[hsl(var(--color-foreground))] hover:text-[hsl(var(--color-secondary))] transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-secondary)/0.15)] group-hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <i
                    className="ti ti-mail text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--color-foreground-muted))] font-semibold mb-1">
                    Email address
                  </p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="block text-sm font-semibold text-[hsl(var(--color-foreground))] hover:text-[hsl(var(--color-secondary))] transition-colors break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-secondary)/0.15)] group-hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <i
                    className="ti ti-map-pin text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--color-foreground-muted))] font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-[hsl(var(--color-foreground))]">
                    {SITE_CONFIG.address}
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="group flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-secondary)/0.15)] group-hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center shrink-0 transition-colors duration-300">
                  <i
                    className="ti ti-clock text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-[hsl(var(--color-foreground-muted))] font-semibold mb-1">
                    Working hours
                  </p>
                  <div className="text-sm font-semibold text-[hsl(var(--color-foreground))] space-y-0.5">
                    <p>{SITE_CONFIG.hours.weekdays}</p>
                    <p>{SITE_CONFIG.hours.saturday}</p>
                    <p className="text-[hsl(var(--color-foreground-muted))] font-medium">
                      {SITE_CONFIG.hours.sunday}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social — pinned to bottom */}
            <div className="mt-8 pt-8 border-t border-[hsl(var(--color-secondary)/0.2)]">
              <p className="text-xs uppercase tracking-wider text-[hsl(var(--color-foreground-muted))] font-semibold mb-4">
                Follow us on
              </p>
              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-[hsl(var(--color-surface))] border border-[hsl(var(--color-border))] hover:bg-[hsl(var(--color-secondary))] hover:border-[hsl(var(--color-secondary))] hover:-translate-y-0.5 flex items-center justify-center group transition-all"
                  >
                    <i
                      className={`ti ${social.icon} text-[hsl(var(--color-foreground))] group-hover:text-[hsl(var(--color-secondary-foreground))] text-lg transition-colors`}
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-3">
            <div className="form-dark bg-linear-to-br from-[hsl(var(--color-primary))] to-[hsl(var(--color-primary-dark))] rounded-3xl p-8 sm:p-10 text-[hsl(var(--color-primary-foreground))] h-full shadow-luxury">
              {" "}
              <h3 className="text-2xl text-[hsl(var(--color-primary-foreground))] sm:text-3xl font-bold mb-3">
                Fill out the form, we&apos;ll reply soon
              </h3>
              <p className="text-[hsl(var(--color-primary-foreground))] text-sm mb-8">
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
                      className="ti ti-user absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--color-primary-foreground)/0.5)] text-lg pointer-events-none"
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
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[hsl(var(--color-primary-foreground))] placeholder:text-[hsl(var(--color-primary-foreground)/0.4)] focus:outline-none focus:border-[hsl(var(--color-secondary))] focus:bg-white/10 transition-all"
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
                      className="ti ti-mail absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--color-primary-foreground)/0.5)] text-lg pointer-events-none"
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
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[hsl(var(--color-primary-foreground))] placeholder:text-[hsl(var(--color-primary-foreground)/0.4)] focus:outline-none focus:border-[hsl(var(--color-secondary))] focus:bg-white/10 transition-all"
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
                      className="ti ti-phone absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--color-primary-foreground)/0.5)] text-lg pointer-events-none"
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
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[hsl(var(--color-primary-foreground))] placeholder:text-[hsl(var(--color-primary-foreground)/0.4)] focus:outline-none focus:border-[hsl(var(--color-secondary))] focus:bg-white/10 transition-all"
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
                      className="ti ti-pencil absolute left-4 top-4 text-[hsl(var(--color-primary-foreground)/0.5)] text-lg pointer-events-none"
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
                      className="w-full bg-white/5 border border-white/15 rounded-xl pl-12 pr-4 py-3.5 text-sm text-[hsl(var(--color-primary-foreground))] placeholder:text-[hsl(var(--color-primary-foreground)/0.4)] focus:outline-none focus:border-[hsl(var(--color-secondary))] focus:bg-white/10 transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Submit button - GOLD for premium feel */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[hsl(var(--color-secondary))] hover:bg-[hsl(var(--color-secondary-dark))] disabled:opacity-70 text-[hsl(var(--color-secondary-foreground))] font-bold text-sm py-4 rounded-full transition-all flex items-center justify-center gap-2 group shadow-gold hover:shadow-glow-gold"
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

                <p className="text-[11px] text-[hsl(var(--color-primary-foreground)/0.5)] text-center">
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
