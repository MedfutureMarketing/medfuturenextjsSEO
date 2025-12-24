"use client"
import { useState, useRef, useEffect } from 'react';
import RegistrationForm from '@/components/Forms/QuickApply';
import Link from "next/link";
import React from "react";
import ProfessionIcon from '@/assets/icons/profession.png';
// import SpecialtyIcon from '@/assets/icons/specialty.png';
// import SeniorityIcon from '@/assets/icons/seniority.png';
// import LocationIcon from '@/assets/icons/location.png';
// import StartDateIcon from '@/assets/icons/startdate.png';
// import EndDateIcon from '@/assets/icons/enddate.png';
// import LocumPeriodIcon from '@/assets/icons/locumperiod.png';
// import LocumRateIcon from '@/assets/icons/locumrateonoffer.png';
// import EngagementTypeIcon from '@/assets/icons/engagementtype.png';
// import EngagementModeIcon from '@/assets/icons/engagementmode.png';
// import PaymentCycleIcon from '@/assets/icons/paymentcycle.png';
// import AdditionalInfoIcon from '@/assets/icons/additionalinformation.png';
import Image from 'next/image';
import { apiGet } from '@/lib/api';
import { useSearchParams } from 'next/navigation';
import JobDescriptionSkeleton from './JobDescriptionSkeleton';

type JobHighlight = {
  jobhighlights_id: number;
  name: string;
  label: string;
};

type Job = {
  job_id: number;
  job_title: string;
  status: number;
  commencement_date: string | null;
  profession: { name: string } | null;
  country: { name: string } | null;
  state: { name: string } | null;
  engagement_type: { name: string } | null;
  job_brief: string | null;
  medical_practise_details: string | null;
  required_qualification_exp: string | null;
  offer_details: string | null;
  highlights: JobHighlight[];
  speciality: { name: string } | null;
  seniority: { name: string } | null;
  location: { name: string } | null;
  region: { name: string } | null;
  engagement_mode: { name: string } | null;
};

