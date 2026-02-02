import Image from "next/image";
import Spimage from "@/assets/ahp/Phy.png"

const ContentSection = () => {
    return (
        <div className="full-width-section bg-[#C0C0C017] my-[110px] ">
            <div className="grid lg:grid-cols-2 gap-1 p-0 inner-width-section py-[49px]">
                {/* Left Side - Text Content */}
                <div className="col-span-1 text-left">
                    <h2 className="lg:text-[24px]  text-lg font-bold text-[#000000] mb-4">Physiotherapist Jobs in Australia – Transparent Roles, Safe KPIs & Career Progression</h2>
                    <p className="lg:text-[16px] text-xs text-[#4A5565]">
                        If you are an AHPRA-registered Physiotherapist, you already know this truth:
                        Most physio jobs look good on paper — until you start and realise the caseload, KPIs, or mentoring are nothing like what was promised.
                    </p>

                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        This page is designed to be the single reference point Physiotherapists return to every time they consider a new role — whether you are a new graduate, experienced MSK physio, sports specialist, NDIS clinician, or senior/lead physiotherapist.
                    </p>
                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        At Medfuture Healthcare Recruitment, we don’t “push jobs”.
                        We decode clinics, KPIs, caseloads, and career pathways so you can move forward with confidence — again and again
                    </p>
                </div>
                {/* Right Side - Image */}
                <div className="col-span-1 flex justify-end">
                    <Image
                        src={Spimage}
                        alt="Descriptive Alt Text"
                        className="w-[486px] h-auto object-cover"
                        priority={false}
                        loading="lazy"
                    />
                </div>

            </div>
        </div>
    );
};

export default ContentSection;