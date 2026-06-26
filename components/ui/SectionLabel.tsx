interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] uppercase tracking-[0.08em] font-medium text-[#E8711A] mb-2 ${className}`}
    >
      {text}
    </p>
  );
}