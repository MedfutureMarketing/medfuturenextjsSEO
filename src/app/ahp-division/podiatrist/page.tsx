import Othero from "@/components/AhpDivision/POD/PODhero"
import PODContentSection from "@/components/AhpDivision/POD/PODContentSection";
import PODOtcounter from "@/components/AhpDivision/POD/PODCounter"
import PODJoblistingOt from "@/components/AhpDivision/POD/PODJoblisting";
import PODWorkSettingContent from "@/components/AhpDivision/POD/PODWorkSettingcontent";
// import ClinicalAreas from "@/components/AhpDivision/OT/Clinicalareas";
import PODConsultant from "@/components/AhpDivision/POD/PODConsultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";
import { getPageMetadata } from "@/lib/getPageMetadata";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("podiatrist");
}

const PodiatristPage = () => {
    return (
        <div>
            <Othero />
            <PODContentSection />
            <PODOtcounter />
            <PODJoblistingOt />
            <PODWorkSettingContent />
            {/* <ClinicalAreas /> */}
            <PODConsultant />
            <FAQ />
            <CTA />
        </div>
    );
};

export default PodiatristPage;