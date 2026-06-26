import { ABOUT_CONTENT, STATS } from "@/constants/site-config";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-background px-6 sm:px-12 lg:px-20 pb-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 -mt-32 lg:-mt-40 shadow-2xl rounded-sm overflow-hidden relative z-20">
        {/* ↑ -mt-32 pulls the card UP into the hero's bottom padding */}

        {/* LEFT — Orange card */}
        <div className="bg-[#F5A623] p-8 sm:p-12">
          <p className="text-sm font-semibold text-[#1a1a2e] mb-3">
            {ABOUT_CONTENT.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-[#1a1a2e] mb-6">
            {ABOUT_CONTENT.title}
          </h2>

          <p className="text-[14px] leading-relaxed text-[#1a1a2e]/85 mb-5">
            {ABOUT_CONTENT.paragraph1}
          </p>
          <p className="text-[14px] leading-relaxed text-[#1a1a2e]/85">
            {ABOUT_CONTENT.paragraph2}
          </p>
        </div>

        {/* RIGHT — Stats grid */}
        <div className="bg-card grid grid-cols-2 grid-rows-2">
          {STATS.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-8 sm:p-10 flex flex-col justify-center
                ${index % 2 === 0 ? "border-r border-border" : ""}
                ${index < 2 ? "border-b border-border" : ""}
              `}
            >
              <p className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                {stat.num}
              </p>
              <p className="text-[14px] text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}