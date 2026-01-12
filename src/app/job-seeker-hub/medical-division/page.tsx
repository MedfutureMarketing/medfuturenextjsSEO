

import MedicalHero from "@/components/Division/MedicalDivision/MedicalHero";
import ContactSection from "@/components/Division/MedicalDivision/ContentSection";
import MedicalJobs from "@/components/Division/MedicalDivision/MedicalJobs";
import ProfessionExplore from "@/components/Division/MedicalDivision/ProfessionExplore";
import MeetOurConsultants from "@/components/Division/MedicalDivision/MeetConsultants";
import JobbyState from "@/components/JobseekerLandingpage/MedFutureStates";
import Ourprocess from "@/components/Division/MedicalDivision/OurProcess";
import DivisionCta from "@/components/Division/MedicalDivision/DivisonCta";
import FAQ from "@/components/FAQ/Faq";
import BlogSection from "@/components/Blog/Blog";
import TestimonialPuzzle from "@/components/JobseekerLandingpage/JobSeekerTesti";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";


export default function MedicalDivision() {
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
