"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import gpImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";
import medicalImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";
import alliedImg from "@/assets/homeico/IMGFORCONSULTANT.jpg";

type Consultant = {
    name: string;
    role: string;
    location: string;
    stat: string;
    img: StaticImageData;
    phone: string;
    email: string;
};

const allConsultants: Consultant[] = [
    { name: "Dr. John Doe", role: "Division Manager - AHP", location: "Sydney", stat: "NSW", img: gpImg, phone: "+61 400 123 456", email: "john.doe@example.com" },
    { name: "Dr. Jane Smith", role: "Division Manager - AHP", location: "Melbourne", stat: "VIC", img: medicalImg, phone: "+61 400 234 567", email: "jane.smith@example.com" },
    { name: "Dr. Sam Lee", role: "Division Manager - AHP", location: "Brisbane", stat: "QLD", img: alliedImg, phone: "+61 400 345 678", email: "sam.lee@example.com" },
    { name: "Dr. Emily White", role: "Division Manager - AHP", location: "Sydney", stat: "NSW", img: gpImg, phone: "+61 400 456 789", email: "emily.white@example.com" },
    { name: "Dr. Robert Brown", role: "Division Manager - AHP", location: "Melbourne", stat: "VIC", img: medicalImg, phone: "+61 400 567 890", email: "robert.brown@example.com" },
    { name: "Dr. Mia Wilson", role: "Division Manager - AHP", location: "Brisbane", stat: "QLD", img: alliedImg, phone: "+61 400 678 901", email: "mia.wilson@example.com" },
];

const tabs = ["All", "GP", "Medical", "Allied Health"];

export default function MeetOurConsultants() {
    const [activeTab, setActiveTab] = useState<string>("All");

    const filteredConsultants = activeTab === "All"
        ? allConsultants
        : allConsultants.filter((c) => c.role === activeTab);

    return (
        <section className="w-full py-16 px-4 lg:px-0 overflow-visible">
            <div className="mx-auto max-w-screen-2xl text-left relative">
                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-[#040D48] mb-4 text-center lg:text-center">
                    Meet Our <span className="text-[#074CA4]">Consultants</span>
                </h2>
                <p className="text-gray-600 mb-12 lg:max-w-full mx-auto lg:mx-0 text-sm sm:text-base text-center lg:text-center">
                    Connect with our dedicated recruitment consultants who guide, support, and understand your career goals. With industry expertise and personalised care, they help you navigate opportunities and find the role that truly fits you.
                </p>

                {/* Tabs */}
                <div className="flex gap-3 sm:gap-4 mb-12 flex-wrap justify-center lg:justify-center">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base transition ${
                                activeTab === tab
                                    ? "bg-[#074CA4] text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8 lg:justify-items-start">
                    {filteredConsultants.map((c, i) => (
                        <div key={i} className="relative w-[209px] h-[224px] sm:w-[220px] sm:h-[240px] mb-6">
                            <div className="w-full h-full rounded-lg shadow-lg relative overflow-visible group">
                                <Image
                                    src={c.img}
                                    alt={c.name}
                                    className="object-cover w-full h-full rounded-lg group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-10 text-[#C0C0C0] left-0  px-3 py-1 text-[36px] sm:text-[36px] font-semibold rounded  z-20">
                                    {c.stat}
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-[110px] transform -translate-y-1/2 w-[250px] sm:w-[240px] bg-white p-3 sm:p-4 shadow-lg rounded-md flex flex-col gap-1 z-30">
                                <h4 className="font-semibold text-sm sm:text-[20px] text-[#074CA4]">{c.name}</h4>
                                <p className="text-xs sm:text-sm text-[#040D48]">{c.role}</p>
                                <p className="text-xs sm:text-sm text-[#4A5565]">📞 {c.phone}</p>
                                <p className="text-xs sm:text-sm text-[#4A5565]">✉️ {c.email}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="lg:hidden flex overflow-x-auto gap-4 pb-4 -mx-4 px-4">
                    {filteredConsultants.map((c, i) => (
                        <div key={i} className="flex-shrink-0 w-[190px] relative">
                            <div className="w-full h-[224px] rounded-lg shadow-lg relative">
                                <Image
                                    src={c.img}
                                    alt={c.name}
                                    className="object-cover w-full h-full rounded-lg"
                                />
                                <div className="absolute -bottom-8 text-[#C0C0C0] left-0  px-3 py-1 text-[36px] sm:text-[36px] font-semibold rounded  z-20">
                                    {c.stat}
                                </div>
                            </div>

                            <div className="mt-2 w-full bg-white p-3 shadow-lg rounded-md flex flex-col gap-1">
                                <h4 className="font-semibold text-[16px] text-[#074CA4]">{c.name}</h4>
                                <p className="text-xs text-[#040D48]">{c.role}</p>
                                <p className="text-xs text-[#4A5565]">📞 {c.phone}</p>
                                <p className="text-xs text-[#4A5565]">✉️ {c.email}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}