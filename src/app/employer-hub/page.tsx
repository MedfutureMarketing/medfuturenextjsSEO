

import { getPageMetadata } from "@/lib/getPageMetadata";

import { Metadata } from "next";
import EmployerHero from "@/components/EmployerHub/EmployerHero";
import InfoCards from "@/components/EmployerHub/Countercard";
// import RecruitmentServices from "@/components/EmployerHub/ServicePlan";
// import ExclusiveRecruitmentServices from "@/components/Home/RecruitementServicebox";
// import PLGPForm from "@/components/EmployerHub/PLGPform";

import ClientsLogoSlider from "@/components/EmployerHub/ClientsLogoSlider";
// import TestimonialSection from "@/components/EmployerHub/TestimonialEmployer";
// import EmployerEnquirySection from "@/components/EmployerHub/EmployerEnquirySection";
import FAQ from "@/components/FAQ/Faq";
// import MeetOurConsultants from "@/components/Home/MeetConsultants";

import Employerservices from "@/components/EmployerHub/Employerservices"
import MultiDisciplinarySection from "@/components/EmployerHub/MultiDisciplinarySection";
import EmployerDivisions from "@/components/EmployerHub/EmployerDivisionsPage"
import EmployerTestimonialsSection from "@/components/EmployerHub/EmployerTestimonialsSection";
import ServiceProposalSection from "@/components/EmployerHub/ServiceProposalSection";
export async function generateMetadata(): Promise<Metadata> {
  // Use the correct page key and include the actual path
  return getPageMetadata("employee", undefined, "/employer-hub");
}

export default function EmployerHub() {
  return (
    <section className=" ">
      <EmployerHero />
      <InfoCards />
      <Employerservices/>
      <MultiDisciplinarySection/>
      <EmployerDivisions/>
      <EmployerTestimonialsSection/>
      <FAQ/>
      <div className="lg:mt-56 mt-16 mb-16">
        <ClientsLogoSlider/>
      </div>
      <ServiceProposalSection/>
    </section>
  );
}
