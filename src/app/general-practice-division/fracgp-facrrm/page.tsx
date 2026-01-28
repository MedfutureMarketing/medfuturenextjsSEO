

import Fracgphero from "@/components/Gpdivision/Fracgp/Gphero";
import Fracgpsecondsection from "@/components/Gpdivision/Fracgp/Fracgpsecondsection";
import JobListingSection from "@/components/Gpdivision/Fracgp/Joblistingsection";
import ConsultantsPage from "@/components/Gpdivision/Fracgp/Consultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";

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