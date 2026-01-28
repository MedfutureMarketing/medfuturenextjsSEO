

import React from 'react';
import FormComponent from '@/components/Forms/DynamicFrom';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="bg-[#040D48] full-width-section  ">
            <div className="inner-width-section mx-auto py-[36px]">
                <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-8 lg:gap-24 items-start">

                    {/* LEFT CONTENT */}
                    <div className="flex flex-col  justify-center ">
                        <div className="">
                            <div className=" mt-[71px]">
                                <h1 className="text-2xl md:text-2xl lg:text-[32px] font-bold text-white leading-tight">
                                    Locum GP Jobs in Australia </h1>

                                <p className="lg:text-[16px] text-xs text-gray-200 max-w-xl mt-[29px] mb-[40px] leading-relaxed">
                                    Fellowship-qualified locum work across rural hospitals (ED/VMO), remote clinics, AMS/ACCHS, urgent care, after-hours and metro leave cover—matched to your scope, lifestyle and income goals. Control, continuity and respect—without the chaos.                                </p>
                            </div>

                            {/* CTA BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/permanent?page=1" className="inline-flex cursor-pointer items-center gap-2 justify-center px-6 py-3 bg-white text-[#040D48] font-[500] rounded-[8px] hover:bg-gray-100 transition w-full sm:w-auto">

                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.5 13.5417C4.68333 13.5417 3.146 12.8861 1.888 11.575C0.63 10.2639 0.000667196 8.6625 5.29101e-07 6.77083C-0.000666138 4.87917 0.628667 3.27778 1.888 1.96667C3.14733 0.655556 4.68467 0 6.5 0C8.31533 0 9.853 0.655556 11.113 1.96667C12.373 3.27778 13.002 4.87917 13 6.77083C13 7.53472 12.8833 8.25521 12.65 8.93229C12.4167 9.60938 12.1 10.2083 11.7 10.7292L17.3 16.5625C17.4833 16.7535 17.575 16.9965 17.575 17.2917C17.575 17.5868 17.4833 17.8299 17.3 18.0208C17.1167 18.2118 16.8833 18.3073 16.6 18.3073C16.3167 18.3073 16.0833 18.2118 15.9 18.0208L10.3 12.1875C9.8 12.6042 9.225 12.934 8.575 13.1771C7.925 13.4201 7.23333 13.5417 6.5 13.5417ZM6.5 11.4583C7.75 11.4583 8.81267 11.0028 9.688 10.0917C10.5633 9.18056 11.0007 8.07361 11 6.77083C10.9993 5.46806 10.562 4.36146 9.688 3.45104C8.814 2.54063 7.75133 2.08472 6.5 2.08333C5.24867 2.08194 4.18633 2.53785 3.313 3.45104C2.43967 4.36424 2.002 5.47083 2 6.77083C1.998 8.07083 2.43567 9.17778 3.313 10.0917C4.19033 11.0056 5.25267 11.4611 6.5 11.4583Z" fill="#040D48" />
                                    </svg>
                                    Browse Locum GP Jobs
                                </Link>

                                <Link href="/contact" className="inline-flex items-center cursor-pointer gap-2 justify-center px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-gray-500 h transition w-full sm:w-auto">

                                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.47688 5.76636C1.20232 3.87936 2.47738 2.18436 4.42519 1.56336C4.77085 1.45382 5.1435 1.48556 5.46757 1.65213C5.79163 1.8187 6.04286 2.10764 6.17032 2.46036L6.79563 4.20036C6.89629 4.48028 6.91449 4.7852 6.8479 5.07599C6.7813 5.36678 6.63295 5.63017 6.42188 5.83236L4.56175 7.60986C4.46995 7.69757 4.40155 7.80865 4.36324 7.93223C4.32494 8.05582 4.31805 8.18766 4.34325 8.31486L4.3605 8.39286L4.40507 8.58786C4.63698 9.53513 4.98942 10.4457 5.453 11.2954C5.95918 12.1975 6.58655 13.0193 7.316 13.7359L7.3735 13.7899C7.46637 13.8759 7.579 13.9353 7.70043 13.9624C7.82186 13.9895 7.94794 13.9832 8.06638 13.9444L10.4713 13.1539C10.7446 13.0643 11.0374 13.062 11.3119 13.1473C11.5865 13.2325 11.8304 13.4015 12.0123 13.6324L13.1508 15.0739C13.6252 15.6739 13.5677 16.5559 13.0229 17.0854C11.5322 18.5359 9.48232 18.8329 8.05632 17.6374C6.30762 16.1669 4.83395 14.3723 3.70932 12.3439C2.57368 10.3181 1.81715 8.08628 1.47688 5.76636ZM5.84975 8.41386L7.39075 6.93786C7.81314 6.53366 8.11013 6.00696 8.24357 5.42537C8.37702 4.84378 8.34085 4.23384 8.13969 3.67386L7.51582 1.93386C7.25987 1.22401 6.75458 0.642448 6.10258 0.307289C5.45058 -0.0278696 4.70077 -0.091488 4.00544 0.129357C1.58613 0.901856 -0.355934 3.16536 0.0551914 5.99286C0.342691 7.96686 1.00538 10.4779 2.46732 13.0999C3.68073 15.287 5.27037 17.2219 7.15644 18.8074C9.29544 20.5999 12.1503 19.9879 14.0047 18.1849C14.5353 17.6693 14.8574 16.962 14.9052 16.2071C14.953 15.4522 14.723 14.7068 14.262 14.1229L13.1235 12.6799C12.7593 12.2186 12.2713 11.8813 11.7222 11.7114C11.1731 11.5414 10.5879 11.5464 10.0415 11.7259L8.04482 12.3814C7.52925 11.8267 7.07767 11.211 6.69932 10.5469C6.33421 9.87518 6.04938 9.15935 5.85119 8.41536" fill="white" />
                                    </svg>
                                    Talk to a Consultant
                                </Link>
                            </div>

                            {/* VALUE CARDS */}
                            <div className="flex flex-wrap gap-4 mt-[40px] justify-start">
                                <div className="bg-white/21 border border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[192px] max-w-[192px]">
                                    <h3 className="text-[14px] text-white mb-2">One-profile credential approach</h3>
                                    {/* <p className="text-xs text-gray-200">
                                        Service fees, restraints, exit terms — explained in plain English.
                                    </p> */}
                                </div>

                                <div className="bg-white/21 border border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[192px] max-w-[192px]">
                                    <h3 className="text-[14px] text-white mb-2">Fast starts when docs are ready</h3>
                                    {/* <p className="text-xs text-gray-200">
                                        Nursing/admin support, workflow maturity, culture proof.
                                    </p> */}
                                </div>

                                <div className="bg-white/21 border border-gray-500 border-opacity-20 rounded-lg p-5 backdrop-blur-sm flex-1 min-w-[192px] max-w-[192px]">
                                    <h3 className="text-[14px] text-white mb-2">Dedicated locum advisor</h3>
                                    {/* <p className="text-xs text-gray-200">
                                        One brief call • 2–3 matched clinics, not 30 ads.
                                    </p> */}
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
