// This is a SERVER COMPONENT - optimal for SSR
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ahpdivision1img from "@/assets/division/ahpdivision1img.png";
import ahpdivision2img from "@/assets/division/ahpdivision2img.png";
import ahpdivision3img from "@/assets/division/ahpdivision3img.png";
import ahpdivision4img from "@/assets/division/ahpdivision4img.png";
import ahpico1 from "@/assets/icons/ahpicos1.png";
import ahpico2 from "@/assets/icons/ahpicos2.png";
import ahpico3 from "@/assets/icons/ahpicos3.png";
import ahpico4 from "@/assets/icons/ahpicos4.png";
import Navicon from "@/assets/icons/Medfuture.webp";

interface ProfessionCard {
    id: string;
    title: string;
    description: string;
    icon: StaticImageData; // Next.js imported image type
    image: StaticImageData; // Next.js imported image type
    link: string;
}

interface AlliedHealthProfessionsProps {
    professions?: ProfessionCard[];
    className?: string;
}

const defaultProfessions: ProfessionCard[] = [
    {
        id: 'speech-pathologist',
        title: 'Speech Pathologist Jobs Australia',
        description: 'We recruit Speech Pathologists across paediatrics, NDIS, schools, community health, disability services and telehealth—supporting graduate to senior/ clinical lead pathways with structured supervision and manageable caseloads.',
        icon: ahpico1,
        image: ahpdivision1img,
        link: '/jobs/speech-pathologist'
    },
    {
        id: 'occupational-therapist',
        title: 'Occupational Therapist Jobs Australia',
        description: 'Our OT roles span NDIS, mental health, community care, aged care, rehabilitation and functional capacity assessments—matched to your preferred participant mix, travel profile and documentation load.',
        icon: ahpico2,
        image: ahpdivision2img,
        link: '/jobs/occupational-therapist'
    },
    {
        id: 'physiotherapist',
        title: 'Physiotherapist Jobs Australia',
        description: 'From private practice and sports clinics to hospitals, rehab, aged care and NDIS—Medifuture supports Physiotherapists at every stage with transparent pay structures, realistic bookings and progression planning.',
        icon: ahpico3,
        image: ahpdivision3img,
        link: '/jobs/physiotherapist'
    },
    {
        id: 'podiatrist',
        title: 'Podiatrist Jobs Australia',
        description: 'We place Podiatrists across community health, aged care, NDIS, mobile services and high-risk foot pathways—especially in regional areas with strong mentoring structures and high demand.',
        icon: ahpico4,
        image: ahpdivision4img,
        link: '/jobs/podiatrist'
    }
];

export default function AlliedHealthProfessions({
    professions = defaultProfessions,
    className = ''
}: AlliedHealthProfessionsProps) {
    return (
        <section className={`py-16 mt-[160px] px-4 full-width-section bg-[#FBFBFB] ${className}`}>
            <div className="inner-width-section mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-[#074CA4] text-sm lg:text-[14px] font-medium mb-2">Specialist recruitment</p>
                    <h2 className="text-xl lg:text-[30px] font-bold text-[#0F172A] mb-4">
                        Allied Health Professions We Represent
                    </h2>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] max-w-3xl">
                        We represent a wide range of allied health professionals, connecting specialists with
                        compliant, well-matched roles across diverse healthcare settings nationwide,
                        supporting long-term career growth and stability.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {professions.map((profession) => (
                        <article
                            key={profession.id} // <-- Add this
                            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                        >
                            {/* Image Section */}
                            <div className="relative h-[151px] w-full overflow-visible bg-gray-100">
                                <Image
                                    src={profession.image}
                                    alt={`${profession.title} - Healthcare professional`}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                {/* Icon Overlay */}
                                <div className="absolute -bottom-6 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg overflow-visible">
                                    <Image
                                        src={profession.icon}
                                        alt=""
                                        aria-hidden="true"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:p-6 p-3 mt-5 flex flex-col flex-1">
                                <h3 className="lg:text-[16px] text-sm font-bold text-[#0F172A] mb-3">{profession.title}</h3>
                                <p className="text-[#4A5565] lg:text-[14px] text-xs mb-4 flex-1">{profession.description}</p>

                                {/* Button sticks to bottom */}
                                <Link
                                    href={profession.link}
                                    className="inline-flex items-center text-[#575D84] font-medium lg:text-sm text-xs hover:text-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded mt-auto"
                                    aria-label={`Explore ${profession.title} opportunities`}
                                >
                                    Explore
                                    <Image
                                        src={Navicon}
                                        alt=""
                                        aria-hidden="true"
                                        className="ml-1 w-4 h-4"
                                    />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

            </div>
        </section>
    );
}

// For static generation with revalidation
export const revalidate = 3600; // Revalidate every hour