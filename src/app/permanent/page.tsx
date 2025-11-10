// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";
import SearchHeader from "@/components/JobBoard/Searchbar";
import Menu from "@/components/Navbar/MainMenu";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("permanent"); 
}

export default function AboutPage() {
  return (
    <main className="">
       <Menu/>
     <SearchHeader/>
      <p>
        Learn more about our mission and how we build modern, SEO-friendly web
        experiences with Next.js and Tailwind CSS.
      </p>
    </main>
  );
}
