

import MedicalHero from "@/components/MedicalDivision/MedicalHero";
import ContactSection from "@/components/MedicalDivision/ContentSection";
import MedicalJobs from "@/components/MedicalDivision/MedicalJobs";
import ProfessionExplore from "@/components/MedicalDivision/ProfessionExplore";
import MeetOurConsultants from "@/components/Home/MeetConsultants";
import JobbyState from "@/components/JobseekerLandingpage/MedFutureStates";
import Ourprocess from "@/components/MedicalDivision/OurProcess";
import DivisionCta from "@/components/MedicalDivision/DivisonCta";
import FAQ from "@/components/FAQ/Faq";
import BlogSection from "@/components/Blog/Blog";
import TestimonialPuzzle from "@/components/JobseekerLandingpage/JobSeekerTesti";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";


export default function DemoPage() {
  return (
    <main className="w-full ">
      <MedicalHero/>
      <ContactSection/>
      <MedicalJobs/>
      <ProfessionExplore/>
      <MeetOurConsultants/>
      <JobbyState/>
      <Ourprocess/>
      <DivisionCta/>
      <FAQ/>
      <TestimonialPuzzle/>
      <BlogSection/>
      <CTAJobseeker/>
    </main>
  );
}
