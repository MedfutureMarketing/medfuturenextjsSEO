import Sphero from "@/components/AhpDivision/SP/Sphero"
import ContentSection from "@/components/AhpDivision/SP/ContentSection";
import Spcounter from "@/components/AhpDivision/SP/SpCounter"
import JoblistingSp from "@/components/AhpDivision/SP/JoblistingSp";
import WorkSettingContent from "@/components/AhpDivision/SP/WorkSettingcontent";
import ClinicalAreas from "@/components/AhpDivision/SP/Clinicalareas";
import SpConsultant from "@/components/AhpDivision/SP/SpConsultant";
import FAQ from "@/components/FAQ/Faq";
import CTA from "@/components/Home/CtaHome";

const SpeechPathologyPage = () => {
    return (
        <div>
            <Sphero />
            <ContentSection />
            <Spcounter />
            <JoblistingSp/>
            <WorkSettingContent/>
            <ClinicalAreas/>
            <SpConsultant/>
            <FAQ/>
            <CTA/>

        </div>
    );
};

export default SpeechPathologyPage;