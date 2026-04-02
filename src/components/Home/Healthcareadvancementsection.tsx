'use client';

import CTA from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";
export default function HealthcareAdvancementSection() {
  return (
    <section className="bg-white   ">
      <div className="container mx-auto py-[174px] px-4 md:px-0">
        {/* Top Section: Explore Healthcare Opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-[170px]">
          {/* Left Content */}
          <div>
            <h2 className="text-xs lg:text-[14px] font-semibold text-[#074CA4] mb-2">Browse Jobs</h2>
            <h1 className="text-xl md:text-[30px] font-bold text-gray-900 mb-4">
              Explore healthcare opportunities
            </h1>
            <p className="text-[#4A5565] text-base lg:text-[16px] leading-relaxed">
              Browse healthcare roles tailored to your employment preferences, career goals, and lifestyles, with flexible options across permanent, locum, and international pathways.
            </p>
          </div>

          {/* Right Content: Job Cards */}
          <div className="space-y-4">
            {/* Permanent Jobs Card */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition-colors cursor-pointer">
              <div>
                <h3 className="font-bold text-lg#0A2E5C mb-1">Permanent Jobs</h3>
                <p className="text-blue-100 text-sm">
                  Long-term healthcare careers with trusted employers across Australia.
                </p>
              </div>
              <button className="bg-white text-blue-900 rounded-full p-2 flex-shrink-0 hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Locum Jobs Card */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition-colors cursor-pointer">
              <div>
                <h3 className="font-bold text-lg mb-1">Locum Jobs</h3>
                <p className="text-blue-100 text-sm">
                  Flexible, dynamic, short-term and ongoing locum opportunities with Healthcare.
                </p>
              </div>
              <button className="bg-white text-blue-900 rounded-full p-2 flex-shrink-0 hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* International Opportunities Card */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition-colors cursor-pointer">
              <div>
                <h3 className="font-bold text-lg mb-1">International Opportunities</h3>
                <p className="text-blue-100 text-sm">
                  Registration, relocation, and visa support for overseas clinicians.
                </p>
              </div>
              <button className="bg-white text-blue-900 rounded-full p-2 flex-shrink-0 hover:bg-blue-50 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Advance Your Healthcare Career */}
        <div className="bg-[#FCFCFC] full-width-section rounded-lg p-8 md:p-12">
            <div className="inner-width-section">
          <h2 className="text-xl md:text-[36px] mb-[60px] font-bold text-centleft text-[#074CA4] mb-12">
            Advance Your Healthcare Career with Medfuture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Side: Features */}
            <div className="space-y-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] mb-2">Search with Confidence</h3>
                  <p className="text-[#0F172A] text-sm lg:text-[16px]">
                    Access a wide range of verified opportunities across Australia
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Guided Recruitment Support</h3>
                  <p className="text-gray-600 text-sm">
                    Work with consultants who understand your profession and career pathway
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Effortless Placement Process</h3>
                  <p className="text-gray-600 text-sm">
                    Many through the recruitment process with transparency and efficiency
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Long-Term Career Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Secure roles that align with your professional and personal goals
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Form */}
            <div className="bg-white rounded-lg p-8 border border-[#074CA4]">
              <CTA />
            </div>
          </div>
        </div></div>
      </div>
    </section>
  );
}