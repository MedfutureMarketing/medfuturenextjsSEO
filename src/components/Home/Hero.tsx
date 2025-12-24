"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.webp"
import apackinsider from "@/assets/homeico/apackinsider.webp"
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
    const stats = [
        { label: "Employers", value: "400+" },
        { label: "Professional Placements", value: "700+" },
        { label: "Avg, Time to Hire", value: "3-7 Days" },
        { label: "Satisfaction", value: "4.9/5" },
    ];

    return (
        <div className=" bg-[#0D1A3E] full-width-section ">
      
            <div className="grid grid-cols-1 inner-width-section  lg:grid-cols-3 lg:gap-[157px] px-4 lg:px-0 py-2 ">
       
                <div className="lg:col-span-2 flex flex-col justify-center lg:mb-[31px]">
                    <h1 className="text-3xl  lg:text-[36px] font-[700] text-white leading-tight lg:mt-[62px] mt-8 mb-[22px]">
                        Medfuture Australia – Elevate Your Medical Career
                    </h1>
                    <p className="text-xs lg:text-[16px] text-[#FFFFFFB2]  leading-relaxed">
                        Connecting healthcare professionals with trusted employers across Australia. Whether you’re seeking your next career opportunity or hiring top talent, we provide expert guidance, reliable placements, and tailored solutions that strengthen teams and advance careers.
                    </p>

                </div>
                <div className="block lg:hidden py-8 ">
                    <div className="w-full lg:flex-1 flex lg:justify-end justify-center gap-3 lg:gap-4">
                        <Link
                            href="/job-seeker-hub"
                            className="px-4 lg:px-6 py-3 bg-[#074CA4] text-white font-[16px] rounded-[4px] hover:bg-gray-400  text-center"
                        >
                            Job Seeker Hub
                        </Link>
                        <Link
                            href="/employer-hub"
                            className="px-4 lg:px-6 py-3 bg-[#0D1A3E] border bg-gray-50 text-black font-[14px] rounded-[4px] hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
                        >
                            Employer Hub
                        </Link>
                    </div>
                </div>

     
                <div className="flex lg:items-center lg:justify-center ">
                    <div className="relative w-full  lg:h-full  flex items-center justify-center gap-8 ">
                     
                        <div className="flex items-center justify-center">
                            <Image
                                src={icon1}
                                alt="Partner Logo 1"
                                className="lg:h-[174px] lg:h-[174px] h-36 object-contain"
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Image
                                src={apackinsider}
                                alt="Partner Logo 2"
                                className="lg:h-[174px] lg:h-[174px] h-36 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

           
            <div className="w-full border-gray-200 inner-width-section">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] px-4 py-4 lg:px-0 lg:py-[40px] ">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center text-white bg-[rgba(255,255,255,0.07)] border-gray-200 py-[10px] rounded-[8px]">
                            <div className="text-sm lg:text-[30px] font-bold  mb-2">
                                {stat.value}
                            </div>
                            <p className="text-gray-600 text-[10px] lg:text-[14px] text-white font">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}