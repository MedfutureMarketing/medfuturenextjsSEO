"use client";

import { usePathname } from "next/navigation";
import JobSeekerForm from "@/components/Forms/JobSeekerandEmployerform/JobSeekerFrom";

const contentMap: Record<string, { h2: string; p: string; button: string }> = {
    "/job-seeker-hub/medical-division": {
        h2: "Take the Next Step in Your GP Career",
        p: "Explore medical practitioner opportunities across Australia with expert guidance personalised support and roles aligned to your registration pathway lifestyle preferences and long term career plans.",
        button: "Find your next Medical Practitioner role"
    },
    "/job-seeker-hub/allied-health-division": {
        h2: "Build Your Allied Health Career or Workforce with Confidence",
        p: "Register with Medfuture to access Allied Health job opportunities across Australia and receive personalised support as you move toward your next career milestone.",
        button: "Find your next Allied Health role"
    },
    "/job-seeker-hub/mental-health-division": {
        h2: "Grow in Allied Health",
        p: "Connect with allied health positions that fit your skills and aspirations. Register to discover roles nationwide and take your career further.",
        button: "Find your next Allied Health role"
    },
     "/job-seeker-hub/oral-health-division": {
        h2: "Grow in Allied Health",
        p: "Connect with allied health positions that fit your skills and aspirations. Register to discover roles nationwide and take your career further.",
        button: "Find your next Allied Health role"
    }
     
    // Add more URLs and content as needed
};

export default function CTAJobseeker() {
    const pathname = usePathname();
    const content = contentMap[pathname] || contentMap["/psychology"];

    return (
        <section className="w-full py-20 px-4 lg:px-0 bg-gradient-to-br from-[#0B3264] via-[#0B3264] to-[#1B62B4] full-width-section">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 inner-width-section gap-12 items-center">
                <div className="shadow-lg rounded-lg bg-white py-[29px]">
                    <div className="px-[30px] ">
                        <h2 className="text-[#074CA4] text-[20px] text-center font-[600] mb-[31px]">Share Your Details to Explore Opportunities</h2>
                        <JobSeekerForm />
                    </div>
                </div>
                {/* LEFT CONTENT */}
                <div className="space-y-6">
                    <div className="w-lg">
                        <h2 className="text-2xl text-white lg:text-[56px] leading-tight font-bold">
                            {content.h2}
                        </h2>
                        <p className="text-[#FCFCFC] lg:text-[16px] text-xs mt-[37px]">
                            {content.p}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-[45px]">
                        <button className="px-6 py-3 bg-white text-[#074CA4] cursor-pointer rounded-lg font-medium">
                            {content.button}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}