"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Image1 from "@/assets/employer/img/1.png";
import Image2 from "@/assets/employer/img/2.png";
import Image3 from "@/assets/employer/img/3.png";
import Image4 from "@/assets/employer/img/4.png";

const divisions = [
    {
        id: 1,
        title: "General Practice (GP) Recruitment",
        description: "Continuity-first GP workforce solutions for practices and groups.",
        tags: ["Permanent", "Locum", "Metro", "Regional"],
        image: Image1,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Allied Health Recruitment",
        description: "Physio, OT, Speech, Podiatry — sustainable caseload-aligned placements.",
        tags: ["NDIS", "Private Clinics", "Multi-site"],
        image: Image2,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Mental Health Recruitment",
        description: "Psychology & Psychiatry recruitment aligned to governance and supervision realities.",
        tags: ["Confidential", "Community", "Inpatient"],
        image: Image3,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
    {
        id: 4,
        title: "Dental Recruitment",
        description: "Associate stability, culture fit and chair utilisation alignment.",
        tags: ["General dentists", "Specialists", "Retention"],
        image: Image4,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C9 2 6 4 6 7c0 1.5.5 3 1 4.5C8 14 8 17 9 19c.5 1.5 1 3 3 3s2.5-1.5 3-3c1-2 1-5 2-7.5.5-1.5 1-3 1-4.5 0-3-3-5-6-5z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: "Pharmacy Recruitment",
        description: "Community and hospital pharmacy placements with compliance-first vetting.",
        tags: ["Community", "Hospital", "Locum"],
        image: Image1,
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18" />
            </svg>
        ),
    },
];

function ExploreIcon() {
    return (
        <span className="inline-flex items-center justify-center w-[16px] h-[16px] ml-1.5 shrink-0">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6.68347" height="6.68347" rx="1.60403" fill="#1B3461" />
                <rect x="7.35254" width="6.68347" height="6.68347" rx="1.60403" fill="#162950" />
                <rect x="7.35254" y="7.35181" width="6.68347" height="6.68347" rx="1.60403" fill="#269ED6" />
            </svg>
        </span>
    );
}

export default function EmployerDivisionsPage() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const handleScroll = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        el.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    };

    return (
        <div className="full-width-section bg-white font-sans lg:mt-[120px]">

            {/* ── Section 1: Employer Divisions ── */}
            <div className="inner-width-section mx-auto px-4 sm:px-8 lg:px-16 pb-10">

                {/* Header */}
                <p className="lg:text-[14px] text-xs font-semibold text-blue-700 mb-2">Choose your division</p>
                <h2 className="lg:text-[30px] text-xl font-[600] text-[#0F172A] mb-[31px]">
                    Explore our employer divisions
                </h2>
                <p className="lg:text-[16px] text-xs text-[#4A5565] leading-relaxed mb-[70px] max-w-md">
                    Each division has specialist consultants, tailored pipelines and role-specific recruitment logic.
                </p>

                {/* Carousel wrapper */}
                <div className="relative">

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                        className={`absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center transition-opacity ${canScrollLeft ? "opacity-100 hover:bg-slate-50" : "opacity-30 cursor-default"}`}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Cards scroll container */}
                    <div
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {divisions.map((div) => (
                            <div
                                key={div.id}
                                className="flex-none w-[240px] sm:w-[270px] border border-slate-150 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative w-full h-[165px] overflow-hidden shrink-0">
                                    <Image
                                        src={div.image}
                                        alt={div.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Icon badge — bottom-left overlapping */}
                                    <div className="absolute -bottom-4 left-4 w-9 h-9 rounded-full bg-blue-800 flex items-center justify-center shadow-md z-10">
                                        {div.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="px-4 pt-7 pb-4 flex flex-col flex-1">
                                    <h3 className="lg:text-[16px] text-sm font-[600] text-slate-900 leading-snug mb-2">
                                        {div.title}
                                    </h3>
                                    <p className="lg:text-[14px] text-xs text-slate-500 leading-relaxed mb-2">
                                        {div.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-1">
                                        {div.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="lg:text-[12px] text-xs text-[#4A5565] border border-[#E2E8F0] rounded px-2 py-0.5 bg-slate-50"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Explore — pinned to bottom */}
                                    <div className="border-t border-slate-100 mt-auto pt-3">
                                        <button className="flex items-center lg:text-[14px] text-xs font-semibold text-slate-700 hover:text-blue-800 transition-colors">
                                            Explore <ExploreIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                        className={`absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full border border-slate-200 bg-white shadow-sm flex items-center justify-center transition-opacity ${canScrollRight ? "opacity-100 hover:bg-slate-50" : "opacity-30 cursor-default"}`}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* ── Section 2: Nationwide Coverage ── */}
            <div className="inner-width-section mx-auto px-4 sm:px-8 lg:px-16 py-16 flex flex-col sm:flex-row gap-10 sm:gap-16 items-start">

                {/* Left: Big heading */}
                <div className="sm:w-[440px] shrink-0">
                    <h2 className="text-3xl lg:text-[41.32px] leading-tight">
                        <span className="text-slate-900">Nationwide</span>
                        <br />
                        <span className="text-blue-800">Healthcare Recruitment</span>
                        <br />
                        <span className="text-blue-600">Coverage</span>
                    </h2>
                </div>

                {/* Right: Body */}
                <div className="flex-1 flex items-center">
                    <p className="lg:text-[24px] text-sm text-[#0F172A] leading-relaxed">
                        We connect healthcare professionals and employers across all Australian states, delivering
                        jurisdiction-aware, reliable, efficient, and seamless recruitment solutions nationwide.
                    </p>
                </div>

            </div>

        </div>
    );
}