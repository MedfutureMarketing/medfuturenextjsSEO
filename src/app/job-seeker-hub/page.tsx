import HeroSearch from "@/components/JobseekerLandingpage/HeroSearchbar";
import CounterSection from "@/components/CounterItem";
import WhyMedFuture from "@/components/JobseekerLandingpage/WhyMedFuture";
import MedFutureStates from "@/components/JobseekerLandingpage/MedFutureStates";
import BrowseJobsByProfession from "@/components/JobseekerLandingpage/BrowseJobsByProfession";
import RecruitmentDivisionsTabs from "@/components/JobseekerLandingpage/RecruitmentDivisions";
import LocumGpForm from "@/components/Forms/LocumGpForm";
import JobSeekertesti from "@/components/JobseekerLandingpage/JobSeekerTesti";
import FAQ from "@/components/FAQ/Faq";
import MeetOurConsultants from "@/components/Home/MeetConsultants";
import CTAJobseeker from "@/components/JobseekerLandingpage/CTAJobseeker";
import BlogSection from "@/components/Blog/Blog";

export default function JobSeeker() {
  return (
    <main className=" bg-white">
      <HeroSearch />
      <CounterSection/>
      <WhyMedFuture />
      <MedFutureStates />
      <BrowseJobsByProfession />
      <RecruitmentDivisionsTabs />
      <LocumGpForm />

      <FAQ />
      <JobSeekertesti />
      <MeetOurConsultants />
      <CTAJobseeker />
      <BlogSection />
    </main>
  );
}
