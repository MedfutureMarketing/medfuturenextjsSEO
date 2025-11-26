
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
    <div className="hidden lg:block md:block broder-2">

      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] pl-[43px] pr-[23px] py-[25px] rounded-none bg-white">
        <h1 className="text-[24px] font-bold text-[#0E2851] pr-[43px] flex-1">
          GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>
        <button
          onClick={handleApplyNow}
          className="bg-[#64CAF3] text-white px-6 py-3 w-[160px] h-[56px] rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap ml-4 flex-shrink-0"
        >
          {showRegistrationForm ? 'Close From' : 'Apply Now'}
        </button>
      </div>
      <div className="relative px-5">
 

        
        <div className="absolute top-0 right-0 px-5">
         <Link href="/permanent/job" className="hover:underline ">  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <div className="flex items-center gap-3 mt-[24px] mb-[20px] px-[44px]">
        <span className="text-[#0E2851] text-[18px]  py-0 rounded flex flex-wrap gap-2">
          Permanent
        </span>
        <span className="text-[#0E2851] text-[18px] px-3 py-0 rounded flex flex-wrap gap-2">
          Medical Practitioner
        </span>
        <span className="text-[#0E2851] text-[18px] px-3 py-0 rounded flex flex-wrap gap-2">
          AUD 160/Hour
        </span>
        <span className="text-[#0E2851] text-[18px] px-3 py-0 rounded flex flex-wrap gap-2">
          Full Time Or Part Time
        </span>
      </div>

      <div className="prose max-w-none px-[44px] ">
        <div>
          <p className="text-[#666666] ">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-[40px]">Offer Details:</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-[10px] ">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-[#66768F] mt-[40px]">Medical Practice Details</h3>
          <p className="text-[#666666] mt-[10px]">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className="font-semibold text-[#66768F] mt-[40px]">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-[#666666] space-y-1 mt-[10px]">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-1 gap-[7px]   px-[44px]">
                  <h3 className="font-semibold text-[#66768F] mt-[40px]">Contact Us</h3>

        <div className="flex flex-wrap gap-[13px] mt-[10px]">
          <h3 className="font-semi-bold text-[#66768F] ">Recruitment Consultant :</h3>
          <h3 className="font-semi-bold text-[#66768F] ">Gaya</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-[#66768F] ">Contact Number:</h3>
          <h3 className="font-semi-bold text-[#66768F] ">0452 468 515</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-[#66768F] ">Email:</h3>
          <h3 className="font-semi-bold text-[#66768F] ">gprecruitment@medfuture.com.au</h3>
        </div>
        <div className="flex flex-wrap gap-[13px]">
          <h3 className="font-semi-bold text-[#66768F] ">General Enquire:</h3>
          <h3 className="font-semi-bold text-[#66768F] ">0452 468 515</h3>
        </div>
      </div>


      {showRegistrationForm && (
        <div ref={formRef} className=''>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
      <div ref={formRef}></div>
    </div >
  );
}