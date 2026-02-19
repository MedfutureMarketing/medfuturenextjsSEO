'use client';

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import { apiGet } from '@/lib/api';

interface BackendJob {
    jobdetails_id: number;
    job_id: string;
    job_title: string;
    hourly_fee: string;
    profession_name: string;
    engagement_type_name: string;
    state_name: string;
    region_name: string | null;
    created_at: string;
}

interface ApiResponse {
    locumJobs: BackendJob[];
}

/* =========================
   Job Card (Design Unchanged)
========================= */
function JobCard({ job }: { job: BackendJob }) {
    const timeAgo = getTimeAgo(job.created_at);

    return (
        <div className="bg-[#F5F7FB] rounded-lg shadow p-6 border border-gray-200 hover:border-gray-300 transition-colors h-full flex flex-col">
            <div className="flex justify-between items-start mb-3">
                <span className="text-[12px] text-[#4A5565]">
                    {job.job_id}
                </span>
                <span className="text-[12px] text-[#4A5565] flex items-center gap-1">
                    {timeAgo}
                </span>
            </div>

            <h3 className="lg:text-[16px] text-sm font-bold text-[#0F172A] mb-3 leading-tight flex-grow">
                {job.job_title}
            </h3>

            <div className="flex items-center gap-2 text-[#4A5565]">
                <span className="lg:text-[12px] text-xs">
                    {job.state_name}
                    {job.region_name ? `, ${job.region_name}` : ''}
                </span>
            </div>
        </div>
    );
}

/* =========================
   Mobile Carousel
========================= */
function JobCarousel({ jobs }: { jobs: BackendJob[] }) {
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
            const scrollAmount = 320;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="relative">
            <div
                ref={scrollContainerRef}
                className="flex gap-4 overflow-x-auto pb-4 scroll-smooth"
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <style>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {jobs.map((job) => (
                    <div
                        key={job.jobdetails_id}
                        className="flex-shrink-0 w-full sm:w-[calc(50%-8px)]"
                    >
                        <JobCard job={job} />
                    </div>
                ))}
            </div>

            {canScrollLeft && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Scroll left"
                />
            )}

            {canScrollRight && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
                    aria-label="Scroll right"
                />
            )}
        </div>
    );
}

/* =========================
   Main Component
========================= */
export default function LocumGPJobs() {
    const [jobs, setJobs] = useState<BackendJob[]>([]);

    useEffect(() => {
        async function fetchJobs() {
            try {
                const res = await apiGet<ApiResponse>(
                    'web/profession-pages/get-all'
                );
                setJobs(res.locumJobs || []);
            } catch (error) {
                console.error('Failed to fetch locum jobs', error);
            }
        }

        fetchJobs();
    }, []);

    return (
        <div className="w-full p-0 lg:mt-[140px] pb-[130px] ">
            <div className="inner-width-section mx-auto">
                
                {/* Header (Unchanged) */}
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

                {/* Mobile */}
                <div className="lg:hidden mb-8">
                    <JobCarousel jobs={jobs} />
                </div>

                {/* Desktop */}
                <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
                    {jobs.map((job) => (
                        <JobCard key={job.jobdetails_id} job={job} />
                    ))}
                </div>

                {/* Button */}
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

/* =========================
   Helper: Time Ago
========================= */
function getTimeAgo(dateString: string) {
    const now = new Date();
    const created = new Date(dateString);
    const diff = Math.floor((now.getTime() - created.getTime()) / 1000);

    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / 3600);
    const days = Math.floor(diff / 86400);

    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    return `${days} day${days > 1 ? 's' : ''} ago`;
}
