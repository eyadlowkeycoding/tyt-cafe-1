import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Menu — TYT | Take Your Time",
  description:
    "Full TYT menu: hot & iced coffee, specialty coffee, smoothies, shakes, frappés, fresh juices and more. 10th of Ramadan City, Egypt.",
};

export default function MenuPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-plum-gradient text-cream">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full border border-gold-400/20 animate-spin-slow" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-gold-400/10 blur-2xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 md:px-8 pt-14 pb-16 md:pt-16 md:pb-20 text-center">
          <LogoMark size={56} className="mx-auto" />
          <p className="mt-5 font-body text-[11px] tracking-[0.4em] uppercase text-gold-300">
            Take Your Time
          </p>
          <h1 className="mt-2 font-display font-black text-4xl md:text-5xl">Our Menu</h1>
          <p className="mt-3 text-cream/70 max-w-lg mx-auto text-sm md:text-base">
            Every price, every category — search or browse by tab. Nothing on this
            page is a photo; it's TYT the way we serve it.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <MenuExplorer />
        </div>
      </section>
    </>
  );
}
