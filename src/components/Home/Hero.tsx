"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.webp"
import apackinsider from "@/assets/homeico/apackinsider.webp"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";

type HomeData = {
    clientCount: number;
    candidateCount: number;
};

// Counter animation hook - animates once on mount, then updates smoothly to new values
function useCounterAnimation(targetValue: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const [prevTarget, setPrevTarget] = useState(0);

    useEffect(() => {
        if (targetValue === prevTarget) return;

        let startTime: number | null = null;
        let animationFrame: number;
        const startValue = count;
        const difference = targetValue - startValue;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentCount = Math.floor(startValue + (easeOutQuart * difference));

            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setPrevTarget(targetValue);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [targetValue, duration]);

    return count;
}

export default function Hero() {
    const [homeData, setHomeData] = useState<HomeData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Demo values to show while loading
    const demoClientCount = 9465;
    const demoCandidateCount = 1000;

    // Animated counters
    const animatedClientCount = useCounterAnimation(
        homeData ? homeData.clientCount : demoClientCount,
        2000
    );
    const animatedCandidateCount = useCounterAnimation(
        homeData ? homeData.candidateCount : demoCandidateCount,
        2000
    );

    useEffect(() => {
        async function fetchHomeData() {
            try {
                const res = await apiGet<HomeData>(`web/home-page/get-all`);
                setHomeData(res);
                setIsLoading(false);
            } catch {
                setIsLoading(false);
            }
        }
        fetchHomeData();
    }, []);

    const stats = [
        {
            label: "Employers",
            value: animatedClientCount.toString() + "+",
            isAnimated: true
        },
        {
            label: "Professional Placements",
            value: animatedCandidateCount.toString() + "+",
            isAnimated: true
        },
        { label: "Avg, Time to Hire", value: "3-7 Days", isAnimated: false },
        { label: "Satisfaction", value: "4.9/5", isAnimated: false },
    ];

    return (
        <div className="bg-[#0D1A3E] full-width-section w-full">
  <div className="inner-width-section px-4 lg:px-0">

    {/* HERO CONTENT */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 py-10 lg:py-20">

      {/* TEXT CONTENT */}
      <div className="w-full lg:w-2/3 text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight mb-4">
Trusted Medical Recruitment Agency in Australia Offering 1,000+ Jobs from 9,579+ Employers        </h1>

        <p className="text-sm sm:text-base text-[#FFFFFFB2] leading-relaxed max-w-xl mx-auto lg:mx-0">
        Australia’s leading medical recruitment agency delivers results fast. Our average time to hire is 3–7 days, and satisfaction ratings are 4.9/5. Register now and let us match you with top healthcare opportunities.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 lg:hidden block justify-center lg:justify-start">
          <Link
            href="/job-seeker-hub"
            className="px-6 py-3 bg-[#074CA4] text-white rounded-md text-sm font-medium hover:bg-blue-600 transition text-center"
          >
            Job Seeker Hub
          </Link>

          <Link
            href="/employer-hub"
            className="px-6 py-3 bg-white text-[#0D1A3E] rounded-md text-sm font-medium hover:bg-gray-200 transition text-center"
          >
            Employer Hub
          </Link>
        </div>
      </div>

      {/* IMAGES */}
      <div className="w-full lg:w-1/2 flex justify-center gap-3">
        <Image
          src={icon1}
          alt="2024 Australia Achiever Award"
          width={180}
          height={240}
          className="object-contain"
            priority={false}
            loading="lazy"
        />
        <Image
          src={apackinsider}
          alt="Apack Insider Recognition"
          width={180}
          height={240}
          className="object-contain"
            priority={false}
            loading="lazy"
        />
      </div>
    </div>

    {/* STATS */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center text-white bg-[rgba(255,255,255,0.08)] rounded-lg py-4"
        >
          <div className="text-lg sm:text-xl lg:text-3xl font-bold mb-1">
            {stat.value}
          </div>
          <p className="text-xs sm:text-sm text-white/80">
            {stat.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>

    );
}