/* eslint-disable react/no-unescaped-entities */

'use client';

import React, { useState } from 'react';
import backgroundPattern from '@/assets/Divisionimages/backgroundimg.webp';
import Image from 'next/image';
import DynamicForm from '@/components/Forms/DynamicFrom'; // Adjust path as needed

interface Role {
    name: string;
    slug: string;
    description: string;
}

const HeroComponent: React.FC = () => {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);

    const roles: Role[] = [
        {
            name: "I’m a Looking for Speech Pathologist Roles",
            slug: "speech-pathology",
            description: "Supervisor-verified clinics • training-safe placements"
        },
        {
            name: "I’m a Looking for Occupational Therapist Roles",
            slug: "occupational-therapist",
            description: "Supervisor-verified clinics • training-safe placements"
        },
        {
            name: "I’m a Looking for Physiologist Roles",
            slug: "physiotherapy",
            description: "Supervisor-verified clinics • training-safe placements"
        },
        {
            name: "I’m a Looking for Podiatrist Roles",
            slug: "podiatrist",
            description: "Supervisor-verified clinics • training-safe placements"
        },
    ];

    const handleRoleClick = (roleName: string) => {
        setSelectedRole(roleName);
    };

    const closeModal = () => {
        setSelectedRole(null);
    };

    const selectedRoleData = roles.find(r => r.name === selectedRole);

    return (
        <>
            <section className="relative full-width-section w-full overflow-hidden py-10 sm:py-14 lg:py-16 px-4 sm:px-6 -mt-11">
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
                            <h1 className="text-lg sm:text-xl lg:text-[36px] font-bold mb-6 lg:mb-6 leading-snug lg:leading-tight">
                                Allied Health Jobs in Australia
                                <span className="block mt-1">
                                    Speech Pathologists • OTs • Physiotherapists • Podiatrists
                                </span>
                            </h1>

                            <p className="text-sm sm:text-base md:text-[16px] mb-6 lg:mb-8 text-gray-200 max-w-2xl leading-relaxed">
                                Welcome to Medfuture Allied Health Recruitment Hub—a career-first Allied Health
                                recruitment destination designed for clinicians who want ethical workplaces,
                                sustainable caseloads, transparent pay and long-term growth.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <button className="flex items-center text-[14px] justify-center gap-2 bg-[#074CA4] cursor-pointer hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    Browse GP Jobs
                                </button>

                                <button className="flex items-center text-[14px] justify-center gap-2 cursor-pointer bg-transparent hover:bg-white/10 text-white px-6 py-3 rounded-md border border-white transition-colors duration-200">
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
                        <div className="bg-white/30  py-4 px-6 border border-gray-600/30 lg:col-span-5">
                            <div>
                                {selectedRole && (
                                    <div className="relative">
                                        <button
                                            onClick={closeModal}
                                            className="absolute top-0 right-1 text-white cursor-pointer text-black hover:text-white transition-colors flex items-center gap-1 text-xs"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                )}
                                <h2 className="text-white text-lg sm:text-xl md:text-[16px] font-semibold mb-2">
                                    Tell us what you want next
                                </h2>

                                <p className="text-gray-300 text-xs sm:text-sm lg:text-[14px] mb-4 lg:mb-6">
                                    Fast, GP-aligned matching with transparent clinic insights.
                                </p>

                                {/* Role Selection Cards - Hide when one is selected */}
                                {!selectedRole && (
                                    <div className="space-y-3 sm:space-y-4 mb-6">
                                        {roles.map((role, i) => (
                                            <div
                                                key={i}
                                                onClick={() => handleRoleClick(role.name)}
                                                className="bg-white rounded-[4px] py-3 px-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
                                            >
                                                <h3 className="text-[#0F172A] font-semibold text-sm lg:text-[14px] mb-1">
                                                    {role.name}
                                                </h3>
                                                <p className="text-gray-600 text-xs sm:text-sm lg:text-[12px]">
                                                    {role.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Expanded Form Section */}
                                {selectedRole && selectedRoleData && (
                                    <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                        {/* Selected Role Card */}
                                        <div className="bg-white rounded-[4px] p-4 mb-4 border-l-4 border-blue-500">
                                            <h4 className="text-[#0F172A] font-semibold text-sm mb-1">
                                                {selectedRoleData.name}
                                            </h4>
                                            <p className="text-gray-600 text-xs">
                                                {selectedRoleData.description}
                                            </p>
                                        </div>

                                        {/* Form Section */}
                                        <div className="">
                                            <div className="max-h-[600px] overflow-y-auto">
                                                {/* Pass the selected role slug to DynamicForm */}
                                                <DynamicForm selectedRole={selectedRoleData.slug} />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroComponent;