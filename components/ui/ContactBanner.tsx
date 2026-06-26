import Link from "next/link";
import { SITE_CONFIG } from "@/constants/site-config";
import SectionTitle from "@/components/ui/SectionTitle";

export default function ContactBanner() {
  return (
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <SectionTitle
          label="Reach us"
          title="Get in touch"
          subtitle="Ready to work together? We'd love to hear about your project."
        />

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8711A]/10 rounded-xl flex items-center justify-center shrink-0">
              <i className="ti ti-phone text-[#E8711A] text-xl" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Phone</p>
              <p className="text-[14px] font-medium">{SITE_CONFIG.phone}</p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl p-5 flex items-start gap-4">
            <div className="w-10 h-10 bg-[#E8711A]/10 rounded-xl flex items-center justify-center shrink-0">
              <i className="ti ti-mail text-[#E8711A] text-xl" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[12px] text-muted-foreground mb-1">Email</p>
              <p className="text-[14px] font-medium break-all">
                {SITE_CONFIG.email}
              </p>
            </div>
          </div>
        </div>

        {/* CTA banner */}
        <div className="bg-[#E8711A] rounded-xl p-8 text-center text-white">
          <h3 className="text-xl font-medium mb-2">Ready to start a project?</h3>
          <p className="text-white/85 text-sm mb-6 leading-relaxed">
            Build something great with {SITE_CONFIG.name} — let&apos;s move
            forward together.
          </p>
          <Link
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-block bg-white text-[#E8711A] font-medium text-sm px-6 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
          >
            Send us an email
          </Link>
        </div>
      </div>
    </section>
  );
}