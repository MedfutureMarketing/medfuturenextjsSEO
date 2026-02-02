import Othero from "@/components/AhpDivision/OT/Othero"
import ContentSection from "@/components/AhpDivision/OT/OtContentSection";
import Otcounter from "@/components/AhpDivision/OT/OtCounter"
import JoblistingOt from "@/components/AhpDivision/OT/OtJoblisting";
import WorkSettingContent from "@/components/AhpDivision/OT/OTWorkSettingcontent";
// import ClinicalAreas from "@/components/AhpDivision/OT/Clinicalareas";
import OtConsultant from "@/components/AhpDivision/OT/OtConsultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";

const OccupationalTherapistPage = () => {
    return (
        <div>
            <Othero />
            <ContentSection />
            <Otcounter />
            <JoblistingOt />
            <WorkSettingContent />
            {/* <ClinicalAreas /> */}
            <OtConsultant />
            <FAQ />
            <CTA />
        </div>
    );
};

export default OccupationalTherapistPage;