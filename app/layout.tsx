import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/config";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TYT — Take Your Time | Café in 10th of Ramadan City",
  description:
    "TYT (Take Your Time) is a premium café in 10th of Ramadan City, Egypt. Specialty coffee, iced drinks, smoothies, shakes and frappés. Order delivery: 01092923000 / 01090264649.",
  keywords: [
    "TYT",
    "Take Your Time",
    "café 10th of Ramadan",
    "coffee shop 10th of Ramadan City",
    "specialty coffee Egypt",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "TYT — Take Your Time",
    description:
      "A premium café in 10th of Ramadan City, Egypt. Slow down, one good cup at a time.",
    type: "website",
    locale: "en_US",
    siteName: "TYT — Take Your Time",
  },
  twitter: {
    card: "summary",
    title: "TYT — Take Your Time",
    description: "A premium café in 10th of Ramadan City, Egypt.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body className="font-body antialiased bg-cream text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-3 focus:left-3 focus:bg-gold-400 focus:text-ink focus:px-4 focus:py-2 focus:rounded-full"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
