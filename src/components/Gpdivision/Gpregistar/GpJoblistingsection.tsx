"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { apiGet } from "@/lib/api";
import { createJobSlug } from "@/lib/urlUtils";

interface BackendJob {
  [x: string]: any;
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
  registrarJobs: BackendJob[]; // 👈 changed here
}

interface JobCardProps {
  job: BackendJob;
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

        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-50/0 to-slate-100/0 transition-all duration-300 pointer-events-none ${isHovered ? "from-blue-50/40 to-slate-100/20" : ""
            }`}
        />

        <div className="relative z-10 flex-1 flex flex-col">

          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3 xs:mb-4">
            <div className="flex-1 min-w-0">
              <p className="text-[10px] xs:text-xs lg:text-[12px] font-semibold text-[#4A5565] uppercase tracking-wider mb-1 truncate">
                {job.job_id}
              </p>
              <h3 className="text-sm xs:text-base sm:text-lg md:text-lg lg:text-[16px] font-bold text-[#0F172A]  break-words line-clamp-2">
                {job.job_title}
              </h3>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 xs:gap-2 mb-4 xs:mb-5 text-[#0F172A]">
            <svg width="10" height="13" viewBox="0 0 11 14" fill="none" className="flex-shrink-0">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.498 12.646C6.26474 11.9503 6.97436 11.194 7.62 10.3847C8.98 8.676 9.80733 6.99133 9.86333 5.49333C9.88549 4.88453 9.78472 4.2775 9.56703 3.70852C9.34934 3.13954 9.0192 2.62026 8.59633 2.18173C8.17346 1.74319 7.66654 1.39438 7.10585 1.15613C6.54516 0.917892 5.94221 0.795103 5.333 0.795103C4.72379 0.795103 4.12084 0.917892 3.56015 1.15613C2.99946 1.39438 2.49254 1.74319 2.06967 2.18173C1.6468 2.62026 1.31666 3.13954 1.09897 3.70852C0.881283 4.2775 0.780507 4.88453 0.802667 5.49333C0.859333 6.99133 1.68733 8.676 3.04667 10.3847C3.69231 11.194 4.40192 11.9503 5.16867 12.646C5.24244 12.7127 5.29733 12.7611 5.33333 12.7913L5.498 12.646Z"
                fill="#0A2E5C"
              />
            </svg>
            <span className="text-[11px] xs:text-xs sm:text-sm lg:text-[12px] text-[#4A5565]">
              {job.state_name}
              {job.region_name ? `, ${job.region_name}` : ""}
            </span>
          </div>

          {/* Features */}
          <div className="space-y-2 flex-1">
            {job.profession_name && (
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-[#074CA4] to-[#040D48]" />
                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A]">
                  {job.profession_name}
                </p>
              </div>
            )}

            {job.engagement_type_name && (
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-[#074CA4] to-[#040D48]" />
                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A]">
                  {job.engagement_type_name}
                </p>
              </div>
            )}

            {job.hourly_fee && (
              <div className="flex items-center gap-2 xs:gap-3">
                <div className="w-3 h-3 rounded-sm bg-gradient-to-b from-[#074CA4] to-[#040D48]" />
                <p className="text-[11px] xs:text-xs sm:text-sm lg:text-sm text-[#0F172A]">
                  {job.hourly_fee}
                </p>
              </div>
            )}
          </div>

          {/* Button */}
          <div className="mt-4">
            <Link
              href={`/permanent/job/${createJobSlug(
                job.job_title,
                job.state?.name || job.country?.name || 'australia',
                job.job_id
              )}`}
              className="w-full block text-center cursor-pointer border border-gray-100 py-2.5 px-4 bg-slate-50 hover:bg-[#040D48] text-slate-900 hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm group-hover:shadow-md transform group-hover:scale-105 active:scale-95"
            >
              View & Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegistrarJobListingSection() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [jobs, setJobs] = useState<BackendJob[]>([]);

  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await apiGet<ApiResponse>(
          "web/profession-pages/get-all"
        );

        setJobs(res.registrarJobs || []);
      } catch (error) {
        console.error("Failed to fetch registrar jobs", error);
      }
    }

    fetchJobs();
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current || jobs.length === 0) return;

    const scrollPosition = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.scrollWidth / jobs.length;
    const index = Math.round(scrollPosition / cardWidth);
    setCurrentSlide(index);
  };

  return (
    <section className="full-width-section lg:mt-[150px] lg:py-0 py-6 sm:py-10 lg:py-12 mb-16">
      <div className="inner-width-section mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-10">
          <h2 className="md:text-[26px] lg:text-[30px] font-bold text-slate-900 leading-tight">
            Browse Registrar Jobs by state, billing model, DPA/MMM
          </h2>
          <p className="text-sm md:text-[15px] lg:text-[16px] text-[#4A5565] max-w-2xl leading-relaxed">
            Live roles directly from our CRM.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {jobs.map((job, index) => (
            <JobCard key={job.jobdetails_id} job={job} index={index} />
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="lg:hidden mb-12">
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth gap-4 pb-4 -mx-3 px-3 scrollbar-hide"
          >
            {jobs.map((job, index) => (
              <div
                key={job.jobdetails_id}
                className="flex-shrink-0 w-full snap-center"
                style={{ minWidth: "100%" }}
              >
                <JobCard job={job} index={index} />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {jobs.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
                    ? "w-6 bg-[#074CA4]"
                    : "w-2 bg-slate-300"
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href="/permanent/registrar-jobs/in-australia?page=1"
            className="px-8 py-3 bg-[#074CA4] hover:bg-blue-700 text-white rounded-[4px] transition-all duration-300 hover:shadow-lg hover:scale-105 text-base active:scale-95"
          >
            View All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
}
