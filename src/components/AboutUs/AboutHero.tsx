"use client";

import Image from "next/image";

import HeroImage from "@/assets/homeico/Niraj-Chenthoran.png";


export default function AboutHero() {

    return (
        <section className="">
            <div className="full-width-section bg-[#0D1A3E]  ">
                <div className="grid items-center inner-width-section gap-12 lg:grid-cols-[1fr_359px]">
                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-2xl lg:text-[36px] font-bold text-white max-w-2xl">
                            From Our CEO’s Desk
                        </h1>
                        <p className="mt-[55px] text-xs lg:text-[16px] text-white/70 max-w-lg">
                            At the heart of our mission is a commitment to elevating healthcare through meaningful connections. Every placement we make contributes to better patient care. With integrity and dedication, we continue to strengthen Australia’s healthcare workforce—one professional, one employer, and one opportunity at a time
                        </p>
                        {/* SEARCH BAR */}
                        <div className=" text-[16px] font-[700] mb-10 mt-[36px]">
                            <h3>Mr. Niraj Chenthoran</h3>
                            <h4 className="font-[400]">CEO & Founder</h4>
                        </div>
                    </div>
                    {/* RIGHT IMAGE */}
                    <div className="hidden lg:flex justify-center w-[440px] h-[440px] -mt-[46px]">
                        <Image
                            src={HeroImage}
                            alt="Job search illustration"

                            priority
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className="py-[126px] mx-auto px-6">
                    {/* Grid Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative ">
                        {/* Mission */}
                        <div className="flex flex-col items-start text-left w-md">
                            <h3 className="text-[32px] font-semibold text-[#074CA4] mb-4">Our Mission</h3>
                            <p className="text-gray-700 text-[16px] leading-relaxed">
                                Our mission is to connect world-class healthcare professionals with purpose-driven opportunities by delivering innovative, ethical, and tailored workforce solutions, empowering people, enriching organizations, and advancing global healthcare talent management.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="flex flex-col items-start text-left lg:pl-12 w-md">
                            <h3 className="text-[32px] font-semibold text-[#074CA4] mb-4">Our Vision</h3>
                            <p className="text-gray-700 text-[16px] leading-relaxed">
                                To be the leading global marketplace for human capital investment in the healthcare industry, empowering professionals, enabling growth, and creating
                                greater opportunities worldwide.                            </p>
                        </div>

                        {/* Vertical Dotted Separator */}
                        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 border-l-2 border-dotted gap-2 border-gray-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}



