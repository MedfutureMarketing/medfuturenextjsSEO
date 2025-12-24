
import Fracgphero from "@/components/Fracgp/Fracgphero";
import SpecialtyAreas from "@/components/Fracgp/SpecialtyAreasLocum";
import CoreSkillsClinical from "@/components/Fracgp/CoreSkillsClinical";
import JobSection from "@/components/Fracgp/JobsSection";
import StepByStep from "@/components/Fracgp/StepsBySteps";
import MeetOurConsultants from "@/components/Home/MeetConsultants";
import JobSeekertesti from "@/components/JobseekerLandingpage/JobSeekerTesti";
import FAQ from "@/components/FAQ/Faq";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";
import BlogSection from "@/components/Blog/Blog";

export default function Fracgp() {
    return (
        <section className="">
            <Fracgphero/>
            <SpecialtyAreas/>
            <CoreSkillsClinical/>
            <JobSection/>
            <StepByStep/>
            <MeetOurConsultants/>
            <JobSeekertesti/>
            <FAQ/>
            <CTAJobseeker/>
            <BlogSection/>
        </section>
    );
}
