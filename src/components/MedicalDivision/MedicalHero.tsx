"use client";

import React from "react";

type Feature = {
    title: string;
    description: string;
};
const featuresLeft: Feature[] = [
    { title: "Nationwide coverage:", description: "metro, regional & remote" },
    { title: "Shortlists in ≈72 hours ", description: "for priority roles" },
];

const featuresRight: Feature[] = [
    { title: "AHPRA-registered &", description: "credentialing support" },
    { title: "Transparent pay, visas,", description: "and relocation guidance" },
];

export default function HeroSection() {
    return (
        <section className="bg-[#040D48] full-width-section text-white py-[26px] px-4 lg:px-20">
            <div className="inner-width-section mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                {/* Left Column - spans 2/3 */}
                <div className="lg:col-span-2 space-y-[32px]">
                    <h1 className="text-2xl lg:text-[36px] font-bold">
                        Mental Health Psychology Careers Across Australia
                    </h1>
                    <p className="text-xs lg:text-[16px] text-white/80 max-w-3xl">
                        Build a meaningful psychology career with access to permanent and locum mental health roles across Australia. Medfuture connects psychologists with trusted opportunities that support growth balance and long term impact.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 border-l-0 mt-[32px] border-r-0 border-dashed border-white/30">
                        {/* Left Features */}
                        <div className="space-y-4 sm:space-y-6 sm:pr-6 sm:border-r sm:border-dashed sm:border-white/30">
                            {featuresLeft.map((feature, idx) => (
                                <div key={idx}>
                                    <h3 className="font-[400] lg:text-[16px] text-xs">
                                        {feature.title} <br /> {feature.description}
                                    </h3>
                                </div>
                            ))}
                        </div>

                        {/* Right Features */}
                        <div className="space-y-4 sm:space-y-6 sm:pl-6">
                            {featuresRight.map((feature, idx) => (
                                <div key={idx}>
                                    <h3 className="font-[400] lg:text-[16px] text-xs">
                                        {feature.title} <br /> {feature.description}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Form */}
                <div>
                    <div className="bg-white/30 text-gray-800 rounded-[4px] p-6 shadow-lg">
                        {/* <h2 className="text-xl font-semibold mb-4">Browse Jobs</h2> */}

                        {/* Search Bar */}
                        <div className="mb-[9px]">
                            <label className="block text-[20px] text-white font-medium mb-[16px]">Browse Jobs</label>
                            <input
                                type="text"
                                placeholder="Enter job title or keyword"
                                className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>

                        {/* Keywords Dropdown */}
                        <div className="mb-[9px]">
                            {/* <label className="block text-sm font-medium mb-1">Keywords</label> */}
                            <select className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px]  text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Profession or Specialty </option>
                                <option value="medical">Medical</option>
                                <option value="allied">Allied Health</option>
                                <option value="dental">Dental</option>
                                <option value="mental">Mental Health</option>
                            </select>
                        </div>

                        {/* Location Dropdown */}
                        <div className="mb-[9px]">
                            {/* <label className="block text-sm font-medium mb-1">Location</label> */}
                            <select className="w-full border border-gray-50 bg-white rounded-[4px] px-4 py-[13px] text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                                <option value="">Select location</option>
                                <option value="nsw">New South Wales</option>
                                <option value="vic">Victoria</option>
                                <option value="qld">Queensland</option>
                                <option value="wa">Western Australia</option>
                            </select>
                        </div>

                        {/* Browse Jobs Button */}
                        <button className="w-full bg-blue-900 text-white py-[13px] px-4 rounded-md text-sm font-medium hover:bg-blue-800 transition mb-6">
                            Browse Jobs
                        </button>

                        {/* Quick Contact */}
                    </div><div className="bg-white rounded-[4px] pt-4 mt-4 px-[44px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#0F172A]">Quick Contact</p>
                            <p className="text-[#575D84] text-[16px] mt-1">
                            Phone: <a href="tel:+123456789" className="text-[16px] font-[500]">1300 633 388</a>
                        </p>
                        <p className="text-sm text-[#575D84] mt-1">
                            Email: <a href="mailto:info@example.com" className="text-[16px] font-[500] ">helpdesk@themedfuture.com</a>
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
