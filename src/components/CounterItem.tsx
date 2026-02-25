"use client";
import React, { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

interface CounterItem {
  label: string;
  value: number;
}

interface JobSeekerHub {
  totalClients: number;
  totalCandidates: number;
  totalJobs: number;
}

export default function CounterSection() {
  const [counters, setCounters] = useState<CounterItem[]>([
    { label: "Total Clients", value: 18 },
    { label: "Total Jobs", value: 1500 },
    { label: "Avg Offer Time (days)", value: 14 },
    { label: "Total Placements", value: 0 },
  ]);

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  /** Fetch API data */
  useEffect(() => {
    async function fetchJobSeekerHub() {
      try {
        const res = await apiGet<JobSeekerHub>(
          "web/job-seeker-hub-page/get-all"
        );

        const updatedCounters = [
          { label: "Total Clients", value: res.totalClients },
          { label: "Total Jobs", value: res.totalJobs },
          { label: "Avg Offer Time (days)", value: 14 },
          { label: "Total Placements", value: res.totalCandidates },
        ];

        setCounters(updatedCounters);
        setCounts(updatedCounters.map(() => 0));
      } catch (error) {
        console.error("Failed to fetch job seeker hub data", error);
      }
    }

    fetchJobSeekerHub();
  }, []);

  /** Counter animation */
  useEffect(() => {
    if (!counters.length) return;

    const intervals: NodeJS.Timeout[] = [];

    counters.forEach((counter, index) => {
      const increment = Math.ceil(counter.value / 100);

      const interval = setInterval(() => {
        setCounts((prev) => {
          const updated = [...prev];
          if (updated[index] < counter.value) {
            updated[index] = Math.min(updated[index] + increment, counter.value);
          }
          return updated;
        });
      }, 30);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [counters]);

  return (
    <section className="text-[#575D84] full-width-section my-8 md:my-10 lg:mb-[46px] lg:mt-[59px]">
      <div className="inner-width-section">

        {/* 2-col on mobile, 2-col on tablet, 4-col on desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-56">
          {counters.map((counter, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-center text-left
                         bg-white/10 rounded-xl
                         py-5 px-3
                         sm:py-6 sm:px-4
                         md:py-7 md:px-5
                         lg:py-8 lg:px-4"
            >
              {/* Number */}
              <p className="font-bold leading-none
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            lg:text-[48px]">
                {counts[index] ?? 0}
              </p>

              {/* Label */}
              <p className="mt-2 font-medium leading-snug
                            text-xs
                            sm:text-sm
                            md:text-sm
                            lg:text-[16px]">
                {counter.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}