'use client';

import React from 'react';
import Image from 'next/image';
import path from '@/assets/homeico/path.png';

const milestones = [
    {
        year: '2014',
        title: 'Launched Medfuture',
        desc: 'with GP Recruitment Services',
    },
    {
        year: '2015',
        title: 'Received RCSA',
        desc: 'Affiliation',
    },
    {
        year: '2017',
        title: 'Our virtual office',
        desc: 'became a rented physical office in Australia',
    },
    {
        year: '2018',
        title: 'Moved to the official Headquarters',
        desc: 'Extended services to New Zealand',
    },
    {
        year: '2021',
        title: 'Expanded services',
        desc: 'Australian Medical to Nursing, Dentistry & AHP',
    },
    {
        year: '2022',
        title: 'Achieved 7000+ clients',
        desc: 'medical and healthcare between Australia & New Zealand',
    },
];

export default function KeyMilestones() {
    return (
        <section className="relative w-full bg-[#f7f9fc] lg:block hidden full-width-section py-26  overflow-hidden">
            <div className="inner-width-section mx-auto px-6  relative">

                {/* Title */}


                {/* Timeline Track with Image */}
                <div className="relative h-[560px] lg:w-[2000px]">
                    <div className=" text-center mt-5 lg:text-left">
                        <p className="text-[#0b3c8a] text-lg">Key</p>
                        <h2 className="text-[#0b3c8a] text-4xl font-bold">Milestones</h2>
                    </div>
                    <Image
                        src={path}
                        alt="timeline path"
                        className="absolute inset-0  r-56 object-fit"
                        priority
                    />

                    {/* Milestones */}
                    {milestones.map((m, i) => {
                        // Positions are approximate, adjust as needed
                        const positions = [
                            { x: 100, y: 450 },
                            { x: 300, y: 440 },
                            { x: 450, y: 420 },
                            { x: 620, y: 375 },
                            { x: 780, y: 320 },
                            { x: 930, y: 240 },
                        ];

                        return (
                            <div
                                key={i}
                                className="absolute flex flex-col items-center"
                                style={{ left: positions[i].x, top: positions[i].y }}
                            >


                                {/* Text */}
                                <div className="mt-4 w-[200px] text-center lg:text-left">
                                    <p className="font-bold text-black text-[20px]">{m.year}</p>
                                    <p className="text-[12px] font-semibold text-gray-800">{m.title}</p>
                                    <p className="text-[12px] text-gray-600 leading-snug">{m.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Right Badge */}
                <div className="absolute right-36 top-[30px] text-right">
                    <p className="text-3xl font-bold text-black">11+ Years</p>
                    <p className="text-sm text-gray-600">of Recruitment</p>
                    <p className="text-sm text-gray-600">Excellence</p>
                </div>
            </div>
        </section>
    );
}
