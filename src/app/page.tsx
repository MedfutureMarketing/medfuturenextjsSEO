// "use client";

// import { motion } from "framer-motion";
import Link from "next/link";
import HeroSection from "@/components/HomeHero/Hero";
import ImpJobSeekerSection from "@/components/Home/JobSeakersection/ImpJobSeekerSection";
import type { Metadata } from 'next'; 
export const metadata: Metadata = { title: 'Medfuture | Medical & Healthcare Recruitment in Australia', description: 'Learn more about My Company and our mission.', openGraph: { title: 'About Us - My Company', description: 'Learn more about My Company and our mission.', url: 'https://www.mycompany.com/about', images: ['/images/og-about.jpg'], }, alternates: { canonical: 'https://www.mycompany.com/about', }, };

export default function HomePage() {
  
  return (
    <main className="bg-white text-gray-800">
      {/* ──────────────────────────────────────────────── */}
      {/* HERO SECTION */}
      {/* ──────────────────────────────────────────────── */}
       <HeroSection />
       <h1>test</h1>

      {/* ──────────────────────────────────────────────── */}
      {/* JOB SEEKER SECTION */}
      {/* ──────────────────────────────────────────────── */}
      <ImpJobSeekerSection/>


     < a href="/about" className="text-blue-600 hover:underline"> about </a>
    </main>
  );
}
