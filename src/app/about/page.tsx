// app/about/page.tsx
import type { Metadata } from "next";
import { getPageMetadata } from "@/lib/getPageMetadata";

export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("about"); // Fetch metadata by key
}

export default function AboutPage() {
  return (
    <main className="px-4 py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p>
        Learn more about our mission and how we build modern, SEO-friendly web
        experiences with Next.js and Tailwind CSS.
      </p>
    </main>
  );
}
