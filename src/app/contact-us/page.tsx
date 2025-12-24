// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import ContactHero from "@/components/Contact/ContactHero"
import ContactSection from "@/components/Contact/ContactSection";
import LocationMap from "@/components/Contact/Location";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about"); 
}

export default function AboutPage() {
  return (
    <section className="">
      <ContactHero/>
      <ContactSection/>
      <LocationMap/>
     
    </section>
  );
}
