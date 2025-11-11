// components/JobDescription.tsx
"use client"
import { useState, useRef } from 'react';
import RegistrationForm from '@/components/Forms/QuickApply';

export default function JobDescription() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyNow = () => {
    const wasClosed = !showRegistrationForm;
    setShowRegistrationForm(!showRegistrationForm);
    
    // If opening the form, scroll down after a brief delay
    if (wasClosed) {
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100); // Small delay to ensure form is rendered
    }
  };

  return (
    <div className="hidden lg:block">
      {/* Header - No longer sticky */}
      <div className="flex justify-between items-start mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-6 rounded-none bg-white">
        <h1 className="text-2xl font-bold text-gray-900 pr-4 flex-1">
          GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>
        <button 
          onClick={handleApplyNow}
          className="bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-[#55b8e0] transition-colors font-medium whitespace-nowrap ml-4 flex-shrink-0"
        >
          {showRegistrationForm ? 'Close Form' : 'Apply Now'}
        </button>
      </div>

      {/* Content */}
      <div className="flex items-center gap-4 mt-5 mb-[16px] p-3">
        <span className="text-[#0E2851] text-[18px] px-3 py-0 rounded flex flex-wrap gap-2">
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

      <div className="prose max-w-none p-6">
        <div>
          <p className="text-gray-700 mb-4">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Offer Details:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Medical Practice Details</h3>
          <p className="text-gray-700 mb-4">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className="font-semibold text-gray-900 mb-2">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>

      {/* Contact Information Section */}
      <div ref={formRef} className="grid grid-cols-1 md:grid-cols-1 gap-[7px] mb-6 p-6">
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

      {/* Registration Form Component */}
      {showRegistrationForm && (
        <div>
          <RegistrationForm onClose={() => setShowRegistrationForm(false)} />
        </div>
      )}
    </div>
  );
}