"use client";

import { useEffect, useRef, useState } from "react";
import { apiGet } from "@/lib/api";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

interface ProfessionPageResponse {
  jobCounts: number;
  totalTalentPool: number;
  totalStates: number;
  avgTimeToOfferWeeks: number;
}

interface CounterDisplayProps {
  item: CounterItem;
}

function CounterDisplay({ item }: CounterDisplayProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const duration = 2000;
          const steps = 60;
          const stepDuration = duration / steps;
          const increment = item.value / steps;

          let currentStep = 0;

          const timer = setInterval(() => {
            currentStep++;
            const newCount = Math.min(
              Math.round(increment * currentStep),
              item.value
            );
            setCount(newCount);

            if (currentStep >= steps) {
              clearInterval(timer);
              setCount(item.value);
            }
          }, stepDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [item.value]);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center justify-center min-h-[85px] rounded-lg border border-slate-200/60 bg-gradient-to-br from-[#074CA405] to-transparent hover:shadow-lg transition-all duration-300 hover:border-slate-300 lg:p-4 group"
    >
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <div className="text-base sm:text-xs lg:text-[30px] font-bold text-slate-900 tracking-tight whitespace-nowrap">
          {count}
          {item.suffix && (
            <span className="ml-1 font-semibold">{item.suffix}</span>
          )}
        </div>

        <p className="mt-2 text-xs text-slate-600 text-center font-medium">
          {item.label}
        </p>
      </div>
    </div>
  );
}

export default function CounterSection() {
  const [counters, setCounters] = useState<CounterItem[]>([]);

  useEffect(() => {
    async function fetchProfessionData() {
      try {
        const res = await apiGet<ProfessionPageResponse>(
          "web/profession-pages/get-all"
        );

        const updatedCounters: CounterItem[] = [
          {
            value: res.jobCounts,
            label: "Active Specialist GP Jobs",
            suffix: "+",
          },
          {
            value: 9000,
            label: "Top-rated GPs in Talent Pool",
            suffix: "+",
          },
          {
            value: 8,
            label: "States & Territories",
          },
          {
            value: 3,
            label: "Avg. Time to Offer (Weeks)",
          },
        ];

        setCounters(updatedCounters);
      } catch (error) {
        console.error("Failed to fetch profession page data", error);
      }
    }

    fetchProfessionData();
  }, []);

  return (
    <section className="">
      <div className=" mx-auto px-0 ">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:px-0 md:px-8 px-0 lg:gap-8">
          {counters.map((item, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s backwards`,
              }}
            >
              <CounterDisplay item={item} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
      `}</style>
    </section>
  );
}
