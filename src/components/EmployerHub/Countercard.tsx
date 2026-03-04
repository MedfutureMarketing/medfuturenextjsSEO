"use client";

const stats = [
  { value: "4000+", label: "GP Clinics" },
  { value: "2956+", label: "AHP Services" },
  { value: "1568+", label: "Mental Health Services" },
  { value: "231+", label: "Oral Health Services" },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#575D84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: "Continuity-first",
    description: "Hiring designed to reduce churn and protect patient access.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#575D84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Governance-aware",
    description: "Screening aligned to compliance and supervision realities.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#575D84" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    title: "Division specialists",
    description: "Dedicated pipelines per discipline — not one-size-fits-all.",
  },
];

export default function WhyMedfutureSection() {
  return (
    <section className="full-width-section bg-[#f4f5f7] font-sans py-14 px-4 sm:px-8 lg:px-[68px] mt-[121px]">
      <div className="inner-width-section mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

        {/* Left Column */}
        <div className="flex-1 min-w-0">
          {/* Label */}
          <p className="lg:text-[14px] text-xs font-semibold text-[#074CA4] mb-3 tracking-wide">
            Why Medfuture
          </p>

          {/* Heading */}
          <h2 className="text-xl lg:text-[30px] font-[600] text-[#0F172A] leading-tight mb-5 max-w-sm">
            Why healthcare employers choose Medfuture
          </h2>

          {/* Body */}
          <p className="lg:text-[16px] text-xs text-[#4A5565] leading-relaxed mb-10 max-w-[480px]">
            Most recruiters focus on roles. We focus on continuity, compliance,
            and outcomes  across disciplines.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-x-16 gap-y-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="lg:text-[36px] text-xl font-[600] text-slate-900 leading-none mb-1">
                  {stat.value}
                </p>
                <p className="lg:text-[16px] text-xs text-[#040D48] font-[400]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col gap-7">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              {/* Icon */}
              <div className="mt-0.5 text-slate-400 shrink-0">
                {feature.icon}
              </div>
              {/* Text */}
              <div>
                <p className="lg:text-[16px] text-xs font-[500] text-[#0F172A] mb-1">
                  {feature.title}
                </p>
                <p className="lg:text-[16px] text-xs text-[#4A5565] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}