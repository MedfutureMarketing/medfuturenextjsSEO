

import GpHeroSection from "@/components/Gpdivision/Gpregistar/Gphero";
import GpsecondSection from "@/components/Gpdivision/Gpregistar/Gpsecondsection";

import GpJobCards from "@/components/Gpdivision/Gpregistar/GpJoblistingsection";
import ConsultantsPage from "@/components/Gpdivision/Gpregistar/Consultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";


const GPRegistrarsPage = () => {
    return (
        <div>
            <GpHeroSection />
            <GpsecondSection />

            <GpJobCards />
            <ConsultantsPage />
            <FAQ />
            <CTA />
        </div>
    );
};

export default GPRegistrarsPage;