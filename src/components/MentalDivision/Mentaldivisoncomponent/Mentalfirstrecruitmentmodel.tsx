export default function ClinicianFirstRecruitmentModel() {
  const models = [
    {
      number: '01',
      title: 'Clinical fit over speed',
      description:
        'Right role, right setting, right employer—aligned with your practice style.',
    },
    {
      number: '02',
      title: 'Ethical employer screening',
      description:
        'Caseload expectations, KPI realism, supervision quality, and admin load.',
    },
    {
      number: '03',
      title: 'Compliance & credential integrity',
      description:
        'Clear scope, appropriate checks, privacy-aware handling, fit-for-setting recruitment.',
    },
    {
      number: '04',
      title: 'Retention & career longevity',
      description:
        'We support your transition, onboarding, and early success—beyond Day 1.',
    },
  ];

  return (
    <section className="py-12 md:py-10 lg:mb-[140px] bg-white">
      <div className="inner-width-section mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-xl md:text-[30px] font-bold text-[#0F172A] mb-12">
          Our Clinician-First Recruitment Model
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {models.map((model) => (
            <div key={model.number} className="flex gap-6">
              {/* Number */}
              <div className="flex-shrink-0">
                <span className="text-5xl md:text-[6xl] font-bold text-[#575D84]">
                  {model.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg md:text-[16px] font-semibold text-[#074CA4] mb-2">
                  {model.title}
                </h3>
                <p className="text-[#4A5565] text-base leading-relaxed">
                  {model.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}