import React from "react";

type Feature = {
  title: string;
  description: string;
};

const featuresLeft: Feature[] = [
  { title: "Nationwide roles: metro,", description: "regional & remote" },
  { title: "Visa & relocation friendly", description: "clinics (where eligible)" },
];

const featuresRight: Feature[] = [
  { title: "AHPRA-registered &", description: "RACGP/RRMA-aware employers" },
  { title: "Referral rewards for", description: "successful placements" },
];

export default function Hero() {
  return (
    <section className="bg-[#040D48] text-white py-10 lg:py-[26px] full-width-section">
      <div className="inner-width-section mx-auto px-6 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="space-y-6 lg:space-y-[31px]">
          {/* Main Title */}
          <h1 className="text-2xl lg:text-[36px] font-bold leading-tight">
            FRACGP & FACRRM Jobs in Australia – Build Your Career with Medfuture
          </h1>

          {/* Paragraph */}
          <p className="text-[14px] lg:text-[16px] text-white/70 max-w-full lg:max-w-2xl">
            Australia continues to experience strong demand for qualified General Practitioners across metropolitan, regional, and remote communities. Whether you are FRACGP or FACRRM, your skills are vital to primary care access.
          </p>

          {/* Features Two-column Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 border-l-0 border-r-0 border-dashed border-white/30">
            {/* Left Features */}
            <div className="space-y-4 sm:space-y-6 sm:pr-6 sm:border-r sm:border-dashed sm:border-white/30">
              {featuresLeft.map((feature, idx) => (
                <div key={idx}>
                  <h3 className="font-[400] lg:text-[16px] text-xs">
                    {feature.title} <br /> {feature.description}
                  </h3>
                </div>
              ))}
            </div>

            {/* Right Features */}
            <div className="space-y-4 sm:space-y-6 sm:pl-6">
              {featuresRight.map((feature, idx) => (
                <div key={idx}>
                  <h3 className="font-[400] lg:text-[16px] text-xs">
                    {feature.title} <br /> {feature.description}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-1  gap-4 lg:gap-[17px] mt-6 lg:mt-0">
          <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
            <span className="lg:text-[30px] text-md font-bold">2000+</span>
            <span className="text-white/80 lg:text-[14px] text-xs">Active GP Jobs</span>
          </div>
          <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
            <span className="lg:text-[30px] text-md font-bold">9000+</span>
            <span className="text-white/80 lg:text-[14px] text-xs">GPs in Talent Pool</span>
          </div>
          <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
            <span className="lg:text-[30px] text-md font-bold">8</span>
            <span className="text-white/80 lg:text-[14px] text-xs">States & Territories</span>
          </div>
          <div className="bg-white/7 rounded-[8px] h-[89px] w-full lg:w-[284px] flex flex-col items-center justify-center text-center">
            <span className="lg:text-[30px] text-md font-bold">~3</span>
            <span className="text-white/80 lg:text-[14px] text-xs">Avg. Time to Offer(Weeks)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
