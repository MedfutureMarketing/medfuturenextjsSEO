"use client";

import { apiGet } from "@/lib/api";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseJobSearchUrl } from "@/lib/seoJobUrl";
import { showLoader, hideLoader } from "@/lib/loaderEvents";


/* ===================== TYPES ===================== */

type Job = {
  job_id: number;
  job_title: string;
  commencement_date: string;
  region: { name: string } | null;
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

export default function LocumJobList() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

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
      const res = await apiGet<LocationApiResponse>(
        "web/jobdetails/locations"
      );

      const map: LocationMap = {};

      res.states.forEach((state) => {
        map[state.name] = { regions: {} };

        state.regions?.forEach((region) => {
          map[state.name].regions[region.name] =
            region.suburb?.map((s) => s.name).sort() || [];
        });
      });

      setLocationData(map);
    }

    fetchLocations();
  }, []);

  /* ===================== LOCATION DETECTOR ===================== */

  const detectLocation = useCallback(
    (locationName: string) => {
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

  /* ===================== SYNC PAGE ===================== */

  useEffect(() => {
    router.replace(`${pathname}?page=${currentPage}`, { scroll: false });
  }, [currentPage, pathname, router]);

  /* ===================== RESET PAGE ===================== */

  useEffect(() => {
    setCurrentPage(1);
  }, [
    filters.keyword,
    filters.country,
    filters.state,
    filters.region,
    filters.suburb,
  ]);

  /* ===================== FETCH LOCUM JOBS ===================== */

  useEffect(() => {
    if (!Object.keys(locationData).length) return;

    async function fetchJobs() {
      setIsLoading(true);
      const params = new URLSearchParams();

      params.set("locum", "1");

      if (filters.keyword) params.set("keyword", filters.keyword);

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

              <h3 className="text-xl font-semibold text-[#0E2851] mb-2">
                No Jobs Available
              </h3>

              <p className="text-[#4A5565] mb-6">
                We couldnt find any locum jobs matching your search criteria. Would you like to register for job alerts or browse more opportunities?
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
                    router.push("/locum");
                  }}
                  className="w-full px-4 py-3 border border-[#0A2E5C] cursor-pointer text-[#0A2E5C] rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Browse More Jobs
                </button>

                <button
                  onClick={() => setShowNoJobsModal(false)}
                  className="text-gray-500 text-sm hover:text-gray-700 cursor-pointer mt-2"
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
      <div className="flex justify-end">
        <span className="text-right text-[#4A5565] text-[14px] mb-2">
          {totalJobs} Jobs Available
        </span>
      </div>

      {/* ===================== DESKTOP JOB LIST ===================== */}
      <div className="hidden lg:block max-h-screen overflow-y-auto scrollbar-hide">
        <div className="space-y-4 pr-2">
          {jobs.map((job) => (
            <div
              key={job.job_id}
              onClick={() =>
                router.push(`?jobId=${job.job_id}&page=${currentPage}`)
              }
              className={`border-1-2 cursor-pointer rounded-lg p-4  transition-all flex-shrink-0
                ${selectedJobId === String(job.job_id) ? "border-2 text-[#0F172A] border-gray-200" : " bg-[#F5F7FB]  text-[#0F172A] border border-[#E6EDF7]"}`}
            >
              <div className="flex justify-between items-center mb-[4px]">
                <span className="text-xs text-[#4A5565] ">
                  {job.job_id}
                </span>

                <span className="text-xs ">
                  {timeFromNow(job.commencement_date)}
                </span>
              </div>

              <div className="flex justify-between mb-[24px]">
                <h3 className="font-semibold text-[16px] ">
                  {job.job_title}
                </h3>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-xs text-[#4A5565]">
                  {job.region?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MOBILE JOB LIST ===================== */}
      <div className="block lg:hidden max-h-[500px] overflow-y-auto scrollbar-hide">
        <div className="space-y-4 pr-2">
          {jobs.map((job) => (
            <div
              key={job.job_id}
              onClick={() => router.push(`/locum/job/${job.job_id}`)}
              className="border-1-2 cursor-pointer bg-[#F5F7FB] border-[#E6EDF7] rounded-lg p-4 shadow-sm h-[135px] transition-all active:bg-gray-100 flex-shrink-0"
            >
              <div className="flex justify-between items-center mb-4">
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
            </div>
          ))}
        </div>
      </div>

      {/* ===================== PAGINATION ===================== */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border border-black text-black rounded disabled:opacity-50 disabled:cursor-not-allowed"
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
                  className={`px-3 py-1 border rounded ${currentPage === page
                    ? "bg-black text-white border-black"
                    : "border-black text-black"
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
            className="px-3 py-1 border border-black text-black rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}