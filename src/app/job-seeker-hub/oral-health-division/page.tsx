

import MedicalHero from "@/components/Division/OralHealth/OralHealthHero";
import ContentSection from "@/components/Division/OralHealth/OralHealthContentSection";
import MedicalJobs from "@/components/Division/OralHealth/OralHealthMedicalJobs";
import ProfessionExplore from "@/components/Division/OralHealth/OralHealthProfessionExplore";
import MeetOurConsultants from "@/components/Home/MeetConsultants";
import JobbyState from "@/components/JobseekerLandingpage/MedFutureStates";
import Ourprocess from "@/components/Division/OralHealth/OralHealthOurProcess";
import DivisionCta from "@/components/Division/MedicalDivision/DivisonCta";
import FAQ from "@/components/FAQ/Faq";
import BlogSection from "@/components/Blog/Blog";
import TestimonialPuzzle from "@/components/JobseekerLandingpage/JobSeekerTesti";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";


export default function OralhealthDivision() {
  return (
    <main className="w-full ">
      <MedicalHero/>
      <ContentSection/>
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
