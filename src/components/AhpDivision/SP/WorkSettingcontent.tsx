import Image from "next/image";
import Careerstage from "@/assets/ahp/careerstage.png";
import Worksettings from "@/assets/ahp/worksettings.png";

const WorkSettingContent: React.FC = () => {
  return (
    <div className="full-width-section bg-[#E2E8F02E] mt-[72px] sm:mt-[96px] lg:mt-[146px]">
      <div className="py-[40px] sm:py-[52px] inner-width-section"><div className=" px-0 lg:px-0 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-3 xs:mb-4">
          <a
            href="#"
            className="text-[11px] xs:text-xs sm:text-[13px] lg:text-[14px] font-semibold text-[#074CA4] hover:text-blue-700 transition-colors"
          >
            Opportunities Overview
          </a>
        </div>

        {/* Title */}
        <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-[22px]">
          <h2 className="text-lg md:text-[26px] lg:text-[30px] font-bold text-slate-900 mb-2 xs:mb-3 sm:mb-4 leading-tight">
            Speech Therapist Jobs We Recruit For (Australia-Wide)
          </h2>
          <p className="text-[11px] xs:text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#4A5565] max-w-2xl leading-relaxed">
            We recruit permanent, part-time, contract and telehealth Speech
            Pathology roles across all states and territories.
          </p>
        </div>
      </div>

      {/* Content Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-[40px] md:pb-[56px] inner-width-section">
        {/* Column 1 */}
        <div className="rounded-xl bg-white/60 p-4 lg:p-6">
          <h2 className="flex items-center gap-3 text-sm sm:text-base lg:text-[18px] text-[#074CA4] font-bold mb-3 sm:mb-4">
            <Image
              src={Worksettings}
              alt="Work Settings"
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px]"
            />
            Work Settings
          </h2>
          <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 text-[#0F172A] text-xs sm:text-sm lg:text-[16px] leading-relaxed">
            <li>Private Practice (NDIS & mixed funding)</li>
            <li>Community & Disability Services</li>
            <li>Schools & Education Providers</li>
            <li>Hospitals & Health Services</li>
            <li>Telehealth & Hybrid Models</li>
            <li>Rural & Regional Services (with relocation support)</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="rounded-xl bg-white/60 p-4 lg:p-6">
          <h2 className="flex items-center gap-3 text-sm sm:text-base lg:text-[18px] text-[#074CA4] font-bold mb-3 sm:mb-4">
            <Image
              src={Careerstage}
              alt="Career Stages"
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] lg:w-[54px] lg:h-[54px]"
            />
            Career Stages
          </h2>
          <ul className="list-disc list-inside space-y-2 sm:space-y-2.5 text-[#0F172A] text-xs sm:text-sm lg:text-[16px] leading-relaxed">
            <li>New Graduate Speech Pathologists</li>
            <li>Early-Career Clinicians (1–3 years)</li>
            <li>Senior Speech Pathologists</li>
            <li>Specialist & Advanced Clinicians</li>
            <li>Clinical Leads & Managers</li>
          </ul>
        </div>
      </section>
    </div>  </div>
  );
};

export default WorkSettingContent;
