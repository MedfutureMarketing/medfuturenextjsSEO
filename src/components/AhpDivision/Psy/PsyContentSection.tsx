import Image from "next/image";
import Spimage from "@/assets/ahp/POD/pod.png"

const ContentSection = () => {
    return (
        <div className="full-width-section bg-[#C0C0C017] mt-[103px]  ">
            <div className="grid lg:grid-cols-2 gap-1 p-0 intner-width-section lg:px-0 px-4 py-[49px]">
                {/* Left Side - Text Content */}
                <div className="col-span-1 text-left">
                    <h2 className="lg:text-[24px]  text-lg font-bold text-[#000000] mb-4">Ethical, Career-Safe Roles Built Around You</h2>
                    <p className="lg:text-[16px] text-xs text-[#4A5565]">
                        If you are an AHPRA-registered Psychologist, your next career move is not just about finding another job. It is about protecting your wellbeing, working ethically, being supported clinically, and building a career that still feels meaningful five, ten, and fifteen years from now.
                    </p>

                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        Medfuture exists for psychologists who want more than KPIs, pressure, and burnout. We work exclusively with clinics, hospitals, schools, NDIS providers, and organisations that respect psychological practice, evidence-based care, and professional boundaries.      </p>
                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        This page is designed to be your reference point whenever you think:                    </p>
                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        “Is it time for my next role?”                    </p>
                </div> {/* Right Side - Image */}
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