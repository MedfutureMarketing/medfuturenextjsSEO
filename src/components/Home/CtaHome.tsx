"use client";

import { useState } from "react";
import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";
import EmployerForm from "@/components/Forms/JobSeekerandEmployerform/EmployerForm";
import Link from "next/link";

export default function CTA() {
    const [activeTab, setActiveTab] = useState<"job" | "employer">("job");

    return (
        <section className="w-full py-20 px-4 lg:px-0 bg-gradient-to-br from-[#0B3264] via-[#0B3264] to-[#1B62B4] full-width-section">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(200px,0.85fr)_minmax(300px,1.35fr)] inner-width-section gap-12 items-center">


                <div className="space-y-6">
                    <h2 className="text-2xl text-white lg:text-[32px] font-bold text-[#040D48]">
                        Ready to Take the Next Step in Your Healthcare Career?
                    </h2>

                    <p className="text-[#FCFCFC] lg:text-[16px] text-xs">
                        Find jobs, upload your CV to discover new opportunities. You can also talk to a consultant, refer a friend, or request a callback using the form.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/contact-us" className="px-6 py-3 cursor-pointer bg-white text-[#074CA4] rounded-lg lg:text-[16px] text-xs font-medium">
                            Talk to a Consultant            
                        </Link>

                        {/* <button className="px-6 py-3 cursor-pointer bg-white text-[#074CA4] rounded-lg lg:text-[16px] text-xs font-medium">
                            Refer a Friend            </button> */}
                    </div>
                </div>

           
                <div className=" shadow-lg rounded-lg  ">

            
                    <div className="flex gap-1  pb-1">
                        <button
                            className={`pb-0 px-2 font-medium cursor-pointer lg:text-lg  text-sm bg-blue-500 rounded-t-lg h-[53px] w-[225px] ${activeTab === "job" ? "text-[#074CA4] bg-white  " : ""
                                }`}
                            onClick={() => setActiveTab("job")}
                        >
                            Job Seeker
                        </button>

                        {/* <button 
                            className={`pb-0 px-2 font-medium lg:text-lg   cursor-not-allowed  text-sm cursor-pointer bg-blue-500 rounded-t-lg h-[53px] w-[225px] ${activeTab === "employer" ? "text-[#074CA4] bg-white " : "text-gray-50"
                                }`}
                            onClick={() => setActiveTab("employer")}
                        >
                            Employer
                        </button> */}
                    </div>

                 
                    <div className=" px-[30px] py-[25px] bg-white">
                        {activeTab === "job" ? <JobSeekerForm /> : <EmployerForm />}
                                                {/* {activeTab === "job" ? <JobSeekerForm /> : <EmployerForm />} */}

                    </div>
                </div>
            </div>
        </section>
    );
}
