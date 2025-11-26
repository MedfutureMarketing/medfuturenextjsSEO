"use client";
import { useRef } from 'react';
import RegistrationForm from '@/components/Forms/QuickApplySingleJob';
import Link from "next/link";

export default function JobDescription() {
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyNow = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="border-2 rounded-8px relative">

     

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 lg:pl-[43px] lg:pr-[23px] lg:py-[25px] rounded-none bg-white">
        <h1 className="text-[18px] lg:text-[24px] font-bold text-[#0E2851] lg:pr-[43px] flex-1 mb-4 lg:mb-0">
          GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>

        {/* Desktop Apply Button */}
        <button
          onClick={handleApplyNow}
          className=" bg-[#64CAF3] text-white px-6 py-3 lg:w-[160px] lg:h-[56px] rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap lg:ml-4 flex-shrink-0"
        >
          Apply Now
        </button>
      </div>

      {/* External Link Icon */}
      <div className="relative px-4 lg:px-5">
        <div className="absolute top-0 right-0 px-4 lg:px-5">
          <Link href="/permanent/job" className="hover:underline">
            {/* SVG icon omitted for brevity */}
          </Link>
        </div>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-[16px] lg:mt-[24px] mb-[16px] lg:mb-[20px] px-4 lg:px-[44px]">
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">Permanent</span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">Medical Practitioner</span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">AUD 160/Hour</span>
        <span className="text-[#0E2851] lg:text-[18px] text-[13px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">Full Time Or Part Time</span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none px-4 lg:px-[44px]">
        <div>
          <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">Offer Details:</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">Medical Practice Details</h3>
          <p className="text-[#666666] mt-2 lg:mt-[10px] text-[14px] lg:text-[18px] leading-relaxed">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base text-[14px] lg:text-[18px]">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>

  
      <div className='grid lg:grid-cols-2 mt-6 lg:mt-0 px-4 lg:px-[44px]'>
     
        <div ref={formRef} className='mt-6 lg:mt-0'>
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
