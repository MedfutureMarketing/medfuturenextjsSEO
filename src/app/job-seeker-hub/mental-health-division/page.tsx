

import MentalHealthHero from "@/components/Division/MentalHealth/MentalHealthHero";
import MentalHealthContentSection from "@/components/Division/MentalHealth/MentalHealthContentSection";
import MentalHealthJobs from "@/components/Division/MentalHealth/MentalHealthJobs";
import ProfessionExplore from "@/components/Division/MentalHealth/MentalHealthJobs";
import MeetOurConsultants from "@/components/Home/MeetConsultants";
import JobbyState from "@/components/JobseekerLandingpage/MedFutureStates";
import MentalHealthOurProcess from "@/components/Division/MentalHealth/MentalHealthOurProcess";
import DivisionCta from "@/components/Division/MedicalDivision/DivisonCta";
import FAQ from "@/components/FAQ/Faq";
import BlogSection from "@/components/Blog/Blog";
import TestimonialPuzzle from "@/components/JobseekerLandingpage/JobSeekerTesti";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";


export default function MentalHealthDivision() {
  return (
    <main className="w-full ">
      <MentalHealthHero />
      <MentalHealthContentSection />
      <MentalHealthJobs />
      <ProfessionExplore />
      <MeetOurConsultants />
      <JobbyState />
      <MentalHealthOurProcess />
      <DivisionCta />
      <FAQ />
      <TestimonialPuzzle />
      <BlogSection />
      <CTAJobseeker />
    </main>
  );
}
