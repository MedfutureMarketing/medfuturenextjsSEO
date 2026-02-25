"use client";

import Link from "next/link";

type Division = {
    id: number;
    title: string;
    description: string;
    tags: string[];
    bullets: string[];
    exploreLabel: string;
    exploreHref: string;
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
    },
];

function ImagePlaceholder({ className }: { className?: string }) {
    return (
        <div className={`bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-medium flex-shrink-0 ${className}`}>
            Image
        </div>
    );
}

function TagPill({ label }: { label: string }) {
    return (
        <span className="border border-gray-300 text-gray-600 text-xs px-3 py-1 rounded-full whitespace-nowrap">
            {label}
        </span>
    );
}

function ExploreLink({ label, href }: { label: string; href: string }) {
    return (
        <Link href={href} className="inline-flex items-center gap-1.5 text-[#1A56C4] text-sm font-semibold hover:underline mt-4">
            {label}
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="1" y="1" width="6" height="6" rx="1" stroke="#1A56C4" strokeWidth="1.5" />
                <rect x="11" y="1" width="6" height="6" rx="1" stroke="#1A56C4" strokeWidth="1.5" />
                <rect x="1" y="11" width="6" height="6" rx="1" stroke="#1A56C4" strokeWidth="1.5" />
                <rect x="11" y="11" width="6" height="6" rx="1" stroke="#1A56C4" strokeWidth="1.5" />
            </svg>
        </Link>
    );
}

function DivisionCardContent({ division }: { division: Division }) {
    return (
        <div className="flex-1 p-4 md:p-5 flex flex-col justify-center">
            <h3 className="text-sm md:text-base lg:text-[17px] font-bold text-[#1A56C4]">
                {division.title}
            </h3>
            <p className="mt-1.5 text-xs md:text-sm text-gray-500 leading-relaxed">
                {division.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
                {division.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                ))}
            </div>
            <ul className="mt-3 flex flex-col gap-1.5">
                {division.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1A56C4] flex-shrink-0" />
                        {b}
                    </li>
                ))}
            </ul>
            <ExploreLink label={division.exploreLabel} href={division.exploreHref} />
        </div>
    );
}

export default function BrowseByDivisions() {
    const [gpDiv, ahpDiv, mhDiv] = divisions;

    return (
        <section className="full-width-section bg-white my-8 md:my-12 lg:my-16">
            <div className="inner-width-section">

                {/* ══════════════════════════════════════════
                    ROW 1 (desktop): Header LEFT | GP card RIGHT
                    Mobile: header stacked above card
                ══════════════════════════════════════════ */}
                <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1fr] lg:gap-8 lg:items-start">

                    {/* Section Header */}
                    <div className="mb-6 lg:mb-0 lg:pt-2">
                        <p className="text-[#1A56C4] text-sm font-semibold mb-1">Our Divisions</p>
                        <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-[#0F172A]">
                            Browse by Divisions
                        </h2>
                        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-sm">
                            Start where your identity is strongest — your profession. Each hub brings
                            together tailored career guidance, market insights, role trends, and curated
                            opportunities designed to match your expertise, ambitions, and preferred
                            practice settings across Australia.
                        </p>
                    </div>

                    {/* GP Card — image left, content right */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                            <ImagePlaceholder className="w-full h-48 sm:w-[200px] sm:h-auto lg:w-[220px]" />
                            <DivisionCardContent division={gpDiv} />
                        </div>
                    </div>

                </div>

                {/* ══════════════════════════════════════════
                    ROW 2 (desktop): AHP card LEFT | MH card RIGHT
                    Mobile/tablet: stacked
                ══════════════════════════════════════════ */}
                <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Allied Health Card */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                            <ImagePlaceholder className="w-full h-48 sm:w-[160px] sm:h-auto lg:w-[180px]" />
                            <DivisionCardContent division={ahpDiv} />
                        </div>
                    </div>

                    {/* Mental Health Card */}
                    <div className="border border-gray-200 rounded-2xl overflow-hidden">
                        <div className="flex flex-col sm:flex-row">
                            <ImagePlaceholder className="w-full h-48 sm:w-[160px] sm:h-auto lg:w-[180px]" />
                            <DivisionCardContent division={mhDiv} />
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}