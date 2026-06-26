interface SectionTitleProps {
  label: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={`mb-10 ${center ? "text-center" : ""}`}>
      {/* Eyebrow with line accents (only when centered) */}
      {center ? (
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
            {label}
          </p>
          <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
        </div>
      ) : (
        <div className="flex items-center gap-3 mb-3">
          <span className="h-px w-12 bg-[hsl(var(--color-secondary))]" />
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
            {label}
          </p>
        </div>
      )}

      {/* Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[hsl(var(--color-foreground))] leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-[hsl(var(--color-foreground-muted))] mt-3 text-[15px] leading-relaxed ${
            center ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}