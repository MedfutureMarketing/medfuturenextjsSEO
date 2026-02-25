/* eslint-disable react/no-unescaped-entities */

"use client";

// import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import HeroImage from "@/assets/homeico/jobseekerhub.png";
// import uploadCVIcon from "@/assets/icons/upload.png";
// import registerIcon from "@/assets/icons/register.png";
// import CallIcon from "@/assets/icons/Call.png";
// import ReferIcon from "@/assets/icons/Reffer.png";
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
        <section className="bg-[#040D48] full-width-section">
            <div className="inner-width-section py-14 lg:py-5">
                <div className="grid items-start gap-10 lg:grid-cols-[1fr_480px]">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col gap-6">

                        {/* Badge */}
                        <div className="inline-flex w-fit">
                            <span className="bg-[#1A56C4] text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wide">
                                Candidate Hub
                            </span>
                        </div>

                        {/* Heading */}
                        <div>
                            <h1 className="text-3xl lg:text-[42px] font-bold text-white leading-tight">
                                Medical &amp; Healthcare Jobs in Australia
                            </h1>
                            <h2 className="text-3xl lg:text-[42px] font-bold text-white/60 leading-tight mt-1">
                                Permanent &amp; Locum Opportunities
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-sm lg:text-[15px] text-white/60 max-w-xl leading-relaxed">
                            Profession-specific recruitment for GP , Medical, Allied Health, Mental Health,
                            and Oral Health professionals—ethically matched, clinically aligned, and career-first.
                            We connect you with trusted employers, compliant roles, and flexible pathways across
                            Australia, offering personalised guidance, transparent processes, and long-term career
                            opportunities that support professional growth, lifestyle balance, and clinical excellence.
                        </p>

                        {/* Stats Row */}
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

                    {/* RIGHT: Quick Start Card */}
                    <div className="bg-[#0B1B6B] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                        <div className="mb-1">
                            <p className="text-white font-semibold text-base">Quick Start</p>
                            <p className="text-white/50 text-xs mt-0.5">Choose your pathway — we'll do the heavy lifting.</p>
                        </div>

                        {quickStartItems.map((item, i) => {
                            const content = (
                                <div
                                    key={i}
                                    className={`flex items-start gap-4 rounded-xl px-4 py-4 cursor-pointer transition-all
                                        ${item.highlight
                                            ? "bg-white shadow-md"
                                            : "bg-[#0F2280] hover:bg-[#132899]"
                                        }`}
                                    onClick={
                                        item.scrollTo
                                            ? () => document.getElementById(item.scrollTo!)?.scrollIntoView({ behavior: "smooth" })
                                            : undefined
                                    }
                                >
                                    {/* Icon */}
                                    <div className={`mt-0.5 flex-shrink-0 ${item.highlight ? "text-[#040D48]" : "text-white/70"}`}>
                                        {item.icon}
                                    </div>
                                    {/* Text */}
                                    <div>
                                        <p className={`font-semibold text-sm ${item.highlight ? "text-[#040D48]" : "text-white"}`}>
                                            {item.title}
                                        </p>
                                        <p className={`text-xs mt-0.5 ${item.highlight ? "text-gray-500" : "text-white/50"}`}>
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                            );

                            if (item.href) {
                                return (
                                    <Link href={item.href} key={i}>
                                        {content}
                                    </Link>
                                );
                            }
                            return content;
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}