/* eslint-disable react/no-unescaped-entities */

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import { apiGet } from "@/lib/api";

type Profession = {
    profession_id: number;
    name: string;
};

type Location = {
    state_id: number;
    name: string;
};

type JobSeekerHub = {
    professions: Profession[];
    locations: Location[];
};

export default function JobseekersearchHero() {
    const router = useRouter();

    const [profession, setProfession] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [JobSeekerHub, setJobSeekerHub] = useState<JobSeekerHub | null>(null);

    useEffect(() => {
        async function fetchJobSeekerHub() {
            try {
                const res = await apiGet<JobSeekerHub>(`web/job-seeker-hub-page/get-all`);
                setJobSeekerHub(res);
            } catch { }
        }
        fetchJobSeekerHub();
    }, []);

    const slugify = (value: string) =>
        value.toLowerCase().trim().replace(/\s+/g, "-");

    const handleSearch = () => {
        const professionSlug = profession ? `${slugify(profession)}-jobs` : "";
        const locationSlug = location
            ? `in-${slugify(location)}?page=1`
            : "australia?page=1";
        router.push(`/permanent/${professionSlug}/${locationSlug}`);
    };

    const quickStartItems = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            ),
            title: "Search Jobs",
            subtitle: "Find roles by profession, location and work type.",
            href: "/permanent/australia?page=1",
            highlight: true,
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Upload CV",
            subtitle: "Confidential matching with a specialist consultant.",
            scrollTo: "upload-cv",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Speak to a Specialist",
            subtitle: "Career advice, market insights and pathway clarity.",
            href: "/contact-us",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Explore Locum",
            subtitle: "Short-term, recurring or long-term locum placements.",
            href: "/locum",
        },
    ];

    const stats = [
        { label: "Coverage", value: "AU + NZ" },
        { label: "Work Types", value: "Perm + Locum" },
        { label: "Approach", value: "Candidate-first" },
    ];

    return (
        <section className="bg-[#001C55] full-width-section">
            <div className="inner-width-section lg:py-5">

                {/* ── OUTER GRID: single col → tablet 2-col → desktop 2-col ── */}
                <div className="grid items-start gap-6 lg:mb-[79px] md:mb-[60px] mb-10
                                md:grid-cols-[1fr_320px] md:gap-8 md:items-start
                                lg:gap-10 lg:grid-cols-[1fr_440px]">

                    {/* ── LEFT CONTENT ── */}
                    <div className="flex flex-col gap-2 pb-0 mt-5
                                    md:mt-10 lg:mt-0 md:py-4
                                    ">

                        {/* Badge */}
                        <div className="inline-flex w-fit">
                            <span className="bg-[#1A56C4] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                                Candidate Hub
                            </span>
                        </div>

                        {/* Heading */}
                        <div className="mt-2">
                            <h1 className="text-xl md:text-2xl lg:text-[36px] font-bold text-white leading-tight">
                                Medical &amp; Healthcare Jobs in Australia
                            </h1>
                            <h2 className="text-xl md:text-2xl lg:text-[36px] text-white/60 leading-tight mt-1">
                                Permanent &amp; Locum Opportunities
                            </h2>
                        </div>

                        {/* Description — hidden on small tablet to save space, shown on larger */}
                        <p className="text-xs md:text-sm lg:text-[16px] text-white/70 max-w-xl leading-relaxed mt-2
                                       ">
                            Profession-specific recruitment for GP, Medical, Allied Health, Mental Health,
                            and Oral Health professionals — ethically matched, clinically aligned, and career-first.
                            We connect you with trusted employers, compliant roles, and flexible pathways across
                            Australia, offering personalised guidance, transparent processes, and long-term career
                            opportunities that support professional growth, lifestyle balance, and clinical excellence.
                        </p>

                        {/* Description — short version for mobile only */}
                     

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-2 mt-6
                                        md:grid-cols-3 md:gap-3 md:mt-8
                                        lg:flex lg:flex-wrap lg:gap-3 lg:mt-[42px]">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="flex flex-col gap-0.5 bg-white/10 border border-white/20 rounded-lg
                                               px-3 py-2.5
                                               md:px-4 md:py-3
                                               lg:w-[199px] lg:px-5 lg:py-3"
                                >
                                    <span className="text-white text-[11px] md:text-xs lg:text-[14px] leading-tight">
                                        {stat.label}
                                    </span>
                                    <span className="text-white font-bold text-xs md:text-sm lg:text-[20px]">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT: Quick Start Card ── */}
                    <div className="bg-white/30 border border-white/10 rounded-[8px] flex flex-col
                                    p-4 gap-3 mb-6
                                    md:p-5 md:gap-3 md:mb-0 md:mt-10 md:self-start md:sticky md:top-6
                                    lg:p-6 lg:gap-4 lg:mb-0 lg:mt-0 lg:static">

                        <div className="mb-0 lg:mb-1">
                            <p className="text-white font-semibold text-base">Quick Start</p>
                            <p className="text-white/50 text-xs mt-0.5">
                                Choose your pathway — we'll do the heavy lifting.
                            </p>
                        </div>

                        {quickStartItems.map((item, i) => {
                            const content = (
                                <div
                                    key={i}
                                    className={`flex items-center gap-3
                                                rounded-[8px] cursor-pointer transition-all
                                                px-3 py-3
                                                md:px-3 md:py-3
                                                lg:items-start lg:gap-4 lg:px-4 lg:py-4
                                                ${item.highlight
                                                    ? "bg-white shadow-md"
                                                    : "border border-white/10 hover:bg-white/10"
                                                }`}
                                    onClick={
                                        item.scrollTo
                                            ? () => document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: "smooth" })
                                            : undefined
                                    }
                                >
                                    {/* Icon */}
                                    <div className={`flex-shrink-0 ${item.highlight ? "text-[#040D48]" : "text-white/70"}`}>
                                        {item.icon}
                                    </div>

                                    {/* Text */}
                                    <div className="min-w-0">
                                        <p className={`font-semibold lg:text-[14px] text-xs ${item.highlight ? "text-[#040D48]" : "text-white"}`}>
                                            {item.title}
                                        </p>
                                        {/* Subtitle hidden on smallest tablet to keep card compact */}
                                        <p className={`text-xs mt-0.5 leading-snug
                                                       hidden sm:block
                                                       ${item.highlight ? "text-gray-500" : "text-white/50"}`}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );

                            if (item.href) {
                                return <Link href={item.href} key={i}>{content}</Link>;
                            }
                            return content;
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}