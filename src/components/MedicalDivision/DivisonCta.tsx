"use client";

import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";

export default function CTAJobseeker() {
    return (
        <section className="w-full py-20 px-4 lg:px-0 bg-gradient-to-br from-[#0B3264] via-[#0B3264] to-[#1B62B4] full-width-section">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 inner-width-section gap-12 items-center ">
                <div className="shadow-lg rounded-lg bg-white py-[29px]">
                    <div className="px-[30px] ">
                        <h2 className="text-[#074CA4] text-[20px] text-center font-[600]  mb-[31px]">Share Your Details to Explore Opportunities</h2>
                        <JobSeekerForm />
                    </div>
                </div>
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <div className=" w-lg">
                        <h2 className="text-2xl text-white lg:text-[56px] leading-tight font-bold">
                            Take the Next Step in Your Psychology Career
                        </h2>

                        <p className="text-[#FCFCFC] lg:text-[16px] text-xs mt-[37px]">
                            Discover mental health psychology roles that align with your skills values and career goals. Register today to access opportunities across Australia and move forward with confidence.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-[45px]">
                        <button className="px-6 py-3 bg-white text-[#074CA4] cursor-pointer rounded-lg font-medium cursor-pointer">
                            Find your next Psychology role
                        </button>


                    </div>
                </div>

                {/* RIGHT CONTENT */}


            </div>
        </section>
    );
}
