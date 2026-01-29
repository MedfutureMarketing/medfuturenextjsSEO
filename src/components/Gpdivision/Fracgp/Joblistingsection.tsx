"use client";

import Link from "next/link";
import { useState, useRef } from "react";

interface JobListing {
    id: string;
    title: string;
    salary: string;
    location: string;
    postedTime: string;
    billingModel: string;
    patientBase: boolean;
    flexibleSessions: boolean;
}

const jobListings: JobListing[] = [
    {
        id: "GP1234",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
    {
        id: "GP1235",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
    {
        id: "GP1236",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
    {
        id: "GP1237",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
    {
        id: "GP1238",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
    {
        id: "GP1239",
        title: "Occupational Therapist | AUD 120,000 per annum | Kingsgrove",
        salary: "AUD 120,000",
        location: "Brisbane, QLD",
        postedTime: "36min ago",
        billingModel: "65-70% billings",
        patientBase: true,
        flexibleSessions: true,
    },
];

interface JobCardProps {
    job: JobListing;
    index: number;
}

function JobCard({ job, index }: JobCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s backwards`,
            }}
            className="group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative bg-white rounded-lg border border-slate-200/70 p-3 xs:p-4 sm:p-5 md:p-6 lg:p-7 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                {/* Animated background gradient on hover */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-50/0 to-slate-100/0 transition-all duration-300 pointer-events-none ${isHovered ? "from-blue-50/40 to-slate-100/20" : ""
                        }`}
                />

                {/* Shine effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                <div className="relative z-10 flex-1 flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2 mb-3 xs:mb-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-[10px] xs:text-xs lg:text-[12px] font-semibold text-[#4A5565] uppercase tracking-wider mb-1 truncate">
                                {job.id}
                            </p>
                            <h3 className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-lg font-bold text-slate-900 transition-colors duration-300 leading-tight break-words line-clamp-2">
                                {job.title}
                            </h3>
                        </div>
                        <p className="text-[9px] xs:text-[10px] lg:text-[12px] font-semibold text-[#4A5565] font-medium whitespace-nowrap flex-shrink-0 text-right">
                            {job.postedTime}
                        </p>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-1.5 xs:gap-2 mb-4 xs:mb-5 text-[#0F172A]">
                        <svg width="10" height="13" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.498 12.646C6.26474 11.9503 6.97436 11.194 7.62 10.3847C8.98 8.676 9.80733 6.99133 9.86333 5.49333C9.88549 4.88453 9.78472 4.2775 9.56703 3.70852C9.34934 3.13954 9.0192 2.62026 8.59633 2.18173C8.17346 1.74319 7.66654 1.39438 7.10585 1.15613C6.54516 0.917892 5.94221 0.795103 5.333 0.795103C4.72379 0.795103 4.12084 0.917892 3.56015 1.15613C2.99946 1.39438 2.49254 1.74319 2.06967 2.18173C1.6468 2.62026 1.31666 3.13954 1.09897 3.70852C0.881283 4.2775 0.780507 4.88453 0.802667 5.49333C0.859333 6.99133 1.68733 8.676 3.04667 10.3847C3.69231 11.194 4.40192 11.9503 5.16867 12.646C5.24244 12.7127 5.29733 12.7611 5.33333 12.7913L5.498 12.646ZM4.84133 13.4227C4.84133 13.4227 0 9.34533 0 5.33333C0 3.91885 0.561903 2.56229 1.5621 1.5621C2.56229 0.561903 3.91885 0 5.33333 0C6.74782 0 8.10438 0.561903 9.10457 1.5621C10.1048 2.56229 10.6667 3.91885 10.6667 5.33333C10.6667 9.34533 5.82533 13.4227 5.82533 13.4227C5.556 13.6707 5.11267 13.668 4.84133 13.4227ZM5.33333 7.2C5.8284 7.2 6.3032 7.00333 6.65327 6.65327C7.00333 6.3032 7.2 5.8284 7.2 5.33333C7.2 4.83826 7.00333 4.36347 6.65327 4.0134C6.3032 3.66333 5.8284 3.46667 5.33333 3.46667C4.83826 3.46667 4.36347 3.66333 4.0134 4.0134C3.66333 4.36347 3.46667 4.83826 3.46667 5.33333C3.46667 5.8284 3.66333 6.3032 4.0134 6.65327C4.36347 7.00333 4.83826 7.2 5.33333 7.2ZM5.33333 8C4.62609 8 3.94781 7.71905 3.44772 7.21895C2.94762 6.71885 2.66667 6.04058 2.66667 5.33333C2.66667 4.62609 2.94762 3.94781 3.44772 3.44772C3.94781 2.94762 4.62609 2.66667 5.33333 2.66667C6.04058 2.66667 6.71885 2.94762 7.21895 3.44772C7.71905 3.94781 8 4.62609 8 5.33333C8 6.04058 7.71905 6.71885 7.21895 7.21895C6.71885 7.71905 6.04058 8 5.33333 8Z" fill="#0A2E5C" />
                        </svg>
                        <span className="text-[11px] xs:text-xs sm:text-sm lg:text-sm  text-[#4A5565]">
                            {job.location}
                        </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 xs:space-y-2.5 sm:space-y-3 flex-1">
                        {/* Billing Model */}
                        <div className="flex items-center gap-2 xs:gap-3">
                            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                <rect width="12" height="12" rx="2" fill="url(#paint0_linear_4024_7012)" />
                                <defs>
                                    <linearGradient id="paint0_linear_4024_7012" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#074CA4" />
                                        <stop offset="1" stopColor="#040D48" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A] font-[400]">{job.billingModel}</p>
                        </div>

                        {/* Established Patient Base */}
                        {job.patientBase && (
                            <div className="flex items-center gap-2 xs:gap-3">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <rect width="12" height="12" rx="2" fill="url(#paint0_linear_4024_7012)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4024_7012" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#074CA4" />
                                            <stop offset="1" stopColor="#040D48" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A] ">Established patient base</p>
                            </div>
                        )}

                        {/* Flexible Sessions */}
                        {job.flexibleSessions && (
                            <div className="flex items-center gap-2 xs:gap-3">
                                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                                    <rect width="12" height="12" rx="2" fill="url(#paint0_linear_4024_7012)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4024_7012" x1="6" y1="0" x2="6" y2="12" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#074CA4" />
                                            <stop offset="1" stopColor="#040D48" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A] ">Flexible sessions</p>
                            </div>
                        )}
                    </div>

                    {/* Button */}
                    <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-[17px]">
                        <button className="w-full cursor-pointer border border-gray-100 py-2 xs:py-2.5 px-3 xs:px-4 bg-slate-50 hover:bg-[#040D48] text-slate-900 hover:text-white font-semibold rounded-lg transition-all duration-300 text-xs xs:text-sm lg:text-sm group-hover:shadow-md transform group-hover:scale-105 active:scale-95">
                            View & Apply
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function JobListingSection() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollPosition = sliderRef.current.scrollLeft;
            const cardWidth = sliderRef.current.scrollWidth / jobListings.length;
            const index = Math.round(scrollPosition / cardWidth);
            setCurrentSlide(index);
        }
    };

    return (
        <section className="full-width-section lg:mt-[150px] lg:py-0 py-6 xs:py-8 sm:py-10 lg:py-12 mb-16">
            {/* Background decorations */}
          

            <div className="inner-width-section mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section */}
                <div className="mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    {/* Breadcrumb */}
                    <div className="mb-3 xs:mb-4">
                        <a href="#" className="text-[11px] xs:text-xs sm:text-[13px] lg:text-[14px] font-semibold text-[#074CA4] hover:text-blue-700 transition-colors">
                            Live Specialist GP opportunities
                        </a>
                    </div>

                    {/* Title */}
                    <div className="mb-4 xs:mb-5 sm:mb-6 md:mb-[22px]">
                        <h2 className="text-2lg   md:text-[26px] lg:text-[30px] font-bold text-slate-900 mb-2 xs:mb-3 sm:mb-4 leading-tight">
                            Browse FRACGP/FACRRM Jobs by state, billing model, DPA/MMM
                        </h2>
                        <p className="text-[11px] xs:text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#4A5565] max-w-2xl leading-relaxed">
                            This is a preview dataset. Swap in your real roles from your ATS/CRM and auto-generate JobPosting schema per listing.
                        </p>
                    </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
                    {jobListings.map((job, index) => (
                        <JobCard key={job.id} job={job} index={index} />
                    ))}
                </div>

                {/* Mobile Slider */}
                <div className="lg:hidden mb-8 xs:mb-10 sm:mb-12">
                    {/* Slider Container */}
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth gap-3 xs:gap-4 pb-4 -mx-3 xs:-mx-4 sm:-mx-6 px-3 xs:px-4 sm:px-6 scrollbar-hide"
                        style={{
                            scrollBehavior: 'smooth',
                            WebkitOverflowScrolling: 'touch',
                        }}
                    >
                        {jobListings.map((job, index) => (
                            <div
                                key={job.id}
                                className="flex-shrink-0 w-full snap-center"
                                style={{
                                    minWidth: '100%',
                                }}
                            >
                                <JobCard job={job} index={index} />
                            </div>
                        ))}
                    </div>

                    {/* Slider Indicators */}
                    <div className="flex justify-center gap-1.5 xs:gap-2 mt-5 xs:mt-6">
                        {jobListings.map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 xs:h-2 rounded-full transition-all duration-300 ${
                                    currentSlide === index
                                        ? 'w-5 xs:w-6 bg-[#074CA4]'
                                        : 'w-1.5 xs:w-2 bg-slate-300'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* View All Button */}
                <div className="flex justify-center">
                    <Link href="/permanent/gp-specialist-jobs/in-australia?page=1" className="px-6 xs:px-7 sm:px-8 py-2.5 xs:py-3 bg-[#074CA4] hover:bg-blue-700 text-white  rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm xs:text-base active:scale-95">
                        View All Jobs
                    </Link>
                </div>
            </div>

            <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hide scrollbar while keeping functionality */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Touch device optimizations */
        @media (max-width: 1024px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
        </section>
    );
}