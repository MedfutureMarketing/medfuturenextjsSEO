"use client";

import { useEffect, useRef, useState } from "react";

interface CounterItem {
  value: number;
  label: string;
  suffix?: string;
}

const counterData: CounterItem[] = [
  { value: 2000, label: "Active Specialist GP Jobs", suffix: "+" },
  { value: 9000, label: "Top-rated GPs in Talent Pool", suffix: "+" },
  { value: 8, label: "States & Territories" },
  { value: 3, label: "Avg. Time to Offer (Weeks)" },
];

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
      className="flex flex-col items-center justify-center min-h-[85px] xs:min-h-[90px] lg:min-h-[89px] rounded-lg border border-slate-200/60 bg-gradient-to-br from-[#074CA405] to-transparent hover:shadow-lg transition-all duration-300 hover:border-slate-300 p-3 xs:p-4 sm:p-5 md:p-6 group"
    >
      {/* Animated gradient on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-blue-50/20 to-slate-100/10 rounded-lg pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        {/* Counter Number */}
        <div className="text-center">
          <div className="text-base xs:text-lg sm:text-2xl md:text-2xl lg:text-[30px] font-bold text-[#0A2E5C] tracking-tight whitespace-nowrap">
            {count.toLocaleString()}
            {item.suffix && (
              <span className="text-xs xs:text-sm sm:text-lg md:text-xl lg:text-[30px] ml-0.5 xs:ml-1 font-semibold">{item.suffix}</span>
            )}
          </div>
        </div>

        {/* Label */}
        <p className="mt-1.5 lg:mt-2 text-[11px]  lg:text-[14px] text-[#0F172A] text-center leading-tight px-1 lg:max-w-none font-medium">
          {item.label}
        </p>
      </div>
    </div>
  );
}

export default function CounterSection() {
  return (
    <section className="lg:py-6 lg:py-0 pb-16 ">
      <div className="inner-width-section mx-auto px-3 lg:px-8">
        {/* Counters Grid */}
        <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {counterData.map((item, index) => (
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

        /* Ensure smooth scrolling on touch devices */
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
        }
      `}</style>
    </section>
  );
}