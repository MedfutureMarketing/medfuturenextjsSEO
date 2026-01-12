

import AlliedHero from "@/components/Division/Alliedhealth/AlliedHero";
import AlliedContentSection from "@/components/Division/Alliedhealth/AlliedContentSection";
import AlliedJobs from "@/components/Division/Alliedhealth/AlliedJobs";
import AlliedProfessionExplore from "@/components/Division/Alliedhealth/AlliedProfessionExplore";
import AlliedJMeetConsultants from "@/components/Division/Alliedhealth/AlliedJMeetConsultants";
import JobbyState from "@/components/JobseekerLandingpage/MedFutureStates";
import AlliedJOurProcess from "@/components/Division/Alliedhealth/AlliedJOurProcess";
import DivisionCta from "@/components/Division/MedicalDivision/DivisonCta";
import FAQ from "@/components/FAQ/Faq";
import BlogSection from "@/components/Blog/Blog";
import TestimonialPuzzle from "@/components/JobseekerLandingpage/JobSeekerTesti";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";


export default function AlliedHealthDivision() {
  return (
    <main className="w-full ">
      <AlliedHero />
      <AlliedContentSection />
      <AlliedJobs />
      <AlliedProfessionExplore />
      <AlliedJMeetConsultants />
      <JobbyState />
      <AlliedJOurProcess />
      <DivisionCta />
      <FAQ />
      <TestimonialPuzzle />
      <BlogSection />
      <CTAJobseeker />
    </main>
  );
}
