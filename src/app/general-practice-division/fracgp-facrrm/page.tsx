

import Fracgphero from "@/components/Gpdivision/Fracgp/Gphero";
import Fracgpsecondsection from "@/components/Gpdivision/Fracgp/Fracgpsecondsection";
import JobListingSection from "@/components/Gpdivision/Fracgp/Joblistingsection";
import ConsultantsPage from "@/components/Gpdivision/Fracgp/Consultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";
import { getPageMetadata } from "@/lib/getPageMetadata";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("fracgp");
}


export default function Fracgp() {
    return (
        <main className="">
            <Fracgphero />
            <Fracgpsecondsection />
            <JobListingSection />
            <ConsultantsPage />
            <FAQ />
            <CTA />
        </main>
    );
}