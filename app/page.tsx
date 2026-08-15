import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Offers } from "@/components/Offers";
import { About } from "@/components/About";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <Offers />
      <About />
      <Location />
      <Contact />
    </>
  );
}
