import { siteConfig } from "@/lib/config";
import { getIcon } from "@/lib/icons";

export function Highlights() {
  return (
    <section className="relative -mt-16 md:-mt-20 z-10">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {siteConfig.highlights.map((h, i) => {
            const Icon = getIcon(h.icon);
            return (
              <div
                key={h.title}
                className="group relative rounded-xl2 bg-white border border-plum-800/8 shadow-card px-5 py-7 text-center overflow-hidden hover:-translate-y-1 transition-transform duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="absolute inset-0 bg-card-sheen opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative mx-auto mb-4 w-14 h-14 rounded-full bg-plum-gradient flex items-center justify-center shadow-gold">
                  <Icon size={24} className="text-gold-300" />
                </div>
                <h3 className="relative font-display font-bold text-ink text-base md:text-lg">
                  {h.title}
                </h3>
                <p className="relative mt-2 text-xs md:text-sm text-ink-soft/70 leading-relaxed">
                  {h.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
