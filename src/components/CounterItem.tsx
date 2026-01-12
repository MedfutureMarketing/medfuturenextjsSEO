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
    { label: "Total Clients", value: 0 },
    { label: "Total Jobs", value: 3500 },
    { label: "Avg Offer Time (days)", value: 14 },
    { label: "Total Placements", value: 0 },
  ]);

  const [counts, setCounts] = useState<number[]>([]);

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
            updated[index] = Math.min(
              updated[index] + increment,
              counter.value
            );
          }
          return updated;
        });
      }, 30);

      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [counters]);

  return (
    <section className="text-[#575D84] lg:mb-[46px] lg:mt-[59px] py-8">
      <div className="inner-width-section max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {counters.map((counter, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg flex flex-col items-center justify-center"
          >
            <p className="lg:text-[48px] text-2xl font-bold">
              {counts[index] ?? 0}
            </p>
            <p className="mt-2 lg:text-[16px] text-sm font-medium">
              {counter.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
