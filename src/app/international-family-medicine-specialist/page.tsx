
import SimgFracgphero from "@/components/SIMG/Simghero";
import SimgSpecialtyAreas from "@/components/SIMG/SimgSpecialtyAreasLocum";
import SimgCoreSkillsClinical from "@/components/SIMG/SimgCoreSkillsClinical";
import SimgJobSection from "@/components/SIMG/SimgJobsSection";
import SimgStepByStep from "@/components/SIMG/SimgStepsBySteps";
import SimgMeetOurConsultants from "@/components/Home/MeetConsultants";
import SimgJobSeekertesti from "@/components/JobseekerLandingpage/JobSeekerTesti";
import SimgFAQ from "@/components/FAQ/Faq";
import SimgCTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";
import SimgBlogSection from "@/components/Blog/Blog";

export default function Fracgp() {
    return (
        <section >
            <SimgFracgphero />
            <SimgSpecialtyAreas />
            <SimgCoreSkillsClinical />
            <SimgJobSection />
            <SimgStepByStep />
            <SimgMeetOurConsultants />
            <SimgJobSeekertesti />
            <SimgFAQ />
            <SimgCTAJobseeker />
            <SimgBlogSection />
        </section>
    );
}
