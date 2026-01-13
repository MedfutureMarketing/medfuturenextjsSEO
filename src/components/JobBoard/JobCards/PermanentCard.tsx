"use client";

import { apiGet } from "@/lib/api";
import { useCallback, useEffect, useMemo, useState, memo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { parseJobSearchUrl } from "@/lib/seoJobUrl";
import Image from "next/image";
import Pointico from "@/assets/icons/listicon.png";

/* ===================== TYPES ===================== */

type Job = {
  job_id: number;
  job_title: string;
  commencement_date: string;
  profession: { name: string };
  country: { name: string };
  state: { name: string };
  engagement_type: { name: string };
};

type JobApiResponse = {
  data: Job[];
  pagination: { count: number; totalPages: number };
};

type Suburb = { name: string };
type Region = { name; suburb?: Suburb[] };
type StateLocation = { name: string; regions?: Region[] };
type LocationApiResponse = { states: StateLocation[] };

type LocationMap = Record<string, { regions: Record<string, string[]> }>;

/* ===================== COMPONENT ===================== */

export default function JobCard() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* ===================== MEMOIZED FILTERS ===================== */
  const filters = useMemo(() => parseJobSearchUrl(pathname), [pathname]);
  const pageFromUrl = useMemo(() => Number(searchParams.get("page")) || 1, [searchParams]);
  const selectedJobId = searchParams.get("jobId");

  /* ===================== STATE ===================== */
  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [locationData, setLocationData] = useState<LocationMap>({});
  const [isLoading, setIsLoading] = useState(true);

  /* ===================== LOAD LOCATIONS ===================== */
  useEffect(() => {
    async function fetchLocations() {
      try {
        const res = await apiGet<LocationApiResponse>("web/jobdetails/locations");
        const map: LocationMap = {};

        res.states.forEach((state) => {
          map[state.name] = { regions: {} };
          state.regions?.forEach((region) => {
            map[state.name].regions[region.name] =
              region.suburb?.map((s) => s.name).sort() || [];
          });
        });

        setLocationData(map);
      } catch (err) {
        console.error("Location load failed", err);
      }
    }

    fetchLocations();
  }, []);

  /* ===================== LOCATION DETECTOR ===================== */
  const detectLocation = useCallback(
    (locationName: string) => {
      if (!locationName) return {};

      if (locationData[locationName]) return { state: locationName };

      for (const state in locationData) {
        const regions = locationData[state].regions;

        if (regions[locationName]) return { state, region: locationName };

        for (const region in regions) {
          if (regions[region].includes(locationName))
            return { state, region, suburb: locationName };
        }
      }

      return { country: locationName };
    },
    [locationData]
  );

  /* ===================== RESET PAGE ON FILTER CHANGE ===================== */
  useEffect(() => setCurrentPage(1), [
    filters.keyword,
    filters.country,
    filters.state,
    filters.region,
    filters.suburb,
  ]);

  /* ===================== SYNC PAGE TO URL ===================== */
  useEffect(() => {
    if (currentPage !== pageFromUrl) {
      router.replace(`${pathname}?page=${currentPage}`, { scroll: false });
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentPage, pathname, router, pageFromUrl]);

  /* ===================== FETCH JOBS ===================== */
  useEffect(() => {
    if (!Object.keys(locationData).length) return;

    async function fetchJobs() {
      setIsLoading(true);

      const params = new URLSearchParams();
      if (filters.keyword) params.set("keyword", filters.keyword);

      const location = filters.suburb || filters.region || filters.state || filters.country;
      if (location) {
        const detected = detectLocation(location);
        Object.entries(detected).forEach(([k, v]) => v && params.set(k, v));
      }

      params.set("page", String(currentPage));

      try {
        const res = await apiGet<JobApiResponse>(
          `web/jobdetails/paginated-filter?${params.toString()}`
        );

        setJobs(res.data);
        setTotalJobs(res.pagination.count);
        setTotalPages(res.pagination.totalPages);
      } catch (err) {
        console.error("Job fetch failed", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchJobs();
  }, [currentPage, filters, detectLocation, locationData]);

  /* ===================== PAGINATION MEMO ===================== */
  const pages = useMemo(() => {
    if (totalPages <= 1) return [];
    const p: (number | string)[] = [];
    p.push(1);
    if (currentPage > 3) p.push("...");
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++)
      p.push(i);
    if (currentPage < totalPages - 2) p.push("...");
    p.push(totalPages);
    return p;
  }, [currentPage, totalPages]);

  /* ===================== TIME FORMAT MEMO ===================== */
  const timeFromNow = useCallback((d: string) => {
    const [day, month, year] = d.split("-");
    const date = new Date(`${year}-${month}-${day}`);
    const diff = date.getTime() - Date.now();
    const mins = Math.round(Math.abs(diff) / 60000);
    const hrs = Math.round(mins / 60);
    const days = Math.round(hrs / 24);

    if (diff < 0)
      return mins < 60
        ? `${mins} min ago`
        : hrs < 24
        ? `${hrs} hrs ago`
        : `${days} days ago`;

    return mins < 60
      ? `in ${mins} min`
      : hrs < 24
      ? `in ${hrs} hrs`
      : `in ${days} days`;
  }, []);

  /* ===================== LOADING SKELETON ===================== */
  if (isLoading) {
    return (
      <div className="space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-32 bg-gray-100 border rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  /* ===================== UI ===================== */
  return (
    <div>
      <div className="text-right text-sm text-gray-500 mb-2">{totalJobs} Jobs Available</div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <JobItem
            key={job.job_id}
            job={job}
            selected={selectedJobId === String(job.job_id)}
            onClick={() => router.push(`?jobId=${job.job_id}&page=${currentPage}`)}
            timeFromNow={timeFromNow}
          />
        ))}
      </div>

      {pages.length > 0 && (
        <div className="flex justify-center gap-2 mt-8">
          {pages.map((p, i) =>
            p === "..." ? (
              <span key={i}>...</span>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p as number)}
                className={`px-3 py-1 rounded ${currentPage === p ? "bg-blue-900 text-white" : "border"}`}
              >
                {p}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

/* ===================== MEMOIZED JOB ITEM ===================== */
const JobItem = memo(function JobItem({
  job,
  selected,
  onClick,
  timeFromNow,
}: {
  job: Job;
  selected: boolean;
  onClick: () => void;
  timeFromNow: (d: string) => string;
}) {
  return (
    <div onClick={onClick} className={`border rounded-lg p-4 cursor-pointer shadow-md ${selected ? "bg-gray-200" : ""}`}>
      <div className="flex justify-between text-xs text-gray-500">
        <span>{job.job_id}</span>
        <span>{timeFromNow(job.commencement_date)}</span>
      </div>

      <h3 className="font-semibold text-[#0E2851] mt-2">{job.job_title}</h3>

      <p className="text-xs text-gray-600">
        {job.state?.name}, {job.country?.name}
      </p>

      <div className="mt-3 space-y-2 text-sm text-gray-600">
        <span className="flex gap-2">
          <Image src={Pointico} alt="" />
          {job.profession?.name}
        </span>
        <span className="flex gap-2">
          <Image src={Pointico} alt="" />
          {job.engagement_type?.name}
        </span>
      </div>
    </div>
  );
});
