"use client";
import Link from "next/link";
import Image from "next/image";
import loctionico from "@/assets/homeico/loctionico.png";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

type HomeData = {
  clientCount: number;
  candidateCount: number;
  testimonials: Array<{
    comment: string;
    user_name: string;
    profession_name: string;
  }>;
  professions: Array<{
    profession_id: number;
    name: string;
    jobDetails: Array<{
      jobdetails_id: number;
      job_id: number;
      job_title: string;
      state_name: string;
      region_name: string;
    }>;
  }>;
};

type ProfessionCardData = {
  title: string;
  exploreLink: string;
  jobs: Array<{
    title: string;
    location: string;
    link: string;
  }>;
  viewAllText: string;
  viewAllLink: string;
};

// Define profession priorities (1-6, lower number = higher priority)
const professionPriorities: Record<string, number> = {
  "Doctor": 1,
  "Nurse": 2,
  "Allied Health": 3,
  "Dental": 4,
  "Pharmacy": 5,
  "Mental Health": 6,
  // Add more professions as needed
};

export default function JobsbyProfession() {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchHomeData() {
      try {
        setIsLoading(true);
        const res = await apiGet<HomeData>(`web/home-page/get-all`);
        setHomeData(res);
      } catch {
      } finally {
        setIsLoading(false);
      }
    }
    fetchHomeData();
  }, []);

  // Sort professions by priority, then by whether they have jobs
  const sortedProfessions = homeData?.professions
    .map((profession) => ({
      title: profession.name,
      exploreLink: `/permanent/${profession.name.toLowerCase().replace(/\s+/g, "-")}-jobs/in-australia`,
      jobs: profession.jobDetails.slice(0, 2).map((job) => ({
        title: job.job_title,
        location: `${job.state_name}, ${job.region_name}`,
        link: `/permanent/job/${job.job_id}`,
      })),
      viewAllText: `View All ${profession.name} Jobs`,
      viewAllLink: `/permanent/${profession.name.toLowerCase().replace(/\s+/g, "-")}-jobs/in-australia`,
      hasJobs: profession.jobDetails.length > 0,
      priority: professionPriorities[profession.name] || 999, // Default to low priority if not in list
    }))
    .sort((a, b) => {
      // First sort by priority (1-6 come first)
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      }
      // Within same priority, sort by hasJobs: true comes before false
      if (a.hasJobs && !b.hasJobs) return -1;
      if (!a.hasJobs && b.hasJobs) return 1;
      return 0;
    }) || [];

  // Get only first 6 cards for initial display
  const visibleProfessions = showAll ? sortedProfessions : sortedProfessions.slice(0, 6);
  const hasMoreCards = sortedProfessions.length > 6;

  return (
    <section className="w-full lg:py-[106px] py-10 px-4 lg:px-0">
      <div className="inner-width-section mx-auto">
        <div className="text-left mb-12">
          <h2 className="text-2xl lg:text-[40px] font-Inter text-gray-800 mb-4">
            Find Jobs by <span className="text-[#074CA4] font-bold">Professions</span>
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <p className="text-gray-600 text-xs lg:text-[16px] max-w-3xl">
              Discover healthcare roles for your profession. Browse opportunities for doctors, allied health, dental experts, and more. Find positions matching your skills and career goals across Australia.
            </p>

            <Link
              href="/job-seeker-hub"
              className="px-4 lg:px-6 lg:block hidden py-3 bg-[#074CA4] text-white font-[16px] rounded-[4px] hover:bg-gray-400 transition-colors whitespace-nowrap text-center">
              View Job Seeker Hub
            </Link>
          </div>
        </div>

        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-[#074CA4] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-600 text-sm">Loading job opportunities...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Desktop Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-6">
              {visibleProfessions.map((prof, idx) => (
                <ProfessionCard key={idx} prof={prof} />
              ))}
            </div>

            {/* View More Button for Desktop */}
            {hasMoreCards && !showAll && (
              <div className="hidden md:flex  justify-center mt-8">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-8 py-3 bg-[#074CA4]  text-white cursor-pointer font-semibold rounded-[4px] hover:bg-[#063a7a] transition-colors"
                >
                  View More Professions
                </button>
              </div>
            )}

            {/* Show Less Button for Desktop */}
            {showAll && (
              <div className="hidden md:flex justify-center mt-8">
                <button
                  onClick={() => setShowAll(false)}
                  className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-[4px] hover:bg-gray-700 transition-colors"
                >
                  Show Less
                </button>
              </div>
            )}

            {/* Mobile Horizontal Scroll */}
            <div className="flex md:hidden overflow-x-auto gap-4 snap-x snap-mandatory -mx-4 px-4">
              {sortedProfessions.map((prof, idx) => (
                <div key={idx} className="snap-start min-w-[200px] flex-shrink-0">
                  <ProfessionCard prof={prof} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

function ProfessionCard({ prof }: { prof: ProfessionCardData }) {
  return (
    <div className="bg-white rounded-lg border shadow-lg flex flex-col text-left px-4 py-6 h-full">
      <div className="flex items-center justify-between">
        <h3 className="lg:text-[16px] text-md font-semibold text-[#0A2E5C]">{prof.title}</h3>
        <Link
          href={prof.exploreLink}
          className="bg-white text-[#0F172A] lg:shadow-lg shadow-sm border border-gray-100 lg:text-[14px] text-sm px-4 py-2 rounded hover:bg-blue-700"
        >
          Explore
        </Link>
      </div>

      <p className="text-gray-600 mt-2 lg:text-[14px] text-xs">Latest Jobs</p>

      <div className="flex flex-col flex-grow">
        <div className="grid grid-cols-1 lg:w-full w-[320px] gap-3 mt-4">
          {prof.jobs.length > 0 ? (
            <>
              {prof.jobs.map((job, jidx) => (
                <div key={jidx} className="bg-white rounded-lg border shadow-sm py-3 px-4 flex items-center justify-between">
                  <div>
                    <h4 className="lg:text-[14px] text-sm font-semibold text-[#0A2E5C]">
                      {job.title.length > 40 ? `${job.title.slice(0, 60)}...` : job.title}
                    </h4>
                    <p className="text-gray-600 lg:text-[12px] text-[10px] flex flex-wrap gap-1 w-full mt-[5px]">
                      <Image src={loctionico} className="w-[10px] h-[13px]" alt="Locationico" />
                      {job.location.length > 30 ? `${job.location.slice(0, 40)}...` : job.location}
                    </p>
                  </div>
                  <Link href={job.link} className="text-[#074CA4] text-[12px] px-4 py-2 rounded">
                    View
                  </Link>
                </div>
              ))}
            </>
          ) : (
            <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300 py-8 px-4 text-center">
              <p className="text-gray-500 lg:text-[14px] text-sm font-medium">
                No jobs available at the moment
              </p>
              <p className="text-gray-400 lg:text-[12px] text-xs mt-2">
                Please Come back later for new opportunities
              </p>
            </div>
          )}
        </div>
      </div>

      <Link
        href={prof.viewAllLink}
        className="hover:underline lg:text-[14px] text-[10px] rounded-[8px] bg-[#040D48] text-white py-[9.5px] mt-4 block text-center"
      >
        {prof.viewAllText}
      </Link>
    </div>
  );
}