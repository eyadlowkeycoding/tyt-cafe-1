import { Tag } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function Offers() {
  return (
    <section id="offers" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading eyebrow="Right Now" title="Current Offers" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.offers.map((o) => (
            <div
              key={o.title}
              className="relative rounded-xl2 border-2 border-plum-800/10 bg-white p-6 hover:border-gold-400 hover:shadow-card transition-all"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-plum-800/5 text-plum-700 text-[11px] font-bold tracking-wide uppercase px-3 py-1">
                <Tag size={11} />
                {o.badge}
              </span>
              <h3 className="mt-4 font-display font-bold text-lg text-ink">{o.title}</h3>
              <p className="mt-2 text-sm text-ink-soft/70 leading-relaxed">{o.text}</p>
              <div className="mt-5 h-px bg-gold-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="font-body text-xs font-bold tracking-[0.3em] uppercase text-gold-600">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display font-bold text-3xl md:text-4xl text-ink">{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gold-400 ${center ? "mx-auto" : ""}`} />
    </div>
  );
}
