"use client";

const testimonials = [
  {
    id: 1,
    title: '"Credential-complete shortlist."',
    quote: '"Less back-and-forth. Candidates aligned to roster and model of care."',
    author: "Operations Manager • Primary Care Group",
  },
  {
    id: 2,
    title: '"Audit-ready process."',
    quote: '"Governance confidence for urgent coverage. Clear escalation and reporting."',
    author: "Director • Aged Care Provider",
  },
  {
    id: 3,
    title: '"A workforce partner."',
    quote: '"The retained model made hiring predictable across multiple sites."',
    author: "CEO • Allied Health / NDIS",
  },
];

export default function EmployerTestimonialsSection() {
  return (
    <section className="full-width-section bg-[#F8FAFC] font-sans py-14 px-4 sm:px-8 lg:px-16 lg:mt-[140px]">
      <div className="inner-width-section mx-auto">

        {/* Header */}
        <p className="text-[14px] font-[500] text-[#074CA4] mb-2.5">
          Employer Testimonials
        </p>
        <h2 className="text-xl lg:text-[30px] font-[600] text-slate-900 mb-3">
          What employers value: speed with governance
        </h2>
        <p className="lg:text-[16px]  text-xs text-[#4A5565] mb-9">
          Replace placeholders with verified testimonials when approved.
        </p>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-xl px-6 py-6 flex flex-col gap-3"
            >
              {/* Title */}
              <p className="lg:text-[14px] text-xs font-[600] text-[#0F172A] leading-snug">
                {t.title}
              </p>

              {/* Quote */}
              <p className="lg:text-[14px] text-xs text-[#4A5565] leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Author */}
              <p className="lg:text-[12px] text-xs text-[#575D84] font-medium mt-1">
                {t.author}
              </p>
            </div>
          ))}
        </div>

        {/* Reference Pack Banner */}
        <div className="bg-white border border-slate-200 rounded-xl px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="lg:text-[14px] text-xs font-[600] text-[#0F172A] leading-snug">
              Need a reference-ready pack?
            </p>
            <p className="text-[13px] text-slate-500">
              We can provide a governance-aligned reference approach (subject to approvals and privacy obligations).
            </p>
          </div>
          <button className="shrink-0 px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-[13.5px] rounded-md transition-colors duration-200 whitespace-nowrap">
            Request Reference Pack
          </button>
        </div>

      </div>
    </section>
  );
}