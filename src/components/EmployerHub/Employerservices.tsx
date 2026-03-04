"use client";

import Image from "next/image";
import Image1 from "@/assets/employer/1.png";
import Image2 from "@/assets/employer/2.png";
import Image3 from "@/assets/employer/3.png";
import Image4 from "@/assets/employer/4.png";
import Image5 from "@/assets/employer/5.png";
import Icon from "@/assets/homeico/medfutureglobe.png"

const services = [
    {
        id: 1,
        title: "Permanent Recruitment Solution",
        description:
            "Credential-verified shortlists for Medical, Nursing, Allied Health and Mental Health roles, ensuring compliance, quality hires, workforce stability, and faster hiring decisions.",
        image: Image1,
        row: 1,
    },
    {
        id: 2,
        title: "Locum Recruitment Solution",
        description:
            "Flexible short-term staffing solutions delivering reliable, pre-vetted healthcare professionals to maintain uninterrupted patient care and operational efficiency.",
        image: Image2,
        row: 1,
    },
    {
        id: 3,
        title: "International Recruitment Service",
        description:
            "End-to-end international talent sourcing, assessment, and placement for healthcare professionals aligned with Australian standards and workforce demands.",
        image: Image3,
        row: 2,
    },
    {
        id: 4,
        title: "MCIRCLE Exclusive Recruitment Partner Program",
        description:
            "A retained partnership offering priority access, dedicated consultants, predictable hiring outcomes, and strategic workforce planning.",
        image: Image4,
        row: 2,
    },
    {
        id: 5,
        title: "Visa and Migration Services",
        description:
            "Integrated visa, migration, and compliance support ensuring smooth onboarding, regulatory confidence, and long-term workforce retention.",
        image: Image5,
        row: 2,
    },
];

function ExploreIcon() {
    return (
        <span className="inline-flex items-center justify-center w-[18px] h-[18px] ml-1.5 shrink-0">

            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="6.68347" height="6.68347" rx="1.60403" fill="#1B3461" />
                <rect x="7.35254" width="6.68347" height="6.68347" rx="1.60403" fill="#162950" />
                <rect x="7.35254" y="7.35193" width="6.68347" height="6.68347" rx="1.60403" fill="#269ED6" />
            </svg>

        </span>
    );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
    return (
        <div className="relative flex flex-col rounded-xl overflow-hidden bg-white group">

            {/* Image — taller, sits at top */}
            <div className="relative w-full h-[200px] shrink-0 overflow-hidden">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* White content box — overlaps image via negative margin */}
            <div className="relative z-10 -mt-8 mx-8 bg-white rounded-t-xl px-5 pt-5 pb-5  border-b-6 rounded-sm border-[#074CA4] flex flex-col flex-1 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
                <h3 className="lg:text-[16px] text-md text-[#074CA4] text-center font-[500] leading-snug mb-2.5">
                    {service.title}
                </h3>
                <p className="lg:text-[14px] text-xs text-center text-[#171717B2] leading-relaxed flex-1 mb-4">
                    {service.description}
                </p>
                <button className="flex items-center justify-center lg:text-[14px] text-xs font-semibold text-slate-700 hover:text-blue-800 transition-colors ">
                    Explore <ExploreIcon />
                </button>
            </div>

            {/* Bottom blue accent bar */}
            {/* <div className="h-[3px] w-full bg-blue-900 shrink-0" /> */}
        </div>
    );
}

export default function EngagementModelSection() {
    const row1 = services.filter((s) => s.row === 1);
    const row2 = services.filter((s) => s.row === 2);

    return (
        <section className="full-width-section bg-white font-sans py-14 px-4 sm:px-8 lg:px-16 lg:mt-[140px]">
            <div className="inner-width-section mx-auto">

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 items-start">

                    {/* Left text block */}
                    <div className="flex flex-col justify-start pt-2 lg:pr-4">
                        <p className="text-[14px] text-xs font-semibold text-[#074CA4] mb-3">Services</p>
                        <h2 className="lg:text-[30px] text-xl sm:text-[32px] font-[600] text-[#0F172A] leading-tight mb-7">
                            Choose the engagement model that matches your urgency
                        </h2>
                        <button className="w-fit px-5 py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold lg:text-[14px] text-xs rounded-[4px] transition-colors duration-200">
                            Request a Service Proposal
                        </button>
                    </div>

                    {/* 2 cards */}
                    {row1.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {row2.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>

            </div>
        </section>
    );
}