


import EmployerHero from "@/components/EmployerHub/EmployerHero";
import InfoCards from "@/components/EmployerHub/Countercard";
import RecruitmentServices from "@/components/EmployerHub/ServicePlan";
import ExclusiveRecruitmentServices from "@/components/Home/RecruitementServicebox";
import PLGPForm from "@/components/EmployerHub/PLGPform";

import ClientsLogoSlider from "@/components/EmployerHub/ClientsLogoSlider";
import TestimonialSection from "@/components/EmployerHub/TestimonialEmployer";
import EmployerEnquirySection from "@/components/EmployerHub/EmployerEnquirySection";
import FAQ from "@/components/FAQ/Faq";
import MeetOurConsultants from "@/components/Home/MeetConsultants";

import Employerservices from "@/components/EmployerHub/Employerservices"




export default function EmployerHub() {
  return (
    <section className=" ">
      <EmployerHero />
      <InfoCards />
      <Employerservices/>
      <RecruitmentServices/>
      <ExclusiveRecruitmentServices/>
      <PLGPForm/>
  
     <div className="lg:mt-56 mt-16 mb-16"> <ClientsLogoSlider/></div> 
     <TestimonialSection/>
     <EmployerEnquirySection/>
     <FAQ/>
     <MeetOurConsultants/>
    </section>
  );
}
