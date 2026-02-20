
'use client';

import React from 'react';
import Image from 'next/image';

// Import your images here
import ico1 from '@/assets/locumgp/ico1.png'
import ico2 from '@/assets/locumgp/ico2.png'
import ico3 from '@/assets/locumgp/ico3.png'
import ico4 from '@/assets/locumgp/ico4.png'
import ico5 from '@/assets/locumgp/ico5.png'
import ico6 from '@/assets/locumgp/ico6.png'
import FFFRAC from "@/assets/Divisionimages/FFFRAC.png";

import divisionimg2 from "@/assets/Divisionimages/divisionimg2.png";
import divisionimage2 from "@/assets/Divisionimages/divisionimage2.png";



const iconMap = {
    credential: ico1,
    advisor: ico2,
    continuity: ico3,
    scope: ico4,
    geo: ico5,
    network: ico6,
};

export default function MedfuturePage() {
    const features = [
        {
            id: 1,
            icon: 'credential',
            title: 'One-profile credential approach',
            description:
                'Credential once, reuse nationally. Reduce admin friction and speed.',
            color: 'text-blue-600',
        },
        {
            id: 2,
            icon: 'advisor',
            title: 'Advisor-first matching',
            description:
                'You work with a named consultant who knows your scope, preferences and boundaries.',
            color: 'text-blue-600',
        },
        {
            id: 3,
            icon: 'continuity',
            title: 'Continuity planning',
            description:
                'Repeat sites, return rotations and block rosters—less uncertainty, more stability.',
            color: 'text-blue-600',
        },
        {
            id: 4,
            icon: 'scope',
            title: 'Scope-first role briefs',
            description:
                'Clear details: ED/VMO expectations, on-call, support, billing model, and inclusions.',
            color: 'text-blue-600',
        },
        {
            id: 5,
            icon: 'geo',
            title: 'GEO-smart opportunities',
            description:
                'Target Australia-wide (and beyond). Rural, remote and metro options aligned to demand.',
            color: 'text-blue-600',
        },
        {
            id: 6,
            icon: 'network',
            title: 'Fellowship Locum Network',
            description:
                'A community feel—priority roles, recognition, and repeat-ready pathways.',
            color: 'text-blue-600',
        },
    ];

    return (
        <div className="bg-white pb-[160px] lg:mt-[160px] mt-24">
            {/* Header Section */}<div className=" px-0 lg:px-0 md:px-8">
            <div className="inner-width-section mx-auto  ">
                <div className="mb-2">
                    <span className="lg:text-[14px] text-xs font-semibold text-[#074CA4] uppercase tracking-wide">
                        Why Medfuture
                    </span>
                </div>
                <h2 className="text-xl md:text-[30px] font-bold text-[#0F172A] mb-6 leading-tight">
                    Why Medfuture becomes your always-go-to locum agency
                </h2>
                <p className="lg:text-[16px] text-sm  text-[#4A5565] max-w-2xl lg:mb-[51px] leading-relaxed">
                    Senior GPs choose agencies for control, continuity and respect. We operationalise all three—
                    so your locum life stays simple.
                </p>
            </div>
            {/* Features Grid with Images */}
            <div className="px-8 md:px-0 lg:px-0 inner-width-section mx-auto  ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    {/* Left Column - Features 1, 2, 3 */}
                    <div className="space-y-8">
                        {features.slice(0, 3).map((feature) => {
                            const iconSrc = iconMap[feature.icon as keyof typeof iconMap];
                            return (
                                <div key={feature.id} className="flex gap-4 lg:mt-0 mt-12">
                                    <div className="flex-shrink-0 pt-1">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50">
                                            <Image
                                                src={iconSrc}
                                                alt={feature.title}
                                                width={24}
                                                height={24}
                                                className="h-6 w-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="lg:text-[16px] text-sm font-bold text-[#0A2E5C] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#4A5565] lg:text-[16px] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Center Column - Images */}
                    <div className="hidden lg:grid grid-cols-2 gap-4 h-fit">
                        {/* Top Left - Large image */}
                        <div className="col-span-1 row-span-2">
                            <div className="relative h-[162px]  rounded-[8px]  overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <Image
                                    src={FFFRAC}
                                    alt="Female doctor consulting"
                                    fill
                                    className="object-cover"
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        {/* Top Right - Small image */}
                        <div className="col-span-1">
                            <div className="relative h-[162px] rounded-[8px]  overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src={divisionimg2}
                                    alt="Female doctor with stethoscope"
                                    fill
                                    className="object-cover"
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {/* Bottom Right - Small image */}
                        <div className="col-span-1">
                            <div className="relative h-[162px] rounded-[8px] overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <Image
                                    src={divisionimage2}
                                    alt="Male and female doctors in discussion"
                                    fill
                                    className="object-cover"
                                    priority={false}
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Features 4, 5, 6 */}
                    <div className="space-y-8">
                        {features.slice(3, 6).map((feature) => {
                            const iconSrc = iconMap[feature.icon as keyof typeof iconMap];
                            return (
                                <div key={feature.id} className="flex gap-4">
                                    <div className="flex-shrink-0 pt-1">
                                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-50">
                                            <Image
                                                src={iconSrc}
                                                alt={feature.title}
                                                width={24}
                                                height={24}
                                                className="h-6 w-6"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="lg:text-[16px] text-sm font-bold text-[#0A2E5C] mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#4A5565] lg:text-[16px] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
</div>


        </div>
    );
}