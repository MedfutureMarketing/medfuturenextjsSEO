import Image from "next/image";
import Spimage from "@/assets/ahp/POD/pod.png"

const ContentSection = () => {
    return (
        <div className="full-width-section bg-[#C0C0C017] mb-[40px] "><div className=" px-0 lg:px-0 md:px-8">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-1 md:gap-10 gap-1 p-0 inner-width-section py-[49px]">
                {/* Right Side - Image */}
                <div className="col-span-1 flex justify-start">
                    <Image
                        src={Spimage}
                        alt="Descriptive Alt Text"
                        className="lg:w-[486px] md:w-[386px] w-full h-auto object-cover"
                        priority={false}
                        loading="lazy"
                    />
                </div>{/* Left Side - Text Content */}
                <div className="col-span-1 text-left">
                    <h2 className="lg:text-[24px]  text-lg font-bold text-[#000000] mb-4">Ethical, Transparent & Clinically Aligned Career Opportunities</h2>
                    <p className="lg:text-[16px] text-xs text-[#4A5565]">
                        If you are an AHPRA-registered Podiatrist, choosing your next role is not just about salary — it is about caseload sustainability, clinical autonomy, KPIs you can live with, and a future that does not burn you out.
                    </p>

                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        At Medfuture, podiatry recruitment is not transactional.
                        It is career-led, clinically informed, and built around how podiatrists actually work.
                    </p>
                    <p className="lg:text-[16px] text-xs text-[#4A5565] mt-10">
                        Whether you are a new graduate, an experienced private practice podiatrist, or a senior clinician exploring leadership, specialist, or regional roles, Medfuture is structured to be the one recruitment partner you return to again and again.
                    </p>
                      </div>

            </div>
        </div> </div>
    );
};

export default ContentSection;