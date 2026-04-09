"use client";
import icon1 from "@/assets/homeico/2024-australia-achiever.webp"
import apackinsider from "@/assets/homeico/apackinsider.webp"
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { apiGet } from "@/lib/api";
import backgroundImage from "@/assets/homeico/imagfinal.jpg";

type HomeData = {
    clientCount: number;
    candidateCount: number;
    jobCount: number;
    placementCount: number;
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
    const animatedActiveJobsCount = useCounterAnimation(
        homeData ? homeData.jobCount : demoCandidateCount,
        2000
    );
    const animatedPlacementsCount = useCounterAnimation(
        2605,
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
            label: "Healthcare employers",
            value: animatedClientCount.toString() + "+",
            isAnimated: true
        },
        {
            label: "Candidates",
            value: animatedCandidateCount.toString() + "+",
            isAnimated: true
        },
        {
            label: "Active Jobs",
            value: animatedActiveJobsCount.toString() + "+",
            isAnimated: true
        },
        {   label: "Placements", 
            value: animatedPlacementsCount.toString() + "+", 
            isAnimated: true 
        },
        { label: "Satisfaction Level", value: "4.9/5", isAnimated: false },
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

                {/* 
                  LAYOUT STRATEGY:
                  - Outer wrapper: full viewport width, relative positioned
                  - Inner content: constrained by inner-width-section, holds left text
                  - Right image: absolutely positioned from 45% left to right edge of outer wrapper
                  - Left content is capped at 45% width so image never overlaps text
                */}
                <div className="relative w-full py-10 lg:py-10">

                    {/* RIGHT IMAGE - anchored to right edge of full-width outer container */}
                    {/* Starts at 45% from left so it never overlaps the text column */}
                    <div
                        className="absolute inset-y-0 right-0 hidden lg:block"
                        style={{ left: "50%", zIndex: 1 }}
                    >
                        <div className="relative w-full h-full">
                            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                <source src="/home-page-vid.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>

                    {/* LEFT CONTENT — constrained inside inner-width-section, max 45% on desktop */}
                    <div className="inner-width-section px-4 lg:px-0 relative" style={{ zIndex: 2 }}>
                        {/* 
                          lg:max-w-[45%]: hard cap so text never reaches the image area.
                          This works regardless of what inner-width-section resolves to.
                        */}
                        <div className="w-full lg:max-w-[45%] text-left pr-0 lg:pr-6">
                            <h1 className="text-2xl sm:text-3xl lg:text-[30px] lg:text-left md:text-center text-left font-bold text-white leading-tight mb-4">
                                Connecting Australia&apos;s healthcare services with the right clinicians — faster, safer and with better long-term fit.
                            </h1>

                            <p className="text-sm sm:text-[16px] text-white/95 leading-relaxed lg:text-left md:text-center text-left mb-8">
                                Medfuture supports healthcare employers, doctors, allied health professionals, mental health clinicians and dental teams with permanent, locum and international recruitment pathways built around compliance, continuity and career alignment.
                            </p>

                            {/* BADGES */}
                            <div className="flex flex-wrap items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start gap-6 mb-10">
                                <Image
                                    src={icon1}
                                    alt="2024 Australia Achiever Award"
                                    width={136}
                                    height={136}
                                    className="object-contain h-[136px] w-auto"
                                    priority={false}
                                    loading="lazy"
                                />
                                <Image
                                    src={apackinsider}
                                    alt="Apack Insider Recognition"
                                    width={136}
                                    height={136}
                                    className="object-contain h-[136px] w-auto"
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col items-center justify-center md:items-center md:justify-center lg:items-start lg:justify-start sm:flex-row gap-4">
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
                    </div>

                    {/* MOBILE/TABLET IMAGE — visible only below lg breakpoint */}
                    <div className="w-full lg:hidden flex justify-center items-center mt-8 px-4">
                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                <source src="/home-page-vid.mp4" type="video/mp4" />
                            </video>
                    </div>

                </div>
            </div>

            {/* STATS BAR */}
            <div className="relative z-10 inner-width-section px-4 lg:px-0 lg:py-[50px]">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 lg:gap-6 lg:pb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center text-[#040D48] bg-[rgba(255,255,255,0.08)] rounded-lg py-4"
                        >
                            <div className="text-lg sm:text-xl lg:text-[40px] font-bold mb-1">
                                {stat.value}
                            </div>
                            <p className="text-[10px] lg:text-[16px] text-[#040D48]">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
