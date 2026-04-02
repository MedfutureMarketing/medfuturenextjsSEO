"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.webp"
import apackinsider from "@/assets/homeico/apackinsider.webp"
import healthcareTeam from "@/assets/homeico/bgimagemedfuture.png" 
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import backgroundImage from "@/assets/homeico/imagfinal.jpg";

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
        <>
            {/* HEALTHCARE HERO SECTION */}
            <div className="relative w-full overflow-hidden full-width-section">
                {/* Background Image */}
                <Image
                    src={backgroundImage}
                    alt="Healthcare background"
                    fill
                    className="absolute inset-0 object-cover -z-10"
                    priority
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#003d7a]/80 to-[#1a5fa8]/80 -z-5"></div>

                <div className="inner-width-section px-4 lg:px-0 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-0 lg:gap-0 py-10 lg:py-20 relative">
                        
                        {/* LEFT CONTENT */}
                        <div className="w-full lg:w-1/2 text-left z-10 pr-0 lg:pr-8">
                            <h1 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight mb-4">
                                Connecting Australia's healthcare services with the right clinicians  faster, safer and with better long-term fit.
                            </h1>

                            <p className="text-sm sm:text-[16px] text-white/95 leading-relaxed mb-8 max-w-lg">
                                Medfuture supports healthcare employers, doctors, allied health professionals, mental health clinicians and dental teams with permanent, locum and international recruitment pathways built around compliance, continuity and career alignment.
                            </p>

                            {/* BADGES - Display as Images */}
                            <div className="flex flex-wrap gap-6 mb-8">
                                <Image
                                    src={icon1}
                                    alt="2024 Australia Achiever Award"
                                    width={136.1269989013672}
                                    height={136.1269989013672}
                                    className="object-contain h-[136.1269989013672px] w-auto"
                                    priority={false}
                                    loading="lazy"
                                />
                                <Image
                                    src={apackinsider}
                                    alt="Apack Insider Recognition"
                                    width={136.1269989013672}
                                    height={136.1269989013672}
                                    className="object-contain h-[136.1269989013672px] w-auto"
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>
                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/job-seeker-hub"
                                    className="px-6 py-3 bg-[#0066cc] text-white rounded text-sm font-semibold hover:bg-blue-700 transition duration-300 transform hover:translate-y-[-2px] text-center"
                                >
                                    Explore Job Seeker Hub
                                </Link>

                                <Link
                                    href="/employer-hub"
                                    className="px-6 py-3 bg-transparent border-2 border-white text-white rounded text-sm font-semibold hover:bg-white hover:text-[#003d7a] transition duration-300 transform hover:translate-y-[-2px] text-center"
                                >
                                    Explore Employer Hub
                                </Link>
                            </div>
                        </div>
                        {/* RIGHT IMAGE - FULL BLEED */}
                        <div className="absolute right-[-350px] top-0 bottom-0 w-full hidden lg:flex justify-end items-center">
                            <Image
                                src={healthcareTeam}
                                alt="Healthcare professionals team"
                                width={900}
                                height={600}
                                className="h-full w-auto object-cover object-right"
                                priority={false}
                                loading="lazy"
                            />
                        </div>
                        {/* MOBILE/TABLET IMAGE */}
                        <div className="w-full lg:hidden flex justify-center items-center mt-8">
                            <Image
                                src={healthcareTeam}
                                alt="Healthcare professionals team"
                                width={600}
                                height={500}
                                className="w-full max-w-sm h-auto object-cover rounded-lg"
                                priority={false}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div> 
            </div>
                <div className="relative z-10 inner-width-section px-4 lg:px-0 py-[50px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-26 pb-16">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="text-center text-[#040D48] bg-[rgba(255,255,255,0.08)] rounded-lg py-4"
                            >
                                <div className="text-lg sm:text-xl lg:text-[40px] font-bold mb-1">
                                    {stat.value}
                                </div>
                                <p className="text-xs sm:text-[16px] text-[#040D48]">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
        </>
    );
}