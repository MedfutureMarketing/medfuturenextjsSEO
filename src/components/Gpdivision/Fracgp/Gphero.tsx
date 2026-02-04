

import React from 'react';
import FormComponent from '@/components/Forms/DynamicFrom';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-[#040D48] full-width-section">
            <div className="inner-width-section mx-auto py-10 sm:py-12 lg:py-[36px] px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-24 items-start">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl sm:text-2xl lg:text-[32px] font-bold text-white leading-snug lg:leading-tight">
                            GP Jobs in Australia for Fellowed GPs
                            <span className="block mt-1">
                                FRACGP & FACRRM opportunities curated, transparent, respectful.
                            </span>
                        </h1>

                        <p className="text-sm sm:text-base lg:text-[16px] text-gray-200 max-w-2xl mt-6 lg:mt-[29px] mb-8 lg:mb-[40px] leading-relaxed">
                            If you’re an AHPRA-registered GP with FRACGP or FACRRM, Medfuture helps
                            you move with confidence with earnings clarity, contract safety, and
                            practices selected for clinical autonomy and supportive culture.
                        </p>

                        {/* CTA BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Link
                                href="/permanent?page=1"
                                className="inline-flex lg:text-[14px] text-sm items-center gap-2 justify-center px-6 py-3 bg-white text-[#040D48] font-[500] rounded-[8px] hover:bg-gray-100 transition w-full sm:w-auto"
                            >
                                <svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                                    <path d="M6.5 13.5417C4.68333..." fill="#040D48" />
                                </svg>
                                Browse Special GP Jobs
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex lg:text-[14px] text-sm items-center gap-2 justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-gray-500 transition w-full sm:w-auto"
                            >
                                <svg width="15" height="20" viewBox="0 0 15 20" fill="none">
                                    <path d="M1.47688 5.76636..." fill="white" />
                                </svg>
                                Talk to a Consultant
                            </Link>
                        </div>

                        {/* VALUE CARDS (DESKTOP ONLY – untouched) */}
                        <div className="flex flex-wrap gap-4 mt-10 justify-start">
                            <div className="bg-white/21 border hidden lg:block border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[150px] max-w-[192px]">
                                <h3 className="text-[14px] text-white mb-2">Contract clarity</h3>
                                <p className="text-xs text-gray-200">
                                    Service fees, restraints, exit terms — explained in plain English.
                                </p>
                            </div>

                            <div className="bg-white/21 hidden lg:block border border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[150px] max-w-[192px]">
                                <h3 className="text-[14px] text-white mb-2">Curated practices</h3>
                                <p className="text-xs text-gray-200">
                                    Nursing/admin support, workflow maturity, culture proof.
                                </p>
                            </div>

                            <div className="bg-white/21 hidden lg:block border border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[150px] max-w-[192px]">
                                <h3 className="text-[14px] text-white mb-2">Time protected</h3>
                                <p className="text-xs text-gray-200">
                                    One brief call • 2–3 matched clinics, not 30 ads.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 h-fit lg:sticky top-8">
                        <FormComponent />
                    </div>

                </div>
            </div>
        </section>

    );
};

export default HeroSection;
