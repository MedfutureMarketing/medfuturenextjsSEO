import Phyhero from "@/components/AhpDivision/Phy/Phyhero"
import PhyContentSection from "@/components/AhpDivision/Phy/PhyContentSection";
import PhyOtcounter from "@/components/AhpDivision/Phy/PhyCounter"
import PhyJoblistingOt from "@/components/AhpDivision/Phy/PhyJoblisting";
import PhyWorkSettingContent from "@/components/AhpDivision/Phy/PhyWorkSettingcontent";
// import ClinicalAreas from "@/components/AhpDivision/OT/Clinicalareas";
import PhyConsultant from "@/components/AhpDivision/Phy/PhyConsultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";

const OccupationalTherapistPage = () => {
    return (
        <div>
            <Phyhero />
            <PhyContentSection />
            <PhyOtcounter />
            <PhyJoblistingOt />
            <PhyWorkSettingContent />
            {/* <ClinicalAreas /> */}
            <PhyConsultant />
            <FAQ />
            <CTA />
        </div>
    );
};

export default OccupationalTherapistPage;