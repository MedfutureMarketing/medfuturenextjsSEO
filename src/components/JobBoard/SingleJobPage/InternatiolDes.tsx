"use client"
import { useState, useRef } from 'react';
import RegistrationForm from '@/components/Forms/QuickApply';
import Link from "next/link";

export default function JobDescription() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="border-2">
   
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 z-50 border-t">
        <button
          onClick={handleApplyNow}
          className="w-full bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-[#55b8e0] transition-colors font-medium text-sm"
        >
          {showRegistrationForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 lg:pl-[43px] lg:pr-[23px] lg:py-[25px] rounded-none bg-white">
        <h1 className="text-[18px] lg:text-[24px] font-bold text-[#0E2851] lg:pr-[43px] flex-1 mb-4 lg:mb-0">
          GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>
     
        <button
          onClick={handleApplyNow}
          className="hidden lg:block bg-[#64CAF3] text-white px-6 py-3 w-[160px] h-[56px] rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap lg:ml-4 flex-shrink-0"
        >
          {showRegistrationForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div>

   
      <div className="relative px-4 lg:px-5">
        <div className="absolute top-0 right-0 px-4 lg:px-5">
          <Link href="/permanent/job" className="hover:underline">
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

      {/* Job Tags */}
      <div className="flex flex-wrap items-center gap-2 lg:gap-3 mt-[16px] lg:mt-[24px] mb-[16px] lg:mb-[20px] px-4 lg:px-[44px]">
        <span className="text-[#0E2851] text-[14px] text-[14px] lg:text-[18px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          Permanent
        </span>
        <span className="text-[#0E2851] text-[14px] text-[14px] lg:text-[18px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          Medical Practitioner
        </span>
        <span className="text-[#0E2851] text-[14px] text-[14px] lg:text-[18px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          AUD 160/Hour
        </span>
        <span className="text-[#0E2851] text-[14px] text-[14px] lg:text-[18px] px-2 lg:px-3 py-1 lg:py-0 rounded bg-gray-100 lg:bg-transparent">
          Full Time Or Part Time
        </span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none px-4 lg:px-[44px]">
        <div>
          <p className="text-[#666666] text-[14px] lg:text-[18px] leading-relaxed">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base lg:text-lg">Offer Details:</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base lg:text-lg">Medical Practice Details</h3>
          <p className="text-[#666666] mt-2 lg:mt-[10px] text-[14px] lg:text-[18px] leading-relaxed">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-6 lg:mt-[40px] text-base lg:text-lg">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-2 lg:mt-[10px] text-[14px] lg:text-[18px]">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-4 lg:gap-[7px] px-4 lg:px-[44px] mt-6 lg:mt-0">
        <h3 className="font-semibold text-[#66768F] text-base lg:text-lg">Contact Us</h3>
        
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

      {/* Registration Form */}
      {showRegistrationForm && (
        <div ref={formRef} className='mt-6 lg:mt-0 px-4 lg:px-0'>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
      
     
      <div className="lg:hidden h-20"></div>
    </div>
  );
}