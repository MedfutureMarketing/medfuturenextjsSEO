'use client';

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';

interface JobListing {
    id: string;
    title: string;
    salary: string;
    location: string;
    timeAgo: string;
}

const jobListings: JobListing[] = [
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
    { id: 'GP1234', title: 'Occupational Therapist I AUD 120,000 per annum | Kingsgrove', salary: 'AUD 120,000', location: 'Brisbane, QLD', timeAgo: '36min ago' },
];

// Job Card Component
function JobCard({ job }: { job: JobListing }) {
    return (
        <div className="bg-[#F5F7FB] rounded-lg shadow p-6 border border-gray-200 hover:border-gray-300 transition-colors h-full flex flex-col">
            {/* Job ID and Time */}
            <div className="flex justify-between items-start mb-3">
                <span className="text-[12px] text-[#4A5565]">{job.id}</span>
                <span className="text-[12px] text-[#4A5565] flex items-center gap-1">
                    {job.timeAgo}
                </span>
            </div>
            {/* Job Title */}
            <h3 className="lg:text-[16px] text-sm font-bold text-[#0F172A] mb-3 leading-tight flex-grow">
                {job.title}
            </h3>
            {/* Location */}
            <div className="flex items-center gap-2 text-[#4A5565]">
                <span className="lg:text-[12px] text-xs">{job.location}</span>
            </div>
        </div>
    );
}

// Carousel Component for Mobile
function JobCarousel() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        container?.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);

        return () => {
            container?.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 320; // Card width + gap
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative">
            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                {/* Hide scrollbar for Chrome, Safari and Opera */}
                <style>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {jobListings.map((job, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full sm:w-[calc(50%-8px)]"
                    >
                        <JobCard job={job} />
                    </div>
                ))}
            </div>

            {/* Left Arrow */}
            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Scroll left"
                >
                  
                </button>
            )}

            {/* Right Arrow */}
            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Scroll right"
                >
                  
                </button>
            )}
        </div>
    );
}

export default function LocumGPJobs() {
    return (
        <div className="w-full p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-xs lg:text-[14px] font-[500] text-[#074CA4] font-medium mb-2">
                        Live Locum GP opportunities
                    </p>
                    <h2 className="lg:text-[30px] text-lg sm:text-xl font-bold text-gray-900 mb-4">
                        Browse Locum GP Jobs by state, billing model, DPA/MMM
                    </h2>
                    <p className="text-[#4A5565] lg:text-[16px] text-xs lg:w-xl">
                        This is a preview dataset. Swap in your real roles from your ATS/CRM and auto-generate Job Posting schema per listing.
                    </p>
                </div>

                {/* Mobile Carousel - Only on mobile/tablet */}
                <div className="lg:hidden mb-8">
                    <JobCarousel />
                </div>

                {/* Desktop Grid - Only on desktop */}
                <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
                    {jobListings.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>

                {/* View All Jobs Button */}
                <div className="flex justify-center">
                    <Link
                        href="/locums"
                        className="bg-[#074CA4] text-white font-semibold py-2 px-8 rounded-md hover:bg-opacity-90 transition-colors"
                    >
                        View All Jobs
                    </Link>
                </div>
            </div>
        </div>
    );
}