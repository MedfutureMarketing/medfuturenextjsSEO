"use client";

import { apiGet } from "@/lib/api";
import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseJobSearchUrl } from "@/lib/seoJobUrl";

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
  const [totalPages, setTotalPages] = useState(1);
  const [locationData, setLocationData] = useState<LocationMap>({});

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
      } catch (error) {
        console.error("Failed to fetch jobs", error);
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

  /* ===================== UI ===================== */

  return (
    <div>
      {/* ===================== JOB LIST ===================== */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.job_id}
            onClick={() =>
              router.push(`?jobId=${job.job_id}&page=${currentPage}`)
            }
            className={`border cursor-pointer border-[#E6EDF7] rounded-lg p-4 shadow-md transition-all
              ${selectedJobId === String(job.job_id) ? "bg-blue-100" : ""}`}
          >
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-[#0E2851]">
                {job.job_title}
              </h3>
              <span className="text-xs text-gray-500">{job.job_id}</span>
            </div>

            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-2">
              <span className="bg-gray-100 px-2 py-1 rounded">
                {job.profession?.name}
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {job.state?.name}, {job.country?.name}
              </span>
              <span className="bg-gray-100 px-2 py-1 rounded">
                {job.engagement_type?.name}
              </span>
            </div>

            <div className="text-xs text-gray-500">
              {timeFromNow(job.commencement_date)}
            </div>
          </div>
        ))}
      </div>

      {/* ===================== PAGINATION ===================== */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border border-black text-black rounded"
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
                  className={`px-3 py-1 border rounded ${
                    currentPage === page
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
            className="px-3 py-1 border border-black text-black rounded"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
