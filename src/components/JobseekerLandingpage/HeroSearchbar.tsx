"use client";

import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import uploadCVIcon from "@/assets/icons/upload.png";
import CallIcon from "@/assets/icons/Call.png";
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
    const [jobSeekerHub, setJobSeekerHub] = useState<JobSeekerHub | null>(null);
    const [searchOpen, setSearchOpen] = useState(false);

    useEffect(() => {
        async function fetchJobSeekerHub() {
            try {
                const res = await apiGet<JobSeekerHub>(`web/job-seeker-hub-page/get-all`);
                setJobSeekerHub(res);
            } catch {}
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

    const stats = [
        { label: "Coverage", value: "AU + NZ" },
        { label: "Work Types", value: "Perm + Locum" },
        { label: "Approach", value: "Candidate-first" },
    ];

    const otherItems = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ),
            title: "Upload CV",
            subtitle: "Confidential matching with a specialist consultant.",
            action: () => document.getElementById("upload-cv")?.scrollIntoView({ behavior: "smooth" }),
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Speak to a Specialist",
            subtitle: "Career advice, market insights and pathway clarity.",
            href: "/contact-us",
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Explore Locum",
            subtitle: "Short-term, recurring or long-term locum placements.",
            href: "/locum",
        },
    ];

    return (
        <>
            <style>{`
                @keyframes fadeSlideDown {
                    from { opacity: 0; transform: translateY(-8px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeSlideUp {
                    from { opacity: 0; transform: translateY(6px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlideDown { animation: fadeSlideDown 0.25s ease both; }
                .animate-fadeSlideUp   { animation: fadeSlideUp   0.3s ease both; }

                .quick-item {
                    transition: opacity 0.2s ease, max-height 0.35s ease, transform 0.25s ease, margin 0.25s ease, padding 0.25s ease;
                    overflow: hidden;
                }
                .quick-item.visible {
                    opacity: 1;
                    max-height: 120px;
                    transform: translateY(0);
                }
                .quick-item.hidden-item {
                    opacity: 0;
                    max-height: 0;
                    transform: translateY(-6px);
                    margin: 0 !important;
                    pointer-events: none;
                }
            `}</style>

            <section className="bg-[#040D48] full-width-section">
                <div className="inner-width-section py-14 ">
                    <div className="grid items-start gap-10 lg:grid-cols-[1fr_380px]">

                        {/* ── LEFT CONTENT ── */}
                        <div className="flex flex-col gap-6">
                            <span className="w-fit bg-[#1A56C4] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                                Candidate Hub
                            </span>

                            <div>
                                <h1 className="text-3xl lg:text-[42px] font-bold text-white leading-tight">
                                    Medical &amp; Healthcare Jobs in Australia
                                </h1>
                                <h2 className="text-3xl lg:text-[42px] font-bold text-white/50 leading-tight mt-1">
                                    Permanent &amp; Locum Opportunities
                                </h2>
                            </div>

                            <p className="text-sm lg:text-[15px] text-white/60 max-w-xl leading-relaxed">
                                Profession-specific recruitment for GP &amp; Medical, Allied Health, Mental Health,
                                and Oral Health professionals—ethically matched, clinically aligned, and career-first.
                                We connect you with trusted employers, compliant roles, and flexible pathways across
                                Australia, offering personalised guidance, transparent processes, and long-term career
                                opportunities that support professional growth, lifestyle balance, and clinical excellence.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-2">
                                {stats.map((stat) => (
                                    <div
                                        key={stat.label}
                                        className="flex flex-col gap-0.5 border border-white/20 rounded-lg px-5 py-3 min-w-[130px]"
                                    >
                                        <span className="text-white/50 text-xs">{stat.label}</span>
                                        <span className="text-white font-bold text-base lg:text-lg">{stat.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* ── RIGHT: Quick Start Card ── */}
                        <div className="bg-[#0B1B6B] border border-white/10 rounded-2xl p-6 flex flex-col gap-3">

                            {/* Card Header */}
                            <div className="mb-1">
                                <p className="text-white font-semibold text-base">Quick Start</p>
                                <p className="text-white/50 text-xs mt-0.5">
                                    Choose your pathway — we&apos;ll do the heavy lifting.
                                </p>
                            </div>

                            {/* ── Search Jobs Panel ── */}
                            <div
                                className={`rounded-xl overflow-hidden transition-all duration-300 ${
                                    searchOpen
                                        ? "bg-white shadow-xl"
                                        : "bg-white cursor-pointer hover:shadow-md"
                                }`}
                                onClick={!searchOpen ? () => setSearchOpen(true) : undefined}
                            >
                                {/* Top row — always visible */}
                                <div className="flex items-center gap-4 px-4 py-4">
                                    <div className="text-[#040D48] flex-shrink-0">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-semibold text-sm text-[#040D48]">Search Jobs</p>
                                        <p className="text-xs text-gray-500 truncate">
                                            {searchOpen
                                                ? "Select profession & location below"
                                                : "Find roles by profession, location and work type."}
                                        </p>
                                    </div>
                                    {searchOpen && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setSearchOpen(false); }}
                                            className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition"
                                            aria-label="Close"
                                        >
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    )}
                                </div>

                                {/* Expandable form */}
                                {searchOpen && (
                                    <div className="px-4 pb-5 flex flex-col gap-3 animate-fadeSlideDown border-t border-gray-100 pt-3">
                                        {/* Profession */}
                                        <div className="relative">
                                            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 block">
                                                Profession
                                            </label>
                                            <select
                                                value={profession}
                                                onChange={(e) => setProfession(e.target.value)}
                                                className="w-full px-3 py-2.5 pr-9 bg-gray-50 border border-gray-200 text-sm text-gray-700 rounded-lg cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#040D48]/30"
                                            >
                                                <option value="">All Professions</option>
                                                {jobSeekerHub?.professions.map((item) => (
                                                    <option key={item.profession_id} value={item.name}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute bottom-3 right-3 flex items-center">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="relative">
                                            <label className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-1 block">
                                                Location
                                            </label>
                                            <select
                                                value={location}
                                                onChange={(e) => setLocation(e.target.value)}
                                                className="w-full px-3 py-2.5 pr-9 bg-gray-50 border border-gray-200 text-sm text-gray-700 rounded-lg cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-[#040D48]/30"
                                            >
                                                <option value="">All of Australia</option>
                                                {jobSeekerHub?.locations.map((item) => (
                                                    <option key={item.state_id} value={item.name}>
                                                        {item.name}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="pointer-events-none absolute bottom-3 right-3 flex items-center">
                                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <button
                                            onClick={handleSearch}
                                            className="w-full bg-[#040D48] hover:bg-[#074CA4] active:scale-[0.98] text-white text-sm font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
                                        >
                                            Find Jobs
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* ── Other Items — collapse when search is open ── */}
                            {otherItems.map((item, i) => {
                                const inner = (
                                    <div
                                        className={`quick-item ${searchOpen ? "hidden-item" : "visible"} flex items-start gap-4 rounded-xl px-4 py-4 bg-[#0F2280] hover:bg-[#132899] cursor-pointer transition-colors`}
                                        style={{ transitionDelay: searchOpen ? "0ms" : `${i * 50}ms` }}
                                        onClick={item.action}
                                    >
                                        <div className="mt-0.5 flex-shrink-0 text-white/60">{item.icon}</div>
                                        <div>
                                            <p className="font-semibold text-sm text-white">{item.title}</p>
                                            <p className="text-xs mt-0.5 text-white/50">{item.subtitle}</p>
                                        </div>
                                    </div>
                                );

                                return item.href ? (
                                    <Link href={item.href} key={i}>{inner}</Link>
                                ) : (
                                    <div key={i}>{inner}</div>
                                );
                            })}

                            {/* Subtle hint when search is open */}
                            {searchOpen && (
                                <p className="text-center text-white/25 text-xs animate-fadeSlideUp pt-1">
                                    ✕ close search to see more options
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}