
import GpFracgphero from "@/components/GpRegistrar/Gphero";
import GpSpecialtyAreas from "@/components/GpRegistrar/GpSpecialtyAreasLocum";
import GpCoreSkillsClinical from "@/components/GpRegistrar/GpCoreSkillsClinical";
import GpJobSection from "@/components/GpRegistrar/GpJobsSection";
import GpStepByStep from "@/components/GpRegistrar/GpStepsBySteps";
import GpMeetOurConsultants from "@/components/Home/MeetConsultants";
import GpJobSeekertesti from "@/components/JobseekerLandingpage/JobSeekerTesti";
import GpFAQ from "@/components/FAQ/Faq";
import GpCTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";
import GpBlogSection from "@/components/Blog/Blog";

export default function Fracgp() {
    return (
        <section className="">
            <GpFracgphero/>
            <GpSpecialtyAreas/>
            <GpCoreSkillsClinical/>
            <GpJobSection/>
            <GpStepByStep/>
            <GpMeetOurConsultants/>
            <GpJobSeekertesti/>
            <GpFAQ/>
            <GpCTAJobseeker/>
            <GpBlogSection/>
        </section>
    );
}
