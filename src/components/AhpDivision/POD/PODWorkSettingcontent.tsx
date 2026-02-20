import React from 'react';

interface JobCategory {
  title: string;
  items: string[];
}

const jobCategories: JobCategory[] = [
  {
    title: 'Private Practice',
    items: [
      'MSK & biomechanics',
      'Sports podiatry',
      'Orthotic prescription',
      'Mixed general & specialist caseloads',
    ],
  },
  {
    title: 'Community & Public Health',
    items: [
      'High Risk Foot (HRF)',
      'Diabetes & wound management',
      'NDIS & outreach services',
      'Multidisciplinary team environments',
    ],
  },
  {
    title: 'Aged Care & Community Outreach',
    items: [
      'Residential & home-visit models',
      'Preventative foot care',
      'Chronic disease focus',
      'Lower KPI pressure, higher clinical continuity',
    ],
  },
  {
    title: 'Regional & Rural Australia',
    items: [
      'Incentivised salary packages',
      'Relocation assistance',
      'Housing & travel support',
      'Broad scope, high-impact clinical work',
    ],
  },
  {
    title: 'Senior, Lead & Specialist Roles',
    items: [
      'Clinical lead podiatrist',
      'Team supervision & mentoring',
      'Service development roles',
      'Reduced volume, higher complexity caseloads',
    ],
  },
];

export default function PodiatristJobsSection() {
  return (
    <section className="bg-[#C0C0C017] full-width-section py-12 px-4 sm:px-6 lg:px-8 mt-[148px]">
      <div className="inner-width-section mx-auto"><div className=" px-0 lg:px-0 md:px-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-[#074CA4] text-[14px] font-medium tracking-wide uppercase mb-3">
            Professional Roles
          </p>
          <h2 className="text-xl lg:text-[30px] font-bold text-[#0F172A] mb-6">
            Podiatrist Jobs Across Australia – All Practice Settings
          </h2>
          <p className="text-[#4A5565] lg:text-[16px] text-xs">
            We recruit for verified podiatrist roles across:
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.slice(0, 3).map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-[8px]  border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
            <h3 className="lg:text-[16px] text-md font-semibold text-[#0A2E5C] mb-4">
                {category.title}
              </h3>
              <ul className="space-y-1">
                {category.items.map((item, index) => (
                  <li
                    key={`${category.title}-${index}`}
                    className="flex items-start text-[#171717B2] text-[14px]"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {jobCategories.slice(3).map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-[8px]  shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
            >
            <h3 className="lg:text-[16px] text-md font-semibold text-[#0A2E5C] mb-4">
                {category.title}
              </h3>
              <ul className="space-y-1 text-xs">
                {category.items.map((item, index) => (
                  <li
                    key={`${category.title}-${index}`}
                    className="flex items-start text-[#171717B2] text-[14px]"
                  >
                    <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>     </div>
    </section>
  );
}