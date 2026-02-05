"use client";

import { apiGet } from "@/lib/api";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseJobSearchUrl } from "@/lib/seoJobUrl";
import Image from "next/image";
import Pointico from "@/assets/icons/listicon.png"

/* ===================== TYPES ===================== */

type Job = {
  job_id: number;
  job_title: string;
  status: number;
  commencement_date: string;
  profession: { name: string };
  country: { name: string };
  state: { name: string };
  engagement_type: { name: string };
  hourly_fee: string;
};

type JobApiResponse = {
  data: Job[];
  pagination: {
    count: number;
    page: number;
    recordsPerPage: number;
    totalPages: number;
  };
};

type Suburb = { name: string };
type Region = { name: string; suburb?: Suburb[] };
type StateLocation = { name: string; regions?: Region[] };

type LocationApiResponse = {
  states: StateLocation[];
};

type LocationMap = Record<string, { regions: Record<string, string[]> }>;

/* ===================== COMPONENT ===================== */

export default function JobCard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const selectedJobId = searchParams.get("jobId");
  const filters = parseJobSearchUrl(pathname);

  const pageFromUrl = Number(searchParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [locationData, setLocationData] = useState<LocationMap>({});
  const [isLoading, setIsLoading] = useState(true);
  const [showNoJobsModal, setShowNoJobsModal] = useState(false);

  /* ===================== LOAD LOCATIONS ===================== */

  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await apiGet<LocationApiResponse>(
          "web/jobdetails/locations"
        );

        const map: LocationMap = {};

        res.states.forEach((state) => {
          map[state.name] = { regions: {} };

          state.regions?.forEach((region) => {
            map[state.name].regions[region.name] = [];

            region.suburb?.forEach((suburb) => {
              map[state.name].regions[region.name].push(suburb.name);
            });

            map[state.name].regions[region.name].sort();
          });
        });

        setLocationData(map);
      } catch (error) {
        console.error("Failed to load locations", error);
      }
    }

    fetchLocations();
  }, []);

  /* ===================== LOCATION DETECTOR ===================== */

  const detectLocation = useCallback(
    (locationName: string): {
      country?: string;
      state?: string;
      region?: string;
      suburb?: string;
    } => {
      if (!locationName) return {};

      if (locationData[locationName]) {
        return { state: locationName };
      }

      for (const state of Object.keys(locationData)) {
        const regions = locationData[state].regions;

        if (regions[locationName]) {
          return { state, region: locationName };
        }

        for (const region of Object.keys(regions)) {
          if (regions[region].includes(locationName)) {
            return { state, region, suburb: locationName };
          }
        }
      }

      return { country: locationName };
    },
    [locationData]
  );

  /* ===================== SYNC PAGE IN URL ===================== */

  useEffect(() => {
    router.replace(`${pathname}?page=${currentPage}`, { scroll: false });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, pathname, router]);

  /* ===================== RESET PAGE ON FILTER CHANGE ===================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    filters.keyword,
    filters.country,
    filters.state,
    filters.region,
    filters.suburb,
  ]);

  /* ===================== FETCH JOBS ===================== */

  useEffect(() => {
    if (Object.keys(locationData).length === 0) return;

    async function fetchJobs() {
      setIsLoading(true);
      const params = new URLSearchParams();

      if (filters.keyword) {
        params.set("keyword", filters.keyword);
      }

      const location =
        filters.suburb || filters.region || filters.state || filters.country;

      if (location) {
        const detected = detectLocation(location);

        if (detected.suburb) params.set("suburb", detected.suburb);
        if (detected.region) params.set("region", detected.region);
        if (detected.state) params.set("state", detected.state);
        if (detected.country) params.set("country", detected.country);
      }

      params.set("page", String(currentPage));

      try {
        const res = await apiGet<JobApiResponse>(
          `web/jobdetails/paginated-filter?${params.toString()}`
        );

        setJobs(res.data);
        setTotalPages(res.pagination.totalPages);
        setTotalJobs(res.pagination.count);

        // Show modal if no jobs found after search
        if (res.data.length === 0 && res.pagination.count === 0) {
          setShowNoJobsModal(true);
        }
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, [
    currentPage,
    locationData,
    detectLocation,
    filters.keyword,
    filters.state,
    filters.region,
    filters.suburb,
    filters.country,
  ]);

  /* ===================== TIME FORMATTER ===================== */

  function timeFromNow(dateString: string) {
    const [day, month, year] = dateString.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const diffMs = date.getTime() - Date.now();

    const absMin = Math.round(Math.abs(diffMs) / 60000);
    const absHours = Math.round(absMin / 60);
    const absDays = Math.round(absHours / 24);

    if (diffMs < 0) {
      if (absMin < 60) return `${absMin} min ago`;
      if (absHours < 24) return `${absHours} hours ago`;
      return `${absDays} days ago`;
    }

    if (absMin < 60) return `in ${absMin} min`;
    if (absHours < 24) return `in ${absHours} hours`;
    return `in ${absDays} days`;
  }

  /* ===================== LOADING STATE ===================== */

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#0A2E5C] border-dotted rounded-full border-t-transparent animate-spin"></div>
          <p className="text-gray-500 text-sm font-medium">
            Loading jobs, please wait...
          </p>
        </div>
      </div>
    );
  }

  /* ===================== NO JOBS MODAL ===================== */

  if (showNoJobsModal) {
    return (
      <>
        {/* Modal Backdrop */}
        <div className="fixed inset-0 bg-white/60  flex items-center justify-center z-50 p-4">
          {/* Modal Content */}
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="text-center">
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h3 className="lg:text-xl font-semibold text-[#0E2851] mb-2">
                No Jobs Available
              </h3>

              <p className="text-[#4A5565] mb-6">
                We couldnt find any jobs matching your search criteria. Would you like to register for job alerts or browse more opportunities?
              </p>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => router.push("/sign-up")}
                  className="w-full px-4 py-3 bg-[#0A2E5C] cursor-pointer text-white rounded-lg font-medium hover:bg-[#0d3870] transition-colors"
                >
                  Register Now
                </button>

                <button
                  onClick={() => {
                    setShowNoJobsModal(false);
                    router.push("/permanent");
                  }}
                  className="w-full px-4 py-3 border cursor-pointer border-[#0A2E5C] text-[#0A2E5C] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Browse More Jobs
                </button>

                <button
                  onClick={() => setShowNoJobsModal(false)}
                  className="text-gray-500 text-sm cursor-pointer hover:text-gray-700 mt-2"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  /* ===================== UI ===================== */

  return (
    <div>
      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* ===================== JOB COUNT ===================== */}
      <div className="flex justify-end">
        <span className="text-right text-[#4A5565] lg:text-[14px] text-xs mb-2">
          {totalJobs} Jobs Available
        </span>
      </div>

      {/* ===================== DESKTOP JOB LIST ===================== */}
      <div className="space-y-4 hidden lg:block max-h-[1050px] overflow-y-auto hide-scrollbar">
        {jobs.map((job) => (
          <div
            key={job.job_id}
            onClick={() =>
              router.push(`?jobId=${job.job_id}&page=${currentPage}`)
            }
            className={`border cursor-pointer border-[#E6EDF7] rounded-lg p-4 shadow-md transition-all
              ${selectedJobId === String(job.job_id) ? "bg-gray-200 text-white shadow-none border-0" : ""}`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {job.job_id}
              </span>

              <span className="text-xs text-gray-500">
                {timeFromNow(job.commencement_date)}
              </span>
            </div>

            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-[#0E2851]">
                {job.job_title}
              </h3>
            </div>

            <div>
              <h4 className="text-[#4A5565] text-[12px]">
                {job.state?.name}, {job.country?.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 mt-[15px] gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2 text-[14px]">
                <Image src={Pointico} alt="Location Icon" />
                {job.profession?.name}
              </span>

              <span className="flex items-center gap-2 text-[14px]">
                <Image src={Pointico} alt="Location Icon" />
                {job.engagement_type?.name}
              </span>
              <span className="flex items-center gap-2 text-[14px]">
                <Image src={Pointico} alt="Engagement Icon" />
                {job?.hourly_fee}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== MOBILE JOB LIST ===================== */}
      <div className="space-y-2 block lg:hidden  overflow-y-auto hide-scrollbar">
        {jobs.map((job) => (
          <div
            key={job.job_id}
            onClick={() => router.push(`/permanent/job/${job.job_id}`)}
            className="border cursor-pointer border-[#E6EDF7] rounded-lg p-6 shadow-md transition-all active:bg-gray-100"
          >
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {job.job_id}
              </span>

              <span className="text-xs text-gray-500">
                {timeFromNow(job.commencement_date)}
              </span>
            </div>

            <div className="flex justify-between mb-2 mt-2">
              <h3 className="font-semibold text-sm text-[#0E2851]">
                {job.job_title}
              </h3>
            </div>

            <div>
              <h4 className="text-[#4A5565] text-[10px]">
                {job.state?.name}, {job.country?.name}
              </h4>
            </div>

            <div className="grid grid-cols-1 mt-[15px] gap-2 text-sm text-gray-600">
              <span className="flex items-center gap-2 text-[12px]">
                <Image src={Pointico} alt="Profession Icon" />
                {job.profession?.name}
              </span>

              <span className="flex items-center gap-2 text-[12px]">
                <Image src={Pointico} alt="Engagement Icon" />
                {job.engagement_type?.name}
              </span>
              <span className="flex items-center gap-2 text-[12px]">
                <Image src={Pointico} alt="Engagement Icon" />
                Flixible Session
              </span>
            </div>

          </div>
        ))}
      </div>

      {/* ===================== PAGINATION ===================== */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border border-black cursor-pointer text-black rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          {(() => {
            const pages: (number | string)[] = [];
            const showLeftDots = currentPage > 3;
            const showRightDots = currentPage < totalPages - 2;

            pages.push(1);

            if (showLeftDots) pages.push("...");

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
              pages.push(i);
            }

            if (showRightDots) pages.push("...");

            if (totalPages > 1) pages.push(totalPages);

            return pages.map((page, index) =>
              page === "..." ? (
                <span key={`dots-${index}`} className="px-2 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page as number)}
                  className={`px-3 py-1 border-none cursor-pointer rounded ${currentPage === page
                    ? "bg-blue-900 text-white "
                    : "border-border-black text-black"
                    }`}
                >
                  {page}
                </button>
              )
            );
          })()}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border border-black cursor-pointer text-black rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}