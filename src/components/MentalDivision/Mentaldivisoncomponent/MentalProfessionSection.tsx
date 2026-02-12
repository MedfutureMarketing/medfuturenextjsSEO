import React from 'react';
import Image from 'next/image';
import mentaldivisionmedfuture from "@/assets/Divisionimages/mentaldivisionmedfuture.webp"

interface Specialty {
    name: string;
}

interface PsychologistRole {
    name: string;
}

interface PsychiatristJobsProps {
    imageSrc?: string;
}

export default function PsychiatristJobs({ imageSrc }: PsychiatristJobsProps) {
    const psychiatrySubSpecialties: Specialty[] = [
        { name: 'General Adult Psychiatry' },
        { name: 'Child & Adolescent Psychiatry' },
        { name: 'Old Age Psychiatry' },
        { name: 'Consultation-Liaison Psychiatry' },
        { name: 'Addiction Psychiatry' },
        { name: 'Forensic Psychiatry' },
        { name: 'Acute & Inpatient Psychiatry' },
    ];

    const endorsedRoles: PsychologistRole[] = [
        { name: 'Clinical Psychologist' },
        { name: 'Clinical Neuropsychologist' },
        { name: 'Educational & Developmental Psychologist' },
        { name: 'Forensic Psychologist' },
        { name: 'Counselling Psychologist' },
        { name: 'Organisational Psychologist' },
    ];

    return (
        <div className="bg-[#F8FAFC] full-width-section py-16 ">
            <div className="inner-width-section mx-auto">
                {/* Header and Image Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
                    {/* Header Section */}
                    <div className="lg:col-span-2">
                        <p className="text-[#074CA4] font-medium text-xs lg:text-sm mb-2">Professions</p>
                        <h1 className="text-xl lg:text-4xl font-bold text-[#0F172A] mb-6">Psychiatrist Jobs in Australia</h1>
                        <p className="text-[#4A5565] max-w-2xl text-xs lg:text-base leading-relaxed">
                            We specialise in psychiatry recruitment across public and private settings, including telepsychiatry and hybrid models—aligned to safe on-call expectations, MDT support, and sustainable workload design.
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[49px]">
                    {/* Left Column - Specialties */}
                    <div>
                        <h2 className="text-lg lg:text-base font-bold text-[#0F172A] mb-6">Psychiatry sub-specialties</h2>
                        <ul className="space-y-3">
                            {psychiatrySubSpecialties.map((specialty, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#4A5565] text-xs lg:text-sm flex-shrink-0 mt-0.5">•</span>
                                    <span className="text-[#4A5565] text-xs lg:text-sm">{specialty.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Endorsed Roles */}
                    <div className='49'>
                        <h2 className="text-lg lg:text-base font-bold text-[#0F172A] mb-6">Endorsed Psychologist roles</h2>
                        <ul className="space-y-3">
                            {endorsedRoles.map((role, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-[#4A5565] text-xs lg:text-sm flex-shrink-0 mt-0.5">•</span>
                                    <span className="text-[#4A5565] text-xs lg:text-sm">{role.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                    </div>

                    {/* Image - Aligned to Title */}
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src={mentaldivisionmedfuture}
                            alt="Psychiatrist consultation"
                            width={377}
                            height={377}
                            className="rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>

                {/* Lists Row */}
                
            </div>
        </div>
    );
}