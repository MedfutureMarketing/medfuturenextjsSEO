'use client';

import React from "react";
import Image from "next/image";
import locumGpImage from "@/assets/employer/cover.png";
import LocumPLGP from "@/components/Forms/GeneralPLGPfrom";

export default function LocumGPSection() {


    

    return (
        <section className="relative full-width-section bg-gradient-to-r from-blue-900 to-blue-600 pb-  overflow-show">

            <div className="inner-width-section   mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 z-0 pb-9 gap-12 items-start">
                {/* Left Content */}
                <div className="text-white mt-[85px] ">

                    <div className="lg:leading-[38px] ">
                        <h3 className="text-sm lg:text-[36px] font-[200]">Hire Trusted </h3>
                        <h3 className="lg:text-[56px] text-4xl font-[700]">Locum <br />
                            Professionals</h3>
                        {/* <p className="text-lg opacity-90 font-[500] lg:text-[26px] lg:mt-[10px]">
                            <span className="lg:text-[20px] font-[400]">No Restrictions, </span> No Lock-In Contracts
                        </p> */}
                    </div>
                    <p className="max-w-m mt-[18px] lg:text-[16px] text-xs opacity-80">
                        Enjoy the flexibility to hire when you need, without any long-term commitments or hidden terms. We offer transparent agreements, reliable candidates, and ongoing support to help you maintain seamless operations and quality patient care.                    </p>
                        <div className="absolute left-[50px] right-[530px] bottom-[-15%] flex justify-center pointer-events-none">
                        <Image
                            src={locumGpImage}
                            alt="Locum GP"
                            priority
                            className="
                                   w-full
                                     max-w-[794px]
                                    
                                       
                                    object-cover z-0
                                            "
                        />
                    </div>


                </div>
                {/* Right Form */}
                <div className="z-1"><LocumPLGP /></div>
            </div>

        </section>
    );
}
