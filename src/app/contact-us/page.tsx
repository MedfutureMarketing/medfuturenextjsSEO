// app/about/page.tsx
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import ContactHero from "@/components/Contact/ContactHero"
import ContactSection from "@/components/Contact/ContactSection";
import LocationMap from "@/components/Contact/Location";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("contactus"); 
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
