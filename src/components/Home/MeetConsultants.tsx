"use client";

import { useState, useMemo } from "react";
import Image, { StaticImageData } from "next/image";
import gpImg from "@/assets/homeico/IMGFORCONSULTANT.webp";
import medicalImg from "@/assets/homeico/IMGFORCONSULTANT.webp";
import alliedImg from "@/assets/homeico/IMGFORCONSULTANT.webp";
import Callico from "@/assets/homeico/Callico.png";
import Emailico from "@/assets/homeico/Emailico.png";

type Consultant = {
    name: string;
    role: string;
    location: string;
    stat: string;
    img: StaticImageData;
    phone: string;
    email: string;
    category: "General Practitioner" | "Medical" | "Allied Health"; 
};

const allConsultants: Consultant[] = [
    { name: "Amanda Fernando", role: "Division Manager – Candidate On-Boarding (International)", location: "All states", stat: "", img: gpImg, phone: "", email: "amanda@medfuture.com.au", category: "General Practitioner" },
    { name: "Ava Bennett", role: "Recruitment Business Consultant", location: "NSW", stat: "NSW", img: medicalImg, phone: "+61 483 901 108", email: "ava@medfuture.com.au", category: "General Practitioner" },
    { name: "Christopher Chris", role: "Recruitment Business Consultant", location: "WA, SA and NSW", stat: "WA", img: gpImg, phone: "+61 482 090 315", email: "christopher@medfuture.com.au", category: "General Practitioner" },
    { name: "Eleesha Silva", role: "Recruitment Business Consultant", location: "WA & SA", stat: "", img: alliedImg, phone: "+61 489 078 475", email: "eleesha@medfuture.com.au", category: "Allied Health" },
    { name: "Hailey N", role: "Consultant - Account Management & Corporate Relations", location: "QLD", stat: "QLD", img: alliedImg, phone: "+61 489 076 618", email: "hailey@medfuture.com.au", category: "Allied Health" },
    { name: "Kavindi Perera", role: "Recruitment Business Consultant", location: "WA, SA and NT", stat: "SA", img: gpImg, phone: "+61 483 940 854", email: "kavindi@medfuture.com.au", category: "General Practitioner" },
    { name: "Pavith Nand", role: "Recruitment Business Consultant", location: "QLD, NSW", stat: "", img: gpImg, phone: "+61 489 075 715", email: "pavith@themedfuture.com", category: "General Practitioner" },
    { name: "Ridma Gomez", role: "Recruitment Business Consultant", location: "", stat: "", img: gpImg, phone: "+61 482 076 505", email: "Ridma@medfuture.com.au", category: "Allied Health" },
    { name: "Rosh Mckenzie", role: "Business Development Executive cum Para Consultant", location: "VIC", stat: "VIC", img: alliedImg, phone: "+61 483 919 160", email: "rosh@medfuture.com.au", category: "Allied Health" },
    { name: "Sarah Anderson", role: "Team Leader - AHP Unit", location: "NSW", stat: "NSW", img: gpImg, phone: "+61 489 079 185", email: "sarah@medfuture.com.au", category: "Allied Health" },
    { name: "Sayeda Musawi", role: "Team Leader - GP Metro Unit", location: "QLD and VIC", stat: "", img: gpImg, phone: "+61 489 074 798", email: "sayeda@medfuture.com.au", category: "General Practitioner" },
    { name: "Selena Stevans", role: "Divisional Manager – MOD Unit", location: "", stat: "", img: gpImg, phone: "+61 489 076 754", email: "selena@medfuture.com.au", category: "Medical" },
    { name: "Sree Ranju", role: "Chief Manager- GP Metro and PLGP Unit", location: "", stat: "", img: gpImg, phone: "+61 489 071 766", email: "sree@medfuture.com.au", category: "General Practitioner" },
    { name: "Tammy R", role: "Division Manager - AHP", location: "All states", stat: "VIC", img: alliedImg, phone: "+61 483 965 759", email: "tammy@medfuture.com.au", category: "Allied Health" },
    { name: "Taniya J", role: "Manager – Business Development and Corporate Relations", location: "VIC", stat: "VIC", img: gpImg, phone: "+61 489 089 783", email: "taniya@medfuture.com.au", category: "General Practitioner" },
    { name: "Tasha Riverly", role: "Recruitment Business Consultant", location: "", stat: "", img: gpImg, phone: "+61 489 078 761", email: "tasha@medfuture.com.au", category: "Medical" },
    { name: "Tia Collins", role: "Recruitment Business Consultant", location: "WA and New Zealand", stat: "", img: gpImg, phone: "+61 489 085 779", email: "tia@medfuture.com.au", category: "General Practitioner" },
];
const tabs = ["All", "General Practitioner", "Medical", "Allied Health"];

