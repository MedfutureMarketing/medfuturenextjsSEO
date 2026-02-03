import Image from "next/image";
import Spimage from "@/assets/ahp/spimage.png"

const OTContentSection = () => {
    return (
        <div className="full-width-section bg-[#C0C0C017] my-[110px] ">
            <div className="grid lg:grid-cols-2 gap-1 p-0 inner-width-section py-[49px]">
                {/* Right Side - Image */}
                <div className="col-span-1 flex justify-start">
                    <Image
                        src={Spimage}
                        alt="Descriptive Alt Text"
                        className="w-[486px] h-auto object-cover"
                        priority={false}
                        loading="lazy"
                    />
                </div>{/* Left Side - Text Content */}
                <div className="col-span-1 text-left">
                    <h1 className="lg:text-[24px]  text-lg font-bold text-[#000000] mb-4">Ethical. Transparent. OT-Led Career Matching.</h1>
                    <p className="lg:text-[16px] text-xs text-[#4A5565]">
                        If you are an AHPRA-registered Occupational Therapist in Australia, your next role should support your clinical reasoning, wellbeing, and long-term career growth — not compromise them.
                    </p>

                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-5">
                        At Medfuture, we specialise exclusively in Occupational Therapist jobs across Australia, offering clinic-verified roles with clearly defined caseloads, KPIs, supervision, and flexibility before you apply.
                    </p>
                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-5">
                        We don’t push vacancies. We match OTs to roles that genuinely fit their clinical identity and lifestyle.                    </p>
                </div>

            </div>
        </div>
    );
};

export default OTContentSection;