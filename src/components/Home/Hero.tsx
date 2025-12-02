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
        <div className="bg-[#0D1A3E] full-width-section">
            <div className="grid grid-cols-1 inner-width-section lg:grid-cols-3 gap-8 px-4 lg:px-0 py-2 lg:py-24">
                <div className="lg:col-span-2 flex flex-col justify-center lg:mb-[31px]">
                    <h1 className="text-[36px] lg:text-6xl font-bold text-white leading-tight mt-[62px] mb-[22px]">
                        Medfuture Australia – Elevate Your Medical Career
                    </h1>
                    <p className="text-lg lg:text-[16px] text-[#FFFFFFB2] lg:mb-8 leading-relaxed">
                        Connecting healthcare professionals with trusted employers across Australia. Whether you’re seeking your next career opportunity or hiring top talent, we provide expert guidance, reliable placements, and tailored solutions that strengthen teams and advance careers.
                    </p>

                </div>

                {/* Narrower Column - Right Side (1/3 width) */}
                <div className="flex items-center justify-center gap-8">
                    <img src={icon1.src} alt="Australia Achiever" className="h-[174px] " />
                    <img src={apackinsider.src} alt="Apack Insider" className="h-[174px] " />
                </div>
            </div>

            {/* Full Width Stats Row */}
            <div className="w-full inner-width-section">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] px-4 lg:px-0 lg:mb-[80px]">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center bg-[rgba(255,255,255,0.07)] py-[10px] rounded-[8px]">
                            <div className="text-3xl lg:text-[30px] font-bold text-white mb-2">{stat.value}</div>
                            <p className="text-sm lg:text-[14px] text-white">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}