'use client';

interface JobCategory {
  title: string;
  items: string[];
}

const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#0A2E5C"
    strokeWidth="2.5"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const jobCategories: Record<string, JobCategory> = {
  ndis: {
    title: 'NDIS & Community Occupational Therapist Jobs',
    items: [
      'Functional Capacity Assessments (FCA)',
      'Assistive Technology (AT) prescription',
      'Home modifications',
      'ADL / IADL assessments',
      'Complex report writing and funding justification',
    ],
  },
  pediatric: {
    title: 'Paediatric Occupational Therapist Jobs',
    items: [
      'Sensory integration',
      'Developmental delay and neurodiversity',
      'School-based and clinic-based models',
      'Family-centred practice',
    ],
  },
  hospital: {
    title: 'Hospital & Health Service OT Jobs',
    items: [
      'Acute, sub-acute, and rehabilitation',
      'Discharge planning',
      'Multidisciplinary teamwork',
      'Public and private hospital settings',
    ],
  },
  mental: {
    title: 'Mental Health OT Jobs',
    items: [
      'Psychosocial rehabilitation',
      'Community mental health',
      'Inpatient and outpatient services',
    ],
  },
  senior: {
    title: 'Senior, Lead & Management OT Roles',
    items: [
      'Clinical Lead',
      'Team Leader',
      'Practice Manager',
      'Quality & Governance roles',
    ],
  },
};

export default function OccupationalTherapistJobs() {
  return (
    <section className="bg-slate-50 full-width-section px-8 py-[62px] mt-[148px]">
      <div className="inner-width-section mx-auto">
        {/* Header */}
        <div className="mb- max-w-full">
          <p className="text-[#074CA4] text-[14px] font-[500] mb-2">
            Professional Roles
          </p>
          <h1 className="text-4xl md:text-[30px] font-bold text-[#0F172A] mb-6">
            Occupational Therapist jobs across every core practice setting
          </h1>
          <p className="text-slate-600 text-base lg:w-2xl" >
          From new graduates to senior leaders—aligned to your clinical identity, supervision needs, and sustainable workload.
          </p>
        </div>

        {/* Top Row */}
        <div className="relative mb-0  mt-[76px]">
          {/* Vertical divider */}
          <div className="hidden md:block absolute inset-y-0 left-1/2 border-l border-dashed border-slate-300" />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <JobCard category={jobCategories.ndis} />
            <JobCard category={jobCategories.pediatric} />
          </div>
        </div>

        {/* Horizontal divider */}
        <div className="hidden md:block border-t border-dashed border-slate-300 mb-0" />

        {/* Bottom Row */}
        <div className="relative">
          {/* Vertical dividers */}
          <div className="hidden md:block absolute inset-y-0 left-1/3 border-l border-dashed border-slate-300" />
          <div className="hidden md:block absolute inset-y-0 left-2/3 border-l border-dashed border-slate-300" />

          <div className="grid grid-cols-1 md:grid-cols-3">
            <JobCard category={jobCategories.hospital} />
            <JobCard category={jobCategories.mental} />
            <JobCard category={jobCategories.senior} />
          </div>
        </div>
      </div>
    </section>
  );
}

function JobCard({ category }: { category: JobCategory }) {
  return (
    <div className="p-10">
      <h2 className="text-[18px] font-bold text-[#0A2E5C] mb-6">
        {category.title}
      </h2>
      <ul className="space-y-[8px] mt-[24px]">
        {category.items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-teal-600 mt-0.5">
              <CheckIcon />
            </span>
            <span className="text-[#000000] text-[14px] leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
