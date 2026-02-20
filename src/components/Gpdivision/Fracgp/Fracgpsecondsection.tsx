/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import FFFRAC from "@/assets/Divisionimages/FFFRAC.png";
import CounterSection from "@/components/Gpdivision/Fracgp/FracgpCounter";
import divisionimg2 from "@/assets/Divisionimages/divisionimg2.png";
import divisionimage2 from "@/assets/Divisionimages/divisionimage2.png";

export default function Fracgpsecondsection() {
    return (
        <section className="full-width-section mt-8 xs:mt-12 mt-26 lg:mt-[97px]">
            <div className="inner-width-section mx-auto px-0">
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_0.8fr] px-0  lg:px-0 md:px-8  gap-6 sm:gap-8 md:gap-16 lg:gap-36 items-start">
                    {/* Left Content */}
                    <div className="space-y-4 xs:space-y-6 sm:space-y-8">
                        {/* Heading */}
                        <div className="space-y-3 xs:space-y-4">
                            <h2 className="text-lg xs:text-xl sm:text-2xl md:text-[26px] lg:text-[24px] font-bold text-slate-900 leading-tight tracking-tight">
                                FRACGP & FACRRM GP Opportunities – Metro, Regional & Rural
                            </h2>
                        </div>

                        {/* Description Paragraphs */}
                        <div className="space-y-3 xs:space-y-4 sm:space-y-6 text-[#4A5565] leading-relaxed">
                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                If you are a Fellowes General Practitioner holding FRACGP or FACRRM, your career decisions are no longer about "finding a job". They are about protecting income, clinical autonomy, professional reputation, and long-term sustainability.
                            </p>

                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                Medfuture is built specifically for AHPRA-registered Fellow GPs who want better practices, transparent earnings, fair contracts, and a recruitment partner that genuinely understands general practice in Australia.
                            </p>

                            <p className="text-xs xs:text-sm sm:text-base md:text-[15px] lg:text-[16px]">
                                Whether you are exploring private billing GP jobs, mixed billing practices, DPA or MMM GP positions, metro clinics, regional or rural general practice roles, Medfuture is the trusted GP recruitment partner that Fellowes GPs return to — again and again.
                            </p>
                        </div>
                    </div>

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
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid gap-6  md:gap-12 mt-6 lg:mt-20 mb-12">
                    <CounterSection />
                </div>
            </div>
        </section>
    );
}