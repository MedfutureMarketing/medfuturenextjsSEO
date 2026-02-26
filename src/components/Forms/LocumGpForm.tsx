'use client';

import React from "react";
import Image from "next/image";
import locumGpImage from "@/assets/jobseeker/locumgp.png";
import LocumPLGP from "@/components/Forms/GeneralPLGPfrom";

export default function LocumGPSection() {



  return (
    <section className="relative full-width-section bg-gradient-to-r from-blue-900 mt-16 lg:mt-[155px] to-[#074CA4] py-16">
      {/* Decorative rectangle */}
      <div className="absolute top-0 left-0 lg:w-[532px] h-[228px] bg-blue-950 z-[1]" />

      <div className="inner-width-section mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 z-0 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white">
          <div className="flex items-center z-[1]">
            <Image
              src={locumGpImage}
              alt="Locum GP"
              width={485}
              height={299}
              className="rounded-[8px] shadow-lg object-cover z-49"
            />
          </div>

        </div>

        {/* Right Form */}
        {/* <LocumPLGP /> */}
        <div>
          <div className="lg:leading-[38px] mt-[23px]">
            <h3 className="text-sm lg:text-[36px] font-[700]">International Doctors & AHP – Work in Australia</h3>
         
            {/* <p className="text-lg opacity-90 font-[500] lg:text-[26px] lg:mt-[10px]">
              <span className="lg:text-[20px] font-[400]">No Restrictions, </span> No Lock-In Contracts
            </p> */}
          </div>
          <p className="max-w-m mt-[18px] lg:text-[16px] text-xs opacity-80">
Start your Australian healthcare career with expert guidance at every step. We support internationally qualified doctors and allied health professionals with registration pathways, employer matching, relocation planning, and visa coordination.
Access compliant roles across metro, regional, and rural Australia, with personalised support to ensure a smooth transition and long-term career success.
          </p>
        </div>

      </div>
    </section>
  );
}
