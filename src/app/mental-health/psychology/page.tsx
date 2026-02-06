import Psyhero from "@/components/AhpDivision/Psy/Psyhero"
import PsyContentSection from "@/components/AhpDivision/Psy/PsyContentSection";
import PsyOtcounter from "@/components/AhpDivision/Psy/PsyCounter"
import PsyJoblistingOt from "@/components/AhpDivision/Psy/PsyJoblisting";
import PsyWorkSettingContent from "@/components/AhpDivision/Psy/PsyWorkSettingcontent";
// import ClinicalAreas from "@/components/AhpDivision/OT/Clinicalareas";
import PsyConsultant from "@/components/AhpDivision/Psy/PsyConsultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";

const OccupationalTherapistPage = () => {
    return (
        <div>
            <Psyhero />
            <PsyOtcounter />
            <PsyContentSection />

            <PsyJoblistingOt />
            <PsyWorkSettingContent />
            {/* <ClinicalAreas /> */}
            <PsyConsultant />
            <FAQ />
            <CTA />
        </div>
    );
};

export default OccupationalTherapistPage;