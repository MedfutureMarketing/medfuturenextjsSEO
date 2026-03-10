// import React from 'react';
// import Image from 'next/image';
// import mentaldivisionmedfuture from "@/assets/Divisionimages/mentaldivisionmedfuture.webp"

// interface Specialty {
//     name: string;
// }

// interface PsychologistRole {
//     name: string;
// }

// interface PsychiatristJobsProps {
//     imageSrc?: string;
// }

// export default function PsychiatristJobs({ imageSrc }: PsychiatristJobsProps) {
//     const psychiatrySubSpecialties: Specialty[] = [
//         { name: 'General Adult Psychiatry' },
//         { name: 'Child & Adolescent Psychiatry' },
//         { name: 'Old Age Psychiatry' },
//         { name: 'Consultation-Liaison Psychiatry' },
//         { name: 'Addiction Psychiatry' },
//         { name: 'Forensic Psychiatry' },
//         { name: 'Acute & Inpatient Psychiatry' },
//     ];

//     const endorsedRoles: PsychologistRole[] = [
//         { name: 'Clinical Psychologist' },
//         { name: 'Clinical Neuropsychologist' },
//         { name: 'Educational & Developmental Psychologist' },
//         { name: 'Forensic Psychologist' },
//         { name: 'Counselling Psychologist' },
//         { name: 'Organisational Psychologist' },
//     ];

//     return (
//         <div className="bg-[#F8FAFC] full-width-section py-16 ">
//             <div className="inner-width-section mx-auto">
//                 {/* Header and Image Row */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
//                     {/* Header Section */}
//                     <div className="lg:col-span-2">
//                         <p className="text-[#074CA4] font-medium text-xs lg:text-sm mb-2">Professions</p>
//                         <h1 className="text-xl lg:text-4xl font-bold text-[#0F172A] mb-6">Psychiatrist Jobs in Australia</h1>
//                         <p className="text-[#4A5565] max-w-2xl text-xs lg:text-base leading-relaxed">
//                             We specialise in psychiatry recruitment across public and private settings, including telepsychiatry and hybrid models—aligned to safe on-call expectations, MDT support, and sustainable workload design.
//                         </p>
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[49px]">
//                     {/* Left Column - Specialties */}
//                     <div>
//                         <h2 className="text-lg lg:text-base font-bold text-[#0F172A] mb-6">Psychiatry sub-specialties</h2>
//                         <ul className="space-y-3">
//                             {psychiatrySubSpecialties.map((specialty, index) => (
//                                 <li key={index} className="flex items-start gap-3">
//                                     <span className="text-[#4A5565] text-xs lg:text-sm flex-shrink-0 mt-0.5">•</span>
//                                     <span className="text-[#4A5565] text-xs lg:text-sm">{specialty.name}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Right Column - Endorsed Roles */}
//                     <div className='49'>
//                         <h2 className="text-lg lg:text-base font-bold text-[#0F172A] mb-6">Endorsed Psychologist roles</h2>
//                         <ul className="space-y-3">
//                             {endorsedRoles.map((role, index) => (
//                                 <li key={index} className="flex items-start gap-3">
//                                     <span className="text-[#4A5565] text-xs lg:text-sm flex-shrink-0 mt-0.5">•</span>
//                                     <span className="text-[#4A5565] text-xs lg:text-sm">{role.name}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//                     </div>

//                     {/* Image - Aligned to Title */}
//                     <div className="flex justify-center lg:justify-end">
//                         <Image
//                             src={mentaldivisionmedfuture}
//                             alt="Psychiatrist consultation"
//                             width={377}
//                             height={377}
//                             className="rounded-lg shadow-md object-cover"
//                         />
//                     </div>
//                 </div>

//                 {/* Lists Row */}

//             </div>
//         </div>
//     );
// }

// This is a SERVER COMPONENT - optimal for SSR
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import ahpdivision1img from "@/assets/division/mentalhealth1.png";
import ahpdivision2img from "@/assets/division/mentalhealth2.png";
import ahpdivision3img from "@/assets/division/mentalhealth3.png";
// import ahpdivision4img from "@/assets/division/ahpdivision4img.png";
import ahpico1 from "@/assets/icons/ahpicos1.png";
import ahpico2 from "@/assets/icons/ahpicos2.png";
import ahpico3 from "@/assets/icons/ahpicos3.png";
// import ahpico4 from "@/assets/icons/ahpicos4.png";
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
        title: 'Psychologist',
        description: 'Explore diverse psychology roles across clinical, community, and educational settings. Connect with trusted employers, find positions that match your expertise, and advance your career with tailored opportunities.',
        icon: ahpico1,
        image: ahpdivision1img,
        link: '/mental-health/psychology'
    },
    {
        id: 'occupational-therapist',
        title: 'Psychiatrist',
        description: 'Discover psychiatry roles across hospitals, clinics, and community services. Find positions that align with your subspecialty and experience, with supportive employers and career-focused opportunities nationwide.',
        icon: ahpico2,
        image: ahpdivision2img,
        link: '/'
    },
    {
        id: 'physiotherapist',
        title: 'Mental Health Nurse ',
        description: 'Explore mental health nursing opportunities in hospitals, community, and outreach settings. Connect with trusted healthcare providers, access flexible roles, and advance your professional development while making a real impact.',
        icon: ahpico3,
        image: ahpdivision3img,
        link: '/general-practice-division/locum-gp'
    },
    // {
    //     id: 'podiatrist',
    //     title: 'International Family Medicine Specialist',
    //     description: 'We place Podiatrists across community health, aged care, NDIS, mobile services and high-risk foot pathways—especially in regional areas with strong mentoring structures and high demand.',
    //     icon: ahpico4,
    //     image: ahpdivision4img,
    //     link: '/international?page=1'
    // }
];

export default function AlliedHealthProfessions({
    professions = defaultProfessions,
    className = ''
}: AlliedHealthProfessionsProps) {
    return (
        <section className={`lg:py-16 lg:mt-[160px] mt-24 px-4 full-width-section bg-[#FBFBFB] ${className}`}>
            <div className="inner-width-section mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-[#074CA4] text-sm lg:text-[14px] font-medium mb-2">Professions recruitment</p>
                    <h2 className="text-xl lg:text-[30px] font-bold text-[#0F172A] mb-4">
                        Mental Health Professions We Represent             </h2>
                    <p className="text-[#4A5565] text-xs lg:text-[16px] max-w-3xl">
                        We represent a wide range of mental health professionals, connecting specialists with compliant, well-matched roles across diverse healthcare settings nationwide, supporting long-term career growth and stability.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
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