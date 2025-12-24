import RegistrationForm from '@/components/Forms/QuickApplySingleJob';
import Link from "next/link";
import { apiGet } from "@/lib/api";
import ApplyNowButton from './ApplyNowButton';

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
};

/* ================= COMPONENT ================= */

export default async function JobDescription({ 
  params 
}: { 
  params: Promise<{ jobId: string }>
}) {
  const { jobId } = await params;
  let job: Job | null = null;

  // Fetch job data on the server
  try {
    const res = await apiGet<{ data: Job }>(`web/jobdetails/${jobId}`);
    job = res.data;
  } catch {
    job = null;
  }

  if (!job) {
    return (
      <div className="border-2 rounded-8px p-8 text-center">
        <h1 className="text-2xl font-bold text-[#0E2851]">Job Not Found</h1>
        <p className="text-[#666666] mt-4">The job you are looking for does not exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="border-2 rounded-8px relative">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 lg:pl-[43px] lg:pr-[23px] lg:py-[25px] rounded-none bg-white">
        <h1 className="text-[18px] lg:text-[24px] font-bold text-[#0E2851] lg:pr-[43px] flex-1 mb-4 lg:mb-0">
          {job.job_title}
        </h1>

        {/* Apply Now Button - Client component for interactivity */}
        <ApplyNowButton />
      </div>

      {/* External Link Icon */}
      <div className="relative px-4 lg:px-5">
        <div className="absolute top-0 right-0 px-4 lg:px-5">
          <Link href="/permanent/job" className="hover:underline">
            {/* SVG icon here */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-[16px] lg:mt-[24px] mb-[16px] lg:mb-[20px] px-4 lg:px-[44px]">
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          Permanent
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          {job.profession?.name || "Not specified"}
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          {job.engagement_type?.name || "Not specified"}
        </span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          {job.state?.name || "Location not specified"}, {job.country?.name || ""}
        </span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none px-4 lg:px-[44px]">
        <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
          {job.job_brief || "No job description available."}
        </p>

        {job.highlights && job.highlights.length > 0 && (
          <>
            <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
              Offer Details:
            </h4>

            <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
              {job.highlights.map(h => (
                <li key={h.jobhighlights_id}>{h.name}</li>
              ))}
            </ul>
          </>
        )}

        {job.medical_practise_details && (
          <>
            <h3 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
              Medical Practice Details
            </h3>

            <p className="text-[#666666] mt-2 lg:mt-[10px] text-[14px] lg:text-[18px] leading-relaxed">
              {job.medical_practise_details}
            </p>
          </>
        )}

        {job.required_qualification_exp && (
          <>
            <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">
              Eligibility Requirements
            </h4>

            <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
              {job.required_qualification_exp
                .split(/\r?\n/)
                .filter(item => item.trim() !== '')
                .map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          </>
        )}
      </div>

      {/* Registration Form and Contact Info */}
      <div className='grid lg:grid-cols-2 mt-6 lg:mt-0 px-4 lg:px-[44px]'>
        <div id="registration-form" className='mt-6 lg:mt-0'>
          <RegistrationForm />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 gap-4 lg:gap-[7px] mt-6 lg:py-36 px-10">
          <h3 className="font-semibold text-[#66768F] text-base text-[14px] lg:text-[18px]">Contact Us</h3>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
            <span className="font-semibold text-[#66768F] text-[14px] lg:text-[18px]">Recruitment Consultant:</span>
            <span className="text-[#66768F] text-[14px] lg:text-[18px]">Gaya</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
            <span className="font-semibold text-[#66768F] text-[14px] lg:text-[18px]">Contact Number:</span>
            <a href="tel:0452468515" className="text-[#66768F] hover:text-[#64CAF3] text-[14px] lg:text-[18px]">0452 468 515</a>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
            <span className="font-semibold text-[#66768F] text-[14px] lg:text-[18px]">Email:</span>
            <a href="mailto:gprecruitment@medfuture.com.au" className="text-[#66768F] hover:text-[#64CAF3] text-[14px] lg:text-[18px] break-all">gprecruitment@medfuture.com.au</a>
          </div>
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-2 lg:gap-[13px]">
            <span className="font-semibold text-[#66768F] text-[14px] lg:text-[18px]">General Enquiries:</span>
            <a href="tel:0452468515" className="text-[#66768F] hover:text-[#64CAF3] text-[14px] lg:text-[18px]">0452 468 515</a>
          </div>
        </div>
      </div>

      <div className="lg:hidden h-20"></div>
    </div>
  );
}