"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import RegistrationForm from "@/components/Forms/QuickApply";
import { apiGet } from "@/lib/api";
import Link from "next/link";
import JobDescriptionSkeleton from '@/components/JobBoard/JobDescription/JobDescriptionSkeleton';
import Image from "next/image";
import Permenentico from "@/assets/jobboardico/Permanentico.png"
import Doctorico from "@/assets/jobboardico/Doctorico.png"
import Moneyico from "@/assets/jobboardico/Moneyico.png"
import Timeico from "@/assets/jobboardico/Timeico.png"
import ShareButton from "@/components/JobBoard/Sharebutton"

type JobHighlight = {
  jobhighlights_id: number;
  name: string;
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
  first_contact_person_name: string;
  first_contact_number: string;
  email: string;
  hourly_fee: string
};

export default function JobDescription() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

  if (loading) return <JobDescriptionSkeleton />;

  if (!jobId) {
    return (
      <div className="md:hidden lg:block  hidden">
        <div className=" md:flex h-full items-center justify-center p-8">
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
        </div></div>
    );
  }

  if (!job) {
    return (
      <div className="p-6 text-gray-500 hidden md:block lg:block">
        Job not found.
      </div>
    );
  }

  return (
    <div className="md:hidden lg:block  hidden border md:block mb-8" id="job-description-wrapper">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] lg:pl-[43px] pr-[23px] py-[25px] px-4 bg-white">
        <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0E2851] flex-1">
          {job.job_title}
        </h1>
      </div>

      {/* External Link */}
      <div className="relative px-5">
        <div className="absolute top-0 right-0 px-5"><div className="flex flex-wrap gap-4">
          <Link href={`/permanent/job/${job.job_id}`} className="hover:underline">
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
          </Link><ShareButton
            jobId={job.job_id}
            jobTitle={job.job_title}
            jobUrl={`/permanent/job/${job.job_id}`}
          /></div>
        </div>

      </div>

      {/* Tags */}
      <div className="flex items-center gap-6 mt-[24px] mb-[20px] lg:px-[44px] px-[25px]">
        <span className="text-[#0E2851] lg:text-[16px]"><Image src={Permenentico} alt="Permanent" className=" mr-0 inline-block" /> Permanent</span>
        <span className="text-[#0E2851] lg:text-[16px]"><Image src={Doctorico} alt="Permanent" className=" mr-0 inline-block" />{job.profession?.name}</span>
        <span className="text-[#0E2851] lg:text-[16px]"><Image src={Moneyico} alt="Permanent" className=" mr-0 inline-block" />{job?.hourly_fee}</span>
        <span className="text-[#0E2851] lg:text-[16px]"><Image src={Timeico} alt="Permanent" className=" mr-0 inline-block" />{job.engagement_type?.name}</span>
      </div>

      {/* Description */}
      <div className="prose max-w-none lg:px-[44px] px-[25px] ">
        <p className="text-[#666]">{job.job_brief}</p>

        <h4 className="font-semibold text-[#040D48] text-[16px] mt-[40px]">Offer Details</h4>
        {job.highlights?.length > 0 && (
          <ul className="list-disc list-inside text-[#4A5565] mt-[10px] space-y-1">
            {job.highlights.map((highlight) => (
              <li key={highlight.jobhighlights_id}>{highlight.name}</li>
            ))}
          </ul>
        )}

        <h3 className="font-semibold text-[#040D48] text-[16px] mt-[40px]">Medical Practice Details</h3>
        <p className="text-[#666] mt-[10px]">{job.medical_practise_details}</p>

        <h4 className="font-semibold text-[#040D48] text-[16px] mt-[40px]">Eligibility Requirements</h4>
        <ul className="list-disc list-inside text-[#4A5565] mt-[10px] space-y-1">
          {(job.required_qualification_exp?.split(/\r?\n/) ?? []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 lg:px-[44px] px-[25px] gap-3 lg:gap-[7px] mb-6 lg:p-0 lg:px-0 px-4">
        <h4 className="font-semibold text-[#040D48] text-[16px] mt-[40px]">
          Contact Us
        </h4>
        <div className="grid grid-cols-[1fr_2fr] gap-0 lg:gap-[1px]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Recruitment Consultant:</h3>
          <span className="text-[#4A5565] lg:text-[16px] text-[13px]">{job.first_contact_person_name}</span>
        </div>
        <div className="grid grid-cols-[1fr_2fr]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Contact Number:</h3>
          <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">{job.first_contact_number}</a>
        </div>
        <div className="grid grid-cols-[1fr_2fr]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">Email:</h3>
          <a href="mailto:gprecruitment@medfuture.com.au" className="text-[#4A5565] hover:underline lg:text-[18px] text-[13px] break-all">{job.email}</a>
        </div>
        <div className="grid grid-cols-[1fr_2fr]">
          <h3 className="font-semi-bold text-[#4A5565] lg:text-[16px] text-[13px]">General Enquiries:</h3>
          <a href="tel:0452468515" className="text-[#4A5565] hover:underline lg:text-[16px] text-[13px]">0452 468 515</a>
        </div>
      </div>

      {/* Registration Form - Always Open */}
      <div ref={formRef} className="mt-6 lg:mt-10 px-4">
        <RegistrationForm onClose={() => { }} />
      </div>
    </div>
  );
}
