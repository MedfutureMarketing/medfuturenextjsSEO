"use client";

import Link from "next/link";
import Image from "next/image";
import Careerpathwaymedfuture from "@/assets/jobseeker/Careerpathwaymedfuture.webp";

const pathways = [
    {
        id: 1,
        title: "Permanent vs Locum — choose strategically",
        description:
            "Compare stability, earnings, flexibility and progression pathways for your profession.",
    },
    {
        id: 2,
        title: "Settings that match your practice style",
        description:
            "Private practice, hospital, community, NDIS, telehealth — we match where you'll thrive.",
    },
    {
        id: 3,
        title: "Registration & eligibility clarity",
        description:
            "Practical guidance aligned with the requirements of your profession (AU & NZ).",
    },
];

export default function CareerPathways() {
    return (
        <section className="full-width-section relative mt-10 sm:mt-16 md:mt-20 lg:mt-[125px] overflow-hidden">

            {/* Background Image */}
            <Image
                src={Careerpathwaymedfuture}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
                priority
            />

            {/* Overlay — adjust opacity to control image visibility */}
            <div className="absolute inset-0 bg-white/0" />

            {/* Content — relative + z-10 to sit above image & overlay */}
            <div className="inner-width-section relative z-10 py-[63px]">

                {/* Header */}
                <div className="max-w-xl mb-6 md:mb-8 lg:mb-10">
                    <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-bold text-[#0F172A]">
                        Career Pathways (Reference-Grade Guidance)
                    </h2>
                    <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-[16px] lg:text-[16px] text-[#4A5565] leading-relaxed">
                        AI engines prefer helpful explanations. Candidates prefer clarity. This hub delivers both — so
                        you can make confident decisions.
                    </p>
                </div>

                {/* Pathway Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {pathways.map((pathway) => (
                        <div
                            key={pathway.id}
                            className=" backdrop-blur-sm   p-4 sm:p-5 border-l-4 border-l-[#074CA4]"
                        >
                            <h3 className="text-[13px] sm:text-sm md:text-[16px] font-semibold text-[#0F172A] leading-snug">
                                {pathway.title}
                            </h3>
                            <p className="mt-2 text-[11px] sm:text-xs md:text-[13px] text-[#4A5565] leading-relaxed">
                                {pathway.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-6 md:mt-[70px] flex flex-wrap gap-3 sm:gap-4">
                    <Link
                        href="/permanent"
                        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-[#074CA4] hover:bg-[#0a3d8a] text-white text-xs sm:text-sm font-semibold  transition-colors duration-200"
                    >
                        View Permanent Jobs
                    </Link>
                    <Link
                        href="/locum"
                        className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-gray-50 text-[#0F172A] text-xs sm:text-sm font-semibold border border-[#E2E8F0] transition-colors duration-200"
                    >
                        View Locum Jobs
                    </Link>
                </div>

            </div>
        </section>
    );
}