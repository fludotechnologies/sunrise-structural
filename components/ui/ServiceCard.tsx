import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
  category?: string;
  icon?: string;
}

export default function ServiceCard({
  image,
  title,
  description,
  href = "#",
  index,
  category = "Service",
  icon = "ti-bolt",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group relative block bg-[hsl(var(--color-surface))] rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-sm hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/11] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--color-primary)/0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          aria-hidden="true"
        />
      </div>

      {/* Floating icon */}
      <div className="relative -mt-8 ml-6 w-16 h-16 rounded-2xl bg-[hsl(var(--color-secondary))] flex items-center justify-center shadow-xl shadow-[hsl(var(--color-secondary)/0.3)] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500 z-10">
        <i
          className={`ti ${icon} text-3xl text-[hsl(var(--color-secondary-foreground))]`}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="p-6 pt-4">
        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[hsl(var(--color-secondary))] mb-2">
          {category}
        </p>

        <h3 className="text-xl font-bold text-[hsl(var(--color-foreground))] mb-3 group-hover:text-[hsl(var(--color-primary))] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-sm text-[hsl(var(--color-foreground-muted))] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}