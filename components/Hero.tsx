import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { LogoMark } from "./Logo";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-plum-gradient text-cream">
      {/* Decorative geometric shapes — CSS/SVG only */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -right-24 w-80 h-80 rounded-full border border-gold-400/25 animate-spin-slow" />
        <div className="absolute -top-4 -right-4 w-56 h-56 rounded-full border border-gold-400/40" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 rounded-full bg-gold-400/10 blur-2xl animate-drift-slow" />
        <div className="absolute bottom-10 right-10 w-24 h-24 rotate-45 border border-gold-300/30 animate-drift" />
        <div className="absolute bottom-24 left-8 w-3 h-3 rounded-full bg-gold-400/70 animate-drift" />
        <div className="absolute top-24 left-1/3 w-2 h-2 rounded-full bg-gold-300/70 animate-drift-slow" />
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-24 text-cream"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 C360,120 1080,0 1440,60 L1440,100 L0,100 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-20 pb-32 md:pt-28 md:pb-40 flex flex-col items-center text-center">
        <div className="animate-rise">
          <LogoMark size={92} animated className="drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]" />
        </div>

        <p
          className="mt-7 font-body text-[11px] md:text-xs tracking-[0.4em] uppercase text-gold-300 animate-rise"
          style={{ animationDelay: "80ms" }}
        >
          10th of Ramadan City · Café
        </p>

        <h1
          className="mt-4 font-display font-black text-5xl sm:text-6xl md:text-7xl tracking-tight text-balance animate-rise"
          style={{ animationDelay: "140ms" }}
        >
          TAKE&nbsp;YOUR&nbsp;TIME
        </h1>

        <p
          className="mt-5 max-w-md text-base md:text-lg text-cream/75 text-balance animate-rise"
          style={{ animationDelay: "200ms" }}
        >
          {siteConfig.tagline} Specialty coffee, iced drinks and shakes — made properly, never rushed.
        </p>

        <div
          className="mt-9 flex flex-col sm:flex-row items-center gap-4 animate-rise"
          style={{ animationDelay: "260ms" }}
        >
          <Link
            href="/menu"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 text-plum-950 font-display font-bold px-8 py-3.5 shadow-gold hover:bg-gold-300 transition-colors"
          >
            View Menu
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/30 font-display font-bold px-8 py-3.5 hover:bg-cream/10 transition-colors"
          >
            <MapPin size={18} />
            Find Us
          </a>
        </div>
      </div>
    </section>
  );
}
