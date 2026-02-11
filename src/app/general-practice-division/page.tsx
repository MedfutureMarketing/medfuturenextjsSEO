
import Gpdivsionhero from "@/components/Gpdivision/GpdivisionComponents/GpDivisionHero"
import GpDivisionContentsection from "@/components/Gpdivision/GpdivisionComponents/GpDivisionContentsection"
import Professionsection from "@/components/Gpdivision/GpdivisionComponents/GpProfessionSection"
import JobByState from "@/components/JobseekerLandingpage/MedFutureStates"
import GpDivisiontesti from "@/components/Gpdivision/GpdivisionComponents/GpDivisiontestimony"
import FAQ from "@/components/FAQ/Faq"
import BlogSection from "@/components/Blog/Blog"
import CTA from "@/components/Division/DivisionCta"
import GeneralPracticeSector from "@/components/Gpdivision/GpdivisionComponents/Generalpracticesector "
import Clinicianfirstrecruitmentmodel from "@/components/Gpdivision/GpdivisionComponents/Clinicianfirstrecruitmentmodel"


const GpDivisionPage = () => {
    return (
        <div>
            <Gpdivsionhero />
            <GpDivisionContentsection />
            <Professionsection />
            <GeneralPracticeSector />
            <JobByState/>
            <Clinicianfirstrecruitmentmodel/>
            <GpDivisiontesti/>
            <FAQ/>
            <BlogSection/>
            <CTA/>
        </div>
    );
};

export default GpDivisionPage;