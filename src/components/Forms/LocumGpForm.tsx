'use client';

import React from "react";
import Image from "next/image";
import locumGpImage from "@/assets/jobseeker/locumgp.png";
import Link from "next/link";

export default function LocumGPSection() {
  return (
    <section className="relative full-width-section bg-gradient-to-r from-blue-900 to-[#074CA4] mt-16 sm:mt-20 md:mt-24 lg:mt-[155px] py-10 sm:py-12 md:py-14 lg:py-16">

      {/* Decorative rectangle */}
      <div className="absolute top-0 left-0 w-[200px] sm:w-[300px] md:w-[400px] lg:w-[532px] h-[120px] sm:h-[160px] md:h-[200px] lg:h-[228px] bg-blue-950 z-[1]" />

      <div className="inner-width-section mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center z-0">

        {/* Left — Image */}
        <div className="flex items-center justify-center z-[1]">
          <Image
            src={locumGpImage}
            alt="Locum GP"
            width={485}
            height={485}
            className="rounded-[8px] shadow-lg object-cover w-full max-w-[320px] sm:max-w-[380px] md:max-w-full h-auto"
          />
        </div>

        {/* Right — Content */}
        <div className="text-white">
          <div className="md:leading-[32px] lg:leading-[38px]">
            <h3 className="text-xl sm:text-2xl md:text-[28px] lg:text-[36px] font-[700] leading-snug">
              International Doctors & AHP – Work in Australia
            </h3>
          </div>

          <p className="mt-3 sm:mt-4 md:mt-[18px] mb-6 md:mb-8 text-xs sm:text-sm md:text-[14px] lg:text-[16px] opacity-80 leading-relaxed max-w-lg">
            Start your Australian healthcare career with expert guidance at every step. We support internationally
            qualified doctors and allied health professionals with registration pathways, employer matching,
            relocation planning, and visa coordination. Access compliant roles across metro, regional, and rural
            Australia, with personalised support to ensure a smooth transition and long-term career success.
          </p>

          <Link
            href="/contact-us"
            className="inline-block text-black bg-white py-2.5 sm:py-3 px-5 sm:px-6 rounded-[8px] text-sm sm:text-base font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore International Opportunities
          </Link>
        </div>

      </div>
    </section>
  );
}