
import Ahpdivsionhero from "@/components/AhpDivision/AhpdivisionComponents/DivisionHero"
import AhpDivisionContentsection from "@/components/AhpDivision/AhpdivisionComponents/AhpDivisionContentsection"
import Professionsection from "@/components/AhpDivision/AhpdivisionComponents/ProfessionSection"
import JobByState from "@/components/JobseekerLandingpage/MedFutureStates"
import AhpDivisiontesti from "@/components/AhpDivision/AhpdivisionComponents/AhpDivisiontestimony"
import FAQ from "@/components/FAQ/Faq"
import BlogSection from "@/components/Blog/Blog"
import CTA from "@/components/Division/DivisionCta"
import { getPageMetadata } from "@/lib/getPageMetadata";
import { Metadata } from "next";


export async function generateMetadata(): Promise<Metadata> {
  return getPageMetadata("ahp");
}


const AhpDivisionPage = () => {
    return (
        <div>
            <Ahpdivsionhero />
            <AhpDivisionContentsection />
            <Professionsection />
            <JobByState/>
            <AhpDivisiontesti/>
            <FAQ/>
            <BlogSection/>
            <CTA/>
        </div>
    );
};

export default AhpDivisionPage;