export default function MeetOurConsultants() {
    const [activeTab, setActiveTab] = useState("All");
    const [showAll, setShowAll] = useState(false);

    const isAllTab = activeTab === "All";

    const filteredConsultants = useMemo(() => 
        isAllTab ? allConsultants : allConsultants.filter(c => c.category === activeTab),
    [activeTab, isAllTab]);

    const displayedConsultants = useMemo(() =>
        isAllTab && !showAll ? filteredConsultants.slice(0, 6) : filteredConsultants,
    [filteredConsultants, isAllTab, showAll]);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        setShowAll(false);
    };

    return (
        <section className="w-full py-16 px-4 lg:px-0 overflow-visible lg:block hidden">
            <div className="mx-auto max-w-screen-2xl text-left relative">
                <h2 className="text-2xl sm:text-4xl lg:text-[36px] text-[#040D48] mb-4 text-center">
                    Meet Our <span className="text-[#074CA4] font-bold">Consultants</span>
                </h2>
                <p className="text-[#4A5565] lg:mb-[65px] mb-4 text-xs lg:text-[16px] text-center">
                    Connect with our dedicated recruitment consultants who guide, support, and understand your career goals. With industry expertise and personalised care, they help you navigate opportunities and find the role that truly fits you.
                </p>

                <div className="flex gap-3 sm:gap-4 mb-12 flex-wrap justify-center">
                    {tabs.map(tab => (
                        <button
                            key={tab}
                            onClick={() => handleTabClick(tab)}
                            className={`px-4 sm:px-6 py-2 sm:py-3 lg:w-[219px] rounded-md cursor-pointer font-medium text-sm sm:text-base transition ${
                                activeTab === tab
                                    ? "bg-[#074CA4] text-white"
                                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="grid lg:grid-cols-3 lg:gap-8 lg:justify-items-start">
                    {displayedConsultants.map((c, i) => (
                        <div key={i} className="relative lg:w-[209px] lg:h-[224px] sm:w-[220px] sm:h-[240px] mb-6">
                            <div className="w-full h-full rounded-lg relative overflow-visible group">
                                <Image
                                    src={c.img}
                                    alt={c.name}
                                    width={209}
                                    height={224}
                                   priority={false}
            loading="lazy"
                                    className="object-cover w-full h-full rounded-[4px] group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute -bottom-10 text-[#C0C0C0] left-0 px-3 py-1 text-[36px] sm:text-[36px] font-semibold rounded z-20">
                                    {c.stat}
                                </div>
                            </div>
                            <div className="absolute top-1/2 -right-[110px] transform -translate-y-1/2 w-[250px] sm:w-[260px] bg-white p-3 sm:p-4 rounded-md flex flex-col gap-1 z-30">
                                <h4 className="font-semibold text-sm sm:text-[20px] text-[#074CA4]">{c.name}</h4>
                                <p className="text-xs sm:text-sm text-[#040D48]">{c.role}</p>
                                <p className="text-xs sm:text-sm text-[#4A5565] flex gap-1 items-center">
                                    <Image src={Callico} alt=""   priority={false}
            loading="lazy" /> {c.phone}
                                </p>
                                <p className="text-xs sm:text-sm text-[#4A5565] flex gap-1 items-center">
                                    <Image src={Emailico} alt=""   priority={false}
            loading="lazy" /> {c.email}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {isAllTab && filteredConsultants.length > 4 && !showAll && (
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => setShowAll(true)}
                            className="px-6 py-2 bg-[#074CA4] text-white rounded-md hover:bg-[#063a8b] transition"
                        >
                            View More
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
