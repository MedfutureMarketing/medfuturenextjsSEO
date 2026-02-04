
import Ahpdivsionhero from "@/components/AhpDivision/AhpdivisionComponents/DivisionHero"
import AhpDivisionContentsection from "@/components/AhpDivision/AhpdivisionComponents/AhpDivisionContentsection"
import Professionsection from "@/components/AhpDivision/AhpdivisionComponents/ProfessionSection"
import JobByState from "@/components/JobseekerLandingpage/MedFutureStates"
import AhpDivisiontesti from "@/components/AhpDivision/AhpdivisionComponents/AhpDivisiontestimony"


const AhpDivisionPage = () => {
    return (
        <div>
            <Ahpdivsionhero />
            <AhpDivisionContentsection />
            <Professionsection />
            <JobByState/>
            <AhpDivisiontesti/>
        </div>
    );
};

export default AhpDivisionPage;