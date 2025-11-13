// components/JobDescription.tsx
import RegistrationForm from '@/components/Forms/QuickApply';


export default function JobDescription() {
  return (
    <div className="mt-4">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 shadow-[0_6px_6px_rgba(0,0,0,0.05)] p-4 sm:p-6 rounded-lg bg-white">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 text-center sm:text-left">
        Int  GP Registrar – Aged Care | AUD 160 per hour | DPA MMM6 | Condobolin
        </h1>
        <button className="bg-[#64CAF3] text-white px-6 py-3 rounded-lg hover:bg-[#64CAF3] transition-colors font-medium whitespace-nowrap w-full sm:w-auto">
          Apply Now
        </button>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-3 mt-5 mb-4 p-3">
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          
          Permanent
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          
          Medical Practitioner
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
        
          AUD 160/Hour
        </span>
        <span className="text-[#0E2851] text-sm sm:text-[18px] px-3 py-1 rounded flex items-center gap-2 bg-gray-50">
          
          Full Time Or Part Time
        </span>
      </div>

      {/* Job Description */}
      <div className="prose max-w-none p-4 sm:p-6">
        <div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            We are seeking a committed GP Registrar to work in Condobolin, NSW. In this role, you will provide comprehensive aged care services to the local community. Enjoy appealing benefits, including competitive pay, support with travel and accommodation, and opportunities for career development. Apply today to work in a welcoming and fulfilling environment.
          </p>
          <h4 className=" text-gray-900 mb-2 text-base sm:text-lg">Offer Details:</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4 text-sm sm:text-base">
            <li>Permanent position</li>
            <li>Full-time or part-time engagement</li>
            <li>80% of billings or AUD 200 per hour for the first 3 months</li>
            <li>Sign-on bonus potential</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-gray-900 mb-3 text-base sm:text-lg">Medical Practice Details</h3>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            Located in New South Wales, this facility offers a wide range of healthcare services to support the local community. Services include GP care for aged care residents, drug and alcohol programs, pre-employment and diving medicals, along with specialised health assessments for aviation, asbestos exposure, and the mining industry. Condobolin has amenities such as parks, recreational areas, and a variety of dining and shopping options, making it a great place to live and work.
          </p>
          <h4 className=" text-gray-900 mb-2 text-base sm:text-lg">Eligibility Requirements</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm sm:text-base">
            <li>Should hold General registration with AHPRA</li>
            <li>GP Registrar or Non VR GP with General Registration</li>
            <li>Unlimited working rights in Australia</li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      {/* Contact Information */}
      <div className="grid lg:grid-cols-2">
        <div><RegistrationForm /></div>
        <div className="mb-3 p-4 sm:p-6 gap-4 mt-24">
          <h3 className="text-black text-[18px] mb-6">Contact Us</h3>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Recruitment Consultant:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">Gaya</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Contact Number:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">0452 468 515</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-4">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">Email:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base break-all">gprecruitment@medfuture.com.au</h3>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1 mb-0">
            <span className="flex-shrink-0">
            </span>
            <div className="flex flex-wrap items-center gap-1">
              <h3 className=" text-gray-900 text-sm sm:text-base">General Enquire:</h3>
              <h3 className=" text-gray-900 text-sm sm:text-base">0452 468 515</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}