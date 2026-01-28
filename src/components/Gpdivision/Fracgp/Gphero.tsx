'use client';

import React from 'react';
import FormComponent from '@/components/Forms/DynamicFrom';

const HeroSection = () => {
    return (
        <section className="bg-[#040D48] full-width-section  ">
            <div className="inner-width-section mx-auto py-[36px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-4 items-start">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col justify-center ">
                        <div className="">
                            <div className="">
                                <h1 className="text-5xl md:text-6xl lg:text-[32px] font-bold text-white leading-tight">
                                    GP Jobs in Australia for Fellowed GPs
                                    FRACGP & FACRRM opportunities  curated, transparent, respectful.
                                </h1>

                                <p className="text-[16px] text-gray-200 max-w-2xl mt-[29px] mb-[40px] leading-relaxed">
                                    If you’re an AHPRA-registered GP with FRACGP or FACRRM, Medfuture helps you move with confidence with earnings clarity, contract safety, and practices selected for clinical autonomy and supportive culture.
                                </p>
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#040D48] font-[500] rounded-[8px] hover:bg-gray-100 transition w-full sm:w-auto">
                              
<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13.5417C4.68333 13.5417 3.146 12.8861 1.888 11.575C0.63 10.2639 0.000667196 8.6625 5.29101e-07 6.77083C-0.000666138 4.87917 0.628667 3.27778 1.888 1.96667C3.14733 0.655556 4.68467 0 6.5 0C8.31533 0 9.853 0.655556 11.113 1.96667C12.373 3.27778 13.002 4.87917 13 6.77083C13 7.53472 12.8833 8.25521 12.65 8.93229C12.4167 9.60938 12.1 10.2083 11.7 10.7292L17.3 16.5625C17.4833 16.7535 17.575 16.9965 17.575 17.2917C17.575 17.5868 17.4833 17.8299 17.3 18.0208C17.1167 18.2118 16.8833 18.3073 16.6 18.3073C16.3167 18.3073 16.0833 18.2118 15.9 18.0208L10.3 12.1875C9.8 12.6042 9.225 12.934 8.575 13.1771C7.925 13.4201 7.23333 13.5417 6.5 13.5417ZM6.5 11.4583C7.75 11.4583 8.81267 11.0028 9.688 10.0917C10.5633 9.18056 11.0007 8.07361 11 6.77083C10.9993 5.46806 10.562 4.36146 9.688 3.45104C8.814 2.54063 7.75133 2.08472 6.5 2.08333C5.24867 2.08194 4.18633 2.53785 3.313 3.45104C2.43967 4.36424 2.002 5.47083 2 6.77083C1.998 8.07083 2.43567 9.17778 3.313 10.0917C4.19033 11.0056 5.25267 11.4611 6.5 11.4583Z" fill="#040D48"/>
</svg>
      Browse Special GP Jobs
                                </button>

                                <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition w-full sm:w-auto">
                                    Talk to a Consultant
                                </button>
                            </div>

                            {/* VALUE CARDS */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-[40px]">
                                <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-5 backdrop-blur-sm">
                                    <h3 className="font-semibold text-white mb-2 text-sm">
                                        Contract clarity
                                    </h3>
                                    <p className="text-xs text-gray-200">
                                        Service fees, restraints, exit terms — explained in plain English.
                                    </p>
                                </div>

                                <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-5 backdrop-blur-sm">
                                    <h3 className="font-semibold text-white mb-2 text-sm">
                                        Curated practices
                                    </h3>
                                    <p className="text-xs text-gray-200">
                                        Nursing/admin support, workflow maturity, culture proof.
                                    </p>
                                </div>

                                <div className="bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg p-5 backdrop-blur-sm">
                                    <h3 className="font-semibold text-white mb-2 text-sm">
                                        Time protected
                                    </h3>
                                    <p className="text-xs text-gray-200">
                                        One brief call • 2–3 matched clinics, not 30 ads.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM — STATIC */}
                    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 h-fit sticky top-8">
                        <FormComponent />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
