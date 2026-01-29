/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import FFFRAC from "@/assets/Divisionimages/FFFRAC.png";
import CounterSection from "@/components/Gpdivision/Gpregistar/GpCounter";
import divisionimg2 from "@/assets/Divisionimages/divisionimg2.png";
import divisionimage2 from "@/assets/Divisionimages/divisionimage2.png";

export default function Fracgpsecondsection() {
    return (
        <section className="full-width-section mt-8 xs:mt-12 sm:mt-16 md:mt-20 lg:mt-[97px]">
            <div className="inner-width-section mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.5fr] gap-6 sm:gap-8 md:gap-16 lg:gap-24 items-start">
                    {/* Left Content */}
                    {/* Right Image Grid - Hidden on mobile and tablet */}
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
                    </div>   <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                        {/* Heading */}
                        <div className="space-y-3 xs:space-y-4">
                            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-[26px] lg:text-[24px] font-bold text-slate-900 leading-tight tracking-tight">
                                Your Definitive Career Hub for GP Registrars & Non-VR GPs
                            </h2>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-[#4A5565] leading-relaxed">
                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                If you are an AHPRA-registered General Practitioner—a Non-VR GP, GP Registrar, or Internationally Trained GP—and you are actively seeking GP jobs aligned with GP Training Programs in Australia, you are in the right place.                            </p>

                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                This page is built for GPs, by GP-career specialists, to help you confidently secure training-compatible GP roles across MMM1 to MMM7 locations, progress safely through FSP, PFP, PEP, RVTS, or the Independent Pathway, and ultimately achieve FRACGP or FACRRM fellowship.                            </p>

                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                Medfuture is not a generic job board. We are a career-long partner for doctors who want clarity, compliance, and confidence at every stage of their GP training journey.                            </p>
                        </div>
                    </div>


                </div>

                {/* Stats Section */}
                <div className="grid gap-6 xs:gap-8 sm:gap-10 md:gap-12 mt-12 xs:mt-14 sm:mt-16 md:mt-20 lg:mt-20">
                    <CounterSection />
                </div>
            </div>
        </section>
    );
}