import { MapPin, Clock, Navigation } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "./Offers";

export function Location() {
  return (
    <section id="location" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading eyebrow="Find Us" title="Location & Hours" />

        <div className="mt-12 rounded-xl3 bg-plum-gradient text-cream p-8 md:p-12 grid md:grid-cols-2 gap-10 relative overflow-hidden">
          <div className="pointer-events-none absolute -bottom-16 -right-16 w-56 h-56 rounded-full border border-gold-400/20" />

          <div className="relative">
            <div className="flex items-center gap-2 text-gold-300">
              <MapPin size={18} />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase">Address</h3>
            </div>
            <p className="mt-3 text-lg font-display font-semibold">{siteConfig.address.line1}</p>
            <p className="mt-1 text-cream/70 text-sm leading-relaxed">
              {siteConfig.address.line2}
              <br />
              {siteConfig.address.line3}
            </p>

            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-400 text-plum-950 font-display font-bold px-6 py-3 hover:bg-gold-300 transition-colors"
            >
              <Navigation size={16} />
              Get Directions
            </a>
          </div>

          <div className="relative">
            <div className="flex items-center gap-2 text-gold-300">
              <Clock size={18} />
              <h3 className="font-display font-bold text-sm tracking-widest uppercase">
                Opening Hours
              </h3>
            </div>
            <ul className="mt-3 space-y-2.5">
              {siteConfig.hours.map((h) => (
                <li
                  key={h.days}
                  className="flex items-center justify-between text-sm border-b border-cream/10 pb-2.5"
                >
                  <span className="text-cream/80">{h.days}</span>
                  <span className="font-semibold text-gold-200">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
