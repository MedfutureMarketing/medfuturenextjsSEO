"use client";

import { apiGet } from "@/lib/api";
import React, { useEffect, useState } from "react";

export default function EmployerHero() {

    const [counters, setCounters] = useState({
        Clinics: 0,
        AHPClinics: 0,
        MentalHealthClinics: 0,
        avgTime: 0,
    });

    useEffect(() => {

        const interval = setInterval(() => {
            setCounters((prev) => ({
                Clinics: Math.min(prev.Clinics + 1000, 8000),
                AHPClinics: Math.min(prev.AHPClinics + 1000, 5000),
                MentalHealthClinics: Math.min(prev.MentalHealthClinics + 1000, 4000),
                avgTime: Math.min(prev.avgTime + 750, 2500),
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#0A2E5C] full-width-section text-white lg:pb-[30px] pb-[30px]  px-4 ">
            {/* Title & Description */}
            <div className="inner-width-section">
                <div className="text-left   lg:text-left mx-auto lg:mx-0 mb-[30px]">
                    <h1 className="text-2xl lg:text-[36px] font-bold mb-[18px]">
                        Your Preferred Recruitment Partner for Australian Healthcare
                    </h1>
                    <p className="text-xs lg:text-lg text-white/70 lg:w-[736px]">
                        As a trusted Australian healthcare recruitment partner, we bridge the gap between talented professionals and reputable employers. Our process prioritises quality, speed, and transparency, ensuring ideal matches for every role. Whether you are hiring or seeking your next step, we deliver reliable support, industry insight, and results-driven recruitment solutions.
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col mb-[30px] text-xs lg:text-[16px] sm:flex-row gap-4 text-[#074CA4] justify-center lg:justify-start ">
                    <button className="px-6 py-3 bg-white lg:h-[50px] lg:w-[243px]  rounded-lg font-semibold hover:bg-gray-100 transition">
                        Exclusive Recruitment
                    </button>
                    <button className="px-6 py-3 bg-white lg:w-[243px] rounded-lg font-semibold hover:bg-gray-100 transition">
                        Upload a Vacancy
                    </button>
                    <button className="px-6 py-3 bg-white lg:w-[243px] rounded-lg font-semibold hover:bg-gray-100 transition">
                        Register
                    </button>
                </div>

                {/* Counter Cards */}
                <div className="grid grid-cols-2 lg:text-[24px] text-lg  sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl  mx-auto lg:mx-0">
                    <div className="bg-white/21  rounded-lg p-3 shadow lg:h-[89px] text-center">
                        <p className=" font-[700]">{counters.Clinics}+</p>
                        <p className=" text-xs lg:text-[14px]">Medical Clinics</p>
                    </div>
                    <div className="bg-white/21  rounded-lg p-3 lg:h-[89px] shadow text-center">
                        <p className=" font-[700]">{counters.AHPClinics}+</p>
                        <p className="  text-xs lg:text-[14px]">AHP Clinics</p>
                    </div>
                    <div className="bg-white/21  rounded-lg p-3 shadow lg:h-[89px] text-center">
                        <p className=" font-[700]">{counters.MentalHealthClinics}+</p>
                        <p className=" text-xs lg:text-[14px]">Mental Health Clinics </p>
                    </div>
                    <div className="bg-white/21 rounded-lg p-3 shadow lg:h-[89px] text-center">
                        <p className=" font-[700]">{counters.avgTime}+</p>
                        <p className=" text-xs lg:text-[14px]">Nursing Homes</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
