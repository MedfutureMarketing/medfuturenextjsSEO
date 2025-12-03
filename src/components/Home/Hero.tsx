"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.png"
import apackinsider from "@/assets/homeico/apackinsider.png"

export default function Hero() {
    const stats = [
        { label: "Employers", value: "500+" },
        { label: "Professional Placements", value: "10K+" },
        { label: "Avg, Time to Hire", value: "5K+" },
        { label: "Satisfaction", value: "98%" },
    ];

    return (
        <div className=" bg-[#0D1A3E] full-width-section">
            {/* 2 Column Grid Section */}
            <div className="grid grid-cols-1 inner-width-section  lg:grid-cols-3 gap-8 px-4 lg:px-0 py-2 lg:py-24">
                {/* Wider Column - Left Side (2/3 width) */}
                <div className="lg:col-span-2 flex flex-col justify-center lg:mb-[31px]">
                    <h1 className="text-[36px]  lg:text-6xl font-[700] text-white leading-tight mt-[62px] mb-[22px]">
                        Medfuture Australia – Elevate Your Medical Career
                    </h1>
                    <p className="text-lg lg:text-[16px] text-[#FFFFFFB2] lg:mb-8 leading-relaxed">
                        Connecting healthcare professionals with trusted employers across Australia. Whether you’re seeking your next career opportunity or hiring top talent, we provide expert guidance, reliable placements, and tailored solutions that strengthen teams and advance careers.
                    </p>

                </div>

                {/* Narrower Column - Right Side (1/3 width) */}
                <div className="flex items-center justify-center ">
                    <div className="relative w-full  lg:h-full  flex items-center justify-center gap-8 ">
                        {/* Logo 1 */}
                        <div className="flex items-center justify-center">
                            <img
                                src={icon1.src}
                                alt="Partner Logo 1"
                                className="h-[174px] lg:h-[174px] object-contain"
                            />
                        </div>

                        {/* Logo 2 */}
                        <div className="flex items-center justify-center">
                            <img
                                src={apackinsider.src}
                                alt="Partner Logo 2"
                                className="h-[174px] lg:h-[174px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Full Width Stats Row */}
            <div className="w-full   border-gray-200 inner-width-section">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] px-4  lg:px-0 lg:py-[0] lg:mb-[80px]">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white bg-[rgba(255,255,255,0.07)] border-gray-200 py-[10px] rounded-[8px]">
                            <div className="text-3xl lg:text-[30px] font-bold  mb-2">
                                {stat.value}
                            </div>
                            <p className="text-gray-600 text-sm lg:text-[14px] text-white font">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}