import Psyhero from "@/components/MentalDivision/Psy/Psyhero"
import PsyContentSection from "@/components/MentalDivision/Psy/PsyContentSection";
import PsyOtcounter from "@/components/MentalDivision/Psy/PsyCounter"
import PsyJoblistingOt from "@/components/MentalDivision/Psy/PsyJoblisting";
import PsyWorkSettingContent from "@/components/MentalDivision/Psy/PsyWorkSettingcontent";
// import ClinicalAreas from "@/components/AhpDivision/OT/Clinicalareas";
import PsyConsultant from "@/components/MentalDivision/Psy/PsyConsultant";
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