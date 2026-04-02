'use client';

import CTA from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";

export default function HealthcareAdvancementSection() {
  return (
    <section className="bg-white lg:mt-[159px] mt-24">
      <div className="inner-width-section ">

        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
          
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-[#1F5AA6] mb-2">
              Browse Jobs
            </p>

            <h2 className="text-2xl md:text-[30px] font-bold text-gray-900 mb-4 leading-snug">
              Explore healthcare opportunities
            </h2>

            <p className="text-[#4A5565] text-[15px] leading-relaxed">
              Browse healthcare roles tailored to your employment preferences,
              career goals, and lifestyles, with flexible options across
              permanent, locum, and international pathways.
            </p>
          </div>

          {/* Right Cards */}
          <div className="space-y-4">
            
            {/* Card 1 */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition cursor-pointer">
              <div>
                <h3 className="font-bold text-lg mb-1">Permanent Jobs</h3>
                <p className="text-sm text-blue-100">
                  Long-term healthcare careers with trusted employers across Australia.
                </p>
              </div>
              <div className="bg-white text-[#0A2E5C] rounded-full p-0">
                
<svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="51" height="53" rx="8" fill="white"/>
<path d="M27.7954 20.3703C27.6652 20.249 27.5608 20.1027 27.4884 19.9402C27.416 19.7777 27.3771 19.6023 27.3739 19.4244C27.3708 19.2465 27.4035 19.0698 27.4701 18.9048C27.5368 18.7399 27.636 18.59 27.7618 18.4642C27.8876 18.3384 28.0374 18.2392 28.2024 18.1726C28.3673 18.106 28.544 18.0732 28.7219 18.0764C28.8998 18.0795 29.0753 18.1185 29.2378 18.1909C29.4003 18.2633 29.5465 18.3677 29.6678 18.4978L36.7336 25.5637C36.9817 25.8121 37.1211 26.1488 37.1211 26.4999C37.1211 26.851 36.9817 27.1877 36.7336 27.4361L29.6678 34.5019C29.5465 34.6321 29.4003 34.7365 29.2378 34.8089C29.0753 34.8813 28.8998 34.9202 28.7219 34.9234C28.544 34.9265 28.3673 34.8938 28.2024 34.8271C28.0374 34.7605 27.8876 34.6613 27.7618 34.5355C27.636 34.4097 27.5368 34.2599 27.4701 34.0949C27.4035 33.9299 27.3708 33.7532 27.3739 33.5754C27.3771 33.3975 27.416 33.222 27.4884 33.0595C27.5608 32.897 27.6652 32.7508 27.7954 32.6295L32.6001 27.8247H15.4832C15.1318 27.8247 14.7949 27.6851 14.5464 27.4367C14.298 27.1882 14.1584 26.8512 14.1584 26.4999C14.1584 26.1485 14.298 25.8115 14.5464 25.5631C14.7949 25.3146 15.1318 25.175 15.4832 25.175H32.6001L27.7954 20.3703Z" fill="#0F172A"/>
</svg>

              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition cursor-pointer">
              <div>
                <h3 className="font-bold text-lg mb-1">Locum Jobs</h3>
                <p className="text-sm text-blue-100">
                  Flexible, dynamic, short-term and ongoing locum opportunities.
                </p>
              </div>
              <div className="bg-white text-[#0A2E5C] rounded-full p-0">
                
<svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="51" height="53" rx="8" fill="white"/>
<path d="M27.7954 20.3703C27.6652 20.249 27.5608 20.1027 27.4884 19.9402C27.416 19.7777 27.3771 19.6023 27.3739 19.4244C27.3708 19.2465 27.4035 19.0698 27.4701 18.9048C27.5368 18.7399 27.636 18.59 27.7618 18.4642C27.8876 18.3384 28.0374 18.2392 28.2024 18.1726C28.3673 18.106 28.544 18.0732 28.7219 18.0764C28.8998 18.0795 29.0753 18.1185 29.2378 18.1909C29.4003 18.2633 29.5465 18.3677 29.6678 18.4978L36.7336 25.5637C36.9817 25.8121 37.1211 26.1488 37.1211 26.4999C37.1211 26.851 36.9817 27.1877 36.7336 27.4361L29.6678 34.5019C29.5465 34.6321 29.4003 34.7365 29.2378 34.8089C29.0753 34.8813 28.8998 34.9202 28.7219 34.9234C28.544 34.9265 28.3673 34.8938 28.2024 34.8271C28.0374 34.7605 27.8876 34.6613 27.7618 34.5355C27.636 34.4097 27.5368 34.2599 27.4701 34.0949C27.4035 33.9299 27.3708 33.7532 27.3739 33.5754C27.3771 33.3975 27.416 33.222 27.4884 33.0595C27.5608 32.897 27.6652 32.7508 27.7954 32.6295L32.6001 27.8247H15.4832C15.1318 27.8247 14.7949 27.6851 14.5464 27.4367C14.298 27.1882 14.1584 26.8512 14.1584 26.4999C14.1584 26.1485 14.298 25.8115 14.5464 25.5631C14.7949 25.3146 15.1318 25.175 15.4832 25.175H32.6001L27.7954 20.3703Z" fill="#0F172A"/>
</svg>

              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0A2E5C] text-white p-6 rounded-lg flex items-center justify-between hover:bg-blue-800 transition cursor-pointer">
              <div>
                <h3 className="font-bold text-lg mb-1">International Opportunities</h3>
                <p className="text-sm text-blue-100">
                  Registration, relocation, and visa support for overseas clinicians.
                </p>
              </div>
              <div className="bg-white text-[#0A2E5C] rounded-full p-0">
                
<svg width="51" height="53" viewBox="0 0 51 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="51" height="53" rx="8" fill="white"/>
<path d="M27.7954 20.3703C27.6652 20.249 27.5608 20.1027 27.4884 19.9402C27.416 19.7777 27.3771 19.6023 27.3739 19.4244C27.3708 19.2465 27.4035 19.0698 27.4701 18.9048C27.5368 18.7399 27.636 18.59 27.7618 18.4642C27.8876 18.3384 28.0374 18.2392 28.2024 18.1726C28.3673 18.106 28.544 18.0732 28.7219 18.0764C28.8998 18.0795 29.0753 18.1185 29.2378 18.1909C29.4003 18.2633 29.5465 18.3677 29.6678 18.4978L36.7336 25.5637C36.9817 25.8121 37.1211 26.1488 37.1211 26.4999C37.1211 26.851 36.9817 27.1877 36.7336 27.4361L29.6678 34.5019C29.5465 34.6321 29.4003 34.7365 29.2378 34.8089C29.0753 34.8813 28.8998 34.9202 28.7219 34.9234C28.544 34.9265 28.3673 34.8938 28.2024 34.8271C28.0374 34.7605 27.8876 34.6613 27.7618 34.5355C27.636 34.4097 27.5368 34.2599 27.4701 34.0949C27.4035 33.9299 27.3708 33.7532 27.3739 33.5754C27.3771 33.3975 27.416 33.222 27.4884 33.0595C27.5608 32.897 27.6652 32.7508 27.7954 32.6295L32.6001 27.8247H15.4832C15.1318 27.8247 14.7949 27.6851 14.5464 27.4367C14.298 27.1882 14.1584 26.8512 14.1584 26.4999C14.1584 26.1485 14.298 25.8115 14.5464 25.5631C14.7949 25.3146 15.1318 25.175 15.4832 25.175H32.6001L27.7954 20.3703Z" fill="#0F172A"/>
</svg>

              </div>
            </div>

          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="bg-[#F9FAFB] full-width-section rounded-lg px-6 md:px-12 py-12">
          <div className=" inner-width-section">
          <h2 className="text-2xl md:text-[34px] font-bold text-[#1F5AA6] mb-12">
            Advance Your Healthcare Career with Medfuture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT - TIMELINE */}
            <div className="relative">

              {/* Vertical dotted line */}
              <div className="absolute left-4 top-2 bottom-2 border-l-2 border-dashed border-gray-300"></div>

              <div className="lg:space-y-18 space-y-6">

                {/* Step 1 */}
                <div className="flex gap-6 relative">
                  <div className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-sm font-semibold z-10">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] text-md lg-text-xl mb-1">
                      Search with Confidence
                    </h3>
                    <p className="text-xs lg:text-sm text-[#4A5565]">
                      Access a wide range of verified opportunities across Australia
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 relative">
                  <div className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-sm font-semibold z-10">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">
                      Guided Recruitment Support
                    </h3>
                    <p className="text-xs lg:text-sm text-[#4A5565]">
                      Work with consultants who understand your profession and career pathway
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6 relative">
                  <div className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-sm font-semibold z-10">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">
                      Efficient Placement Process
                    </h3>
                    <p className="text-xs lg:text-sm text-[#4A5565]">
                      Move through the recruitment process with clarity and speed
                    </p>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex gap-6 relative">
                  <div className="w-8 h-8 bg-[#0F172A] text-white rounded-full flex items-center justify-center text-sm font-semibold z-10">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-1">
                      Long-Term Career Focus
                    </h3>
                    <p className="text-xs lg:text-sm text-[#4A5565]">
                      Secure roles that align with your professional and personal goals
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="bg-white border border-[#1F5AA6] rounded-lg p-6 md:p-8 shadow-sm">
              <CTA />
            </div>

          </div>
        </div></div>
      {/* here */}

      </div>
    </section>
  );
}