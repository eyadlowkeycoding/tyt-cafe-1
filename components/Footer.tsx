import Link from "next/link";
import { Instagram, Facebook, MapPin, Phone, Music2 } from "lucide-react";
import { LogoLockup } from "./Logo";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-plum-gradient text-cream/85">
      <div className="mx-auto max-w-6xl px-6 md:px-8 pt-16 pb-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <LogoLockup size={42} tone="light" />
            <p className="mt-4 text-sm leading-relaxed max-w-xs text-cream/65">
              {siteConfig.description}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                aria-label="TYT on Instagram"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                aria-label="TYT on Facebook"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.social.tiktok}
                aria-label="TYT on TikTok"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold-400 hover:text-gold-300 transition-colors"
              >
                <Music2 size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-gold-300 text-sm tracking-widest uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-gold-300 transition-colors">Menu</Link></li>
              <li><Link href="/#offers" className="hover:text-gold-300 transition-colors">Offers</Link></li>
              <li><Link href="/#location" className="hover:text-gold-300 transition-colors">Location</Link></li>
              <li><Link href="/#contact" className="hover:text-gold-300 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-gold-300 text-sm tracking-widest uppercase mb-4">
              Delivery
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.delivery.map((d) => (
                <li key={d.number}>
                  <a
                    href={`tel:${d.number}`}
                    className="inline-flex items-center gap-2 hover:text-gold-300 transition-colors"
                  >
                    <Phone size={14} className="text-gold-400" />
                    {d.number}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-gold-300 text-sm tracking-widest uppercase mb-4">
              Location
            </h3>
            <a
              href={siteConfig.googleMapsUrl}
              className="flex gap-2 text-sm hover:text-gold-300 transition-colors"
            >
              <MapPin size={16} className="text-gold-400 shrink-0 mt-0.5" />
              <span>{siteConfig.address.line2}</span>
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {year} TYT — Take Your Time. All rights reserved.</p>
          <p>10th of Ramadan City, Egypt</p>
        </div>
      </div>
    </footer>
  );
}
