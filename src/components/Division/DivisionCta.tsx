"use client";

import { useState } from "react";
import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";
import EmployerForm from "@/components/Forms/JobSeekerandEmployerform/EmployerForm";
import Link from "next/link";

export default function CTA() {
    const [activeTab, setActiveTab] = useState<"job" | "employer">("job");

    return (
        <section className="w-full py-20 px-4 lg:px-0 bg-gradient-to-br from-[#0B3264] via-[#0B3264] to-[#1B62B4] full-width-section">
            <div className="inner-width-section mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,0.85fr)_minmax(300px,0.7fr)] inner-width-section gap-12 items-center">





                <div className=" shadow-lg rounded-lg  ">


                    <div className="flex gap-1  pb-1">
                        {/* <button
                            className={`pb-0 px-2 font-medium cursor-pointer lg:text-lg  text-sm bg-blue-500 rounded-t-lg h-[53px] w-[225px] ${activeTab === "job" ? "text-[#074CA4] bg-white  " : ""
                                }`}
                            onClick={() => setActiveTab("job")}
                        >
                            Job Seeker
                        </button> */}
                        <button
                            className={` ${activeTab === "job" ? " " : ""
                                }`}
                            onClick={() => setActiveTab("job")}
                        >
                            {/* Job Seeker */}
                        </button>


                        {/* <button 
                            className={`pb-0 px-2 font-medium lg:text-lg   cursor-not-allowed  text-sm cursor-pointer bg-blue-500 rounded-t-lg h-[53px] w-[225px] ${activeTab === "employer" ? "text-[#074CA4] bg-white " : "text-gray-50"
                                }`}
                            onClick={() => setActiveTab("employer")}
                        >
                            Employer
                        </button> */}
                    </div>

<p className="bg-white text-center rounded-t-[8px] text-[#074CA4] font-[600] lg:text-[20px] py-[33px]">Share Your Details to Explore Opportunities</p>
                    <div className=" px-[30px] py-[25px] bg-white rounded-b-[8px] ">
                        {activeTab === "job" ? <JobSeekerForm /> : <EmployerForm />}
                        {/* {activeTab === "job" ? <JobSeekerForm /> : <EmployerForm />} */}

                    </div>
                </div>
                <div className="space-y-6 lg:w-md">
                    <h2 className="text-2xl text-white lg:text-[32px] font-bold text-[#040D48]">
                        Ready to Take the Next Step in Your Healthcare Career?
                    </h2>

                    <p className="text-[#FCFCFC] lg:text-[16px] text-xs">
                        Discover allied health roles that align with your skills values and career goals. Register today to access opportunities across Australia and move forward with confidence.                    </p>

                    <div className="flex gap-4">
                        <Link href="/contact-us" className="px-6 py-3 cursor-pointer bg-white text-[#074CA4] rounded-lg lg:text-[16px] text-xs font-medium">
                            Talk to a Consultant
                        </Link>

                        {/* <button className="px-6 py-3 cursor-pointer bg-white text-[#074CA4] rounded-lg lg:text-[16px] text-xs font-medium">
                            Refer a Friend            </button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
