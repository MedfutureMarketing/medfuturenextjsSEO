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
        <div className="bg-[#0D1A3E] full-width-section">
            <div className="grid grid-cols-1 inner-width-section lg:grid-cols-3 lg:gap-[157px] px-4 lg:px-0">
                <div className="lg:col-span-2 flex flex-col justify-center lg:mb-[31px]">
                    <h1 className="text-3xl lg:text-[36px] font-[700] text-white leading-tight lg:mt-[62px] mt-8 mb-[22px]">
                        Medfuture Australia – Elevate Your Medical Career
                    </h1>
                    <p className="text-xs lg:text-[16px] lg:w-[676px] w-full text-[#FFFFFFB2] leading-relaxed">
                        Connecting healthcare professionals with trusted employers across Australia. Whether you are seeking your next career opportunity or hiring top talent, we provide expert guidance, reliable placements, and tailored solutions that strengthen teams and advance careers.
                    </p>
                </div>

                <div className="block lg:hidden lg:py-0 py-8">
                    <div className="w-full lg:flex-1 flex lg:justify-end justify-center gap-3 lg:gap-4">
                        <Link
                            href="/job-seeker-hub"
                            className="w-full lg:px-6 py-3 bg-[#074CA4] text-white font-[16px] rounded-[4px] hover:bg-gray-400 text-center"
                        >
                            Job Seeker Hub
                        </Link>
                        <Link
                            href="/employer-hub"
                            className="w-full lg:px-6 py-3 bg-[#0D1A3E] border bg-gray-50 text-black font-[14px] rounded-[4px] hover:bg-gray-700 transition-colors whitespace-nowrap text-center"
                        >
                            Employer Hub
                        </Link>
                    </div>
                </div>

                <div className="flex lg:items-center lg:justify-center">
                    <div className="relative w-full lg:h-full flex items-center justify-center gap-8">
                        <div className="flex items-center justify-center">
                            <Image
                                src={icon1}
                                alt="2024 Australia Achiever Award"
                                // Solution 1: Let image display at natural size
                                className="h-auto w-auto max-w-[174px]"
                                // Or Solution 2: Use explicit dimensions
                                // width={174}
                                // height={174}
                                priority
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Image
                                src={apackinsider}
                                alt="Apack Insider Recognition"
                                // Solution 1: Let image display at natural size
                                className="h-auto w-auto max-w-[174px]"
                                // Or Solution 2: Use explicit dimensions
                                // width={174}
                                // height={174}
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full border-gray-200 inner-width-section">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[17px] px-4 py-4 lg:px-0 lg:mt-[21px] pb-[80px]">
                    {stats.map((stat, index) => (
                        <div 
                            key={index} 
                            className="text-center text-white bg-[rgba(255,255,255,0.07)] border-gray-200 py-[10px] rounded-[8px]"
                        >
                            <div className="text-sm lg:text-[30px] font-bold mb-2">
                                {stat.value}
                            </div>
                            <p className="text-gray-600 text-[10px] lg:text-[14px] text-white font">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}