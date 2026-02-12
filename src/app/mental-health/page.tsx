
import Mentaldivsionhero from "@/components/MentalDivision/Mentaldivisoncomponent/MentalDivisionHero"
import MentalDivisionContentsection from "@/components/MentalDivision/Mentaldivisoncomponent/MentalDivisionContentsection"
import MentalProfessionsection from "@/components/MentalDivision/Mentaldivisoncomponent/MentalProfessionSection"
import MentalJobByState from "@/components/JobseekerLandingpage/MedFutureStates"
import MentalDivisiontesti from "@/components/MentalDivision/Mentaldivisoncomponent/MentalDivisiontestimony"
import FAQ from "@/components/FAQ/Faq"
import BlogSection from "@/components/Blog/Blog"
import CTA from "@/components/Division/DivisionCta"
// import MentalSector from "@/components/MentalDivision/Mentaldivisoncomponent/Mentalsector "
import Mentalfirstrecruitmentmodel from "@/components/MentalDivision/Mentaldivisoncomponent/Mentalfirstrecruitmentmodel"
import MentalHealthSectors from "@/components/MentalDivision/Mentaldivisoncomponent/Mentalhealthsectors"

const MentalDivisionPage = () => {
    return (
        <div>
            <Mentaldivsionhero />
            <MentalDivisionContentsection />
            <MentalProfessionsection />
            <MentalHealthSectors />
            <MentalJobByState />
 <Mentalfirstrecruitmentmodel />
            {/* <MentalSector /> */}
           
            <MentalDivisiontesti />
            <FAQ />
            <BlogSection />
            <CTA />
        </div>
    );
};

export default MentalDivisionPage;