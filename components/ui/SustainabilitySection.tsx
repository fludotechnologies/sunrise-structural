import { SUSTAINABILITY_CONTENT } from "@/constants/site-config";

export default function SustainabilitySection() {
  const { eyebrow, subtitle, features, highlights } = SUSTAINABILITY_CONTENT;

  return (
    <section className="bg-[hsl(var(--color-background))] py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[hsl(var(--color-secondary))]">
              {eyebrow}
            </p>
            <span className="h-px w-10 bg-[hsl(var(--color-secondary))]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--color-foreground))] mb-3">
            Why <span className="text-gradient-luxury">Choose Us</span> ?
          </h2>

          <p className="text-[hsl(var(--color-foreground-muted))] text-sm sm:text-base max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const colors = [
              "bg-[hsl(var(--color-primary))]",
              "bg-pink-500",
              "bg-orange-500",
              "bg-indigo-500",
            ];
            const iconBg = colors[index % colors.length];

            return (
              <div
                key={feature.title}
                className="group relative bg-[hsl(var(--color-surface))] rounded-2xl border-2 border-[hsl(var(--color-secondary)/0.4)] hover:border-[hsl(var(--color-secondary))] p-8 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${iconBg} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                >
                  <i
                    className={`ti ${feature.icon} text-3xl text-white`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-bold text-[hsl(var(--color-foreground))] mb-3 group-hover:text-[hsl(var(--color-primary))] transition-colors duration-300">
                  {feature.title}
                </h3>

                <p className="text-[13px] text-[hsl(var(--color-foreground-muted))] leading-relaxed">
                  {feature.description}
                </p>

                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-[hsl(var(--color-secondary))] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>

        {/* ====================================== */}
        {/* HIGHLIGHTS STRIP — Quick value tags    */}
        {/* ====================================== */}
        <div className="mt-12 bg-[hsl(var(--color-primary))] rounded-2xl p-6 sm:p-8 shadow-luxury">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group flex items-center gap-3 justify-center sm:justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-[hsl(var(--color-secondary)/0.15)] group-hover:bg-[hsl(var(--color-secondary))] flex items-center justify-center transition-all duration-300 shrink-0">
                  <i
                    className={`ti ${item.icon} text-xl text-[hsl(var(--color-secondary))] group-hover:text-[hsl(var(--color-secondary-foreground))] transition-colors`}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-sm sm:text-base font-bold text-[hsl(var(--color-primary-foreground))]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}