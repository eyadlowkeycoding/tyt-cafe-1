import { LogoMark } from "./Logo";
import { siteConfig } from "@/lib/config";
import { SectionHeading } from "./Offers";

export function About() {
  return (
    <section className="py-20 md:py-28 bg-plum-900/[0.03]">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <SectionHeading eyebrow="Our Story" title={siteConfig.about.heading} />

        <div className="mt-12 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <div className="mx-auto md:mx-0">
            <LogoMark size={80} />
          </div>
          <div className="space-y-4">
            {siteConfig.about.paragraphs.map((p, i) => (
              <p key={i} className="text-ink-soft/80 leading-relaxed text-[15px] md:text-base">
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
