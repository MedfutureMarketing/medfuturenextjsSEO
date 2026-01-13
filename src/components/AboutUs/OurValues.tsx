'use client';
import React from 'react';

const stats = [
    { value: '11+ Years', label: 'Years of Industry Experience' },
    { value: '10000+', label: 'Healthcare Clients Served' },
    { value: '50,000+', label: 'Candidates Supported Across All Professions' },
    { value: '500+', label: 'Successful Placements Each Month' },
];

const values = [
    'Integrity',
    'Care',
    'Partnership ',
    'Reliability ',
    'Professionalism',
];

const des = [
    'We act with transparency and respect.',
    'Our work impacts patient lives—we never take that  lightly.',
    'Strong relationships sit at the heart of our success.',
    'Employers and candidates trust us to deliver—every time.',
    'High standards in everything we do.',
];

export default function OurValues() {
    return (
        <section className="mt-[152px] full-width-section ">
            <div className=" mx-auto inner-width-section px-6 grid grid-cols-1 lg:grid-cols-2 gap-2">

                {/* LEFT STATS COLUMN */}
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white p-6 flex flex-col justify-center items-center">
                            <p className="text-[48px] text-center font-bold text-[#575D84]">{stat.value}</p>
                            <p className="mt- text-gray-700 text-center text-[16px]">{stat.label}</p>
                        </div>
                    ))}
                </div>
                {/* RIGHT VALUES COLUMN */}
                <div className="relative bg-[#269ED6] rounded-lg shadow p-4 flex flex-col justify-center">
                    {/* Vertical title */}
                    <div className="absolute left-0 top-1/2 mt-26 ml-12 -translate-y-1/2 lg:text-[32px] text-xl font-semibold tracking-widest rotate-[-90deg] origin-left text-white">
                        Our Values
                    </div>
                    {/* Bullet points */}
                    <ul className="ml-16 space-y-2 text-white">
                        {values.map((val, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-1 text-white">•</span>
                                <div className="flex flex-wrap gap-2">
                                    <p className="text-[16px] font-semibold">{val}:</p>
                                    <p className="text-[16px] opacity-90">{des[i]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
