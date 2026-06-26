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
      <p className="text-[11px] uppercase tracking-[0.08em] font-medium text-[#E8711A] mb-2">
        {label}
      </p>
      <h2 className="text-3xl font-medium text-foreground">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-2 text-[15px]">{subtitle}</p>
      )}
    </div>
  );
}