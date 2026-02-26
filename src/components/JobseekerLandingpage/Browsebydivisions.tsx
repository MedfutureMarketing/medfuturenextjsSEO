"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import GPcareerhub from "@/assets/jobseeker/gpcareerhub.webp";
import AHPcareerhub from "@/assets/jobseeker/aphcareerhub.webp";
import MHcareerhub from "@/assets/jobseeker/mentalhealthcareerhub.webp";
import navicon from "@/assets/icons/Medfuture.webp";

type Division = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    bullets: string[];
    exploreLabel: string;
    exploreHref: string;
    image: StaticImageData;
};

const divisions: Division[] = [
    {
        id: 1,
        title: "GP & Medical Careers Hub",
        description:
            "FRACGP/FACRRM, Registrars, Locums, International Doctors — matched with the right setting, supervision and pathway clarity.",
        tags: ["Permanent", "Locum", "Metro", "Regional"],
        bullets: [
            "Specialist GPs (FRACGP / FACRRM)",
            "GP Registrars (FSP / PEP / PFP / RVTS)",
            "Locum General Practitioners",
            "International Doctors (SIMG / Comparable systems)",
        ],
        exploreLabel: "Explore GP Division",
        exploreHref: "/divisions/gp-medical",
        image: GPcareerhub,
    },
    {
        id: 2,
        title: "Allied Health (AHP) Careers Hub",
        description:
            "OT, Physio, Speech Pathology and Podiatry roles across NDIS, community, private practice, hospitals and telehealth.",
        tags: ["Permanent", "Locum", "Metro", "Regional"],
        bullets: [
            "Occupational Therapists",
            "Physiotherapists",
            "Speech Pathologists",
            "Podiatrists",
        ],
        exploreLabel: "Explore AHP Division",
        exploreHref: "/divisions/allied-health",
        image: AHPcareerhub,
    },
    {
        id: 3,
        title: "Mental Health Careers Hub",
        description:
            "Psychologists and Psychiatrists — ethical caseloads, aligned supervision, and sustainable career pathways.",
        tags: ["Ethical caseloads", "Supervision"],
        bullets: [
            "Psychologists (General / Clinical / Counselling / Edu / Forensic)",
            "Psychiatrists (Consultant / Registrar / Sub-specialties)",
            "Telehealth & Hybrid options",
            "Public, Private and Community settings",
        ],
        exploreLabel: "Explore Mental Health Division",
        exploreHref: "/divisions/mental-health",
        image: MHcareerhub,
    },
];

function TagPill({ label }: { label: string }) {
    return (
        <span className="border border-[#E2E8F0] text-[#4A5565] text-[11px] sm:text-xs px-2.5 py-1 rounded-[8px] whitespace-nowrap">
            {label}
        </span>
    );
}

function ExploreLink({ label, href }: { label: string; href: string }) {
    return (
        <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-[#1A56C4] text-[13px] md:text-sm lg:text-[14px] font-semibold hover:underline mt-4 md:mt-5 lg:mt-[26px]"
        >
            {label}
            <Image src={navicon} alt="Explore" width={12} height={12} />
        </Link>
    );
}

function DivisionCard({ division }: { division: Division }) {
    return (
        <div className="border border-gray-200 rounded-2xl overflow-hidden h-full">
            <div className="flex flex-row h-full">

                {/* Image */}
                <div className="relative flex-shrink-0 w-[90px] sm:w-[120px] md:w-[130px] lg:w-[144px] self-stretch">
                    <Image
                        src={division.image}
                        alt={division.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 90px, (max-width: 768px) 120px, (max-width: 1024px) 130px, 144px"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 p-3 sm:p-4 md:p-4 lg:p-5 flex flex-col justify-center min-w-0">
                    <h3 className="text-[13px] sm:text-sm md:text-[15px] lg:text-[16px] font-bold text-[#074CA4] leading-snug">
                        {division.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] text-[#4A5565] mt-2 md:mt-3 lg:mt-[17px] leading-relaxed">
                        {division.description}
                    </p>
                    <div className="mt-2 md:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                        {division.tags.map((tag) => (
                            <TagPill key={tag} label={tag} />
                        ))}
                    </div>
                    <ul className="flex flex-col gap-1 sm:gap-1.5 mt-2 md:mt-3 lg:mt-[20px]">
                        {division.bullets.map((b) => (
                            <li key={b} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs md:text-[13px] lg:text-[14px] text-[#575D84]">
                                <span className="mt-1.5 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#575D84] flex-shrink-0" />
                                <span className="leading-snug">{b}</span>
                            </li>
                        ))}
                    </ul>
                    <ExploreLink label={division.exploreLabel} href={division.exploreHref} />
                </div>

            </div>
        </div>
    );
}

export default function BrowseByDivisions() {
    const [gpDiv, ahpDiv, mhDiv] = divisions;

    return (
        <section className="full-width-section bg-white mt-10 sm:mt-16 md:mt-20 lg:mt-[125px]">
            <div className="inner-width-section">

                {/* ROW 1: Stacked on mobile/tablet | side-by-side on lg */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8 lg:items-start">

                    {/* Section Header */}
                    <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-0 lg:pt-2">
                        <p className="text-[#074CA4] text-xs sm:text-sm lg:text-[14px] font-semibold mb-1">
                            Our Divisions
                        </p>
                        <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-bold text-[#0F172A]">
                            Browse by Divisions
                        </h2>
                        <p className="mt-3 sm:mt-4 md:mt-5 lg:mt-[35px] text-xs sm:text-sm md:text-[15px] lg:text-[16px] text-[#4A5565] leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
                            Start where your identity is strongest — your profession. Each hub brings
                            together tailored career guidance, market insights, role trends, and curated
                            opportunities designed to match your expertise, ambitions, and preferred
                            practice settings across Australia.
                        </p>
                    </div>

                    {/* GP Card */}
                    <DivisionCard division={gpDiv} />

                </div>

                {/* ROW 2: Stacked on mobile | 2 cols on md+ */}
                <div className="mt-4 sm:mt-6 md:mt-6 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-5 lg:gap-8">
                    <DivisionCard division={ahpDiv} />
                    <DivisionCard division={mhDiv} />
                </div>

            </div>
        </section>
    );
}