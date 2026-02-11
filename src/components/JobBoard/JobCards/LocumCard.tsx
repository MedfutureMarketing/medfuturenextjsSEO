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
              className={`border-1-2 cursor-pointer rounded-lg py-[14px] px-[22px] transition-all flex-shrink-0
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

              <div className="flex justify-between mb-[12px]">
                <h3 className="font-semibold text-[16px] ">
                  {job.job_title}
                </h3>
              </div>

              <div className="flex justify-between mb-0">
                <span className="text-[12px] flex flex-wrap gap-2 text-[#4A5565]">
            
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16402 13.98C8.93076 13.2842 9.64037 12.528 10.286 11.7187C11.646 10.01 12.4733 8.32532 12.5293 6.82732C12.5515 6.21851 12.4507 5.61149 12.233 5.0425C12.0154 4.47352 11.6852 3.95425 11.2623 3.51571C10.8395 3.07717 10.3326 2.72836 9.77187 2.49012C9.21118 2.25188 8.60822 2.12909 7.99902 2.12909C7.38981 2.12909 6.78685 2.25188 6.22616 2.49012C5.66547 2.72836 5.15855 3.07717 4.73569 3.51571C4.31282 3.95425 3.98268 4.47352 3.76499 5.0425C3.5473 5.61149 3.44652 6.21851 3.46868 6.82732C3.52535 8.32532 4.35335 10.01 5.71268 11.7187C6.35832 12.528 7.06794 13.2842 7.83468 13.98C7.90846 14.0467 7.96335 14.0951 7.99935 14.1253L8.16402 13.98ZM7.50735 14.7567C7.50735 14.7567 2.66602 10.6793 2.66602 6.66732C2.66602 5.25283 3.22792 3.89628 4.22811 2.89608C5.22831 1.89589 6.58486 1.33398 7.99935 1.33398C9.41384 1.33398 10.7704 1.89589 11.7706 2.89608C12.7708 3.89628 13.3327 5.25283 13.3327 6.66732C13.3327 10.6793 8.49135 14.7567 8.49135 14.7567C8.22202 15.0047 7.77868 15.002 7.50735 14.7567ZM7.99935 8.53398C8.49442 8.53398 8.96921 8.33732 9.31928 7.98725C9.66935 7.63718 9.86602 7.16239 9.86602 6.66732C9.86602 6.17225 9.66935 5.69745 9.31928 5.34738C8.96921 4.99732 8.49442 4.80065 7.99935 4.80065C7.50428 4.80065 7.02948 4.99732 6.67942 5.34738C6.32935 5.69745 6.13268 6.17225 6.13268 6.66732C6.13268 7.16239 6.32935 7.63718 6.67942 7.98725C7.02948 8.33732 7.50428 8.53398 7.99935 8.53398ZM7.99935 9.33398C7.29211 9.33398 6.61383 9.05303 6.11373 8.55294C5.61363 8.05284 5.33268 7.37456 5.33268 6.66732C5.33268 5.96007 5.61363 5.2818 6.11373 4.7817C6.61383 4.2816 7.29211 4.00065 7.99935 4.00065C8.70659 4.00065 9.38487 4.2816 9.88497 4.7817C10.3851 5.2818 10.666 5.96007 10.666 6.66732C10.666 7.37456 10.3851 8.05284 9.88497 8.55294C9.38487 9.05303 8.70659 9.33398 7.99935 9.33398Z" fill="#0A2E5C"/>
</svg>
      {job.region?.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== MOBILE JOB LIST ===================== */}
      <div className="block lg:hidden  overflow-y-auto scrollbar-hide">
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
                <h3 className="font-semibold text-sm text-[#0E2851]">
                  {job.job_title}
                </h3>
              </div>
               <div className="flex justify-between mb-0">
                <span className="text-[12px] flex flex-wrap gap-2 text-[#4A5565]">
            
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.16402 13.98C8.93076 13.2842 9.64037 12.528 10.286 11.7187C11.646 10.01 12.4733 8.32532 12.5293 6.82732C12.5515 6.21851 12.4507 5.61149 12.233 5.0425C12.0154 4.47352 11.6852 3.95425 11.2623 3.51571C10.8395 3.07717 10.3326 2.72836 9.77187 2.49012C9.21118 2.25188 8.60822 2.12909 7.99902 2.12909C7.38981 2.12909 6.78685 2.25188 6.22616 2.49012C5.66547 2.72836 5.15855 3.07717 4.73569 3.51571C4.31282 3.95425 3.98268 4.47352 3.76499 5.0425C3.5473 5.61149 3.44652 6.21851 3.46868 6.82732C3.52535 8.32532 4.35335 10.01 5.71268 11.7187C6.35832 12.528 7.06794 13.2842 7.83468 13.98C7.90846 14.0467 7.96335 14.0951 7.99935 14.1253L8.16402 13.98ZM7.50735 14.7567C7.50735 14.7567 2.66602 10.6793 2.66602 6.66732C2.66602 5.25283 3.22792 3.89628 4.22811 2.89608C5.22831 1.89589 6.58486 1.33398 7.99935 1.33398C9.41384 1.33398 10.7704 1.89589 11.7706 2.89608C12.7708 3.89628 13.3327 5.25283 13.3327 6.66732C13.3327 10.6793 8.49135 14.7567 8.49135 14.7567C8.22202 15.0047 7.77868 15.002 7.50735 14.7567ZM7.99935 8.53398C8.49442 8.53398 8.96921 8.33732 9.31928 7.98725C9.66935 7.63718 9.86602 7.16239 9.86602 6.66732C9.86602 6.17225 9.66935 5.69745 9.31928 5.34738C8.96921 4.99732 8.49442 4.80065 7.99935 4.80065C7.50428 4.80065 7.02948 4.99732 6.67942 5.34738C6.32935 5.69745 6.13268 6.17225 6.13268 6.66732C6.13268 7.16239 6.32935 7.63718 6.67942 7.98725C7.02948 8.33732 7.50428 8.53398 7.99935 8.53398ZM7.99935 9.33398C7.29211 9.33398 6.61383 9.05303 6.11373 8.55294C5.61363 8.05284 5.33268 7.37456 5.33268 6.66732C5.33268 5.96007 5.61363 5.2818 6.11373 4.7817C6.61383 4.2816 7.29211 4.00065 7.99935 4.00065C8.70659 4.00065 9.38487 4.2816 9.88497 4.7817C10.3851 5.2818 10.666 5.96007 10.666 6.66732C10.666 7.37456 10.3851 8.05284 9.88497 8.55294C9.38487 9.05303 8.70659 9.33398 7.99935 9.33398Z" fill="#0A2E5C"/>
</svg>
      {job.region?.name}
                </span>
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