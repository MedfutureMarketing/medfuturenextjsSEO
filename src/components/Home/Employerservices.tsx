'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { StaticImageData } from 'next/image';
import image1 from "@/assets/homeico/img/1.jpg";
import image2 from "@/assets/homeico/img/2.jpg";
import image3 from "@/assets/homeico/img/3.jpg";
import image4 from "@/assets/homeico/img/4.jpg";
import image5 from "@/assets/homeico/img/5.jpg";

interface ServiceCard {
    id: string;
    title: string;
    description: string;
    imageUrl?: string | StaticImageData;
    imageAlt: string;
    exploreLink: string;
}


const DEFAULT_SERVICES: ServiceCard[] = [
    {
        id: 'permanent',
        title: 'Permanent Recruitment Solution',
        description:
            'Credential-verified shortlists for Medical, Nursing, Allied Health and Mental Health roles, ensuring compliance, quality hires, workforce stability, and faster hiring decisions.',
        imageUrl: image1,
        imageAlt: 'Permanent Recruitment Solution',
        exploreLink: '/general-practice-division/fracgp-facrrm',
    },
    {
        id: 'locum',
        title: 'Locum Recruitment Solution',
        description:
            'Flexible short-term staffing solutions delivering reliable, pre-vetted healthcare professionals to maintain uninterrupted patient care and operational efficiency.',
        imageUrl: image2,
        imageAlt: 'Locum Recruitment Solution',
        exploreLink: '/general-practice-division/locum-gp',
    },
    {
        id: 'international',
        title: 'International Recruitment Service',
        description:
            'End-to-end international talent sourcing, assessment, and placement for healthcare professionals aligned with Australian standards and workforce demands.',
        imageUrl: image3,
        imageAlt: 'International Recruitment Service',
        exploreLink: '/international?page=1',
    },
    {
        id: 'mcircle',
        title: 'MCIRCLE Exclusive Recruitment Partner Program',
        description:
            'A retained partnership offering priority access, dedicated consultants, predictable hiring outcomes, and strategic workforce planning.',
        imageUrl: image4,
        imageAlt: 'MCIRCLE Exclusive Recruitment Partner Program',
        exploreLink: '#',
    },
    {
        id: 'visa',
        title: 'Visa and Migration Services',
        description:
            'Integrated visa, migration, and compliance support ensuring smooth onboarding, regulatory confidence, and long-term workforce retention.',
        imageUrl: image5,
        imageAlt: 'Visa and Migration Services',
        exploreLink: 'https://intuit7.com/',
    },
];


interface EmployerServicesProps {
    services?: ServiceCard[];
}

export default function EmployerServices({
    services = DEFAULT_SERVICES,
}: EmployerServicesProps) {
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

    const handleImageError = (id: string) => {
        setImageErrors((prev) => new Set(prev).add(id));
    };

    return (
        <section className="bg-white ">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                {/* Header */}
                <div className="flex items-center gap-8 mb-16">
                    <div className="flex-grow h-px bg-[#0B3264]"></div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0B3264] whitespace-nowrap">
                        For Employers
                    </h1>
                </div>

                {/* Layout */}
                <div className="space-y-12">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Left Text */}
                        <div className="flex flex-col justify-start pt-4">
                            <p className="text-[#074CA4] text-[14px] font-semibold mb-3 tracking-wide">
                                Our Services
                            </p>
                            <h2 className="text-xl md:text-[30px] font-bold text-[#0F172A] mb-6 leading-tight">
                                Choose the engagement model that matches your urgency
                            </h2>
                            <button className="bg-[#074CA4] hover:bg-blue-800 text-white text-xs lg:text-[14px] font-semibold py-3 px-5 rounded w-fit">
                                Request a Service Proposal
                            </button>
                        </div>

                        {/* First 2 Cards */}
                        {services.slice(0, 2).map((service) => (
                            <ServiceCardComponent
                                key={service.id}
                                service={service}
                                hasImageError={imageErrors.has(service.id)}
                                onImageError={handleImageError}
                            />
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.slice(2, 5).map((service) => (
                            <ServiceCardComponent
                                key={service.id}
                                service={service}
                                hasImageError={imageErrors.has(service.id)}
                                onImageError={handleImageError}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ServiceCardComponentProps {
    service: ServiceCard;
    hasImageError: boolean;
    onImageError: (id: string) => void;
}

function ServiceCardComponent({
    service,
    hasImageError,
    onImageError,
}: ServiceCardComponentProps) {
    return (
        <div className="group">
            {/* Image */}
            <div className="relative w-full h-44 rounded-lg overflow-hidden">
                {service.imageUrl && !hasImageError ? (
                    <Image
                        src={service.imageUrl}
                        alt={service.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={() => onImageError(service.id)}
                    />
                ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                        No Image
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="relative -mt-12 mx-4 bg-white rounded-lg shadow-md border border-gray-100 p-5">
                <h3 className="text-[16px] font-semibold text-[#074CA4] mb-2">
                    {service.title}
                </h3>

                <p className="text-[#171717B2] text-[14px] leading-relaxed mb-4">
                    {service.description}
                </p>

                <Link
                    href={service.exploreLink}
                    className="inline-flex items-center text-[#575D84] text-sm font-medium group-hover:text-blue-900"
                >
                    Explore
                    <span className="ml-1 transition-transform group-hover:translate-x-1">

                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="6.68347" height="6.68347" rx="1.60403" fill="#1B3461" />
                            <rect x="7.35156" width="6.68347" height="6.68347" rx="1.60403" fill="#162950" />
                            <rect x="7.35156" y="7.35156" width="6.68347" height="6.68347" rx="1.60403" fill="#269ED6" />
                        </svg>

                    </span>
                </Link>

                {/* Bottom Accent */}
                <div className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-700 rounded-b-lg"></div>
            </div>
        </div>
    );
}