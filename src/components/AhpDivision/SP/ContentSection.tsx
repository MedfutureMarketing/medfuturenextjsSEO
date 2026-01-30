import Image from "next/image";
import Spimage from "@/assets/ahp/spimage.png"

const ContentSection = () => {
    return (
        <div className="full-width-section bg-[#C0C0C017] my-[110px] ">
        <div className="grid grid-cols-2 gap-16 p-8 inner-width-section py-[49px]">
            {/* Left Side - Text Content */}
            <div className="col-span-1">
                <h1 className="lg:text-[24px]  text-xl font-bold text-[#000000] mb-4">Caseload-Transparent • Supervision-First • Career-Focused Speech Pathology Roles</h1>
                <p className="text-[16px] text-[#4A5565]">
                    If you’re a Speech Pathologist / Speech Therapist in Australia and thinking about your next role, this page is built for how you actually work—your caseloads, your reports, your supervision needs, your KPIs, and your long-term career wellbeing.                </p>

                <p className="text-[16px] text-[#4A5565] mt-5">
                    Medfuture works exclusively with ethical employers across NDIS, private practice, schools, health services, community and telehealth, and we match Speech Therapists to roles based on clinical fit and workload reality, not recruiter pressure.      </p>

            </div>



            {/* Right Side - Image */}
            <div className="col-span-1 flex justify-end">
                <Image
                    src={Spimage}
                    alt="Descriptive Alt Text"
                    className="w-[486px] h-auto object-cover"
                />
            </div>
        </div>
        </div>
    );
};

export default ContentSection;