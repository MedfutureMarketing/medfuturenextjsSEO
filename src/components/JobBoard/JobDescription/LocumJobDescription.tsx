"use client";

import { useState, useEffect } from 'react';
import RegistrationForm from '@/components/Forms/QuickApply';
import Link from "next/link";
import React from "react";
import ProfessionIcon from '@/assets/icons/profession.png';
import SpecialtyIcon from '@/assets/icons/specialty.png';
import SeniorityIcon from '@/assets/icons/seniority.png';
import LocationIcon from '@/assets/icons/location.png';
import StartDateIcon from '@/assets/icons/startdate.png';
import EndDateIcon from '@/assets/icons/enddate.png';
import LocumPeriodIcon from '@/assets/icons/locumperiod.png';
import LocumRateIcon from '@/assets/icons/locumrateonoffer.png';
import EngagementTypeIcon from '@/assets/icons/engagementtype.png';
import EngagementModeIcon from '@/assets/icons/engagementmode.png';
import PaymentCycleIcon from '@/assets/icons/paymentcycle.png';
import AdditionalInfoIcon from '@/assets/icons/additionalinformation.png';
import Image from 'next/image';
import { apiGet } from '@/lib/api';
import { useSearchParams } from 'next/navigation';
import JobDescriptionSkeleton from './JobDescriptionSkeleton';
// Map highlight labels to icons
import { StaticImageData } from "next/image";

const resolveHighlightIcon = (label: string): StaticImageData => {
  const text = label.toLowerCase();

  if (text.includes("profession")) return ProfessionIcon;
  if (text.includes("special")) return SpecialtyIcon; // specialty / speciality
  if (text.includes("seniority")) return SeniorityIcon;
  if (text.includes("location")) return LocationIcon;
  if (text.includes("start")) return StartDateIcon;
  if (text.includes("end")) return EndDateIcon;
  if (text.includes("period")) return LocumPeriodIcon;
  if (text.includes("rate")) return LocumRateIcon;
  if (text.includes("work type")) return EngagementTypeIcon;
  if (text.includes("engagement type")) return EngagementTypeIcon;
  if (text.includes("mode")) return EngagementModeIcon;
  if (text.includes("payment")) return PaymentCycleIcon;
  if (text.includes("additional")) return AdditionalInfoIcon;

  return ProfessionIcon; // safe fallback
};


type JobHighlight = {
  jobhighlights_id: number;
  name: string;
  label: string;
};

// Icon map for highlights
const highlightIconMap: Record<string, typeof ProfessionIcon> = {
  profession: ProfessionIcon,
  specialty: SpecialtyIcon,
  seniority: SeniorityIcon,
  location: LocationIcon,
  "start date": StartDateIcon,
  "end date": EndDateIcon,
  "Locum Period": LocumPeriodIcon,
  "locum rate on offer": LocumRateIcon,
  "locum rate on offe": LocumRateIcon,
  "work type": EngagementTypeIcon,
  "engagement type": EngagementTypeIcon,
  "engagement mode": EngagementModeIcon,
  "payment cycle": PaymentCycleIcon,
  "additional information": AdditionalInfoIcon,
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
  first_contact_person_name: string;
  first_contact_number: string;
  email: string;
};

export default function LocumJobDescription() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch job details
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
      } catch {
        setJob(null);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, [jobId]);

  // Loading skeleton
  if (loading) return <JobDescriptionSkeleton />;

  // No job selected
  if (!jobId) {
    return (
      <div className="hidden md:flex h-full items-center justify-center p-8">
       <div className="text-center max-w-md">
          <div className="mb-6 relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Select a Job to View Details
          </h3>

          <p className="text-gray-500 mb-6 leading-relaxed">
            Browse through the available positions on the left and click on any job card to see the full details, requirements, and application information.
          </p>
        </div>
      </div>
    );
  }

  // Job not found
  if (!job) {
    return (
      <div className="p-6 text-gray-500 hidden md:block lg:block">
        Job not found.
      </div>
    );
  }

  return (
    <div className="hidden lg:block border md:block">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)]  px-[36px] py-[24px]  rounded-none bg-white">
        <h1 className="lg:text-[20px] text-[20px] font-[600]  text-[#141E65] flex-1">
          {job.job_title}
        </h1>
      </div>

      {/* External Link */}
      <div className="relative px-5">
        <div className="absolute top-0 right-0 px-5">
          <Link href={`/locum/job/${job.job_id}`} className="hover:underline">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_21001_3721)">
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

      {/* Highlights */}
      <div className="flex items-center lg:px-[38px] justify-center p-6">
        <div className="w-full bg-white ">
          <div className="grid grid-cols-[auto_2fr] gap-y-4 gap-x-5 border-gray-200">
            {job.highlights.map((highlight, idx) => {
              const normalizedLabel = highlight.label.toLowerCase().trim();
              return (
                <React.Fragment key={idx}>
                  <div className=" lg:text-[18px] font-[400] text-gray-600 flex items-center gap-[15px]">
                    <Image
                      src={resolveHighlightIcon(highlight.label)}
                      alt={`${highlight.label} icon`}
                      width={20}
                      height={20}
                      className="object-contain opacity-80"
                    />
                    <span>{highlight.label}</span>
                  </div>
                  <div className="lg:text-[16px] text-[#66768F] bg-[#66768F]/5 py-3 px-2 rounded-[4px]">
                    {highlight.name}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="prose max-w-none  px-[36px] py-[24px] lg:text-[18px]">
        <p className="text-gray-700 lg:text-[18px] mb-4">{job.job_brief}</p>
        <h3 className="font-semi-bold text-[#66768F] mb-[16px]">Medical Practice Details</h3>
        <p className="text-gray-700 mb-4">{job.medical_practise_details}</p>
        <h4 className="font-semi-bold text-[#66768F] mb-[16px] mt-[36px]">Eligibility Requirements</h4>
        <ul className="list-disc list-inside text-[#666] mt-[10px] space-y-1">
          {(job.required_qualification_exp?.split(/\r?\n/) ?? []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 gap-3 lg:gap-[7px] lg:px-[38px] mb-6 lg:p-0  px-[36px] py-[24px] px-5">
        <h4 className="font-semi-bold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
          Contact Us
        </h4>
        <div className="grid grid-cols-[1fr_2fr] gap-0 lg:gap-[1px]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Recruitment Consultant:</h3>
          <span className="text-[#4A5565] lg:text-[16px] text-[13px]">{job.first_contact_person_name}</span>
        </div>
        <div className="grid grid-cols-[1fr_2fr] ">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Contact Number:</h3>
          <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">{job.first_contact_number}</a>
        </div>
        <div className="grid grid-cols-[1fr_2fr]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Email:</h3>
          <a href="mailto:locum@medfuture.com.au" className="text-[#4A5565] hover:underline lg:text-[18px] text-[13px] break-all">{job.email}</a>
        </div>
        <div className="grid grid-cols-[1fr_2fr] ">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">General Enquiries:</h3>
          <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">0452 468 515</a>
        </div>
      </div>

      {/* Registration Form (Always Open) */}
      <div className="mt-6 lg:mt-10 px-6">
        <RegistrationForm onClose={() => { }} />
      </div>
    </div>
  );
}
