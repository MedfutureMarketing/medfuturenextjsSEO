"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import RegistrationForm from '@/components/Forms/QuickApplySingleJob';
import Link from "next/link";
import { apiGet } from "@/lib/api";
import Image from "next/image";
import Jobboard5 from "@/assets/homeico/jobboard5.png"
import Jobbaord6 from "@/assets/homeico/jobboard6.png"
import Permenentico from "@/assets/jobboardico/Permanentico.png"
import Doctorico from "@/assets/jobboardico/Doctorico.png"
import Moneyico from "@/assets/jobboardico/Moneyico.png"
import Timeico from "@/assets/jobboardico/Timeico.png"


/* ================= TYPES ================= */

type JobHighlight = {
  jobhighlights_id: number;
  name: string;
};

type Job = {
  job_id: number;
  job_title: string;
  profession?: { name: string };
  engagement_type?: { name: string };
  country?: { name: string };
  state?: { name: string };
  job_brief?: string;
  medical_practise_details?: string;
  required_qualification_exp?: string;
  highlights?: JobHighlight[];
  first_contact_person_name: string;
  first_contact_number: string;
  email: string;
};

/* ================= COMPONENT ================= */

export default function JobDescription() {
  const { jobId } = useParams<{ jobId: string }>();
  const formRef = useRef<HTMLDivElement>(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const [job, setJob] = useState<Job | null>(null);
  const [showForm, setShowForm] = useState(false); // <-- Toggle form visibility


  useEffect(() => {
    async function fetchJob() {
      try {
        const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
        setJob(res.data);
      } catch {
        setJob(null);
      }
    }

    fetchJob();
  }, [jobId]);



  const handleQuickApply = () => {
    setShowForm(true);
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }



    // const handleApplyNow = () => {
    //   if (formRef.current) {
    //     formRef.current.scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start',
    //     });
    //   }

  };


  if (!job) return null;

  return (
    <div className=" rounded-8px relative">
      {/* Header */}
      <div className="bg-[#575D84] lg:h-[123px] full-width-section mb-[30px]">
        <div className="flex flex-col inner-width-section  lg:flex-row lg:justify-between lg:items-start mb-6  p-4 lg:pl-[43px] lg:pr-[23px] lg:py-[25px] rounded-none ">
          <h1 className="text-[18px] lg:text-[24px] font-bold text-white lg:pr-[43px] flex-1 mb-4 lg:mb-0">
            {job.job_title}
          </h1>


        </div>

        <div className="absolute left-0 z-0  lg:block hidden bottom-0 w-[182px] h-[182px] md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
          <Image
            src={Jobbaord6}
            alt="Decorative left corner"
            fill
            className="object-contain object-bottom-left"
            priority
          />
        </div>

        {/* Right Corner Image */}
        <div className="absolute lg:block hidden z-0 right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 pointer-events-none">
          <Image
            src={Jobboard5}
            alt="Decorative right corner"
            fill
            className="object-contain object-bottom-right"
            priority
          />
        </div>

      </div>

      {/* External Link Icon */}
      <div className="relative px-4 lg:px-5">
        <div className="absolute top-0 right-0 px-4 lg:px-5">
          <Link href="/permanent/job" className="hover:underline">
            {/* SVG stays exactly same */}
          </Link>
        </div>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-[16px] lg:mt-[24px] mb-[16px] lg:mb-[20px] px-4 lg:px-[0px]">
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          <Image src={Permenentico} alt="Permanent" className=" mr-0 inline-block" />     Permanent
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          <Image src={Doctorico} alt="Doctor" className=" mr-0 inline-block" />    {job.profession?.name}
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          <Image src={Moneyico} alt="Money" className=" mr-0 inline-block" />   {job.engagement_type?.name}
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          <Image src={Timeico} alt="Time" className=" mr-0 inline-block" />   {job.state?.name}, {job.country?.name}
        </span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none px-4 px-4">
        <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
          {job.job_brief}
        </p>

        <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
          Offer Details:
        </h4>

        <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
          {job.highlights?.map(h => (
            <li key={h.jobhighlights_id}>{h.name}</li>
          ))}
        </ul>

        <h3 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
          Medical Practice Details
        </h3>

        <p className="text-[#666666] mt-2 lg:mt-[10px] text-[14px] lg:text-[18px] leading-relaxed">
          {job.medical_practise_details}
        </p>

        <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
          Eligibility Requirements
        </h4>

        <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
          {(job.required_qualification_exp ?? "")
            .split(/\r?\n/)
            .map((item, i) => (
              <li key={i}>{item}</li>
            ))}
        </ul>
      </div>


      {/* Registration Form and Contact Info */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4 mb-10 lg:mt-0 lg:items-end'>
        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-3 lg:gap-[7px] mb-6 lg:p-0 lg:px-0 px-4">
          <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
            Contact Us
          </h4>
          <div className="grid grid-cols-[1fr_2fr] gap-0 lg:gap-[1px]">
            <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Recruitment Consultant:</h3>
            <span className="text-[#4A5565] lg:text-[16px] text-[13px]">: {job.first_contact_person_name}</span>
          </div>
          <div className="grid grid-cols-[1fr_2fr] ">
            <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Contact Number</h3>
            <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">: {job.first_contact_number}</a>
          </div>
          <div className="grid grid-cols-[1fr_2fr]">
            <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Email:</h3>
            <a href="mailto:gprecruitment@medfuture.com.au" className="text-[#4A5565] hover:underline lg:text-[18px] text-[13px] break-all">: {job.email}</a>
          </div>
          <div className="grid grid-cols-[1fr_2fr] ">
            <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">General Enquiries</h3>
            <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">: 0452 468 515</a>
          </div>
        </div>

        {/* Apply Button */}
        {!showForm && (
          <div className="flex justify-center lg:justify-end px-10 pb-6 lg:pb-0">
            <button
              onClick={handleQuickApply}
              className="bg-[#074CA4] text-white w-[194px] px-6 py-3 cursor-pointer rounded-[4px] hover:bg-[#55b8e0] transition-colors font-medium"
            >
              Apply Now
            </button>
          </div>
        )}
      </div>


      {/* Registration Form */}
      {showForm && (
        <div ref={formRef} className="mt-4 lg:mt-0 lg:shadow-[0_0_12px_rgba(0,0,0,0.1)] border-[#66768F]/16 mb-36">
          <RegistrationForm onClose={function (): void {
            throw new Error("Function not implemented.");
          }} />
        </div>
      )}

      <div className="lg:hidden h-20"></div>
    </div>
  );
}