export default function LocumJobDescription() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
    const searchParams = useSearchParams();
    const jobId = searchParams.get("jobId");
  
    const [job, setJob] = useState<Job | null>(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      async function fetchJob() {
        if (!jobId) {
          setJob(null);
          return;
        }
  
        setLoading(true);
  
        try {
          const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
          setJob(res.data);
        } catch (error) {
          setJob(null);
        } finally {
          setLoading(false);
        }
      }
  
      fetchJob();
    }, [jobId]);

  const handleApplyNow = () => {
    const wasClosed = !showRegistrationForm;
    setShowRegistrationForm(!showRegistrationForm);

    if (wasClosed) {
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  };

   // --------------------
    // LOADING SKELETON
    // --------------------
    if (loading) return <JobDescriptionSkeleton />;
  
    // --------------------
    // No job selected
    // --------------------
    if (!jobId) {
      return (
        <div className="p-6 text-gray-500 hidden md:block lg:block">
          Select a job to see details.
        </div>
      );
    }
  
    // --------------------
    // Job not found
    // --------------------
    if (!job) {
      return (
        <div className="p-6 text-gray-500 hidden md:block lg:block">
          Job not found.
        </div>
      );
    }

  return (
    <div className="hidden lg:block md:block border-2">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-6 rounded-none bg-white">
        <h1 className="lg:text-[24px] text-[20px] font-bold text-[#141E65] pr-4 flex-1">
          {job.job_title}
        </h1>
        <button
          onClick={handleApplyNow}
          className="bg-gradient-to-r from-[#141E65] to-[#151C50] text-[#FFD791] h-[56px] w-[160px] px-6 py-3 rounded-lg hover:from-[#1a2a7a] hover:to-[#1a2468] transition-colors font-medium whitespace-nowrap ml-4 flex-shrink-0"        >
          {showRegistrationForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div>

      {/* External Link Icon */}
      <div className="relative px-5">
        <div className="absolute top-0 right-0 px-5">
          <Link href={`/locum/job/${job.job_id}`} className="hover:underline">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_21001_3721)">
                <path d="M14.2193 17.379H2.63335C2.354 17.379 2.0861 17.268 1.88857 17.0705C1.69105 16.873 1.58008 16.6051 1.58008 16.3257V4.73979C1.58008 4.46045 1.69105 4.19254 1.88857 3.99502C2.0861 3.79749 2.354 3.68652 2.63335 3.68652H7.89969V4.73979H2.63335V16.3257H14.2193V11.0594H15.2726V16.3257C15.2726 16.6051 15.1616 16.873 14.9641 17.0705C14.7665 17.268 14.4986 17.379 14.2193 17.379Z" fill="#0C3262" />
                <path d="M9.47974 1.5791C9.34007 1.5791 9.20612 1.63459 9.10736 1.73335C9.00859 1.83211 8.95311 1.96606 8.95311 2.10574C8.95311 2.24541 9.00859 2.37936 9.10736 2.47812C9.20612 2.57689 9.34007 2.63237 9.47974 2.63237H15.5834L8.28955 9.92625C8.23442 9.97346 8.18965 10.0316 8.15804 10.0969C8.12643 10.1622 8.10866 10.2334 8.10586 10.3059C8.10306 10.3785 8.11528 10.4508 8.14176 10.5184C8.16823 10.5859 8.20839 10.6473 8.25972 10.6986C8.31104 10.75 8.37242 10.7901 8.44 10.8166C8.50758 10.8431 8.5799 10.8553 8.65243 10.8525C8.72496 10.8497 8.79612 10.8319 8.86146 10.8003C8.9268 10.7687 8.98489 10.7239 9.0321 10.6688L16.326 3.37492V9.47861C16.326 9.61829 16.3815 9.75224 16.4802 9.851C16.579 9.94977 16.7129 10.0052 16.8526 10.0052C16.9923 10.0052 17.1262 9.94977 17.225 9.851C17.3238 9.75224 17.3793 9.61829 17.3793 9.47861V1.5791H9.47974Z" fill="#0C3262" />
              </g>
              <defs>
                <clipPath id="clip0_21001_3721">
                  <rect width="18.9588" height="18.9588" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>

    
      <div className="flex items-center justify-center">
        <div className="w-full bg-white p-6">
          <div className="grid grid-cols-[auto_2fr] gap-y-4 gap-x-5 border-gray-200">
            {/* Profession */}
            {job.highlights.map((highlight, idx) => (
              <React.Fragment key={idx}>
                <div className="pl-4 lg:text-[18px] font-medium text-gray-600 flex items-center gap-2">
                  <Image
                    src={ProfessionIcon}
                    alt="Profession icon"
                    width={20}
                    height={20}
                    className="object-contain opacity-80"
                  />
                  <span>{highlight.label}</span>
                </div>
                <div className="lg:text-[18px] text-[#66768F] bg-[#66768F]/5 py-3 px-2 rounded-[4px]">
                  {highlight.name}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      
      <div className="prose max-w-none p-6 lg:text-[18px]">
        <div className=' mt-[38px] mb-[38px]'>
          <p className="text-gray-700 lg:text-[18px]  mb-4">
            {job.job_brief}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-[#66768F] mb-[16px] ">Medical Practice Details</h3>
          <p className="text-gray-700 mb-4">
            {job.medical_practise_details}
          </p>
          <h4 className="font-semibold text-[#66768F] mb-[16px] mt-[36px]">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-[#666] mt-[10px] space-y-1">
            {(job.required_qualification_exp?.split(/\r?\n/) ?? []).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-[7px] mb-6 p-6">
                  <h4 className="font-semibold text-[#66768F] mb-[16px] mt-[36px]">Contact Us</h4>

        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-gray-900 mb-2">Recruitment Consultant :</h3>
          <h3 className="font-semi-bold text-gray-900 mb-2">Gaya</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-gray-900 mb-2">Contact Number:</h3>
          <h3 className="font-semi-bold text-gray-900 mb-2">0452 468 515</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-gray-900 mb-2">Email:</h3>
          <h3 className="font-semi-bold text-gray-900 mb-2">gprecruitment@medfuture.com.au</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-gray-900 mb-2">General Enquire:</h3>
          <h3 className="font-semi-bold text-gray-900 mb-2">0452 468 515</h3>
        </div>
      </div>

      {showRegistrationForm && (
        <div ref={formRef}>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
      <div ref={formRef}></div>
    </div>
  );
}