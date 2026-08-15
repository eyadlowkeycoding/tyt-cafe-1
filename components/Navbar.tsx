"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoLockup } from "./Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Offers", href: "/#offers" },
  { label: "Location", href: "/#location" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(32,16,47,0.08)]"
          : "bg-cream/60 backdrop-blur-sm"
      }`}
    >
      <nav
        className="mx-auto max-w-6xl px-5 md:px-8 h-[72px] flex items-center justify-between"
        aria-label="Primary"
      >
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <LogoLockup size={38} />
        </Link>

        <ul className="hidden md:flex items-center gap-9 font-body font-semibold text-sm tracking-wide text-ink-soft">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="relative py-2 hover:text-plum-700 transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-gold-500 hover:after:w-full after:transition-all"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/menu"
          className="hidden md:inline-flex items-center rounded-full bg-plum-800 text-cream font-semibold text-sm px-5 py-2.5 shadow-card hover:bg-plum-700 transition-colors"
        >
          View Menu
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-plum-800/15 text-plum-800 active:scale-95 transition-transform"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute inset-x-0 top-[72px] bg-cream border-t border-plum-800/10 shadow-xl"
        >
          <ul className="flex flex-col px-5 py-4 gap-1 font-body font-semibold text-ink">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 border-b border-plum-800/8 last:border-0"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Link
                href="/menu"
                onClick={() => setOpen(false)}
                className="block text-center rounded-full bg-plum-800 text-cream font-semibold px-5 py-3"
              >
                View Menu
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
