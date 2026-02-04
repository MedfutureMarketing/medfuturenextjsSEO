/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import backgroundPattern from '@/assets/Divisionimages/backgroundimg.png';
import Image from 'next/image';
const HeroComponent: React.FC = () => {
    return (
        <section className="relative full-width-section w-full overflow-hidden py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:-mt-11">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <Image
                    src={backgroundPattern}
                    alt="Background pattern"
                    fill
                    className="object-cover"
                    quality={90}
                    priority={false}
                    loading="lazy"
                />
            </div>

            <div className="relative mx-auto inner-width-section">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* Left Content */}
                    <div className="lg:col-span-7">
                        <h1 className="text-lg sm:text-xl lg:text-[36px] font-bold mb-4 lg:mb-6 leading-snug lg:leading-tight">
                            Allied Health Jobs in Australia
                            <span className="block mt-1">
                                Speech Pathologists • OTs • Physiotherapists • Podiatrists
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base md:text-lg mb-6 lg:mb-8 text-gray-200 max-w-2xl leading-relaxed">
                            Welcome to Medfuture Allied Health Recruitment Hub—a career-first Allied Health
                            recruitment destination designed for clinicians who want ethical workplaces,
                            sustainable caseloads, transparent pay and long-term growth.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <button className="flex items-center justify-center gap-2 bg-[#074CA4] cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                Browse GP Jobs
                            </button>

                            <button className="flex items-center justify-center gap-2 cursor-pointer bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-md border border-white transition-colors duration-200">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                Talk to a Consultant
                            </button>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="bg-white/30 p-5 sm:p-6 lg:p-8 border border-gray-600/30 lg:col-span-5">
                        <h2 className="text-white text-lg sm:text-xl md:text-[16px] font-semibold mb-2">
                            Tell us what you want next
                        </h2>

                        <p className="text-gray-300 text-xs sm:text-sm lg:text-[14px] mb-4 lg:mb-6">
                            Fast, GP-aligned matching with transparent clinic insights.
                        </p>

                        <div className="space-y-3 sm:space-y-4">
                            {[
                                "Speech Pathologist",
                                "Occupational Therapist",
                                "Physiologist",
                                "Podiatrist",
                            ].map((role, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-[4px] p-4 sm:p-5 hover:shadow-lg transition-shadow duration-200 cursor-pointer"
                                >
                                    <h3 className="text-[#0F172A] font-semibold text-sm lg:text-[14px] mb-1">
                                        I'm looking for {role} roles
                                    </h3>
                                    <p className="text-gray-600 text-xs sm:text-sm lg:text-[12px]">
                                        Supervisor-verified clinics • Training-safe placements
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>

    );
};
export default HeroComponent;