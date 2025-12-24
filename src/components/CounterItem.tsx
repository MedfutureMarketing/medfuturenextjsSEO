"use client";
import React, { useEffect, useState } from "react";

interface CounterItem {
  label: string;
  value: number;
}

const counters: CounterItem[] = [
  { label: "Total Clients", value: 7813 },
  { label: "Total Jobs", value: 3500 },
  { label: "Avg Offer Time (days)", value: 14 },
  { label: "Total Placements", value: 1500 },
];

export default function CounterSection() {
  const [counts, setCounts] = useState<number[]>(counters.map(() => 0));

  useEffect(() => {
    const intervals: NodeJS.Timeout[] = [];

    counters.forEach((counter, index) => {
      const increment = Math.ceil(counter.value / 100); // speed of counting
      const interval = setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < counter.value) {
            newCounts[index] = Math.min(newCounts[index] + increment, counter.value);
          }
          return newCounts;
        });
      }, 30); // interval in ms
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="  text-[#575D84] lg:mb-[46px] lg:mt-[59px] py-8">
      <div className="inner-width-section max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {counters.map((counter, index) => (
            <div key={index} className="bg-white/10 rounded-lg  flex flex-col items-center justify-center">
            <p className="lg:text-[48px] text-2xl font-bold">{counts[index]}</p>
            <p className="mt-2 lg:text-[16px] text-sm font-medium">{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
