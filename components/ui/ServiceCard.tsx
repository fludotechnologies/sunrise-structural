import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
  category?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  href = "#",
  index,
  category = "Service",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block bg-card rounded-3xl overflow-hidden isolate"
    >
      <div className="relative w-full aspect-[4/5] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-all duration-[1200ms] ease-out group-hover:scale-110"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/10"
          aria-hidden="true"
        />

        {/* Orange wash on hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#E8711A]/50 via-[#E8711A]/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
          <div className="h-[2px] w-10 bg-[#E8711A] mb-4 group-hover:w-20 transition-all duration-500 ease-out" />

          <h3 className="text-2xl sm:text-[26px] font-bold text-white leading-tight mb-3 group-hover:text-[#F5A623] transition-colors duration-300">
            {title}
          </h3>

          <p className="text-[13.5px] text-white/85 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        <div
          className="absolute inset-0 rounded-3xl ring-0 ring-[#E8711A]/0 group-hover:ring-2 group-hover:ring-[#E8711A]/40 transition-all duration-500 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* ───── DECORATIVE GLOW BEHIND CARD ───── */}
      <div
        className="absolute -inset-4 bg-[#E8711A]/0 group-hover:bg-[#E8711A]/10 blur-2xl -z-10 transition-all duration-700 rounded-3xl"
        aria-hidden="true"
      />
    </Link>
  );
}