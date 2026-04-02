'use client';
import Link from 'next/link';

export default function ReadyToMove() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24 mb-36">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <p className="text-[#074CA4] text-xs lg:text-[14px] font-semibold mb-3 tracking-wide">
              Lets Get You Started
            </p>
            <h2 className="text-xl md:text-[30px] font-bold text-[#0F172A] mb-6 leading-tight">
              Ready to move with Medfuture
            </h2>
            <p className="text-[#4A5565] text-xs lg:text-[16px] leading-relaxed mb-8">
              Whether you are exploring new opportunities or building your team,
              Medfuture provides the support needed to take the next step with
              confidence. If you&apos;re a candidate, please use &quot;Search Jobs.&quot;
              <br />
              If you&apos;re an employer, please use &quot;Submit Your Vacancy.&quot;
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/permanent">
                <button className="bg-[#074CA4] hover:bg-blue-800 lg:text-md text-xs cursor-pointer text-white font-semibold py-3 px-8 rounded transition-colors duration-200">
                  Search Jobs
                </button>
              </Link>
              <Link href="/employer-hub">
                <button className="border-2 border-[#074CA4]  hover:bg-blue-800 lg:text-md text-xs text-[#074CA4] cursor-pointer hover:bg-blue-50 font-semibold py-3 px-8 rounded transition-colors duration-200">
                  Submit a Vacancy
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center bg-[#FCFCFC]">
            <h3 className="text-lg lg:text-[20px] text-[#0F172A] font-bold text-gray-900 mb-8">
              Contact Us
            </h3>

            {/* Phone */}
            <div className="flex items-center bg-white border-2 py-2 px-2 py-2 px-2 gap-4 mb-6">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="#074CA4"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <span className="text-gray-700 font-medium text-lg">1300</span>
            </div>

            {/* Email */}
            <div className="flex items-center bg-white border-2 py-2 px-2 gap-4 mb-8">
              <div className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-700"
                  fill="none"
                  stroke="#074CA4"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-gray-700 text-lg">helpdesk@themedfuture.com</span>
            </div>

            {/* Contact Button */}
            <Link href="/contact-us">
              <button className="bg-[#1B3461] cursor-pointer hover:bg-blue-950 text-white font-semibold py-3 px-6 rounded transition-colors duration-200 w-full">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}