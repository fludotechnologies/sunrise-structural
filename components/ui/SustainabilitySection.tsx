import Link from "next/link";
import Image from "next/image";
import { SUSTAINABILITY_CONTENT } from "@/constants/site-config";

export default function SustainabilitySection() {
  const { left, right } = SUSTAINABILITY_CONTENT;

  return (
    <section className="bg-background py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        {/* LEFT — Dark blue banner */}
        <div className="relative min-h-[420px] flex items-center px-8 sm:px-12 py-16 overflow-hidden">
          {/* Background image */}
          <Image
            src={left.image}
            alt=""
            fill
            className="object-cover"
          />
          {/* Dark blue overlay */}
          <div
            className="absolute inset-0 bg-[#1a2842]/85"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 max-w-md">
            <p className="text-[#E8711A] text-sm font-bold mb-4">
              {left.eyebrow}
            </p>
            <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-10">
              {left.title}
            </h2>
            <Link
              href={left.ctaHref}
              className="inline-block bg-[#F5A623] hover:bg-[#E8711A] transition-colors text-[#1a2842] hover:text-white font-semibold text-sm tracking-[0.15em] uppercase px-8 py-3.5"
            >
              {left.ctaLabel}
            </Link>
          </div>
        </div>

        {/* RIGHT — Orange banner */}
        <div className="relative min-h-[420px] flex items-center px-8 sm:px-12 py-16 overflow-hidden">
          {/* Background image */}
          <Image
            src={right.image}
            alt=""
            fill
            className="object-cover"
          />
          {/* Orange overlay */}
          <div
            className="absolute inset-0 bg-[#F5A623]/85"
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-md">
            <h3 className="text-[#1a2842] text-2xl sm:text-3xl font-bold mb-3">
              {right.title}
            </h3>
            <p className="text-[#1a2842]/85 text-[14px] leading-relaxed mb-8">
              {right.subtitle}
            </p>

            <ul className="space-y-5">
              {right.practices.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-4 text-[#1a2842]"
                >
                  <i
                    className={`ti ${item.icon} text-2xl shrink-0`}
                    aria-hidden="true"
                  />
                  <span className="text-base sm:text-lg font-semibold">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}