/* eslint-disable react/no-unescaped-entities */


export default function PsychologyCareersComponent() {
  const practiceSettings = [
    'Private Practice (solo, group, multidisciplinary)',
    'Community Mental Health',
    'Public & Private Hospitals',
    'Child & Adolescent Services',
    'NDIS & Disability Services',
    'Schools & Educational Settings',
    'Forensic & Correctional Services',
    'EAP & Workplace Mental Health',
    'Telehealth & Hybrid Models',
  ];

  const professionalInterests = [
    'Trauma & PTSD',
    'Child, Adolescent & Family Therapy',
    'Autism & Neurodiversity',
    'Complex Mental Health',
    'Psychometric & Cognitive Assessments',
    'Behaviour Support & NDIS',
    'Forensic Assessments',
    'Anxiety, Mood & Personality Disorders',
    'Workplace & Organisational Mental Health',
  ];

  return (
    <section className="relative full-width-section overflow-hidden mt-16 lg:mt-[148px] bg-[#0A2E5C] lg:bg-transparent">
      
      {/* Desktop split background only */}
      <div className="absolute inset-0 hidden lg:flex " >
        <div className="w-1/2 bg-[#0A2E5C]" />
        <div className="w-1/2 bg-[#040D48]/20" />
      </div>

      <div className="relative inner-width-section mx-auto px-5 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

          {/* LEFT COLUMN */}
          <div className="text-white">
            <h1 className="text-lg sm:text-xl lg:text-[30px] font-semibold mb-4 lg:mb-6">
              Psychology Careers We Recruit Across Australia
            </h1>

            <p className="text-blue-100 text-sm lg:text-[16px] mb-6">
              Medfuture recruits across all major psychology practice settings,
              with roles available in metropolitan, regional, and remote Australia.
            </p>

            <h2 className="text-sm lg:text-[18px] font-bold mb-4">
              Practice & Service Settings
            </h2>

            <ul className="space-y-2 mb-6">
              {practiceSettings.map((setting, index) => (
                <li key={index} className="flex items-start text-blue-50 text-sm">
                  <span className="mr-3 text-blue-300">•</span>
                  <span>{setting}</span>
                </li>
              ))}
            </ul>

            <p className="text-blue-100 text-sm lg:text-[16px]">
              We match psychologists by professional fit, not just availability.
            </p>
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-white lg:bg-transparent rounded-xl lg:rounded-none p-6 lg:p-0">
            <h1 className="text-lg sm:text-xl lg:text-[30px] font-bold mb-4 text-[#0A2E5C]">
              Match Roles to Your Professional Interests
            </h1>

            <p className="text-[#0F172A] text-sm lg:text-[16px] mb-3">
              Psychology is not a single career path.
            </p>

            <p className="text-[#0F172A] text-sm lg:text-[16px] mb-5">
              Your clinical interests and population preferences matter.
              We regularly recruit psychologists with experience or interest in:
            </p>

            <ul className="space-y-2 mb-6">
              {professionalInterests.map((interest, index) => (
                <li key={index} className="flex items-start text-gray-800 text-sm">
                  <span className="mr-3 text-blue-900">•</span>
                  <span>{interest}</span>
                </li>
              ))}
            </ul>

            <p className="text-[#0F172A] text-sm lg:text-[16px]">
              You will only be approached with roles that align with your scope,
              values, and interests.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
