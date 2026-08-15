import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "./Offers";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeading eyebrow="Order In" title="Delivery & Contact" />

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {siteConfig.delivery.map((d, i) => (
            <div
              key={d.number}
              className="rounded-xl2 border border-plum-800/10 bg-white p-6 shadow-card"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-gold-600">
                {d.label}
              </p>
              <p className="mt-2 font-display font-bold text-2xl text-ink tracking-wide">
                {d.number}
              </p>

              <div className="mt-5 flex gap-3">
                <a
                  href={`tel:${d.number}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-plum-800 text-cream font-semibold text-sm px-4 py-2.5 hover:bg-plum-700 transition-colors"
                >
                  <Phone size={15} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp[i].number}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-plum-800/20 text-plum-800 font-semibold text-sm px-4 py-2.5 hover:bg-plum-800/5 transition-colors"
                >
                  <MessageCircle size={15} />
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
