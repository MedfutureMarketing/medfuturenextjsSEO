"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import RegistrationForm from "@/components/Forms/QuickApply";
import { apiGet } from "@/lib/api";
import Link from "next/link";
import JobDescriptionSkeleton from '@/components/JobBoard/JobDescription/JobDescriptionSkeleton';

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
};


export default function JobDescription() {
  const searchParams = useSearchParams();
  const jobId = searchParams.get("jobId");

  const [job, setJob] = useState<Job | null>(null);
  const [loading, setLoading] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
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
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 150);
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
    <div className="hidden lg:block md:block border-2" id="job-description-wrapper">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] lg:pl-[43px] pr-[23px] py-[25px] px-4 bg-white">
        <h1 className="lg:text-[24px] text-[20px] font-bold text-[#0E2851] flex-1">
          {job.job_title}
        </h1>

        <button
          onClick={handleApplyNow}
          className="bg-[#64CAF3] text-white px-6 py-3 lg:w-[160px] h-[56px] rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap ml-4"
        >
          {showRegistrationForm ? "Close Form" : "Apply Now"}
        </button>
      </div>

      {/* Single job */}
      <div className="relative px-5">
        <div className="absolute top-0 right-0 px-5">
         <Link href={`/permanent/job/${job.job_id}`} className="hover:underline ">  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_21001_3721)">
              <path d="M14.2193 17.379H2.63335C2.354 17.379 2.0861 17.268 1.88857 17.0705C1.69105 16.873 1.58008 16.6051 1.58008 16.3257V4.73979C1.58008 4.46045 1.69105 4.19254 1.88857 3.99502C2.0861 3.79749 2.354 3.68652 2.63335 3.68652H7.89969V4.73979H2.63335V16.3257H14.2193V11.0594H15.2726V16.3257C15.2726 16.6051 15.1616 16.873 14.9641 17.0705C14.7665 17.268 14.4986 17.379 14.2193 17.379Z" fill="#0C3262" />
              <path d="M9.47974 1.5791C9.34007 1.5791 9.20612 1.63459 9.10736 1.73335C9.00859 1.83211 8.95311 1.96606 8.95311 2.10574C8.95311 2.24541 9.00859 2.37936 9.10736 2.47812C9.20612 2.57689 9.34007 2.63237 9.47974 2.63237H15.5834L8.28955 9.92625C8.23442 9.97346 8.18965 10.0316 8.15804 10.0969C8.12643 10.1622 8.10866 10.2334 8.10586 10.3059C8.10306 10.3785 8.11528 10.4508 8.14176 10.5184C8.16823 10.5859 8.20839 10.6473 8.25972 10.6986C8.31104 10.75 8.37242 10.7901 8.44 10.8166C8.50758 10.8431 8.5799 10.8553 8.65243 10.8525C8.72496 10.8497 8.79612 10.8319 8.86146 10.8003C8.9268 10.7687 8.98489 10.7239 9.0321 10.6688L16.326 3.37492V9.47861C16.326 9.61829 16.3815 9.75224 16.4802 9.851C16.579 9.94977 16.7129 10.0052 16.8526 10.0052C16.9923 10.0052 17.1262 9.94977 17.225 9.851C17.3238 9.75224 17.3793 9.61829 17.3793 9.47861V1.5791H9.47974Z" fill="#0C3262" />
            </g>
            <defs>
              <clipPath id="clip0_21001_3721">
                <rect width="18.9588" height="18.9588" fill="white" />
              </clipPath>
            </defs>
          </svg></Link>
        </div>
      </div>

      {/* Tags */}
      <div className="flex items-center gap-3 mt-[24px] mb-[20px] lg:px-[44px] px-[25px]">
        <span className="text-[#0E2851] lg:text-[18px]">Permanent</span>
        <span className="text-[#0E2851] lg:text-[18px]">{job.profession?.name}</span>
        <span className="text-[#0E2851] lg:text-[18px]">{job.engagement_type?.name}</span>
        <span className="text-[#0E2851] lg:text-[18px]">
          {job.state?.name}, {job.country?.name}
        </span>
      </div>

      {/* Description */}
      <div className="prose max-w-none lg:px-[44px] px-[25px]">
        <p className="text-[#666]">{job.job_brief}</p>

        <h4 className="font-semibold text-[#66768F] mt-[40px]">Offer Details</h4>

        {job.highlights?.length > 0 && (
          <ul className="list-disc list-inside text-[#666] mt-[10px] space-y-1">
            {job.highlights.map((highlight) => (
              <li key={highlight.jobhighlights_id}>
                {highlight.name}
              </li>
            ))}
          </ul>
        )}
        
        <h3 className="font-semibold text-[#66768F] mt-[40px]">
          Medical Practice Details
        </h3>
        <p className="text-[#666] mt-[10px]">{job.medical_practise_details}</p>

        <h4 className="font-semibold text-[#66768F] mt-[40px]">
          Eligibility Requirements
        </h4>
        <ul className="list-disc list-inside text-[#666] mt-[10px] space-y-1">
          {(job.required_qualification_exp?.split(/\r?\n/) ?? []).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 gap-[7px] px-[44px]">
        <h3 className="font-semibold text-[#66768F] mt-[40px]">Contact Us</h3>

        <div className="flex gap-[13px] mt-[10px]">
          <h3 className="font-semibold text-[#66768F]">Recruitment Consultant:</h3>
          <span className="text-[#66768F]">Gaya</span>
        </div>
        <div className="flex gap-[13px]">
          <h3 className="font-semibold text-[#66768F]">Contact Number:</h3>
          <span className="text-[#66768F]">0452 468 515</span>
        </div>
        <div className="flex gap-[13px]">
          <h3 className="font-semibold text-[#66768F]">Email:</h3>
          <span className="text-[#66768F]">gprecruitment@medfuture.com.au</span>
        </div>
      </div>

      {showRegistrationForm && (
        <div ref={formRef}>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
    </div>
  );
}
